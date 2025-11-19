/**
 * Content Constants
 *
 * Centralized text content and copy for Zenit Digital
 * Makes content updates easier and ensures consistency
 */

// Company Information
export const COMPANY = {
  name: 'Zenit Digital',
  tagline: 'Digital Excellence, Delivered',
  description: 'We build exceptional digital products that drive business growth.',
  email: 'hello@zenitdigital.se',
  phone: '+46 (0) 123 456 789', // Update with your Swedish phone number
  founded: '2024',
} as const;

// Repeated Marketing Copy
export const MARKETING_COPY = {
  tagline: "The way we work has changed, but learning software hasn't. Until now.",
  modernWorkplace: 'Modern workplace learning solutions',
  innovation: 'Innovation meets excellence',
} as const;

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
  title: 'Why Choose Zenit Digital',
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

// Portfolio/Selected Work Items
export const PORTFOLIO_ITEMS = [
  {
    title: 'Polestar increased its users by 75%',
    subtitle: 'Polestar',
    image: '/polestar 2.png',
    bgColor: 'bg-gray-900',
  },
  {
    title: 'Superside creative platform showcase',
    subtitle: 'Superside',
    image: '/superside 3.png',
    bgColor: 'bg-gray-900',
  },
] as const;

// FAQ Content
export const FAQ_ITEMS = [
  {
    question: 'What services does Zenit Digital offer?',
    answer: 'We specialize in web development, mobile app development, and fullstack solutions. Our team delivers custom digital products tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A typical web application takes 8-12 weeks, while mobile apps range from 10-16 weeks. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes! We offer comprehensive support packages including bug fixes, updates, monitoring, and feature enhancements to keep your application running smoothly.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We use modern tech stacks including Next.js, React, TypeScript, Node.js, and cloud platforms like AWS and Vercel. We choose technologies based on your specific project requirements.',
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client communication. Quality is built into every step of our process.',
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
