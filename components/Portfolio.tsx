import React, { useState, useMemo } from 'react';
import { ProjectCategory } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = useMemo(() => {
    if (activeTab === ProjectCategory.ALL) return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(project => project.category === activeTab);
  }, [activeTab]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 sticky top-0 bg-gray-50/90 backdrop-blur-md z-10 py-4 -mx-4 px-4 md:mx-0 md:px-0 border-b border-transparent md:border-none">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          Portfolio
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
        </h2>

        <div className="flex p-1 bg-white rounded-lg overflow-x-auto no-scrollbar border border-gray-200 shadow-sm">
          {Object.values(ProjectCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === category
                  ? 'bg-gray-100 text-gray-900 shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-500 pb-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
          <div className="text-center py-20">
              <p className="text-gray-400">No projects found in this category.</p>
          </div>
      )}
    </div>
  );
};

export default Portfolio;