export const projects = {
  hemma: {
    name: "Hemma",
    title: "A place to call yours.",
    subtitle:
      "A calmer, more considered way to find a home. We brought a human perspective to a complicated rental journey.",
    image: "hemma",
    alt: "Hand holding a phone displaying the Hemma rental app",
    category: "Mobile app · Product design",
    services: ["Product strategy", "UX & UI design", "Mobile development"],
    year: "2026",
    challenge:
      "Finding a home should feel hopeful. Hemma’s idea was to make the rental experience simpler for both tenants and landlords. We needed to bring search, property details, and conversations into one clear journey, without overwhelming people with decisions.",
    approach:
      "We mapped the moments that mattered most, then built a mobile experience around them. Generous property imagery, understandable filters, and a clear path to contacting a landlord help people move from browsing to a real conversation. A shared design system keeps the experience familiar on iOS and Android.",
    result:
      "A complete mobile product concept, designed to make a complex decision feel easier. The handover includes a reusable component system, accessible interaction patterns, and a roadmap for the next release.",
    outcomes: ["iOS & Android", "Shared design system", "Accessible by design"],
    next: "relay",
  },
  relay: {
    name: "Relay",
    title: "Everything. Moving together.",
    subtitle:
      "A connected platform that gives operations teams a clearer view of their day, from the first dispatch to the final delivery.",
    image: "relay",
    alt: "Hands holding a tablet displaying the Relay logistics platform",
    category: "Full-stack platform · UX & UI",
    services: [
      "Discovery & architecture",
      "UX & UI design",
      "Full-stack development",
    ],
    year: "2026",
    challenge:
      "Operations teams have enough to keep track of. Relay set out to bring scattered delivery updates and manual workflows into a single, useful view. The product had to make complex information clear, while supporting the way different teams actually work.",
    approach:
      "We shaped the platform around real tasks: finding a shipment, understanding its status, and knowing what needs attention. A calm dashboard sits on top of connected services, role-based access, and a flexible data model. The interface works equally well at a desk or on a tablet in the field.",
    result:
      "An end-to-end platform concept with a clear information hierarchy and room to grow. The modular architecture makes it possible to add integrations and new workflows without starting over.",
    outcomes: [
      "Connected workflows",
      "Responsive platform",
      "Modular architecture",
    ],
    next: "form",
  },
  form: {
    name: "Form",
    title: "More room for good living.",
    subtitle:
      "A digital home for considered furniture. An e-commerce experience that lets the products, and the people behind them, shine.",
    image: "form",
    alt: "Hands holding a laptop showing the Form furniture website",
    category: "E-commerce · Web development",
    services: ["Art direction", "UX & UI design", "Web development"],
    year: "2025",
    challenge:
      "Form wanted its online store to feel as considered as its furniture. The challenge was to give materials, craftsmanship, and everyday use enough room, while keeping the path to finding the right product simple.",
    approach:
      "We paired spacious layouts with warm product photography and practical browsing tools. Clear dimensions, material details, and a consistent product structure help customers make informed choices. Behind the scenes, a flexible content system gives the team control over collections and stories.",
    result:
      "A complete store concept that connects brand and commerce. The experience is designed to work beautifully on mobile, with reusable content patterns and a focused route from discovery to purchase.",
    outcomes: [
      "Mobile-first commerce",
      "Flexible content system",
      "Considered product stories",
    ],
    next: "atlas",
  },
  atlas: {
    name: "Atlas",
    title: "Every answer, in one place.",
    subtitle:
      "A knowledge workspace that helps growing teams find what they already know, without digging through a dozen tools.",
    image: "service-stack",
    alt: "Atlas knowledge workspace shown on a desktop screen",
    category: "Web app · Product design",
    services: ["Product strategy", "UX & UI design", "Web development"],
    year: "2026",
    challenge:
      "Teams lose hours to questions that have already been answered somewhere. Atlas set out to turn scattered documents, decisions, and conversations into something a person could actually search, without asking anyone to change how they work.",
    approach:
      "We designed around retrieval rather than storage. A fast, forgiving search sits at the centre, with structured spaces for teams and a lightweight editor that keeps contributing easy. Clear permissions let people share confidently across a growing organisation.",
    result:
      "A complete workspace concept with search at its core. The handover includes a component library, an information architecture built to scale, and patterns for bringing new teams on board.",
    outcomes: [
      "Search-first interface",
      "Scalable permissions",
      "Reusable component library",
    ],
    next: "modo",
  },
  modo: {
    name: "Modo",
    concept: true,
    title: "Every detail. By design.",
    subtitle: "A UI/UX concept that makes discovering and booking creative workshops feel as inviting as the workshops themselves.",
    image: "hero-modo-ipad",
    heroImage: "hero-modo-ipad",
    alt: "A shadowed left hand holding an iPad with the Modo interface, with a right hand holding a pen against a coral background",
    category: "UI/UX design · Design system",
    services: ["Experience mapping", "UI & interaction design", "Design system"],
    year: "2026",
    challenge: "Creative workshops are a chance to try something new. This independent concept explores how an app could help someone find a session that suits them, understand what to expect, and book with confidence.",
    approach: "The proposed journey moves from discovery to workshop details and a clear booking summary. A warm visual identity, generous typography, and consistent components bring the screens together. Price, location, and experience level stay visible at the moments they matter.",
    result: "A focused interface direction and a reusable foundation for a future prototype. The next step would be testing the booking journey with prospective participants before development.",
    outcomes: ["Three connected screens", "Reusable UI patterns", "Clear booking journey"],
    next: "hemma",
  },
};
export const projectKeys = Object.keys(projects);
// The hero slider shows a curated subset, in its own running order;
// the case grid still lists every project.
export const sliderKeys = ["relay", "hemma", "modo", "form"];
