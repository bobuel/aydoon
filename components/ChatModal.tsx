import { FormEvent, KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from 'react';
import { ArrowUp, Bot, LoaderCircle, X } from 'lucide-react';
import type { ChatMessage } from '../types';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestions = [
  'What kind of AI product roles fit Alex?',
  'How does Alex approach adoption?',
  'Summarize the Dremio work.',
];

const welcome: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: 'Ask about Alex’s experience, case studies, product approach, or role fit. Answers are grounded in the verified portfolio content.',
};

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcome]);
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.classList.add('modal-open');
    window.setTimeout(() => inputRef.current?.focus(), 0);

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', onKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  async function sendMessage(value: string) {
    const content = value.trim();
    if (!content || isLoading) return;
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content };
    const nextMessages = [...messages.filter((message) => message.id !== 'welcome'), userMessage].slice(-6);
    setMessages((current) => [...current, userMessage]);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content: messageContent }) => ({ role, content: messageContent })),
        }),
      });
      const payload = await response.json() as { message?: string; error?: string };
      if (!response.ok || !payload.message) throw new Error(payload.error || 'The assistant is unavailable.');
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'assistant', content: payload.message as string },
      ]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'The assistant is unavailable.');
    } finally {
      setLoading(false);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleInputKeyDown(event: ReactKeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        className="chat-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-title"
        aria-describedby="chat-description"
        ref={dialogRef}
      >
        <header className="chat-header">
          <div className="chat-title-wrap">
            <span className="chat-icon" aria-hidden="true"><Bot size={20} /></span>
            <div>
              <h2 id="chat-title">Ask Alex’s portfolio</h2>
              <p id="chat-description">Grounded in verified public information</p>
            </div>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close assistant">
            <X aria-hidden="true" size={20} />
          </button>
        </header>

        <div className="chat-log" role="log" aria-live="polite" aria-relevant="additions">
          {messages.map((message) => (
            <div className={`chat-message ${message.role}`} key={message.id}>
              <span>{message.role === 'assistant' ? 'Portfolio' : 'You'}</span>
              <p>{message.content}</p>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="suggestion-list">
              {suggestions.map((suggestion) => (
                <button type="button" key={suggestion} onClick={() => void sendMessage(suggestion)}>
                  {suggestion}
                </button>
              ))}
            </div>
          )}
          {isLoading && (
            <div className="chat-loading" aria-label="Assistant is thinking">
              <LoaderCircle className="spin" aria-hidden="true" size={18} /> Checking the portfolio…
            </div>
          )}
          {error && <p className="chat-error" role="alert">{error} Please try again later or email Alex directly.</p>}
          <div ref={endRef} />
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <label htmlFor="portfolio-question">Your question</label>
          <div className="chat-input-wrap">
            <textarea
              id="portfolio-question"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, 600))}
              onKeyDown={handleInputKeyDown}
              rows={2}
              maxLength={600}
              placeholder="Ask about experience, outcomes, or role fit…"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send question">
              <ArrowUp aria-hidden="true" size={18} />
            </button>
          </div>
          <small>{input.length}/600 · Enter to send, Shift+Enter for a new line</small>
        </form>
      </div>
    </div>
  );
}

