import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import ChatModal from './components/ChatModal';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 25%)'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column - Fixed on Desktop */}
          <header className="lg:w-1/3 lg:sticky lg:top-20 lg:h-[calc(100vh-10rem)]">
            <Sidebar onOpenAiChat={() => setIsChatOpen(true)} />
          </header>

          {/* Right Column - Scrollable Content */}
          <main className="lg:w-2/3">
            <Portfolio />
          </main>

        </div>
      </div>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;