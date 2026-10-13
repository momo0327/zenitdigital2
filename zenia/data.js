// Projects labelled Internal are Zenia's own live products; the rest are concepts.
export const projects = {
  calyourfriends: {
    name: "Cal Your Friends",
    brand: "Cal Your Friends", // the slider shows the lowercase key unless a real brand is set
    label: "Internal",
    client: "Internal, Zenia Digital",
    url: "https://calyourfriends.app",
    title: "Find the day everyone’s free.",
    subtitle:
      "An iPhone and iPad app that shows a group of friends the days that work for everyone, without anyone sharing what’s in their calendar.",
    image: "calyourfriends",
    alt: "Hand holding an iPhone showing the Cal Your Friends group calendar against a butter-yellow background",
    category: "Mobile app · Product design",
    services: ["Product & interaction design", "Mobile development", "Backend & invite site"],
    year: "2026",
    challenge:
      "“When are we all free?” shouldn’t take forty messages. Shared calendars ask people to show too much, and polls ask them to do too much. Cal Your Friends had to give a group a clear answer while keeping everyone’s calendar private.",
    approach:
      "Each phone reads its own calendars and shares only when someone is busy: a start and an end, never a title. The group’s month turns green where everyone is free and yellow where most are, with the next good day set large at the top. Plans become invitations with art drawn from their title, and one link brings friends straight to the plan. Motion, haptics and copy were designed alongside the screens.",
    result:
      "A complete product, designed and built end to end: the iPhone and iPad app with a Home Screen widget, the backend and the invite site. It follows the system’s text size, Dark Mode and Reduce Motion settings, and its text passes WCAG AA contrast in both themes.",
    outcomes: ["iPhone & iPad", "Private by design", "Home Screen widget"],
    next: "shelfwise",
  },
  shelfwise: {
    name: "ShelfWise",
    brand: "ShelfWise",
    label: "Internal",
    client: "Internal, Zenia Digital",
    url: "https://shelfwiseapp.com",
    title: "Less counting. More cooking.",
    subtitle:
      "An inventory tool for small restaurant teams, shaped by conversations with restaurant owners in Gothenburg.",
    image: "shelfwise",
    alt: "Hand holding a phone showing the ShelfWise stock overview against a peach background",
    category: "Restaurant SaaS · Full-stack product",
    services: ["User research", "UX & UI design", "Full-stack development"],
    year: "2024",
    challenge:
      "Small restaurant teams were running their stock on spreadsheets, notebooks and memory. Conversations with restaurant owners in Gothenburg made the brief clear: anything new had to be quicker than the spreadsheet it replaced, or nobody would open it in the middle of a service.",
    approach:
      "ShelfWise is built around the questions a kitchen asks every day: what is running low, what expires soon, and what needs ordering. Recipes are linked to their ingredients, so stock levels and shopping lists follow what the kitchen actually cooks. Signing up takes an email, and business details can wait. Changes sync in real time, so the whole team sees the same numbers.",
    result:
      "A live product, designed and built end to end, from the data model to the interface. React, TypeScript and Supabase keep it quick to work on, and it supports more than one location from the start.",
    outcomes: ["Live product", "Real-time sync", "Recipe-linked stock"],
    next: "hemma",
  },
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
    next: "calyourfriends",
  },
};
export const projectKeys = Object.keys(projects);
// The hero slider shows a curated subset, in its own running order;
// the case grid still lists every project.
export const sliderKeys = ["calyourfriends", "shelfwise", "relay", "hemma", "modo", "form"];
