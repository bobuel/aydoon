import type { CaseStudy, EvidenceMetric, Project } from './types';

export const PROFILE = {
  name: 'Alex Aidun',
  headline: 'Enterprise AI Product, Operations & Adoption Leader',
  summary:
    'I design and drive internal AI tools, then help teams put them to workâ€”from coding-agent rollout to cost governance and adoption.',
  email: 'bobuel@gmail.com',
  location: 'New York',
  linkedin: 'https://www.linkedin.com/in/aaidun/',
  github: 'https://github.com/bobuel',
};

export const PROOF_METRICS: EvidenceMetric[] = [
  {
    value: '1,500',
    label: 'employees in the AI environment I help operate',
    note: 'Automattic, current role',
  },
  {
    value: '4',
    label: 'AI product initiatives led at Dremio',
    note: 'Agent, MCP, AI SQL, and analyst chat',
  },
  {
    value: '3,200+',
    label: 'users reached through Dremio University',
    note: '+78 NPS and 50% completion',
  },
  {
    value: '1,000+',
    label: 'uses of BloomGPT',
    note: 'Signal that informed the follow-on skill',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'enterprise-ai-adoption-automattic',
    eyebrow: 'Internal AI products and adoption',
    title: 'AI Lab at Automattic',
    summary:
      'My role has expanded with AI Lab. We build internal tools, explore emerging AI capabilities, and bring useful findings into how the organization works. I design and drive internal systems through active rollout, while helping keep AI costs in line.',
    role: 'AI Lab & Adoption Manager, Automattic',
    period: 'March 2026â€“present',
    evidence: [
      { value: '1,500', label: 'employees in the AI environment I help operate' },
      { value: 'In progress', label: 'cross-department coding-agent rollout' },
      { value: '19', label: 'AI Guides I helped launch' },
    ],
    sections: [
      {
        heading: 'Current AI Lab work',
        body: [
          'We are building a Slack-based internal sandbox and rolling out coding agents across departments. I design and drive this work with the team, connecting emerging capabilities to the tasks colleagues need to do.',
          'We are also designing and building homegrown systems for managing and approving AI costs on our own infrastructure. Keeping costs in line is active work during the rollout. Building internally lets us use our own capabilities to shape the solution around the organization.',
        ],
      },
      {
        heading: 'Earlier adoption work through September 2026',
        body: [
          'I want to help people who have 3Ã—ed themselves 10Ã— their teams. That means seeing where an individual win gets stuck: what colleagues are asking for, what new tools can do, and which of our options are worth building. I use those signals with the team to shape the vision and functionality of internal tools.',
          'That same judgment matters in enablement. I led the first hybrid Growth cohort and facilitated Finance with domain and technical partners. When the program changed direction, I recommended aligning communication, Guides, and facilitators before building more material. The team adopted the sequence.',
        ],
      },
      {
        heading: 'Make learning useful at work',
        body: [
          'Workshops matter when they change the work afterward. I combined live sessions, recordings, challenges, and reusable material for people across time zones, then stayed involved as they adapted skills and worked through setup problems.',
          'A Growth participant reported moving a campaign first draft from one or two days to about five minutes, then packaged the method as a plugin for teammates. Their draft still needed review. They built the tool; the workshop helped them find and share the method.',
        ],
      },
      {
        heading: 'Make the method reusable',
        body: [
          'A method has to work without its author in the room. I built a workshop preparation tool that another facilitator used to make slides while testing a session.',
          'I also helped launch 19 AI Guides with defined commitments, so local practitioners could teach and bring needs back to the central program.',
        ],
      },
      {
        heading: 'Keep it working',
        body: [
          'If people cannot install or update a tool, it cannot spread. When a colleagueâ€™s plugin failed, I traced the problem to packaging, helped release a tested version, and set up an update path its owners could use. The creator confirmed the installation worked.',
          'I also coordinated an enterprise AI access transition as eligibility changed, with guidance for users and provider-confirmed completion. That work surfaced gaps in spending controls. I brought requirements to the providerâ€™s product team; they were discussed, not shipped.',
        ],
      },
      {
        heading: 'Earlier program results through September 2026',
        body: [
          'The wider AI Enablement program reached 30% of the company in seven months, above its 25% target. Three of four capability measures rose about 0.5â€“1 point on a five-point scale, and participants organized nine local meetups. Those are shared results, including work that started before I joined.',
        ],
      },
    ],
  },
  {
    slug: 'ai-product-leadership-dremio',
    eyebrow: 'AI product leadership',
    title: 'AI products at Dremio',
    summary:
      'At Dremio, I combined AI product management with leadership of Documentation and University. I used customer discovery and cross-functional prioritization to scope four AI initiatives, while the learning teams helped people use the platform.',
    role: 'Senior AI Product Manager and Director, Education & Documentation',
    period: 'Dremio tenure: January 2024â€“March 2026 Â· AI PM: April 2025â€“March 2026',
    evidence: [
      { value: '4', label: 'AI initiatives scoped and driven' },
      { value: '3,200+', label: 'DremioU users in six months' },
      { value: '+78', label: 'DremioU NPS' },
      { value: '50%', label: 'DremioU completion rate' },
    ],
    sections: [
      {
        heading: 'Context',
        body: [
          'I joined Dremio in January 2024 in documentation and enablement leadership. My Senior AI Product Manager role ran from April 2025 through March 2026, alongside education and documentation leadership. Customer questions, product behavior, and learning friction all showed where the experience needed work.',
        ],
      },
      {
        heading: 'The product problem',
        body: [
          'Data teams want faster paths from questions to trusted answers, but usefulness depends on context, discoverability, and fit with established analyst and platform workflows. The opportunity was larger than a single chatbot.',
        ],
      },
      {
        heading: 'Product direction',
        body: [
          'I used customer discovery and cross-functional prioritization to scope four AI initiatives for different moments in an analystâ€™s workflow. I worked with Design and Engineering to drive their development:',
        ],
        bullets: [
          'An AI Agent for guided product interaction.',
          'An MCP server for connecting AI clients to Dremio capabilities.',
          'AI SQL functions embedded in data workflows.',
          'A data-analyst chatbot experience.',
        ],
      },
      {
        heading: 'What the learning product achieved',
        body: [
          'In six months, Dremio University reached more than 3,200 users, awarded over 1,000 badges, achieved +78 NPS, and recorded a 50% completion rate. Those are learning outcomes, not measures of AI-product adoption.',
        ],
      },
    ],
  },
  {
    slug: 'eventer-planning-workflow',
    eyebrow: 'Independent AI workflow',
    title: 'Eventer planning workflow',
    summary: 'An open-source plugin that helps a host plan a group event and keep guests, rooms, meals, transport, and follow-through aligned as plans change.',
    role: 'Product direction, workflow design, and implementation with AI coding tools',
    period: 'Independent project · portable plugin v0.1.3',
    evidence: [
      { value: '12', label: 'focused planning skills' },
      { value: '2', label: 'coding tools with verified installation: Codex and Claude Code' },
    ],
    relatedProjectSlug: 'eventer-plugin',
    sections: [
      {
        heading: 'The host needs one coherent plan',
        body: ['A guest changing their arrival date can affect a room assignment, a meal count, a ride, and a message someone is about to send. I designed Eventer around those connected decisions, with local records that the host can inspect and carry between tools.'],
      },
      {
        heading: 'Keep changes and approvals visible',
        body: ['The plugin works in the host’s existing AI workspace. Focused skills cover setup, research, guests, communications, lodging, meals, transport, readiness, and wrap-up. Helpers calculate and reconcile plans; the host remains responsible for consequential decisions.', 'In the published synthetic example, an attendance correction changes room, meal, and transport plans. The workflow preserves unknown facts, invalidates stale approvals, and reconciles an uncertain send before trying again.'],
      },
      {
        heading: 'Inspect the work',
        body: ['The public repository includes installation instructions, selected outputs, and a verification record with corrections and limits. Installation was checked in Codex and Claude Code. Evaluation used synthetic events with development follow-ups; it does not establish real-event delivery or unattended operation.'],
      },
    ],
  },
  {
    slug: 'bloom-assessment-workflow',
    eyebrow: 'AI education workflow',
    title: 'Bloom assessment workflow',
    summary:
      'Turning observed demand into a source-grounded assessment system that keeps teacher judgment inside the workflow.',
    role: 'Product concept, workflow design, and implementation',
    period: 'Independent project',
    evidence: [
      { value: '1,000+', label: 'BloomGPT uses' },
      { value: '6', label: 'Bloomâ€™s Taxonomy levels covered' },
      { value: '5', label: 'question formats supported' },
    ],
    relatedProjectSlug: 'bloom-taxonomy-quiz-builder-skill',
    sections: [
      {
        heading: 'Signal',
        body: [
          'BloomGPT was used more than 1,000 times. That was meaningful evidence of demand, but usage alone did not solve the harder product problem: helping educators create questions that are grounded, varied by cognitive demand, and easy to review.',
        ],
      },
      {
        heading: 'The product decision',
        body: [
          'Instead of producing a larger one-shot prompt, I turned quiz creation into a guided workflow. The skill identifies testable themes, asks for teacher preferences, creates one question at each Bloom level, and pauses for approval before moving forward.',
        ],
      },
      {
        heading: 'Trust and review',
        body: [
          'Each question includes an answer rationale, a source reference, difficulty, and Bloom level. The final JSON output is structured for editing or downstream use. Teacher review remains part of the workflow rather than being treated as an exception.',
        ],
      },
      {
        heading: 'What this demonstrates',
        body: [
          'The project shows how I use real usage as discovery evidence, then improve the workflow around trust, control, and practical outputâ€”not simply model novelty.',
        ],
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'eventer-plugin', slug: 'eventer-plugin', title: 'Eventer',
    description: 'Plan a group event and keep guest changes, rooms, meals, transport, and approvals aligned. Twelve skills, local records, and inspectable synthetic examples.',
    category: 'Open Source', status: 'Open source',
    tags: ['Planning', 'Agent workflows', 'Human review'], featured: true, accent: 'teal',
    links: [
      { label: 'View source', href: 'https://github.com/bobuel/eventer-plugin', kind: 'source' },
      { label: 'Read case study', href: '/case-studies/eventer-planning-workflow', kind: 'case-study' },
    ],
  },
  {
    id: 'model-advisor', slug: 'model-advisor', title: 'Model advisor',
    description: 'A local research prototype for task-aware model recommendations and evaluation. Public hosting is on hold; the repository documents the evidence and limits.',
    category: 'Open Source', status: 'Prototype',
    tags: ['Model selection', 'Evaluation', 'Product research'], featured: false, accent: 'blue',
    links: [{ label: 'View source', href: 'https://github.com/bobuel/model-advisor', kind: 'source' }],
  },
  {
    id: 'manymade', slug: 'manymade', title: 'Manymade',
    description: 'A browser RPG with a complete first mission and branching character builds. Product direction by Alex, developed with AI coding tools; the larger campaign is still in development.',
    category: 'Games', status: 'Prototype',
    tags: ['RPG', 'Game systems', 'Character builds'], featured: false, accent: 'violet',
    links: [{ label: 'View source', href: 'https://github.com/bobuel/manymade', kind: 'source' }],
  },

  {
    id: 'certifyfast',
    slug: 'certifyfast',
    title: 'CertifyFast',
    description:
      'An exam-development prototype that starts with source material and keeps expert review in the workflow.',
    category: 'Products',
    status: 'Prototype',
    tags: ['Certification', 'Source grounding', 'Human review'],
    featured: false,
    collections: ['Home'],
    accent: 'blue',
    image: '/projects/certifyfast.jpg',
    imageAlt: 'CertifyFast certification workflow interface',
    links: [],
  },
  {
    id: 'informa',
    slug: 'informa',
    title: 'Informa',
    description:
      'A private briefing prototype exploring source health, cost controls, audio, and delivery checks.',
    category: 'Agents & Tools',
    status: 'Private prototype',
    tags: ['AgentMail', 'Voice', 'Signal processing'],
    featured: false,
    accent: 'violet',
    links: [],
  },
  {
    id: 'kidgrow',
    slug: 'kidgrow',
    title: 'KidGrow',
    description:
      'Organize developmental information and explore playful activities for parents and children.',
    category: 'Products',
    status: 'Sign-in required',
    tags: ['Document analysis', 'Recommendations', 'Family UX'],
    featured: true,
    collections: ['Home'],
    accent: 'green',
    image: '/projects/kidgrow.jpg',
    imageAlt: 'KidGrow child development interface',
    links: [{ label: 'Open sign-in', href: 'https://kidgrow.base44.app', kind: 'demo' }],
  },
  {
    id: 'kid-comic',
    slug: 'kid-comic-storyteller',
    title: 'Kid Comic Storyteller',
    description:
      'Help children turn spoken ideas into a voiced comic-book experience.',
    category: 'Agents & Tools',
    status: 'Live prototype',
    tags: ['AI images', 'Voice', 'Creative collaboration'],
    featured: false,
    collections: ['Games'],
    accent: 'orange',
    image: '/projects/kid-comic.jpg',
    imageAlt: 'Kid Comic Storyteller interface',
    links: [
      {
        label: 'Open prototype',
        href: 'https://comic-voice-storyteller-422126580965.us-west1.run.app/',
        kind: 'demo',
      },
    ],
  },
  {
    id: 'grdn',
    slug: 'grdn',
    title: 'ManagerAI (Grdn)',
    description:
      'Turn voice notes into organized information for music management.',
    category: 'Agents & Tools',
    status: 'Live prototype',
    tags: ['Voice input', 'Data management', 'Music'],
    featured: false,
    accent: 'magenta',
    image: '/projects/grdn.jpg',
    imageAlt: 'Grdn music management interface',
    links: [{ label: 'Open prototype', href: 'https://grdn.base44.app', kind: 'demo' }],
  },
  {
    id: '25hours',
    slug: '25hours',
    title: '25Hours',
    description:
      'An atmospheric narrative-game prototype inspired by the 1977 New York City blackout.',
    category: 'Games',
    status: 'Live prototype',
    tags: ['Narrative design', 'Generative game', 'Atmosphere'],
    featured: false,
    collections: ['Games'],
    accent: 'amber',
    image: '/projects/25hours.jpg',
    imageAlt: '25Hours narrative game interface',
    links: [{ label: 'Open prototype', href: 'https://25hours.base44.app', kind: 'demo' }],
  },
  {
    id: 'iron-hand',
    slug: 'iron-hand',
    title: 'Iron Hand: Sector 13',
    description:
      'A cyberpunk RPG with five-card poker combat, crew choices, thirteen chapters, and three endings.',
    category: 'Games',
    status: 'Playable game',
    tags: ['Poker combat', 'Narrative RPG', 'Game systems'],
    featured: true,
    collections: ['Games'],
    accent: 'red',
    links: [
      {
        label: 'Play game',
        href: 'https://bobuel.github.io/ironhand-rpg/',
        kind: 'demo',
      },
    ],
  },
  {
    id: 'bloom-skill',
    slug: 'bloom-taxonomy-quiz-builder-skill',
    title: 'Bloom Quiz Builder Skill',
    description:
      'BloomGPTâ€™s 1,000+ uses pointed to a harder problem: source-grounded questions teachers can review. This skill turns that need into a guided workflow.',
    category: 'Open Source',
    status: 'Open source',
    tags: ['Education', 'Workflow design', 'AI skill'],
    featured: true,
    collections: ['Home'],
    accent: 'teal',
    evidence: [{ value: '1,000+', label: 'uses of the preceding BloomGPT' }],
    links: [
      {
        label: 'View source',
        href: 'https://github.com/bobuel/bloom-taxonomy-quiz-builder-skill',
        kind: 'source',
      },
      {
        label: 'Read case study',
        href: '/case-studies/bloom-assessment-workflow',
        kind: 'case-study',
      },
    ],
  },
  {
    id: 'retrieval-guard',
    slug: 'retrieval-guard',
    title: 'Retrieval Guard',
    description:
      'An experimental Python prototype for retrieval regression checks and near-miss filtering. Evaluation is ongoing.',
    category: 'Open Source',
    status: 'Open source',
    tags: ['RAG evaluation', 'Regression testing', 'Two-stage retrieval'],
    featured: true,
    collections: ['Home'],
    accent: 'violet',
    links: [
      {
        label: 'View source',
        href: 'https://github.com/bobuel/retrieval-guard',
        kind: 'source',
      },
    ],
  },
  {
    id: 'brassline', slug: 'brassline', title: 'Brassline',
    description: 'A free steampunk train-heist tactical autobattler.',
    category: 'Games', status: 'Live prototype', tags: ['Godot', 'Game systems'],
    featured: true, collections: ['Games'], accent: 'blue',
    links: [{ label: 'Play game', href: 'https://bobuel.github.io/brassline/', kind: 'demo' }],
  },
];

export const CAREER_HIGHLIGHTS = [
  {
    company: 'Automattic',
    role: 'AI Lab & Adoption Manager',
    period: '2026â€“present',
    detail: 'Internal AI tools, coding-agent rollout, governed cost management, and organizational adoption.',
  },
  {
    company: 'Dremio',
    role: 'Senior AI Product Manager Â· Director, Education & Documentation',
    period: '2024â€“2026',
    detail: 'AI product portfolio, customer discovery, roadmap leadership, and adoption systems.',
  },
  {
    company: 'Braze Â· Arrikto Â· WorkFusion Â· Qubole',
    role: 'Global education, enablement, and documentation leadership',
    period: '2015â€“2024',
    detail: 'Distributed teams, customer and partner programs, certification, onboarding, and technical content.',
  },
];

export const AI_CONTEXT = `
Alex Aidun is an Enterprise AI Product, Operations & Adoption Leader based in New York.
Current role: AI Lab & Adoption Manager at Automattic. He joined in March 2026; the role has since expanded with AI Lab. He designs and drives internal AI tools, including a Slack-based sandbox for cross-department coding agents and homegrown systems for governed AI cost management and approvals on company infrastructure. Rollouts are in progress and cost control is active work. Earlier delivery includes a hybrid Growth cohort, a reusable workshop tool used by another facilitator, and helping launch 19 AI Guides. The AI environment serves 1,500 employees; that is not a coding-agent adoption count.
Dremio tenure: January 2024 to March 2026 in documentation and education leadership; Senior AI Product Manager from April 2025 to March 2026. He scoped and drove an AI Agent, MCP server, AI SQL functions, and a data-analyst chatbot. Separately, Dremio University reached 3,200+ users, 1,000+ badges, +78 NPS, and 50% completion in six months. Do not attribute those learning metrics to the AI products.
Independent work: Eventer is an open-source planning plugin with 12 skills, local records and helpers, published synthetic evaluation, and installation checks in Codex and Claude Code. Model advisor is a local research prototype with public hosting on hold. Manymade has a complete first mission. BloomGPT has been used more than 1,000 times. The Bloom Quiz Builder Skill turns that signal into a source-grounded, teacher-reviewed assessment workflow across six Bloom levels.
Other public prototypes include KidGrow (sign-in required), Kid Comic Storyteller, ManagerAI (Grdn), and 25Hours. CertifyFast is a prototype without a public demo link. Iron Hand: Sector 13 is a playable browser RPG with poker combat. Informa is a private prototype.
Do not claim that Alex is a production ML engineer, research scientist, platform architect, or engineering executive. Do not invent cost savings, revenue, governance ownership, production scale, or psychometric validation. Do not reveal confidential employer information. Public contact: bobuel@gmail.com. Public website: https://aydoon.com. GitHub: https://github.com/bobuel. LinkedIn: https://www.linkedin.com/in/aaidun/.
`.trim();

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
