import React from 'react';
import { PROFILE } from '../constants';
import Button from './Button';

interface SidebarProps {
  onOpenAiChat: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOpenAiChat }) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    alert('Email copied to clipboard!');
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2">
            {PROFILE.name}
          </h1>
          <h2 className="text-xl text-indigo-600 font-medium">
            {PROFILE.title}
          </h2>
        </div>

        <div className="prose prose-slate prose-lg mb-8 text-gray-600 leading-relaxed space-y-4">
          <p>{PROFILE.bio}</p>
          <p>{PROFILE.bio2}</p>
          {(PROFILE as any).bio3 && <p>{(PROFILE as any).bio3}</p>}
        </div>
      </div>

      <div className="space-y-4 pt-8 border-t border-gray-200">
        <Button 
          variant="secondary" 
          fullWidth 
          onClick={handleCopyEmail}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        >
          {PROFILE.email}
        </Button>

        <a 
          href={`https://${PROFILE.linkedin}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full block"
        >
          <Button 
            variant="secondary" 
            fullWidth
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            }
          >
            LinkedIn
          </Button>
        </a>

        <Button 
          variant="ai" 
          fullWidth 
          onClick={onOpenAiChat}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          }
        >
          Ask AI Agent
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;