import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Helper to determine style based on the badge text
  const getBadgeStyle = (badge?: string) => {
    if (!badge) return "";
    
    const text = badge.toLowerCase();
    if (text.includes('base44')) {
      return "bg-indigo-50 text-indigo-700 border-indigo-100";
    }
    if (text.includes('google')) {
      return "bg-teal-50 text-teal-700 border-teal-100";
    }
    if (text.includes('replit')) {
      return "bg-rose-50 text-rose-700 border-rose-100";
    }
    if (text.includes('customgpt')) {
      return "bg-amber-50 text-amber-700 border-amber-100";
    }
    
    return "bg-indigo-50 text-indigo-700 border-indigo-100";
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col h-full shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <div className="bg-gray-50 p-2 rounded-full text-gray-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all border border-gray-100 group-hover:border-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-auto">
        {project.badge && (
           <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${getBadgeStyle(project.badge)}`}>
             <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-60"></span>
             {project.badge}
           </span>
        )}
        {project.tags
          .filter(tag => tag !== project.badge)
          .map((tag, index) => (
          <span 
            key={index} 
            className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-all duration-300"
          >
             {tag}
          </span>
        ))}
      </div>
      
      {/* Invisible overlay link for accessibility */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        <span className="sr-only">View {project.title}</span>
      </a>
    </div>
  );
};

export default ProjectCard;