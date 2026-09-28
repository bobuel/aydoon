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
    eyebrow: 'Enterprise AI adoption',
    title: 'AI Adoption Manager at Automattic',
    summary:
      'At Automattic, I help operate an AI environment serving 1,500 employees. As AI Adoption Manager, I connect practical learning, internal product direction, and the access and distribution work that gets tools into people’s hands.',
    role: 'AI Adoption Manager, Automattic',
    period: 'March 2026–present',
    evidence: [
      { value: '1,500', label: 'employees in the AI environment' },
      { value: '35', label: 'substantive internal posts, including 14 How Tos' },
      { value: '30%', label: 'program reach in seven months, a shared result' },
    ],
    sections: [
      {
        heading: 'The aim',
        body: [
          'Help people who have 3×ed themselves 10× their teams.',
        ],
      },
      {
        heading: 'Start with the work',
        body: [
          'A participant reported cutting daily social reporting from about ten minutes to one or two. Another turned a one-to-two-day campaign drafting process into a roughly five-minute first draft, then shared the workflow as a plugin. Those are participant reports, and the draft still needed review.',
          'The work came out of the first hybrid Growth cohort I led, with live sessions, recordings, and challenges across time zones. I also facilitated a Finance cohort on partner recommendations, customer expansion, and churn risk.',
        ],
      },
      {
        heading: 'Make the method reusable',
        body: [
          'Teaching once is not enough. I built a platform that turns a workshop plan and company context into a reviewed outline, slides, and exercises; another facilitator used it to prepare a session.',
          'I published 35 substantive internal posts, including 14 How To guides, on tool choice, context, and cost. I helped launch the first 19 AI Guides so colleagues had local people to learn from and a way to bring their needs back into the program.',
        ],
      },
      {
        heading: 'Fix what gets in the way',
        body: [
          'A tool is useless if people cannot get or install it. I fixed a plugin release that was missing files; its creator confirmed it installed and worked. I also coordinated an enterprise access transition through provider confirmation.',
          'For the internal tools, I help shape vision and functionality, using colleague requests and market patterns to push what we think those tools can do.',
        ],
      },
      {
        heading: 'Beyond one cohort',
        body: [
          'Participants organized nine local meetups, and the broader program reached 30% of the company in seven months against a 25% target. Those are shared results, including work from before I joined.',
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
          'Cross-department automation using Zapier, OpenAI, Jira, GitHub, and MCP.',
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
    eyebrow: 'AI education workflow',
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
      'Turn source material into certification and exam-development artifacts, ready for expert review.',
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
      'A private intelligence-agent prototype for feeds, morning audio summaries, and live queries.',
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
    title: 'Grdn',
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
    title: 'Iron Hand',
    description:
      'A poker auto-battler exploring items, inventory, and combat-loop design.',
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
      'Build source-grounded assessment questions with teacher checkpoints and structured output.',
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
      'Check retrieval regressions and structural near misses before context reaches an AI system.',
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
