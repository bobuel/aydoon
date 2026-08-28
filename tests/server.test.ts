// @vitest-environment node
import request from 'supertest';
import { createApp } from '../server/app';

const validRequest = { messages: [{ role: 'user' as const, content: 'What roles fit Alex?' }] };

describe('portfolio server', () => {
  it('reports health and marks every preview response noindex', async () => {
    const response = await request(createApp({ generateChat: async () => 'Verified answer.' })).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok', preview: true });
    expect(response.headers['x-robots-tag']).toBe('noindex, nofollow');
  });

  it('validates the chat payload contract', async () => {
    const response = await request(createApp({ generateChat: async () => 'Verified answer.' }))
      .post('/api/chat')
      .send({ messages: [{ role: 'user', content: 'x'.repeat(601) }] });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: expect.any(String) });
  });

  it('returns only the documented success shape', async () => {
    const response = await request(createApp({ generateChat: async () => 'Alex connects product direction with adoption.' }))
      .post('/api/chat')
      .send(validRequest);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Alex connects product direction with adoption.' });
  });

  it('fails safely when the preview secret is not configured', async () => {
    const response = await request(createApp({ generateChat: async () => { throw new Error('CHAT_NOT_CONFIGURED'); } }))
      .post('/api/chat')
      .send(validRequest);
    expect(response.status).toBe(503);
    expect(response.body).toEqual({ error: expect.any(String) });
  });

  it('rate limits repeated requests', async () => {
    const app = createApp({ generateChat: async () => 'Verified answer.' });
    for (let index = 0; index < 20; index += 1) {
      const response = await request(app).post('/api/chat').send(validRequest);
      expect(response.status).toBe(200);
    }
    const limited = await request(app).post('/api/chat').send(validRequest);
    expect(limited.status).toBe(429);
    expect(limited.body).toEqual({ error: expect.stringMatching(/Too many/i) });
  });
});

