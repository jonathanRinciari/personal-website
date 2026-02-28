export interface ResumeData {
  header: {
    name: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    site: string;
  };
  positioningLine: string;
  summary: string;
  selectedImpact: {
    bold: string;
    detail: string;
  }[];
  experience: {
    title: string;
    company: string;
    subtitle?: string;
    startDate: string;
    endDate: string;
    bullets: {
      bold: string;
      detail: string;
    }[];
    workLink?: string;
  }[];
  additionalExperience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  technicalAreas: {
    category: string;
    items: string;
  }[];
  education: {
    degree: string;
    school?: string;
  }[];
}

export const resume: ResumeData = {
  header: {
    name: 'Jonathan Rinciari',
    location: 'Seattle, WA',
    email: 'rinciarijoc@gmail.com',
    linkedin: 'linkedin.com/in/jonrinciari',
    github: 'github.com/jonathanRinciari',
    site: 'jonrinciari.dev',
  },
  positioningLine:
    'STAFF SOFTWARE ENGINEER | CUSTOMER-FACING ARCHITECTURE | PLATFORM ENABLEMENT | PERFORMANCE | GLOBAL SYSTEMS',
  summary:
    'Staff-level software engineer at Amazon leading customer-facing architecture across web, mobile, and AWS Console experiences. Builds the platforms, standards, and operating mechanisms that let teams ship faster, safer, and at global scale. Strongest work includes org-wide performance governance, microfrontend platform enablement, global rollout architecture, secure identity and payments, and production AI systems designed for reliability.',
  selectedImpact: [
    {
      bold: 'Founded org-scale performance governance:',
      detail:
        'Built shared measurement, standards, release gates, and delegation mechanisms across 200+ engineers and 25+ services, improving critical purchase-path performance up to 5x and address-resolution performance 10.5x.',
    },
    {
      bold: 'Platformized multi-team frontend delivery:',
      detail:
        'Architected a microfrontend platform supporting 6+ teams and 11 microfrontends, reducing onboarding from weeks to days through shared tooling, validation pipelines, and runtime guardrails.',
    },
    {
      bold: 'Led global customer-experience architecture:',
      detail:
        'Defined customer-facing architecture for a global connectivity initiative spanning web, mobile, and AWS Console experiences across 88 countries and multiple customer segments.',
    },
    {
      bold: 'Aligned architecture across 23 marketplaces:',
      detail:
        'Designed the integration model for major discovery, mobile, identity, marketing, and legal stakeholders without direct authority.',
    },
    {
      bold: 'Built secure identity and payments foundations:',
      detail:
        'Created reusable authentication patterns, hardened session handling, and secure checkout architecture for customer workflows under unusual legal and systems constraints.',
    },
    {
      bold: 'Designed reliable applied-AI systems:',
      detail:
        'Built production AI workflows with deterministic guardrails and provenance tracking, reducing hallucinations below 2% while automating complex engineering tasks.',
    },
  ],
  experience: [
    {
      title: 'Senior Software Engineer, Project Kuiper',
      company: 'Amazon',
      subtitle:
        'Technical lead for customer-facing architecture across web, mobile, and AWS Console experiences for residential, enterprise, and SMB customers in a global launch context.',
      startDate: 'Jan 2024',
      endDate: 'Present',
      bullets: [
        {
          bold: 'Designed cross-system integration architecture:',
          detail:
            'Connected a new global customer experience to Amazon discovery flows across 23 marketplaces, coordinating alignment across 5+ organizations without direct authority.',
        },
        {
          bold: 'Founded and scaled an org-wide performance program:',
          detail:
            'Shifted performance from reactive tuning to governed-by-default through standards, monitoring, release gates, and working-group mechanisms across 200+ engineers and 25+ services.',
        },
        {
          bold: 'Drove material customer-path performance gains:',
          detail:
            'Delivered up to 5x checkout improvement and 10.5x faster address resolution through shared metrics, alarms, regression-prevention workflows, and enforcement mechanisms that scaled beyond individual contributors.',
        },
        {
          bold: 'Authored frontend technical strategy:',
          detail:
            'Set direction for authentication, payments, internationalization, CI/CD, UX consistency, and cross-team integration across web, mobile, and console surfaces.',
        },
        {
          bold: 'Architected a microfrontend platform:',
          detail:
            'Enabled 6+ teams and 11 microfrontends to ship independently through shared tooling, ownership models, onboarding guides, and compatibility validation; reduced onboarding from weeks to days.',
        },
        {
          bold: 'Led secure payments and authentication design:',
          detail:
            'Built reusable auth patterns for AWS Console customer experiences, including OAuth 2.0 with PKCE, encrypted sessions, and CSRF protections.',
        },
        {
          bold: 'Designed production AI systems:',
          detail:
            'Created a multi-stage orchestration pipeline for test-plan generation and a provenance-aware knowledge graph for deterministic retrieval and reviewability.',
        },
      ],
      workLink: '/work/global-commerce-performance',
    },
    {
      title: 'Senior Software Engineer, AWS QuickSight',
      company: 'Amazon',
      startDate: 'Jan 2022',
      endDate: 'Jan 2024',
      bullets: [
        {
          bold: 'Led embedding customization strategy:',
          detail:
            'Directed an initiative across 6 engineers, identified 15 high-value opportunities, and influenced prioritization of the top 10 on the roadmap.',
        },
        {
          bold: 'Reduced embedded analytics latency 28%:',
          detail:
            'Introduced systematic performance analysis, sandbox testing, and canary-based measurement frameworks later adopted by adjacent teams.',
        },
        {
          bold: 'Increased automated test coverage 73%:',
          detail:
            'Improved delivery safety and confidence across regions and stages.',
        },
        {
          bold: 'Built reusable performance and quality mechanisms:',
          detail:
            'Extended beyond the immediate team and improved the reliability of embedded customer experiences.',
        },
      ],
    },
    {
      title: 'Senior Software Engineer, AWS IoT',
      company: 'Amazon',
      startDate: 'Apr 2021',
      endDate: 'Jan 2022',
      bullets: [
        {
          bold: 'Led launch-critical console architecture:',
          detail:
            'Drove frontend architecture and delivery for new AWS IoT console experiences under compressed timelines and evolving backend dependencies.',
        },
        {
          bold: 'Standardized canary and operational-readiness patterns:',
          detail:
            'Scaled reusable monitoring mechanisms across 9+ teams to improve launch safety.',
        },
        {
          bold: 'Built reusable parsing and query abstractions:',
          detail:
            'Reduced duplication and improved consistency across services and teams.',
        },
      ],
      workLink: '/work/platform-enablement-at-scale',
    },
    {
      title: 'Software Engineer, AWS IoT',
      company: 'Amazon',
      startDate: 'Oct 2019',
      endDate: 'Apr 2021',
      bullets: [
        {
          bold: 'Modernized console platform architecture:',
          detail:
            'Contributed platform patterns that improved build speed, deployment speed, and local developer feedback loops.',
        },
        {
          bold: 'Improved engineering velocity:',
          detail:
            'Reduced build times 45%, improved local feedback-loop speed 90%, and cut deployment time 70% through tooling and platform modernization.',
        },
        {
          bold: 'Introduced reusable operational tooling:',
          detail:
            'Improved development velocity, testing, and launch readiness.',
        },
      ],
      workLink: '/work/platform-enablement-at-scale',
    },
  ],
  additionalExperience: [
    {
      role: 'Senior Frontend Engineer',
      company: 'Stadium Goods',
      period: '2019',
      description:
        'Built reusable UI components and improved large-catalog rendering performance for a high-traffic e-commerce experience.',
    },
    {
      role: 'Software Engineer / Technical Lead',
      company: 'Green Check Verified',
      period: '2018–2019',
      description:
        'Led full-stack product development for a fintech startup, shaping early product direction, hiring, and technical execution.',
    },
    {
      role: 'Full Stack Developer',
      company: 'HomeReport.io',
      period: '2015–2018',
      description:
        'Built mobile and web product experiences, including cross-platform app work and AWS-backed services.',
    },
    {
      role: 'Software Engineer',
      company: 'Twin Oaks Tech',
      period: '2014–2016',
      description:
        'Contributed to internal tooling, engineering productivity, and test modernization.',
    },
  ],
  technicalAreas: [
    {
      category: 'Architecture',
      items:
        'Customer-facing architecture, global rollout architecture, distributed systems, technical strategy',
    },
    {
      category: 'Platform',
      items:
        'Platform enablement, microfrontends, CI/CD, runtime guardrails, cross-team integration',
    },
    {
      category: 'Performance',
      items:
        'Performance engineering, regression prevention, monitoring, release gates, analytics',
    },
    {
      category: 'Security',
      items:
        'Security and identity, payments, OAuth 2.0 with PKCE, encrypted sessions, CSRF protections',
    },
    {
      category: 'AI',
      items:
        'Applied AI systems, deterministic orchestration, provenance-aware retrieval',
    },
  ],
  education: [
    {
      degree: 'B.S., Physiology',
    },
  ],
};
