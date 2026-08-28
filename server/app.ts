import fs from 'node:fs';
import path from 'node:path';
import { GoogleGenAI } from '@google/genai';
import express, { type NextFunction, type Request, type Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { z } from 'zod';
import { AI_CONTEXT } from '../content';

const MAX_RESPONSE_CHARACTERS = 1_800;
const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().trim().min(1).max(600),
}).strict();
const chatSchema = z.object({
  messages: z.array(messageSchema).min(1).max(6),
}).strict().refine((value) => value.messages.at(-1)?.role === 'user', {
  message: 'The final message must be from the user.',
});

type SafeMessage = z.infer<typeof messageSchema>;
type GenerateChat = (messages: SafeMessage[]) => Promise<string>;

const SYSTEM_INSTRUCTION = `You are the portfolio assistant for Alex Aidun. Answer only from the verified public profile below.

${AI_CONTEXT}

Rules:
- Be concise, specific, and useful to a prospective employer.
- If the answer is not supported by the profile, say you do not have verified information.
- Never infer confidential employer details, private metrics, compensation, personal data, or claims not listed above.
- Keep Dremio AI product work separate from Dremio University learning metrics.
- Do not provide instructions unrelated to Alex's professional background or portfolio.
- Keep the response below 220 words.`;

export function createGeminiGenerator(): GenerateChat {
  return async (messages) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('CHAT_NOT_CONFIGURED');
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      contents: messages.map((message) => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: message.content }],
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 500,
        temperature: 0.2,
      },
    });
    const answer = response.text?.trim();
    if (!answer) throw new Error('EMPTY_CHAT_RESPONSE');
    return answer.slice(0, MAX_RESPONSE_CHARACTERS);
  };
}

interface CreateAppOptions {
  staticDir?: string;
  generateChat?: GenerateChat;
  previewMode?: boolean;
}

export function createApp(options: CreateAppOptions = {}) {
  const app = express();
  const previewMode = options.previewMode ?? process.env.PREVIEW_MODE !== 'false';
  const generateChat = options.generateChat ?? createGeminiGenerator();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);
  app.use((request, response, next) => {
    const startedAt = Date.now();
    if (previewMode) response.setHeader('X-Robots-Tag', 'noindex, nofollow');
    response.on('finish', () => {
      console.info(JSON.stringify({
        method: request.method,
        path: request.path,
        status: response.statusCode,
        durationMs: Date.now() - startedAt,
      }));
    });
    next();
  });
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", 'data:'],
        formAction: ["'self'", 'mailto:'],
        frameAncestors: ["'none'"],
        imgSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
  }));
  app.use(express.json({ limit: '12kb', strict: true }));

  app.get('/health', (_request, response) => {
    response.json({ status: 'ok', preview: previewMode });
  });

  app.post('/api/chat', rateLimit({
    windowMs: 10 * 60 * 1_000,
    limit: 20,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Too many questions from this connection. Please try again later.' },
  }), async (request, response) => {
    const parsed = chatSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ error: 'Send 1–6 messages with no more than 600 characters each.' });
      return;
    }

    try {
      const message = await generateChat(parsed.data.messages);
      response.json({ message: message.slice(0, MAX_RESPONSE_CHARACTERS) });
    } catch (error) {
      if (error instanceof Error && error.message === 'CHAT_NOT_CONFIGURED') {
        response.status(503).json({ error: 'The portfolio assistant is not configured in this environment.' });
        return;
      }
      console.error(JSON.stringify({ event: 'chat_error', name: error instanceof Error ? error.name : 'UnknownError' }));
      response.status(502).json({ error: 'The portfolio assistant is temporarily unavailable.' });
    }
  });

  const staticDir = options.staticDir;
  if (staticDir && fs.existsSync(staticDir)) {
    app.use(express.static(staticDir, { index: false, maxAge: '1h' }));
    app.get('*', (request, response, next) => {
      if (request.path.startsWith('/api/')) {
        next();
        return;
      }
      response.setHeader('Cache-Control', 'no-cache');
      response.sendFile(path.join(staticDir, 'index.html'));
    });
  }

  app.use((error: unknown, _request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof SyntaxError || (typeof error === 'object' && error !== null && 'type' in error)) {
      response.status(400).json({ error: 'Invalid JSON payload.' });
      return;
    }
    console.error(JSON.stringify({ event: 'server_error' }));
    response.status(500).json({ error: 'Unexpected server error.' });
  });

  return app;
}

