export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  link?: string;
  badge?: string;
}

export enum ProjectCategory {
  ALL = 'All',
  SERVICES = 'Services',
  TOOLS = 'Tools',
  GAMES = 'Games',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
