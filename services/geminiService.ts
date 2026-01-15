import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PORTFOLIO_ITEMS, PROFILE } from '../constants';

const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing ${PROFILE.name}.
Your goal is to answer questions about Alex's background, philosophy, and his portfolio projects.

Here is Alex's Bio:
"${PROFILE.bio} ${PROFILE.bio2} ${(PROFILE as any).bio3 || ''}"

Here are his projects:
${JSON.stringify(PORTFOLIO_ITEMS)}

Tone: Professional, insightful, concise, and helpful.
If asked about contact info, provide: ${PROFILE.email}.
Do not hallucinate projects not listed here.
Keep responses relatively short (under 100 words) unless asked for deep detail.
`;

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We construct a chat history for context, but for this simple implementation
    // using generateContent with system instructions is often cleaner for single-turn logic,
    // however, to maintain conversation, we will use the chat feature.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message: newMessage });
    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};