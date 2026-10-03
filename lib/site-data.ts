export const site = {
  name: 'Vincent Ayaga (Vince)',
  role: 'Scientist & Writer',
  email: 'vinceayaga196@gmail.com',
  location: 'Dallas, TX',
  linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Vincent%20Ayaga',
  summary:
    'Scientist and writer with over 10 years of experience producing content across healthcare, technology, and academia. I specialize in translating complex technical concepts into clear, accessible content for general and professional audiences.',
}

export const stats = [
  { value: '10+', label: 'Years writing across healthcare, tech & academia' },
  { value: '100+', label: 'Auditors & researchers calibrated alongside at Meta' },
  { value: '4', label: 'AI data programs across major platforms' },
  { value: '5+', label: 'Years as a freelance SEO writer & editor' },
]

export const expertise = [
  {
    title: 'AI Data Training',
    description:
      'LLM prompt-response creation and evaluation, audiovisual annotation, red-teaming, and quality assurance across major AI platforms.',
    skills: ['LLM evaluation', 'Red-teaming', 'Rubric design', 'Golden datasets', 'QA auditing'],
  },
  {
    title: 'Technical & SEO Writing',
    description:
      'Articles, blogs, whitepapers, and webpages optimized for search visibility without losing clarity or accuracy.',
    skills: ['Surfer SEO', 'SEMrush', 'Keyword research', 'Meta descriptions', 'Whitepapers'],
  },
  {
    title: 'Medical & Health Writing',
    description:
      'Scientifically grounded health content that makes research and clinical concepts understandable for any reader.',
    skills: ['Health content', 'Research synthesis', 'Plain-language writing', 'Fact-checking'],
  },
]

export type Role = {
  title: string
  company: string
  via?: string
  period: string
  location: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'GenAI Knowledge Expert',
    company: 'Meta',
    via: 'Tundra Technical Solutions Inc.',
    period: '08/2024 – Present',
    location: 'Remote',
    points: [
      'Audit AI training data from annotators and test AI models to ensure submissions meet required quality standards.',
      'Provide structured feedback to annotators to improve quality and consistency of submissions.',
      'Create, evaluate, and refine LLM responses across knowledge, reasoning, and safety domains.',
      'Develop evaluation rubrics and golden datasets for factuality, hallucination detection, and instruction-following, reducing error rates.',
      'Participate in calibration sessions with a team of 100+ auditors, researchers, and team leads to improve inter-rater agreement.',
    ],
  },
  {
    title: 'AI Trainer',
    company: 'Scale AI',
    via: 'HireArt',
    period: '02/2024 – 09/2024',
    location: 'Southlake, TX',
    points: [
      'Formulated prompts and accurate responses to train various AI models across multiple domains.',
      'Performed audiovisual annotation through side-by-side evaluation of video and audio clips.',
      'Conducted red-teaming exercises to train AI models to recognize unsafe user requests and generate safe responses.',
      'Reviewed and audited tasks completed by other AI trainers as part of the quality assurance process.',
    ],
  },
  {
    title: 'Internet Analyst',
    company: 'RaterLabs Inc.',
    via: 'Appen',
    period: '04/2023 – 02/2024',
    location: 'Remote',
    points: [
      'Analyzed web results against user requests to evaluate accuracy, usefulness, completeness, and safety.',
      'Compared result blocks side-by-side to identify web results that better satisfy user needs.',
    ],
  },
  {
    title: 'SEO Content Writer & Editor',
    company: 'WriterAccess',
    period: '05/2020 – Present',
    location: 'Freelance',
    points: [
      'Write articles, blogs, whitepapers, webpages, and other technical content following client specifications.',
      'Use SEO and keyword research tools including Surfer SEO and SEMrush to optimize content for search visibility.',
      'Craft meta descriptions and title tags to improve click-through rates from search engines.',
      'Manage multiple client projects simultaneously while meeting tight deadlines.',
      'Collaborate with editors, designers, and other writers to ensure content meets client and platform standards.',
    ],
  },
  {
    title: 'Medical & Health Writer',
    company: 'Independent',
    period: 'Freelance',
    location: 'Remote',
    points: [
      'Produce accurate, accessible medical and health content for general and professional audiences.',
    ],
  },
]
