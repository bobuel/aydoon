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
  PRODUCTS = 'Products',
  AGENTS_TOOLS = 'Agents & Tools',
  GAMES = 'Games',
  OPEN_SOURCE = 'Open Source',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
