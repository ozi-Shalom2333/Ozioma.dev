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
  title: "CareTime Dental",
  category: "WebApp",
  tech: ["React", "Tailwind CSS", "Framer Motion", "React Icons"],
  desc: "CareTime Dental is a fully responsive clinic website that highlights services, enables appointment bookings, and shares dental care information. Designed with a focus on user experience and aesthetics, it features smooth animations, intuitive navigation, and modern web development practices.",
  image: "/assets/dental.jpg",
  live: "https://clinic-two-mu.vercel.app/",
  github: "https://github.com/ozi-Shalom2333/clinic",
  screenshots: [
    "/assets/dental.jpg",
    "/assets/dental-service.jpg",
    "/assets/dental-tips.jpg",
    "/assets/dental-booking.jpg"
  ],
  architecture: {
    overview: "A modern dental clinic website built with React and Tailwind CSS, featuring a multi-step appointment booking system, interactive service showcases, and animated transitions. The project emphasizes clean design, accessibility, and smooth user interactions across all devices.",
    
    frontend: "Built with React 18 using functional components and hooks for state management. Tailwind CSS provides utility-first styling with custom configurations for consistent design tokens. Framer Motion handles all animations including scroll-triggered reveals, hover effects, and page transitions. The component-based architecture ensures reusability and maintainability.",
    
    backend: "Currently frontend-only with mock data. Designed for easy backend integration with RESTful APIs for appointment scheduling, user authentication, and patient management. Ready to connect to Node.js, Express, or serverless functions.",
    
    database: "No database implemented. Structured to integrate with MongoDB, PostgreSQL, or Firebase for storing appointment data, user information, and service records. Form validation and state management are already in place for seamless backend integration.",
    
    features: [
      "Multi-step appointment booking with form validation",
      "Interactive service cards with hover animations",
      "Responsive navigation with mobile menu",
      "Scroll-triggered animations using Framer Motion",
      "Dental tips carousel with tab navigation",
      "Progress indicator for appointment steps",
      "Accessible design with ARIA labels",
      "Optimized images with lazy loading",
      "Gradient backgrounds and modern UI components",
      "Full mobile responsiveness"
    ],
    
    challenges: [
      "Implementing smooth animations without sacrificing performance",
      "Creating a multi-step form with validation and state persistence",
      "Ensuring consistent animations across different screen sizes",
      "Managing complex hover states and transitions",
      "Building a responsive layout that works on all devices"
    ],
    
    solutions: [
      "Used Framer Motion's whileInView with once: true for optimized scroll animations",
      "Implemented React state management with controlled components and validation functions",
      "Created responsive animation variants that adapt to viewport size",
      "Utilized Tailwind's responsive utilities and custom breakpoints",
      "Designed mobile-first with progressive enhancement for larger screens"
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
      "/public/assets/lotus.png",
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
    tech: ["React", "Tailwind V3", "Redux Toolkit", "Lovable AI"], 
    desc: "HealthWise is a modern, responsive health and wellness blog platform designed to empower users on their journey to better living.",
    image: "/assets/wellness.webp",

    live: "https://healthwise-blog.vercel.app/",
    // github: "https://github.com/ozi-Shalom2333/healthwise_blog",

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
        "Ensuring fast load times for content-heavy pages",
        "Reforming Ai generated code to fit best and mordern practices and tools"
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
  },
  {
  id: 9,
  title: "DNK",
  category: "WebApp",
  tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion", "Shadcn", "TypeScript"],
  desc: "A sleek, performant web application showcasing modern design principles with smooth animations, accessible UI components, and an interactive carousel experience.",
  image: "/assets/dnk.webp",
  live: "https://dnk-drab.vercel.app/", 
  github: "https://github.com/ozi-Shalom2333/dnk",
  screenshots: [
    "/assets/dnk.webp",
    "/assets/dnk1.webp",
    "/assets/dnk2.webp",
    "/assets/dnk3.webp"
  ],
  architecture: {
    overview:
      "DNK is a modern, high-performance web application built with Next.js 16 and React 19. It demonstrates cutting-edge frontend architecture with a focus on smooth animations, accessible component design, and type-safe development practices.",
    
    frontend:
      "Built with Next.js 16 App Router and React 19, leveraging Server Components for optimal performance. The UI uses Tailwind CSS v4 with the new @import-based configuration for utility-first styling. Framer Motion powers all animations including scroll-triggered reveals, hover effects, and page transitions. Radix UI primitives provide accessible, unstyled base components that are customized with Tailwind. TypeScript ensures full type safety across the codebase.",
    
    backend:
      "Next.js 16 server-side capabilities handle API routes and server actions. The architecture is designed for scalability with clean separation between server and client components. Ready for integration with external APIs or database connections.",
    
    database:
      "No database currently implemented. Structured to easily integrate with PostgreSQL, MongoDB, or Supabase for dynamic content management.",
    
    features: [
      "Next.js 16 App Router with Server Components",
      "React 19 with latest features and hooks",
      "Tailwind CSS v4 with modern configuration",
      "Framer Motion animations and gestures",
      "Accessible Radix UI component primitives",
      "Embla Carousel with autoplay functionality",
      "TypeScript for type-safe development",
      "Responsive design across all devices",
      "Lucide React and React Icons integration",
      "CVA (Class Variance Authority) for component variants"
    ],
    
    challenges: [
      "Implementing smooth animations without impacting Core Web Vitals",
      "Configuring Tailwind CSS v4 with new @import syntax",
      "Ensuring accessibility while maintaining modern design",
      "Managing component variants consistently across the UI"
    ],
    
    solutions: [
      "Used Framer Motion's optimized animation engine with whileInView for scroll triggers",
      "Adopted Tailwind v4's new CSS-first configuration approach",
      "Built on Radix UI primitives for WCAG-compliant accessibility",
      "Implemented CVA pattern with tailwind-merge for predictable variant handling"
    ]
  }
}
]
