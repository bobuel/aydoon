import { Project, ProjectCategory } from './types';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: '1',
    title: 'KidGrow',
    description: 'Kid Grow helps parents understand their child\'s development by analyzing uploaded documents and benchmarking them against established early childhood frameworks, providing insights and playful at-home activity suggestions.',
    category: ProjectCategory.SERVICES,
    tags: ['Base44', 'Agentic Output'],
    badge: 'Base44',
    link: 'https://kidgrow.base44.app'
  },
  {
    id: '7',
    title: 'CertifyFast',
    description: 'CertifyFast automates the creation of defensible certification programs by generating Job Task Analyses and psychometrically valid exam questions directly from authoritative source materials supported by defensibility documentation.',
    category: ProjectCategory.SERVICES,
    tags: ['Google AI Studio', 'Psychometric Analysis'],
    badge: 'Google AI Studio',
    link: 'https://certifyfast-speedy-certification-architect-422126580965.us-west1.run.app/'
  },
  {
    id: '2',
    title: 'Grdn',
    description: 'Grdn is your AI-powered assistant for music management. Effortlessly turn your stream-of-consciousness thoughts and verbal dictations into organized business data, so you can focus on nurturing talent.',
    category: ProjectCategory.TOOLS,
    tags: ['Base44', 'Speaking Input'],
    badge: 'Base44',
    link: 'https://grdn.base44.app'
  },
  {
    id: '3',
    title: 'Habari',
    description: 'One feed that de-duplicates coverage, scores the signal, and explains why it matters. A news aggregator built for high-signal ingestion without the noise.',
    category: ProjectCategory.TOOLS,
    tags: ['Base44', 'Agentic Synthesis'],
    badge: 'Base44',
    link: 'https://habari.base44.app'
  },
  {
    id: '4',
    title: 'BloomGPT',
    description: 'Assistant for creating Bloom\'s Taxonomy-based questions from educational materials. Helps teachers generate curriculum-aligned quizzes in seconds.',
    category: ProjectCategory.TOOLS,
    tags: ['CustomGPT', 'Prompt Engineering'],
    badge: 'CustomGPT',
    link: 'https://chatgpt.com/g/g-qY82hT1eA-bloomgpt'
  },
  {
    id: '5',
    title: '25Hours',
    description: 'Rated M Game based on the 1977 NYC Blackout. An atmospheric experience featuring immersive storytelling.',
    category: ProjectCategory.GAMES,
    tags: ['Base44', 'AI Generative Gaming'],
    badge: 'Base44',
    link: 'https://25hours.base44.app'
  },
  {
    id: '6',
    title: 'Iron Hand',
    description: '5 Card Draw Poker Auto Battler with basic item and inventory options.',
    category: ProjectCategory.GAMES,
    tags: ['Google AI Studio', 'AI Generative Gaming'],
    badge: 'Google AI Studio',
    link: 'https://iron-hand-poker-combat-422126580965.us-west1.run.app/'
  },
  {
    id: '8',
    title: 'Whose Goose?',
    description: 'Fowl forensic analysis - who owns which goose?',
    category: ProjectCategory.GAMES,
    tags: ['Replit', 'Prompt Engineering'],
    badge: 'Replit'
  }
];

export const PROFILE = {
  name: "Alex Aidun",
  title: "AI Product Leader",
  bio: "I’m Alex Aidun, an AI product leader with a builder’s instincts and a creative drive to explore. I’m hands-on by default and at my best turning a spark into something real: a prototype you can click, a workflow that saves time, a system that makes people feel calmer and more capable. I move fast to learn, then iterate until it feels obvious: simple UX, clear guidance, and behavior people can trust.",
  bio2: "I care about the practical stuff: less friction, fewer dead ends, better decisions, more time back. I also like to have fun as you will see in my portfolio. Enjoy exploring!",
  email: "bobuel@gmail.com",
  linkedin: "linkedin.com/in/alexaidun"
};