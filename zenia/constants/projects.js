// Every project's copy and imagery lives here, not in the components.
// Projects labelled Internal are Zenia's own live products; the rest are concepts.
// Images are file names in public/zenia/ without .webp: `image` is the case
// study photo, `heroImage` the slider photo (default hero-{key}), `cardImage`
// the homepage and /work card. `slide` is the hero slider copy, one string per
// line; `ui` is the case study's interface board.
export const projects = {
  calyourfriends: {
    name: "Cal Your Friends",
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
    cardImage: "calyourfriends",
    tagline: "Find the day everyone’s free.",
    ui: {
      heading: "From a free day to a plan.",
      intro:
        "The day shows why it works, the plan becomes an invitation, and one link brings everyone in.",
      label:
        "Three Cal Your Friends screens: a day's timeline showing who is free, a brunch plan styled as an invitation, and the invite sheet with a join code",
      caption: ["Screens from the app.", "Interface design"],
      screens: ["cyf-day", "cyf-plan", "cyf-invite"],
    },
    next: "shelfwise",
  },
  shelfwise: {
    name: "ShelfWise",
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
    cardImage: "shelfwise",
    tagline: "Stock control for busy kitchens.",
    ui: {
      heading: "What’s low, what’s next.",
      intro:
        "One overview for the whole kitchen, from stock levels to the shopping list.",
      label:
        "Flat ShelfWise desktop dashboard showing stock levels, items running low, stock value and a ready shopping list",
      caption: ["Stock control, without the spreadsheet.", "Interface design"],
    },
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
    cardImage: "project-6",
    tagline: "Finding a home, made human.",
    slide: {
      tag: "Mobile app",
      title: ["A place to", "call yours."],
      description: ["A simpler way to find", "your next home."],
    },
    ui: {
      heading: "Home, without the hard part.",
      intro:
        "A connected journey from finding a place to making the first introduction.",
      label:
        "Three flat Hemma app screens showing home discovery, property details, and a conversation",
      caption: ["Discover. Explore. Connect.", "Interface design"],
      images: { interior: "hemma-interior" },
    },
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
    cardImage: "project-4",
    tagline: "Bringing every moving part together.",
    slide: {
      tag: "Platform",
      title: ["Everything.", "Moving together."],
      description: ["Clarity for the people", "keeping things moving."],
    },
    ui: {
      heading: "Complex operations. A clear view.",
      intro:
        "A single workspace for the details, decisions, and deliveries that keep things moving.",
      label:
        "Flat Relay desktop dashboard showing delivery metrics, shipments, and performance",
      caption: ["A calmer way to keep things moving.", "Interface design"],
    },
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
    cardImage: "project-3",
    tagline: "A little more room for good design.",
    slide: {
      tag: "E-commerce",
      title: ["More room", "for good living."],
      description: ["A digital home for", "considered design."],
    },
    ui: {
      heading: "Give good design a little space.",
      intro:
        "An online store that lets the materials, the craftsmanship, and the products speak.",
      label:
        "Flat Form furniture website with product photography and a shopping collection",
      caption: [
        "Considered design, from first look to final detail.",
        "Interface design",
      ],
      images: { chair: "form-chair" },
    },
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
    cardImage: "hero-modo-ipad",
    tagline: "Every detail, by design.",
    slide: {
      tag: "UI/UX design",
      title: ["Every detail.", "By design."],
      description: ["From a first idea to", "an effortless experience."],
    },
    ui: {
      heading: "From curious to creative.",
      intro:
        "Three moments in one considered journey: discover a workshop, explore the details, and make it a date.",
      label:
        "Three flat Modo interface concepts: workshop discovery, clay workshop details, and a booking summary",
      caption: ["Discovery. Details. A clear next step.", "Interface concept"],
    },
    next: "calyourfriends",
  },
};
export const projectKeys = Object.keys(projects);
// The homepage keeps the original design's projects; Zenia's own products
// follow them on /work.
export const sliderKeys = ["relay", "hemma", "modo", "form"];
export const homeCaseKeys = ["hemma", "relay", "form", "modo"];
export const workKeys = ["hemma", "relay", "form", "modo", "calyourfriends", "shelfwise"];
