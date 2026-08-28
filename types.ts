export type ProjectCategory = 'Products' | 'Agents & Tools' | 'Games' | 'Open Source';

export type ProjectStatus = 'Live prototype' | 'Private prototype' | 'Open source';

export interface EvidenceMetric {
  value: string;
  label: string;
  note?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'demo' | 'source' | 'case-study';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  featured: boolean;
  accent: string;
  image?: string;
  imageAlt?: string;
  evidence?: EvidenceMetric[];
  links: ProjectLink[];
}

export interface CaseStudySection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  evidence: EvidenceMetric[];
  sections: CaseStudySection[];
  relatedProjectSlug?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

