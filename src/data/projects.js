export const projectsData = [
  { 
    id: 1, 
    title: "Arstian Aid", 
    category: "Full Stack", 
    tech: ["React", 'CSS3', "MongoDB"], 
    desc: "A fully functional website that connect skilled artisans to potential clients",
    image: "/assets/artisanaidpic.jpg",
    architecture: {
  overview:
    "Artisan Aid is a full‑stack platform designed to connect skilled artisans with clients through a searchable, filterable directory. The system prioritizes clarity, speed, and accessibility for non‑technical users.",

  frontend:
    "The frontend is built with React and Vite for fast development and optimized builds. UI components are handcrafted with CSS3, focusing on simplicity and readability. Client-side routing enables smooth navigation, while React hooks manage local state for search, filtering, and form interactions.",

  backend:
    "A Node.js backend exposes RESTful endpoints for artisan registration, profile retrieval, and search queries. The API is structured around clean separation of concerns, ensuring predictable request/response cycles.",

  database:
    "MongoDB stores artisan profiles, categories, and client requests. Text indexes are used to support fast search queries across artisan names, skills, and locations.",

  features: [
    "Artisan registration and profile creation",
    "Client search with filters (location, skill, rating)",
    "Responsive UI for mobile and desktop",
    "REST API for artisan data retrieval"
  ],

  challenges: [
    "Ensuring fast search performance with growing datasets",
    "Designing a UI that feels intuitive for non‑technical users"
  ],

  solutions: [
    "Implemented MongoDB text indexes for optimized search performance",
    "Used a minimal, accessible layout with clear visual hierarchy"
  ]
}

  },
  { 
    id: 2, 
    title: "Voting App", 
    category: "SaaS", 
    tech: ["React", 'CSS3'], 
    desc: "A user-friendly voting app enabling secure, transparent elections with real-time results and seamless mobile access for all.",
    image: "/assets/voters.jpg",
    architecture: {
  overview:
    "The Voting App is a lightweight, secure voting platform designed for small‑scale elections. It focuses on transparency, ease of use, and real‑time result updates.",

  frontend:
    "Built with React and CSS3, the UI emphasizes clarity and accessibility. Components are structured around a simple state flow, ensuring predictable user interactions. Animations are minimal to maintain focus on data accuracy.",

  backend:
    "A Node.js backend handles vote submissions, user validation, and result aggregation. Endpoints are protected against duplicate submissions and malformed requests.",

  database:
    "Votes and candidate data are stored in a secure database with write‑once constraints to prevent tampering. Aggregation pipelines compute real‑time results.",

  features: [
    "Secure vote submission",
    "Real‑time result updates",
    "Mobile‑friendly UI",
    "Candidate and voter management"
  ],

  challenges: [
    "Preventing duplicate or invalid votes",
    "Ensuring real‑time updates without overloading the server"
  ],

  solutions: [
    "Implemented server‑side validation and IP/session‑based throttling",
    "Used lightweight polling for real‑time updates"
  ]
}

  },
  { 
    id: 3, 
    title: "ZURI", 
    category: "Ecommerce", 
    tech: ["React", "CSS3"], 
    desc: "A modern fashion brand blending vibrant African prints with contemporary silhouettes. Ethically crafted, endlessly elegant.",
    image: "/assets/zuri-second-attempt.jpg"
  },
  { 
    id: 4, 
    title: "Digital Clock", 
    category: "Tooling", 
    tech: ["HTML5", "CSS3", "JavaScript"], 
    desc: "A stylish digital clock with time, date, light/dark themes, animations, and optional ticking sound, built using HTML, CSS, and JavaScript.",
    image: "/assets/clockdark.jpg"
  },
  { 
    id: 5, 
    title: "EV-olutio", 
    category: "UI/UX", 
    tech: ["React", "CSS3"], 
    desc: "EV-olution is a modern landing page that highlights electric vehicles through immersive visuals, rotating hero messages, and a clean, interactive user experience.",
    image: "/assets/ev.jpg"
  },
   { 
    id: 6, 
    title: "Movie-Dash", 
    category: "Web-App", 
    tech: ["React", "Tailwind V4", "TMDB API"], 
    desc: "Movie-Match — A responsive React web app for browsing and discovering movies by genre or title, featuring trailers and details via the TMDB API. Styled with Tailwind CSS for sleek UI.",
    image: "/assets/movie-dash.webp"
  },
   { 
    id: 7, 
    title: "Healthwise-Blog", 
    category: "Web-App", 
    tech: ["React", "Tailwind V3", "Redux Toolkit", ], 
    desc: "HealthWise is a modern, responsive health and wellness blog platform designed to empower users on their journey to better living. Built with React and Vite, the site delivers fast performance and a seamless user experience across devices.",
    image: "/assets/wellness.webp"
  },
   { 
    id: 8, 
    title: "AI-Powered Travel Planning Assistant", 
    category: "SaaS", 
    tech: ["Next.js 16", "Tailwind V4", "DeepSeek AI", ], 
    desc: "A full-stack AI application where users input a destination and instantly receive a detailed travel guide with attractions, food, timing, tips, and curated imagery",
    image: "/assets/travel bot.jpg"
  },
 
]

// AI-Powered Travel Planning Assistant