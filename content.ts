import type { CaseStudy, EvidenceMetric, Project } from './types';

export const PROFILE = {
  name: 'Alex Aidun',
  headline: 'Enterprise AI Product, Operations & Adoption Leader',
  summary:
    'I design the systems that connect AI operations, product workflows, and adoption—turning emerging capability into useful, repeatable work.',
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
    eyebrow: 'Enterprise adoption',
    title: 'AI operations at Automattic',
    summary:
      'Operating an enterprise AI environment as one connected adoption system across products, learning, guidance, and a champion network.',
    role: 'AI Adoption Manager, Automattic',
    period: 'March 2026–present',
    evidence: [
      { value: '1,500', label: 'employees in scope' },
      { value: '2–3', label: 'how-to articles published weekly' },
      { value: '4', label: 'internal product and workflow surfaces managed' },
    ],
    sections: [
      {
        heading: 'Context',
        body: [
          'Automattic’s employees work across multiple AI platforms, including ChatGPT, Codex, Claude, Cowork, and Claude Code. My role combines administration and functional operations with product ownership and hands-on adoption work.',
        ],
      },
      {
        heading: 'The product problem',
        body: [
          'Access alone does not create useful adoption. People need clear starting points, trustworthy workflows, and visible examples that connect AI capability to work they already own.',
          'The operating challenge is to improve everyday usefulness while managing a changing portfolio of tools, costs, internal products, and user needs.',
        ],
      },
      {
        heading: 'What I own',
        body: [
          'I treat enterprise adoption as a product system rather than a communications campaign.',
        ],
        bullets: [
          'Functional and cost operations for the company’s ChatGPT and Claude environments.',
          'Product management for an internal AI Agent, AI Learning, LibreChat, and Slack-based agentic automation.',
          'An AI Guides champion program that creates peer support and reusable examples.',
          'Scoping, design, and delivery support for executive AI use cases.',
          'A steady publishing cadence of practical, task-oriented guidance.',
        ],
      },
      {
        heading: 'Product decisions',
        body: [
          'The central decision is to connect platform operations, product delivery, learning, and champions. Each surface should reinforce the others: product usage reveals friction, guidance reduces that friction, and peer examples show where the tools are genuinely useful.',
        ],
      },
      {
        heading: 'What this demonstrates',
        body: [
          'Enterprise AI leadership is both technical and behavioral. The work requires enough product depth to shape useful systems and enough adoption discipline to make those systems understandable, repeatable, and trusted.',
        ],
      },
    ],
  },
  {
    slug: 'ai-product-leadership-dremio',
    eyebrow: 'AI product leadership',
    title: 'AI products at Dremio',
    summary:
      'Turning customer signal into an AI portfolio by connecting product direction, workflow design, and engineering partnership.',
    role: 'Senior AI Product Manager and Director, Education & Documentation',
    period: 'January 2024–March 2026',
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
          'At Dremio, I held dual responsibility for AI product management and the Documentation and University teams. That combination gave me a direct view of customer needs, product behavior, and the gaps that prevent new capabilities from becoming usable workflows.',
        ],
      },
      {
        heading: 'The product problem',
        body: [
          'Data teams want faster paths from questions to trusted answers, but usefulness depends on context, discoverability, and fit with established analyst and platform workflows. The opportunity was larger than a single chatbot.',
        ],
      },
      {
        heading: 'What I led',
        body: [
          'I treated the opportunity as a system-design problem: use discovery and cross-functional prioritization to place each need in the right interface rather than force every workflow into one chatbot.',
        ],
        bullets: [
          'An AI Agent for guided product interaction.',
          'An MCP server for connecting AI clients to Dremio capabilities.',
          'AI SQL functions embedded in data workflows.',
          'A data-analyst chatbot experience.',
          'Roadmap and revenue prioritization in partnership with Design and Engineering.',
        ],
      },
      {
        heading: 'Adoption evidence—kept distinct',
        body: [
          'The strongest quantified adoption outcomes from this period belong to Dremio University, not to the AI products. In six months, DremioU reached more than 3,200 users, awarded over 1,000 badges, achieved +78 NPS, and recorded a 50% completion rate.',
          'Those results are relevant because they demonstrate a repeatable ability to design for comprehension and sustained use, while remaining separate from AI-product performance claims.',
        ],
      },
      {
        heading: 'What this demonstrates',
        body: [
          'This was system design across product and adoption surfaces: discovery, delivery, documentation, learning, and user behavior had to reinforce one another rather than become separate handoffs.',
        ],
      },
    ],
  },
  {
    slug: 'bloom-assessment-workflow',
    eyebrow: 'Builder case study',
    title: 'Bloom assessment workflow',
    summary:
      'Turning observed demand into a source-grounded assessment system that keeps teacher judgment inside the workflow.',
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
          'The project shows how I use real usage as discovery evidence, then improve the workflow around trust, control, and practical output—not simply model novelty.',
        ],
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'certifyfast',
    slug: 'certifyfast',
    title: 'CertifyFast',
    description:
      'A prototype for turning authoritative source material into job-task analysis and exam-development artifacts with traceability for expert review.',
    category: 'Products',
    status: 'Live prototype',
    tags: ['Certification', 'Source grounding', 'Human review'],
    featured: true,
    collections: ['Home'],
    accent: 'blue',
    image: '/projects/certifyfast.jpg',
    imageAlt: 'CertifyFast certification workflow interface',
    links: [
      {
        label: 'Open prototype',
        href: 'https://certifyfast-speedy-certification-architect-422126580965.us-west1.run.app/',
        kind: 'demo',
      },
    ],
  },
  {
    id: 'informa',
    slug: 'informa',
    title: 'Informa',
    description:
      'A private intelligence-agent prototype for combining feeds, producing a morning audio digest, supporting live queries, and tracking trend velocity.',
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
      'A parent-facing prototype that organizes uploaded developmental information against established childhood frameworks and suggests playful activities.',
    category: 'Products',
    status: 'Live prototype',
    tags: ['Document analysis', 'Recommendations', 'Family UX'],
    featured: true,
    collections: ['Home'],
    accent: 'green',
    image: '/projects/kidgrow.jpg',
    imageAlt: 'KidGrow child development interface',
    links: [{ label: 'Open prototype', href: 'https://kidgrow.base44.app', kind: 'demo' }],
  },
  {
    id: 'kid-comic',
    slug: 'kid-comic-storyteller',
    title: 'Kid Comic Storyteller',
    description:
      'A collaborative narrator that helps children turn spoken ideas into a voiced comic-book experience.',
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
    title: 'Grdn',
    description:
      'A voice-first music-management assistant that turns unstructured dictation into organized business information.',
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
    title: 'Iron Hand',
    description:
      'A five-card-draw poker auto-battler exploring item, inventory, and combat-loop design.',
    category: 'Games',
    status: 'Live prototype',
    tags: ['Game systems', 'Inventory', 'Poker'],
    featured: false,
    collections: ['Games'],
    accent: 'red',
    image: '/projects/iron-hand.jpg',
    imageAlt: 'Iron Hand poker combat interface',
    links: [
      {
        label: 'Open prototype',
        href: 'https://iron-hand-poker-combat-422126580965.us-west1.run.app/',
        kind: 'demo',
      },
    ],
  },
  {
    id: 'bloom-skill',
    slug: 'bloom-taxonomy-quiz-builder-skill',
    title: 'Bloom Quiz Builder Skill',
    description:
      'An open-source, source-grounded assessment workflow with teacher checkpoints and structured output.',
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
      'An experimental Python toolkit for benchmarking retrieval regressions and filtering structurally similar near misses before context reaches an LLM or agent.',
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
];

export const CAREER_HIGHLIGHTS = [
  {
    company: 'Automattic',
    role: 'AI Adoption Manager',
    period: '2026–present',
    detail: 'Enterprise AI operations, internal products, learning, champions, and executive use cases.',
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
Verified current role: AI Adoption Manager at Automattic since March 2026. His scope includes administration and functional/cost operations for AI tools serving 1,500 employees, product management for an internal AI Agent, AI Learning, LibreChat, and Slack-based agentic automation, an AI Guides champions program, 2–3 practical how-to articles weekly, and executive AI use-case support.
Verified prior role: Senior AI Product Manager and Director, Education & Documentation at Dremio from January 2024 to March 2026. He scoped and drove an AI Agent, MCP server, AI SQL functions, and a data-analyst chatbot. Separately, Dremio University reached 3,200+ users, 1,000+ badges, +78 NPS, and 50% completion in six months. Do not attribute those learning metrics to the AI products.
Independent work: BloomGPT has been used more than 1,000 times. The Bloom Quiz Builder Skill turns that signal into a source-grounded, teacher-reviewed assessment workflow across six Bloom levels.
Other public prototypes include CertifyFast, KidGrow, Kid Comic Storyteller, Grdn, 25Hours, and Iron Hand. Informa is a private prototype.
Do not claim that Alex is a production ML engineer, research scientist, platform architect, or engineering executive. Do not invent cost savings, revenue, governance ownership, production scale, or psychometric validation. Do not reveal confidential employer information. Public contact: bobuel@gmail.com. Public website: https://aydoon.com. GitHub: https://github.com/bobuel. LinkedIn: https://www.linkedin.com/in/aaidun/.
`.trim();

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
