import type { CaseStudy, EvidenceMetric, Project } from './types';

export const PROFILE = {
  name: 'Alex Aidun',
  headline: 'Enterprise AI Product, Operations & Adoption Leader',
  summary:
    'I design and drive adoption of internal AI tools, working across AI Lab and enablement.',
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
    title: 'AI Lab and enablement at Automattic',
    summary:
      'At Automattic, I work across AI Lab and enablement. I design and drive adoption of internal AI tools, explore new capabilities, and help colleagues put them to work.',
    role: 'AI Lab & Adoption Manager, Automattic',
    period: 'March 2026–present',
    evidence: [
      { value: '1,500', label: 'employees in the AI environment I help operate' },
      { value: '19', label: 'AI Guides I helped launch' },
    ],
    sections: [
      {
        heading: 'AI Lab',
        body: [
          'I design and drive adoption of a Slack-based internal sandbox for coding agents across departments. I connect new capabilities to the tasks colleagues need to do.',
          'I also design and drive development of systems for managing AI spending and approvals on our own infrastructure, with controls that fit the organization and keep costs in line.',
        ],
      },
      {
        heading: 'Enablement and adoption',
        body: [
          'I want to help people who have 3×ed themselves 10× their teams. That means seeing where an individual win gets stuck: what colleagues are asking for, what new tools can do, and which of our options are worth building. I use those signals with the team to shape the vision and functionality of internal tools.',
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
          'If people cannot install or update a tool, it cannot spread. When a colleague’s plugin failed, I traced the problem to packaging, helped release a tested version, and set up an update path its owners could use. The creator confirmed the installation worked.',
          'I also coordinated an enterprise AI access transition as eligibility changed, with guidance for users and provider-confirmed completion. That work surfaced gaps in spending controls. I brought requirements to the provider’s product team; they were discussed, not shipped.',
        ],
      },
      {
        heading: 'Program results through September 2026',
        body: [
          'The wider AI Enablement program reached 30% of the company in seven months, above its 25% target. Three of four capability measures rose about 0.5–1 point on a five-point scale, and participants organized nine local meetups. Those are shared results, including work that started before I joined.',
        ],
      },
    ],
  },
  {
    slug: 'ai-product-leadership-dremio',
    eyebrow: 'AI product leadership',
    title: 'AI products at Dremio',
    summary:
      'At Dremio, I led Documentation and University and held AI product management responsibilities. I used what we learned from customers to scope four AI initiatives with Design and Engineering.',
    role: 'Senior AI Product Manager and Director, Education & Documentation',
    period: 'Dremio tenure: January 2024–March 2026 · AI PM: April 2025–March 2026',
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
          'I used what we learned from customers to scope four AI initiatives for different parts of an analyst’s workflow. I worked with Design and Engineering to drive their development:',
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
    slug: 'certification-workshop',
    eyebrow: 'Independent AI workflow',
    title: 'Certification Workshop',
    summary: 'I turned my certification-development experience into a plugin that builds a program from source material and keeps assessment drafts, review decisions, and pilot evidence connected as the product changes.',
    role: 'Product direction, certification workflow design, implementation and evaluation with AI coding tools',
    period: 'Independent project · plugin v1.0.0',
    evidence: [
      { value: '10', label: 'coordinated certification skills' },
      { value: '12', label: 'items in the fictional worked assessment' },
    ],
    relatedProjectSlug: 'certification-workshop',
    sections: [
      {
        heading: 'Start with the work someone needs to do',
        body: ['Certification development involves more than writing questions. My experience in education and enablement shaped the starting point: who is this for, what should they be able to do, and what evidence would support that claim?', 'The plugin can start from a brief and source material or continue an existing program. It develops a charter, job tasks, an assessment blueprint, questions, practical exercises, scoring rubrics, and reviewer materials. The same saved program continues through pilot analysis, launch preparation, and maintenance.'],
      },
      {
        heading: 'Make the expertise reusable',
        body: ['I used the same portable plugin approach as Eventer: coordinated skills, shared local records, and focused Python tools in an existing AI assistant. There is no new platform account, hosted service, or mandatory delivery vendor.', 'Source versions, item revisions, reviews, and assessment forms stay connected. When content changes, an old approval does not silently carry forward. Helpers check coverage and form constraints, summarize supplied scores, and prepare candidate and delivery materials. Experts review content; program owners decide policy and release.'],
      },
      {
        heading: 'Test a program owner’s problem',
        body: ['The fictional Northstar evaluation starts with product guides, workshop notes, six weeks, twenty partner consultants, and limited reviewer capacity. It asks the assistant to develop an actual program, including twelve assessment items and three written practicals.', 'A continuation introduces synthetic pilot data and a changed access model. The workflow analyzes the historical form, identifies affected content, revises drafts, and preserves the old evidence. It recommends a hold when the evidence does not support release. The public repository includes the outputs, a finished worked example, and scoring examples so readers can inspect the substance.'],
      },
      {
        heading: 'Ship with inspectable evidence',
        body: ['The v1 release passed 59 regression tests, 13 CLI scenarios, and a ten-phase synthetic lifecycle. GitHub checks passed on Windows, macOS, and Linux with Python 3.10 and 3.13. Installation from the public repository was verified in Codex, and a bounded native assistant check exercised creation and fresh-session continuation using the same runtime.', 'These are software and workflow checks. The program examples are fictional, and the model runs include documented assistance. They do not establish candidate performance or credential validity. Claude Code metadata is included, but activation remains untested.'],
      },
    ],
  },
  {
    slug: 'eventer-planning-workflow',
    eyebrow: 'Independent AI workflow',
    title: 'Eventer planning workflow',
    summary: 'I built Eventer to help hosts plan a group event and keep guests, rooms, meals, transport, and follow-through aligned as plans change.',
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
        body: ['The plugin works in the host’s existing AI workspace. Focused skills cover setup, research, guests, communications, lodging, meals, transport, readiness, and wrap-up. Helpers calculate and reconcile plans; the host remains responsible for consequential decisions.', 'The published example uses fake data. An attendance correction changes room, meal, and transport plans. Missing information stays marked as unknown, affected approvals need to be checked again, and an uncertain message delivery is checked before retrying.'],
      },
      {
        heading: 'Inspect the work',
        body: ['The public repository includes installation instructions, selected outputs, and a verification record with corrections and limits. Installation was checked in Codex and Claude Code. The workflow tests used fake data and led to further fixes. Those checks do not establish real-event delivery or operation without supervision.'],
      },
    ],
  },
  {
    slug: 'bloom-assessment-workflow',
    eyebrow: 'AI education workflow',
    title: 'Bloom assessment workflow',
    summary:
      'I built a guided quiz workflow that uses the teacher’s source material and includes their review as it creates questions.',
    role: 'Product concept, workflow design, and implementation',
    period: 'Independent project',
    evidence: [
      { value: '1,000+', label: 'BloomGPT uses' },
      { value: '6', label: 'Bloom’s Taxonomy levels covered' },
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
          'BloomGPT’s usage gave me a reason to keep building. The next step was to make the questions easier for teachers to check and use.',
        ],
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'certification-workshop', slug: 'certification-workshop', title: 'Certification Workshop',
    description: 'I built a plugin to develop a certification from source material and job tasks, work through review and pilot evidence, and maintain the program as the product changes. Ten skills and a complete fictional example to inspect.',
    category: 'Open Source', status: 'Open source',
    tags: ['Certification', 'Agent workflows', 'Human review'], featured: true, accent: 'teal',
    links: [
      { label: 'View source', href: 'https://github.com/bobuel/certification-workshop', kind: 'source' },
      { label: 'Read case study', href: '/case-studies/certification-workshop', kind: 'case-study' },
      { label: 'See worked example', href: 'https://github.com/bobuel/certification-workshop/blob/main/examples/northstar-v1/CERTIFICATION.md', kind: 'source' },
    ],
  },
  {
    id: 'eventer-plugin', slug: 'eventer-plugin', title: 'Eventer',
    description: 'I built a plugin to plan a group trip, retreat, or weekend, keeping guests, rooms, meals, rides, and follow-through aligned as plans change. Twelve skills and worked examples using fictional data.',
    category: 'Open Source', status: 'Open source',
    tags: ['Planning', 'Agent workflows', 'Human review'], featured: true, accent: 'teal',
    links: [
      { label: 'View source', href: 'https://github.com/bobuel/eventer-plugin', kind: 'source' },
      { label: 'Read case study', href: '/case-studies/eventer-planning-workflow', kind: 'case-study' },
    ],
  },
  {
    id: 'model-advisor', slug: 'model-advisor', title: 'Model advisor',
    description: 'I built a local research prototype for recommending AI models for a task and evaluating the results. Public hosting is on hold; the repository documents the evidence and limits.',
    category: 'Open Source', status: 'Prototype',
    tags: ['Model selection', 'Evaluation', 'Product research'], featured: false, accent: 'blue',
    links: [{ label: 'View source', href: 'https://github.com/bobuel/model-advisor', kind: 'source' }],
  },
  {
    id: 'certifyfast',
    slug: 'certifyfast',
    title: 'CertifyFast',
    description:
      'I built an exam-development prototype that starts with source material and keeps expert review in the workflow.',
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
      'I built a private briefing prototype to explore source reliability, cost controls, audio, and delivery checks.',
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
      'I built KidGrow to organize developmental information and explore playful activities for parents and children.',
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
      'I built a tool to help children turn spoken ideas into comics with narration.',
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
      'I built ManagerAI to turn voice notes into organized information for music management.',
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
    id: 'iron-hand',
    slug: 'iron-hand',
    title: 'Iron Hand: Sector 13',
    description:
      'I built a cyberpunk RPG with five-card poker combat, crew choices, thirteen chapters, and three endings.',
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
    id: 'last-ferry',
    slug: 'last-ferry',
    title: 'Last Ferry — Porto Sol Operation',
    description:
      'I built a turn-based evacuation game: hire three mercenaries, rescue ten residents, and get them onto the last ferry out. Play free in a desktop browser on itch.io.',
    category: 'Games',
    status: 'Free development release',
    tags: ['Turn-based tactics', 'Rescue', 'Desktop browser'],
    featured: false,
    collections: ['Games'],
    accent: 'blue',
    links: [{ label: 'Play on itch.io', href: 'https://bobuel.itch.io/last-ferry', kind: 'demo' }],
  },
  {
    id: 'blackout-nyc',
    slug: 'blackout-nyc',
    title: 'Blackout NYC',
    description:
      'I built a survival RPG set during the 1977 New York City blackout. Cross seven neighborhoods with tactical confrontations and choices that follow you. Play free in a desktop browser on itch.io. For mature audiences.',
    category: 'Games',
    status: 'Free development release',
    tags: ['Survival RPG', 'Choices matter', 'Desktop browser'],
    featured: false,
    collections: ['Games'],
    accent: 'amber',
    links: [{ label: 'Play on itch.io', href: 'https://bobuel.itch.io/blackout-nyc', kind: 'demo' }],
  },
  {
    id: 'bloom-skill',
    slug: 'bloom-taxonomy-quiz-builder-skill',
    title: 'Bloom Quiz Builder Skill',
    description:
      'I built a guided quiz workflow using the teacher’s source material and review. It builds on BloomGPT, which received 1,000+ uses.',
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
      'I built an experimental Python prototype for retrieval regression checks and near-miss filtering. Evaluation is ongoing.',
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
    description: 'I built a free steampunk train-heist tactical autobattler.',
    category: 'Games', status: 'Live prototype', tags: ['Godot', 'Game systems'],
    featured: true, collections: ['Games'], accent: 'blue',
    links: [{ label: 'Play game', href: 'https://bobuel.github.io/brassline/', kind: 'demo' }],
  },
];

export const CAREER_HIGHLIGHTS = [
  {
    company: 'Automattic',
    role: 'AI Lab & Adoption Manager',
    period: '2026–present',
    detail: 'Internal AI tools, cost management and approvals, and enablement.',
  },
  {
    company: 'Dremio',
    role: 'Senior AI Product Manager · Director, Education & Documentation',
    period: '2024–2026',
    detail: 'AI product portfolio, customer discovery, roadmap leadership, and adoption systems.',
  },
  {
    company: 'Braze · Arrikto · WorkFusion · Qubole',
    role: 'Global education, enablement, and documentation leadership',
    period: '2015–2024',
    detail: 'Distributed teams, customer and partner programs, certification, onboarding, and technical content.',
  },
];

export const AI_CONTEXT = `
Alex Aidun is an Enterprise AI Product, Operations & Adoption Leader based in New York.
Current role: AI Lab & Adoption Manager at Automattic, March 2026–present. He works across AI Lab and enablement, designing and driving adoption of internal AI tools, including a Slack-based sandbox for coding agents and systems for AI cost management and approvals on company infrastructure. His contributions include leading a hybrid Growth cohort, building a reusable workshop tool used by another facilitator, and helping launch 19 AI Guides. The AI environment serves 1,500 employees; that is not a coding-agent adoption count.
Dremio tenure: January 2024 to March 2026 in documentation and education leadership; Senior AI Product Manager from April 2025 to March 2026. He scoped and drove an AI Agent, MCP server, AI SQL functions, and a data-analyst chatbot. Separately, Dremio University reached 3,200+ users, 1,000+ badges, +78 NPS, and 50% completion in six months. Do not attribute those learning metrics to the AI products.
Independent work: Eventer is an open-source planning plugin with 12 skills, local records and helpers, published evaluation using fake data, and installation checks in Codex and Claude Code. Model advisor is a local research prototype with public hosting on hold. BloomGPT has been used more than 1,000 times. The Bloom Quiz Builder Skill turns that signal into a source-grounded, teacher-reviewed assessment workflow across six Bloom levels.
Other public prototypes include KidGrow (sign-in required), Kid Comic Storyteller, and ManagerAI (Grdn). CertifyFast is a prototype without a public demo link. Iron Hand: Sector 13 is a playable browser RPG with poker combat. Informa is a private prototype.
Do not claim that Alex is a production ML engineer, research scientist, platform architect, or engineering executive. Do not invent cost savings, revenue, governance ownership, production scale, or psychometric validation. Do not reveal confidential employer information. Public contact: bobuel@gmail.com. Public website: https://aydoon.com. GitHub: https://github.com/bobuel. LinkedIn: https://www.linkedin.com/in/aaidun/.
`.trim();

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
