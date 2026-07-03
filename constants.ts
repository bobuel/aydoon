import { Project, ProjectCategory } from './types';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: '1',
    title: 'KidGrow',
    description: 'KidGrow turns school-day documents and classroom updates into parent-friendly learning insight and simple do-together activities for family life at home and nearby.',
    category: ProjectCategory.SERVICES,
    tags: ['Education AI', 'Parent UX'],
    badge: 'Product Prototype',
    link: 'https://kidgrow.base44.app'
  },
  {
    id: '7',
    title: 'CertifyFast',
    description: 'CertifyFast helps small teams move from source material to defensible certification assets: job task analysis, question banks, rationales, evidence mapping, review, and export.',
    category: ProjectCategory.SERVICES,
    tags: ['Assessment Design', 'Evidence Grounding'],
    badge: 'Product Prototype',
    link: 'https://certifyfast-speedy-certification-architect-422126580965.us-west1.run.app/'
  },
  {
    id: '2',
    title: 'Grdn',
    description: 'Grdn explores voice-first business operations for music teams, turning messy notes and verbal updates into structured artist, project, booking, and payment data.',
    category: ProjectCategory.TOOLS,
    tags: ['Voice Workflow', 'Music Ops'],
    badge: 'Workflow Prototype',
    link: 'https://grdn.base44.app'
  },
  {
    id: '3',
    title: 'Habari',
    description: 'Habari explores higher-signal news ingestion: de-duplicating coverage, scoring source quality, surfacing disagreements, and explaining why a story matters.',
    category: ProjectCategory.TOOLS,
    tags: ['Signal Synthesis', 'Editorial AI'],
    badge: 'Agentic Workflow',
    link: 'https://habari.base44.app'
  },
  {
    id: '4',
    title: 'BloomGPT',
    description: 'BloomGPT helps teachers create Bloom\'s Taxonomy-aligned comprehension questions from educational materials, with structure around source grounding and instructional intent.',
    category: ProjectCategory.TOOLS,
    tags: ['Teacher Tools', 'Instructional Design'],
    badge: 'Live GPT'
    ,link: 'https://chatgpt.com/g/g-qY82hT1eA-bloomgpt'
  },
  {
    id: '5',
    title: '25Hours',
    description: '25Hours is an atmospheric interactive fiction/game prototype based on the 1977 New York City blackout, exploring AI-assisted narrative and mood-driven interaction.',
    category: ProjectCategory.GAMES,
    tags: ['Narrative Systems', 'Creative AI'],
    badge: 'Game Prototype',
    link: 'https://25hours.base44.app'
  },
  {
    id: '6',
    title: 'Iron Hand',
    description: 'Iron Hand is a poker-combat auto-battler experiment that combines card evaluation, inventory choices, battle simulation, and AI-generated fight narration.',
    category: ProjectCategory.GAMES,
    tags: ['Game Systems', 'AI Narration'],
    badge: 'Game Prototype',
    link: 'https://iron-hand-poker-combat-422126580965.us-west1.run.app/'
  },
  {
    id: '8',
    title: 'Whose Goose?',
    description: 'A fast, silly forensic-analysis game about identifying goose ownership — included as a reminder that useful AI products can still have a sense of play.',
    category: ProjectCategory.GAMES,
    tags: ['Playful AI', 'Rapid Prototype'],
    badge: 'Game Prototype'
  }
];

export const PROFILE = {
  name: "Alex Aidun",
  title: "AI Product Leader",
  bio: "I’m Alex Aidun, an AI product leader with a builder’s instincts. I’m hands-on by default and at my best turning a messy human workflow into something people can actually use: a prototype you can click, a system that saves time, or an experience that makes someone feel calmer and more capable.",
  bio2: "My work focuses on practical AI: education tools, agentic workflows, evidence-grounded generation, creative interfaces, and products that reduce friction instead of adding more of it.",
  email: "bobuel@gmail.com",
  linkedin: "linkedin.com/in/alexaidun"
};
