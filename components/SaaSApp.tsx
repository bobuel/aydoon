import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, PROFILE } from '../constants';
import { Project, ProjectCategory } from '../types';
import ChatModal from './ChatModal';
import { 
  Menu, X, ExternalLink, MessageSquare, Briefcase, 
  Terminal, Package, Gamepad2, User, Globe
} from 'lucide-react';

const categoryIcon = (category: ProjectCategory, className = "w-5 h-5") => {
  switch (category) {
    case ProjectCategory.PRODUCTS: return <Package className={className} />;
    case ProjectCategory.AGENTS_TOOLS: return <Terminal className={className} />;
    case ProjectCategory.GAMES: return <Gamepad2 className={className} />;
    case ProjectCategory.OPEN_SOURCE: return <Globe className={className} />;
    default: return <Briefcase className={className} />;
  }
};

const SaaSApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(project => project.category === activeTab);
  }, [activeTab]);

  return (
    <div className="flex h-screen bg-white text-gray-900 font-sans overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 relative">
      
      {/* Thin Navigation Rail */}
      <nav className="w-14 flex flex-col items-center py-4 bg-slate-50 border-r border-slate-200 z-20 shrink-0">
        <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold text-sm mb-6 shadow-sm">
          {PROFILE.name.charAt(0)}
        </div>
        
        <div className="flex flex-col gap-2 flex-1 w-full px-2">
          <NavItem 
            icon={<Briefcase className="w-5 h-5" />} 
            isActive={activeTab === 'All'} 
            onClick={() => setActiveTab('All')} 
            tooltip="All Projects" 
          />
          <NavItem 
            icon={<Package className="w-5 h-5" />} 
            isActive={activeTab === ProjectCategory.PRODUCTS} 
            onClick={() => setActiveTab(ProjectCategory.PRODUCTS)} 
            tooltip="Products" 
          />
          <NavItem 
            icon={<Terminal className="w-5 h-5" />} 
            isActive={activeTab === ProjectCategory.AGENTS_TOOLS} 
            onClick={() => setActiveTab(ProjectCategory.AGENTS_TOOLS)} 
            tooltip="Agents & Tools" 
          />
          <NavItem 
            icon={<Gamepad2 className="w-5 h-5" />} 
            isActive={activeTab === ProjectCategory.GAMES} 
            onClick={() => setActiveTab(ProjectCategory.GAMES)} 
            tooltip="Games" 
          />
          <NavItem 
            icon={<Globe className="w-5 h-5" />} 
            isActive={activeTab === ProjectCategory.OPEN_SOURCE} 
            onClick={() => setActiveTab(ProjectCategory.OPEN_SOURCE)} 
            tooltip="Open Source" 
          />
        </div>
        
        <div className="mt-auto px-2 flex flex-col gap-4 w-full">
          <NavItem 
            icon={<User className="w-5 h-5" />} 
            isActive={false} 
            onClick={() => window.open(`mailto:${PROFILE.email}`)} 
            tooltip="Contact" 
          />
          <NavItem 
            icon={<MessageSquare className="w-5 h-5" />} 
            isActive={isChatOpen} 
            onClick={() => setIsChatOpen(true)} 
            tooltip="AI Assistant" 
          />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-white">
        
        {/* Top Header */}
        <header className="h-12 flex items-center px-6 border-b border-slate-100 shrink-0">
          <h1 className="text-sm font-semibold text-slate-800">
            {activeTab === 'All' ? 'All Projects' : activeTab}
          </h1>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
              {filteredProjects.length} items
            </span>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <div className="flex-1 overflow-y-auto">
          
          {/* Dashboard Hero / Welcome Widget */}
          {activeTab === 'All' && (
            <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50/30 flex flex-col xl:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    {PROFILE.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight">{PROFILE.name}</h2>
                    <p className="text-sm text-slate-500 font-medium">{PROFILE.title}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-3xl text-sm md:text-base">
                  {PROFILE.bio}
                </p>
                <div className="mt-6 flex gap-3">
                  <button 
                    onClick={() => setIsChatOpen(true)} 
                    className="px-4 py-2 bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4" /> Ask AI Assistant
                  </button>
                </div>
              </div>
              
              {/* Right Side Focus Widget */}
              <div className="xl:w-80 shrink-0 bg-white p-5 rounded-xl border border-slate-200 shadow-sm w-full relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-slate-100 pointer-events-none">
                  <Terminal className="w-24 h-24 -rotate-12" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Focus</span>
                  </div>
                  <p className="text-sm text-slate-600 italic border-l-2 border-indigo-200 pl-3 leading-relaxed">
                    "{PROFILE.bio2}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Sticky List Header (Column Labels) */}
          <div className="sticky top-0 z-10 hidden sm:grid grid-cols-12 gap-4 px-10 py-3 border-b border-slate-100 bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div className="col-span-4 lg:col-span-3">Project Name</div>
            <div className="col-span-6 lg:col-span-7">Description</div>
            <div className="col-span-2 hidden lg:flex justify-end">Status</div>
          </div>

          {/* Dense List Content */}
          <div className="pb-24">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group flex items-center gap-4 px-6 py-2.5 cursor-pointer border-b border-slate-100 last:border-0 transition-colors ${
                  selectedProject?.id === project.id 
                    ? 'bg-indigo-50/60' 
                    : 'bg-white hover:bg-slate-50'
                }`}
              >
                <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                  {categoryIcon(project.category, "w-4 h-4")}
                </div>
                
                <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                  <div className="sm:col-span-4 lg:col-span-3">
                    <h3 className="text-sm font-medium text-slate-900 truncate">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="hidden sm:block sm:col-span-6 lg:col-span-7">
                    <p className="text-sm text-slate-500 truncate">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="hidden lg:flex lg:col-span-2 justify-end">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60 shrink-0">
                      {project.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-slate-400 text-sm">
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Slide-over Panel (Drawer) for Project Details */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[360px] bg-white border-l border-slate-200 shadow-2xl z-30 transform transition-transform duration-300 ease-in-out flex flex-col ${
          selectedProject ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedProject && (
          <>
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {categoryIcon(selectedProject.category, "w-4 h-4")}
                </div>
                <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Details</h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {selectedProject.title}
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                 <span className="px-2 py-0.5 border border-slate-200 text-slate-600 text-[11px] font-medium rounded">
                   {selectedProject.category}
                 </span>
                 <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[11px] font-medium rounded">
                   {selectedProject.badge}
                 </span>
              </div>
              
              <div className="text-sm text-slate-600 mb-8 leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Technologies & Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-slate-50/50 shrink-0">
              {selectedProject.link ? (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Application
                </a>
              ) : (
                <button disabled className="w-full bg-slate-200 text-slate-400 text-sm font-medium py-2 px-4 rounded-md cursor-not-allowed">
                  No Link Available
                </button>
              )}
            </div>
          </>
        )}
      </div>
      
      {/* Drawer Overlay for Mobile */}
      {selectedProject && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/20 z-20"
          onClick={() => setSelectedProject(null)}
        />
      )}

      {/* Reused Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

// NavItem Component for the Rail
function NavItem({ icon, isActive, onClick, tooltip }: { icon: React.ReactNode, isActive: boolean, onClick: () => void, tooltip: string }) {
  return (
    <div className="relative group w-full flex justify-center">
      <button 
        onClick={onClick}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
          isActive 
            ? 'bg-indigo-50 text-indigo-600' 
            : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
        }`}
      >
        {icon}
      </button>
      {/* Tooltip */}
      <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 pointer-events-none">
        {tooltip}
      </div>
    </div>
  );
}

export default SaaSApp;
