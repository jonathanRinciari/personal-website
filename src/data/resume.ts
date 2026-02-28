export interface ResumeData {
  header: {
    name: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    site: string;
  };
  summary: string;
  selectedOutcomes: string[];
  experience: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    workLink?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
}

export const resume: ResumeData = {
  header: {
    name: 'Jonathan Rinciari',
    location: 'Seattle, WA',
    email: 'rinciarijoc@gmail.com',
    linkedin: 'https://linkedin.com/in/jonrinciari',
    github: 'https://github.com/jonathanRinciari',
    site: 'https://jonrinciari.dev',
  },
  summary:
    'Staff-level full-stack engineer focused on global customer-facing architecture, cross-org performance programs, platform enablement, and AI-enabled engineering systems. I specialize in leading technical strategy across ambiguous, multi-team problem spaces with measurable outcomes.',
  selectedOutcomes: [
    'Led commerce architecture across 88 countries and 23 marketplaces',
    'Built performance program across 200+ engineers and 25+ services, driving 2.5\u00d7 and 10.5\u00d7 improvements',
    'Architected microfrontend platform enabling 6+ teams and reducing onboarding from weeks to days',
    'Reduced QuickSight embedding latency by 28% and increased test coverage by 73%',
    'Designed AI pipeline replacing an 80+ engineer manual process with hallucinations below 2%',
  ],
  experience: [
    {
      title: 'Principal Front-End Engineer (pending)',
      company: 'Amazon — Project Kuiper',
      startDate: '2024',
      endDate: 'Present',
      bullets: [
        'Architected customer-facing commerce across web, mobile, and console for global launch across 88 countries and 23 marketplaces, integrating with Amazon discovery systems',
        'Designed and led org-wide performance program spanning 200+ engineers and 25+ services — 2.5× checkout, 10.5× address resolution, 3.6× availability check improvements',
        'Built microfrontend platform enabling 6+ teams to ship independently, reducing onboarding from weeks to days with zero runtime integration incidents',
        'Designed multi-agent AI system (11-stage pipeline) replacing 80+ engineer manual test workflow with hallucinations below 2%',
        'Authored globalization strategy enabling 88-country expansion via configuration rather than per-country engineering effort',
      ],
      workLink: '/work/global-commerce-performance',
    },
    {
      title: 'Senior Front-End Engineer',
      company: 'Amazon — QuickSight',
      startDate: '2022',
      endDate: '2024',
      bullets: [
        'Reduced embedding SDK latency by 28% through architecture improvements and measurement frameworks',
        'Increased test coverage from 42% to 73% through systematic testing strategy',
        'Led customization and theming architecture for embedded analytics product',
      ],
    },
    {
      title: 'Front-End Engineer → Senior',
      company: 'Amazon — AWS IoT',
      startDate: '2019',
      endDate: '2022',
      bullets: [
        'Led monolith-to-microfrontend rearchitecture across 9 teams and 20+ developers',
        'Reduced build times by 45%, improved local feedback loops by 90%, cut deployment from 3.5 weeks to 1 week',
        'Launched 3 AWS IoT console features to GA, drove operational readiness standardization',
      ],
      workLink: '/work/platform-enablement-at-scale',
    },
    {
      title: 'Technical Lead',
      company: 'Green Check Verified (Fintech)',
      startDate: '2018',
      endDate: '2019',
      bullets: [
        'Grew from engineer to technical lead in under a year, owning product technical direction',
        'Led architecture, hiring, and code quality standards for a fintech compliance platform',
      ],
    },
    {
      title: 'Senior Frontend Engineer',
      company: 'Stadium Goods',
      startDate: '2019',
      endDate: '2019',
      bullets: [
        'Built customer-facing e-commerce features for a high-growth marketplace',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Homereport.io (Real Estate Tech)',
      startDate: '2015',
      endDate: '2018',
      bullets: [
        'Built mobile and web applications from zero to production across real estate and healthcare domains',
        'Migrated Ionic app to React Native, designed backend APIs and internal tooling',
      ],
    },
  ],
  skills: [
    { category: 'Architecture & Technical Strategy', items: ['System design', 'Technical strategy', 'Cross-org alignment', 'Global architecture'] },
    { category: 'Frontend / Full-Stack Systems', items: ['TypeScript', 'React', 'Astro', 'Node.js', 'Microfrontends'] },
    { category: 'Performance & Observability', items: ['Web Vitals', 'Performance programs', 'Instrumentation', 'Regression prevention'] },
    { category: 'Platform & Developer Experience', items: ['Platform architecture', 'CI/CD', 'Onboarding', 'Standards & governance'] },
    { category: 'AI Systems & Workflow Automation', items: ['Multi-agent systems', 'RAG', 'Knowledge graphs', 'Evaluation frameworks'] },
  ],
  education: [
    {
      degree: 'B.S. Exercise Physiology',
      school: 'Slippery Rock University',
      year: '2015',
    },
  ],
};
