export const projectsData = [
  { 
    id: 1, 
    title: "Artisan Aid", 
    category: "Full Stack", 
    tech: ["React", "CSS3", "MongoDB"], 
    desc: "A fully functional website that connects skilled artisans to potential clients.",
    image: "/assets/artisanaidpic.jpg",

    live: "https://artisian-aid.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/artisian-aid",

    screenshots: [
      "/assets/aid2.jpg",
      "/assets/aid1.jpg",
    ],

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
    tech: ["React", "CSS3"], 
    desc: "A user-friendly voting app enabling secure, transparent elections with real-time results and seamless mobile access for all.",
    image: "/assets/voters.jpg",

    live: "https://oziomavote-app.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/voteApp",

    screenshots: [
      "/assets/voters.jpg",
      "/assets/vote1.jpg"
    ],

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
    tech: ["HTML5", "CSS3"], 
    desc: "A modern fashion brand blending vibrant African prints with contemporary silhouettes. Ethically crafted, endlessly elegant.",
    image: "/assets/zuri-second-attempt.jpg",

    live: "https://zuri-dun.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/ZURI",

    screenshots: [
      "/assets/zuri1.jpg",
      "/assets/zuri2.jpg",
    
    ],

    architecture: {
      overview:
        "ZURI is a modern fashion e‑commerce experience showcasing African prints through a clean, editorial layout. The system emphasizes visual storytelling and smooth browsing.",

      frontend:
        "The frontend is built with React and CSS3, focusing on responsive grid layouts and high‑quality imagery. Components are optimized for fast rendering, and transitions are used to create a premium browsing experience.",

      backend:
        "A lightweight mock API powers product listings and category filtering. The architecture is intentionally simple to prioritize UI performance.",

      database:
        "Product data is stored in structured JSON, enabling fast client‑side filtering and sorting.",

      features: [
        "Product gallery with category filtering",
        "Responsive grid layout",
        "High‑resolution image support",
        "Minimalist, editorial UI"
      ],

      challenges: [
        "Maintaining fast load times with large images",
        "Designing a layout that feels premium yet lightweight"
      ],

      solutions: [
        "Used optimized image formats and lazy loading",
        "Implemented a clean grid system with balanced whitespace"
      ]
    }
  },

  { 
    id: 4, 
    title: "Digital Clock", 
    category: "Tooling", 
    tech: ["HTML5", "CSS3", "JavaScript"], 
    desc: "A stylish digital clock with time, date, light/dark themes, animations, and optional ticking sound.",
    image: "/assets/clockdark.jpg",

    live: "https://digitalclock-sepia-six.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/digitalclock",

    screenshots: [
      "/assets/darkclock (1).png",
      "/assets/darkclock (2).png"
    ],

    architecture: {
      overview:
        "A lightweight digital clock built with pure HTML, CSS, and JavaScript. Designed to demonstrate clean UI execution and precise time handling.",

      frontend:
        "The UI is built with CSS3, featuring light/dark themes, smooth transitions, and a clean typographic hierarchy. JavaScript handles real‑time updates using the Date API.",

      backend:
        "No backend — the application runs entirely client‑side.",

      database:
        "No database — all state is ephemeral.",

      features: [
        "Real‑time clock and date display",
        "Light/dark theme toggle",
        "Smooth animations",
        "Optional ticking sound"
      ],

      challenges: [
        "Ensuring accurate time updates without drift",
        "Creating a visually appealing layout with minimal markup"
      ],

      solutions: [
        "Used setInterval with optimized timing",
        "Applied CSS variables for theme switching"
      ]
    }
  },

  { 
    id: 5, 
    title: "EV-olution", 
    category: "UI/UX", 
    tech: ["React", "CSS3"], 
    desc: "EV‑olution is a modern landing page that highlights electric vehicles through immersive visuals and rotating hero messages.",
    image: "/assets/ev.jpg",

    live: "https://good-rho-five.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/good",

    screenshots: [
      "/assets/ev.jpg",
      "/assets/lotus2.png",
    ],

    architecture: {
      overview:
        "EV‑olution is a modern landing page that highlights electric vehicles through immersive visuals and rotating hero messages. The system focuses on motion, clarity, and brand storytelling.",

      frontend:
        "Built with React and CSS3, the UI uses animated hero text, responsive layouts, and smooth scroll interactions. Components are structured to support modular content blocks.",

      backend:
        "No backend — the project is a static marketing experience.",

      database:
        "No database — all content is static.",

      features: [
        "Rotating hero messages",
        "Responsive landing page layout",
        "High‑quality imagery",
        "Smooth scroll interactions"
      ],

      challenges: [
        "Balancing animations with performance",
        "Maintaining readability over dynamic backgrounds"
      ],

      solutions: [
        "Used lightweight CSS animations",
        "Applied layered gradients for text contrast"
      ]
    }
  },

  { 
    id: 6, 
    title: "Movie-Dash", 
    category: "Web-App", 
    tech: ["React", "Tailwind V4", "TMDB API"], 
    desc: "A responsive React web app for browsing and discovering movies by genre or title, featuring trailers and details via the TMDB API.",
    image: "/assets/movie-dash.webp",

    live: "https://movie-match-peach.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/movie-match",

    screenshots: [
      "/assets/movie.png",
      "/assets/movie2.jpg",
    ],

    architecture: {
      overview:
        "Movie‑Dash is a responsive movie discovery app powered by the TMDB API. It focuses on fast search, clean UI, and smooth browsing across genres.",

      frontend:
        "Built with React and Tailwind v4, the UI uses reusable components, responsive grids, and animated transitions. API calls are handled with async/await and cached in component state.",

      backend:
        "No custom backend — the app communicates directly with the TMDB API.",

      database:
        "No database — TMDB provides all movie data.",

      features: [
        "Search movies by title",
        "Browse by genre",
        "View trailers and details",
        "Responsive Tailwind UI"
      ],

      challenges: [
        "Handling rate limits and API latency",
        "Displaying large amounts of data without overwhelming the UI"
      ],

      solutions: [
        "Implemented debounced search",
        "Used skeleton loaders and lazy-loaded components"
      ]
    }
  },

  { 
    id: 7, 
    title: "Healthwise-Blog", 
    category: "Web-App", 
    tech: ["React", "Tailwind V3", "Redux Toolkit"], 
    desc: "HealthWise is a modern, responsive health and wellness blog platform designed to empower users on their journey to better living.",
    image: "/assets/wellness.webp",

    live: "https://healthwise-blog.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/healthwise_blog",

    screenshots: [
      "/assets/wellness.webp",
      "/assets/heslth.jpg"
    ],

    architecture: {
      overview:
        "HealthWise is a modern health and wellness blog built with React, Vite, and Redux Toolkit. It focuses on fast performance, clean content presentation, and scalable state management.",

      frontend:
        "The UI is built with React and Tailwind v3. Redux Toolkit manages global state for posts, categories, and filters. The layout uses a card‑based design for readability.",

      backend:
        "A mock API or JSON server provides blog posts and metadata. The architecture is intentionally simple to prioritize frontend performance.",

      database:
        "Blog content is stored in structured JSON or mock API endpoints.",

      features: [
        "Category filtering",
        "Responsive blog layout",
        "Redux Toolkit state management",
        "Fast Vite-powered performance"
      ],

      challenges: [
        "Managing global state cleanly",
        "Ensuring fast load times for content-heavy pages"
      ],

      solutions: [
        "Used Redux Toolkit slices for predictable state flow",
        "Optimized images and used lazy loading"
      ]
    }
  },

  { 
    id: 8, 
    title: "AI-Powered Travel Planning Assistant", 
    category: "SaaS", 
    tech: ["Next.js 16", "Tailwind V4", "DeepSeek AI"], 
    desc: "A full-stack AI application where users input a destination and instantly receive a detailed travel guide.",
    image: "/assets/travel bot.jpg",

    live: "https://nextjsapp-orcin-six.vercel.app/",
    github: "https://github.com/ozi-Shalom2333/nextjsapp",

    screenshots: [
      "/assets/travel bot.jpg",
      "/assets/bot.jpg",
      "/assets/bot1.jpg"
    ],

    architecture: {
      overview:
        "An AI‑powered travel assistant built with Next.js 16 and DeepSeek AI. Users enter a destination and instantly receive a detailed travel guide with attractions, food, timing, tips, and curated imagery.",

      frontend:
        "The UI is built with Next.js App Router and Tailwind v4. Server Components handle data fetching, while Client Components manage user input and animations. The layout emphasizes clarity and fast content delivery.",

      backend:
        "Next.js server routes handle requests to the DeepSeek AI API. The backend formats prompts, validates user input, and structures the AI response into a clean travel guide.",

      database:
        "No persistent database — all responses are generated on demand.",

      features: [
        "AI‑generated travel guides",
        "Curated attractions, food, and tips",
        "Responsive UI with Tailwind v4",
        "Server-first architecture with Next.js 16"
      ],

      challenges: [
        "Ensuring consistent AI output formatting",
        "Handling slow or failed API responses gracefully"
      ],

      solutions: [
        "Implemented structured prompt templates",
        "Added loading states and fallback UI"
      ]
    }
  }
]
