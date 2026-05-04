/**
 * Content Constants
 *
 * Centralized text content and copy for Zenia Digital
 * Makes content updates easier and ensures consistency
 */

// Company Information
export const COMPANY = {
  name: 'Zenia Digital',
  tagline: 'Digital Excellence, Delivered',
  description: 'We build exceptional digital products that drive business growth.',
  email: 'hello@zeniadigital.se',
  phone: '+46 (0) 123 456 789', // Update with your Swedish phone number
  founded: '2024',
  address: {
    street: 'St Badhusgatan 18',
    postalCode: '411 21',
    city: 'Göteborg',
    country: 'Sweden',
  },
} as const;

// Repeated Marketing Copy
export const MARKETING_COPY = {
  tagline: "We elevate startups and businesses with custom digital solutions.",
  modernWorkplace: 'Modern workplace learning solutions',
  innovation: 'Innovation meets excellence',
} as const;

// Services Overview
export const SERVICES_OVERVIEW = {
  title: 'WHAT WE BUILD',
  subtitle: "Three services, one outcome: digital products that ship, scale, and earn their place in your business.",
  items: [
    {
      title: 'Web App Development',
      description: "Web platforms for the work they actually do — internal tools, SaaS dashboards, and marketing sites engineered for speed, conversion, and search.",
      bgColor: 'bg-[#240000]',
      textColor: 'text-[#FF5147]',
      href: '/WebDev',
      image: '/h-1 3.png',
      technologies: ['Next.js', 'React', 'TypeScript'],
    },
    {
      title: 'Mobile App Development',
      description: "iOS, Android, or one React Native codebase that ships to both — chosen for your roadmap and budget, not what's trending this quarter.",
      bgColor: 'bg-[#1a0f2e]',
      textColor: 'text-[#BEA1FC]',
      href: '/MobileDev',
      image: '/Group 6-3.png',
      technologies: ['React Native', 'Swift', 'Kotlin'],
    },
    {
      title: 'Fullstack Development',
      description: "End-to-end builds where one team owns the database, API, and interface — so the seams disappear and shipping speed doesn't slow as you scale.",
      bgColor: 'bg-[#051E01]',
      textColor: 'text-[#B4FFA8]',
      href: '/FullstackDev',
      image: '/Group 6-3.png',
      technologies: ['Node.js', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'AI\nDevelopment',
      description: "Practical AI work, whether you're starting from scratch or already shipping. Sized to the problem you're solving, not the hype cycle.",
      bgColor: 'bg-[#001028]',
      textColor: 'text-[#67E8F9]',
      href: '/AIDev',
      image: '/Group 6-3.png',
      technologies: ['Anthropic', 'OpenAI', 'Google AI'],
    },
  ],
} as const;

// Homepage paired service cards (rendered by SubHeader + ReversedHeader)
// Order matches visual order: cards[0] left, cards[1] right at lg+, stacked below.
export const HOMEPAGE_SERVICE_CARDS = [
  {
    id: 'web',
    title: 'Web App Development',
    description: 'Custom web applications engineered to perform, scale, and drive growth for your business.',
    image: {
      src: '/ipadred.png',
      alt: 'Web development services - Responsive website design and modern web applications',
      width: 584,
      height: 400,
      rotate: false,
      widthClass: 'w-[clamp(9rem,16vw,23rem)]',
    },
    bgColor: '#240000',
    accentColor: '#FF5147',
    hoverFilledClass: 'hover:bg-orange-600',
    hoverOutlinedClass: 'hover:bg-orange-500 hover:text-white',
    imageOnLeft: false,
    cta: {
      explore: { label: 'Explore', href: '/services' },
      contact: { label: 'Contact', href: '/ContactPage' },
    },
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Custom mobile applications engineered to engage, scale, and drive growth for your business.',
    image: {
      src: '/h-3 2.png',
      alt: 'Mobile app development - iOS and Android native applications with beautiful UI',
      width: 356,
      height: 480,
      rotate: true,
      widthClass: 'w-[clamp(7rem,12vw,18rem)]',
    },
    bgColor: '#120128',
    accentColor: '#BEA1FC',
    hoverFilledClass: 'hover:bg-purple-400',
    hoverOutlinedClass: 'hover:bg-[#BEA1FC] hover:text-[#120128]',
    imageOnLeft: true,
    cta: {
      explore: { label: 'Explore', href: '/services' },
      contact: { label: 'Contact', href: '/ContactPage' },
    },
  },
] as const;

// Service Pages Content
export const SERVICES = {
  web: {
    title: 'Web Development',
    subtitle: MARKETING_COPY.tagline,
    description: 'Custom web applications built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Best Practices',
      'Modern Frameworks',
    ],
    advantages: [
      {
        title: 'Custom UI/UX',
        description: 'Tailored design solutions that perfectly match your brand identity and user needs',
        icon: 'Palette',
      },
      {
        title: 'Lightning Fast',
        description: 'Optimized performance with modern frameworks for exceptional speed and efficiency',
        icon: 'Zap',
      },
      {
        title: 'SEO Optimized',
        description: 'Built-in search engine optimization to maximize your online visibility and reach',
        icon: 'TrendingUp',
      },
    ],
  },
  mobile: {
    title: 'Mobile Development',
    subtitle: MARKETING_COPY.tagline,
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native Performance',
      'Cross-Platform Solutions',
      'Intuitive UI/UX',
      'App Store Optimization',
    ],
  },
  fullstack: {
    title: 'Fullstack Development',
    subtitle: MARKETING_COPY.tagline,
    description: 'End-to-end development solutions from frontend to backend.',
    features: [
      'Complete Solutions',
      'API Development',
      'Database Design',
      'Cloud Infrastructure',
    ],
  },
} as const;

// Call-to-Action Text
export const CTA = {
  demo: 'Demo',
  contact: 'Contact',
  learnMore: 'Learn More',
  getStarted: 'Get Started',
  letsTalk: "Let's Talk",
  explore: 'Explore',
  viewWork: 'View Our Work',
} as const;

// Navigation Labels
export const NAV_LABELS = {
  platform: 'Platform',
  pricing: 'Pricing',
  resources: 'Resources',
  about: 'About us',
  services: 'Services',
  portfolio: 'Portfolio',
} as const;

// Footer Content
export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} ${COMPANY.name}. All rights reserved.`,
  sections: {
    services: {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '/WebDev' },
        { label: 'Mobile Development', href: '/MobileDev' },
        { label: 'Fullstack Development', href: '/FullstackDev' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/ContactPage' },
        { label: 'Portfolio', href: '/#work' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  },
} as const;

// Feature Grid Content
export const FEATURES = {
  title: 'Why Choose Zenia Digital',
  subtitle: 'Enterprise-grade solutions with startup agility',
  items: [
    {
      title: 'Modern Technology',
      description: 'Built with the latest frameworks and best practices',
    },
    {
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business',
    },
    {
      title: 'Expert Team',
      description: 'Experienced developers dedicated to your success',
    },
  ],
} as const;

// Card Stack Content
export const CARD_STACK = {
  cards: [
    {
      id: 1,
      title: 'Design & Create',
      subtitle: 'Transform your ideas into stunning visual experiences with modern design principles',
      bgColor: '#FFAB46',
      textColor: '#291900',
      buttonText: 'Join',
      buttonBgColor: '#291900',
      buttonTextColor: '#FFAB46',
    },
    {
      id: 2,
      title: 'Develop & Build',
      subtitle: 'Build robust and scalable applications with cutting-edge technologies',
      bgColor: '#E894FF',
      textColor: '#23002B',
      buttonText: 'Join',
      buttonBgColor: '#23002B',
      buttonTextColor: '#E894FF',
    },
    {
      id: 3,
      title: 'Launch & Scale',
      subtitle: 'Deploy your projects and scale them to reach millions of users worldwide',
      bgColor: '#002529',
      textColor: '#94FFE3',
      buttonText: 'Join',
      buttonBgColor: '#94FFE3',
      buttonTextColor: '#002529',
    },
    {
      id: 4,
      title: 'Analyze & Optimize',
      subtitle: 'Monitor performance and optimize for the best user experience',
      bgColor: '#291900',
      textColor: '#FFAB46',
      buttonText: 'Join',
      buttonBgColor: '#FFAB46',
      buttonTextColor: '#291900',
    },
    {
      id: 5,
      title: 'Support & Maintain',
      subtitle: 'Continuous support and maintenance to keep your project running smoothly',
      bgColor: '#23002B',
      textColor: '#E894FF',
      buttonText: 'Join',
      buttonBgColor: '#E894FF',
      buttonTextColor: '#23002B',
    },
  ],
} as const;

// Portfolio category → brand theme (mirrors SERVICES_OVERVIEW colors)
export const PORTFOLIO_CATEGORY_THEMES = {
  'Web Development': { bgColor: 'bg-[#240000]', textColor: 'text-[#FF5147]' },
  'Mobile Development': { bgColor: 'bg-[#1a0f2e]', textColor: 'text-[#BEA1FC]' },
  'Fullstack Development': { bgColor: 'bg-[#051E01]', textColor: 'text-[#B4FFA8]' },
  'AI Development': { bgColor: 'bg-[#001028]', textColor: 'text-[#67E8F9]' },
} as const;

export type PortfolioCategory = keyof typeof PORTFOLIO_CATEGORY_THEMES;

// Portfolio/Selected Work Items
// All cards render at a fixed 16:9 ratio. Items with empty `image` render a
// brand-color placeholder; set `image` to a real path to render that instead.
export const PORTFOLIO_ITEMS: ReadonlyArray<{
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  tags: ReadonlyArray<string>;
  link: string;
}> = [
  {
    title: 'GamersVault',
    category: 'Web Development',
    description: 'Case study coming soon.',
    image: '',
    tags: ['Next.js', 'TypeScript'],
    link: '#',
  },
  {
    title: 'SDIA',
    category: 'Mobile Development',
    description: 'Case study coming soon.',
    image: '',
    tags: ['React Native', 'Expo'],
    link: '#',
  },
  {
    title: 'ShelfWise',
    category: 'Fullstack Development',
    description: 'Case study coming soon.',
    image: '',
    tags: ['Next.js', 'PostgreSQL'],
    link: '#',
  },
];

// FAQ Content
export const FAQ_ITEMS = [
  {
    question: 'What does Zenia Digital do?',
    answer: "We're a digital studio based in Göteborg, Sweden. We build web platforms, mobile apps, full-stack systems, and practical AI integrations for startups and growing businesses.",
  },
  {
    question: 'How does a project usually work?',
    answer: 'We build in two-week sprints with weekly demos, so you see real working software instead of status reports. Every engagement starts with a written proposal you can hold us to.',
  },
  {
    question: 'How quickly do you respond to new inquiries?',
    answer: "We reply within one working day. The first call is a no-pressure conversation about what you want to build, who it's for, and what success looks like.",
  },
  {
    question: 'Do you work with clients outside Sweden?',
    answer: "Yes. We're based in Göteborg but work remotely with clients internationally. Async communication and time zones aren't a blocker.",
  },
  {
    question: 'What technologies do you typically use?',
    answer: 'For web and mobile, we lean on Next.js, React, TypeScript, and React Native. For backend, Node.js with PostgreSQL or MongoDB. For AI work, Anthropic, OpenAI, and Google AI. We pick what fits the problem, not the trend.',
  },
  {
    question: 'Can you take over an existing project?',
    answer: 'Yes. We do architecture reviews, audits, and continued development on existing codebases. Sometimes a focused conversation saves a six-month rebuild.',
  },
] as const;

// Contact Form Labels
export const CONTACT_FORM = {
  title: 'Get in Touch',
  subtitle: "Let's discuss your project",
  fields: {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    company: 'Company Name',
    message: 'Project Details',
    budget: 'Budget Range',
  },
  buttons: {
    submit: 'Send Message',
    submitting: 'Sending...',
  },
  validation: {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
  },
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Thank you! We\'ll get back to you within 24 hours.',
  subscribed: 'Successfully subscribed to our newsletter!',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  general: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  formValidation: 'Please fill in all required fields correctly.',
} as const;

// SEO Keywords (for metadata)
export const SEO_KEYWORDS = [
  'web development',
  'mobile app development',
  'fullstack development',
  'custom software',
  'digital agency',
  'Next.js development',
  'React development',
  'TypeScript development',
] as const;
