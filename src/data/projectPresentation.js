import { projectsData } from './projects.js'

// These summaries draw on the supplied project descriptions. They describe
// frontend work without implying a client relationship or sole ownership.
const presentation = {
  1: {
    category: 'Service platform', tone: '#ddd3bc',
    summary: 'A platform connecting artisans and clients through profiles, search, and a clear path to getting in touch.',
    focus: 'Responsive React interfaces, profile presentation, search and filtering states.',
  },
  2: {
    category: 'Business website', tone: '#dbe5e6',
    summary: 'A clinic website that brings services, dental information, and a multi-step appointment interface into one experience.',
    focus: 'Responsive pages, reusable service components, and a validated multi-step booking interface.',
    note: 'The appointment experience uses mock data. It is a frontend demonstration, with no live scheduling backend.',
  },
  3: {
    category: 'Fashion website', tone: '#e4d8c5',
    summary: 'A fashion storefront concept using editorial imagery and a responsive product layout.',
    focus: 'HTML and CSS layout, visual hierarchy, and responsive product presentation.',
  },
  4: {
    category: 'JavaScript experiment', tone: '#dcdfe9',
    summary: 'A browser-based clock exploring time, date, themes, and small interactive details.',
    focus: 'JavaScript time updates and CSS themes.',
  },
  5: {
    category: 'Landing page', tone: '#dedecb',
    summary: 'An electric vehicle landing page with rotating hero messages and an emphasis on photography.',
    focus: 'React hero state and responsive visual composition.',
  },
  6: {
    category: 'API application', tone: '#dde0e5',
    summary: 'A movie discovery interface with search, genre browsing, trailers, and details from the TMDB API.',
    focus: 'API-connected React views, debounced search, and loading states.',
  },
  7: {
    category: 'Content platform', tone: '#dce5d5',
    summary: 'A health and wellness blog with category filtering and a responsive reading experience.',
    focus: 'React content views, Redux Toolkit state, and refinement of AI-assisted code.',
    note: 'This project used Lovable AI alongside frontend development, as noted in the original project information.',
  },
  8: {
    displayTitle: 'NomadAI', category: 'AI travel application', tone: '#dce2d8',
    summary: 'From a destination to a structured travel guide. An AI-assisted planner with imagery, sharing, and a layout made for printing.',
    focus: 'Next.js interface, generation states, image gallery interactions, and shareable guide presentation.',
  },
  9: {
    category: 'Commerce interface', tone: '#d9e1e8',
    summary: 'A storefront interface combining product presentation, carousels, and a Firebase authentication flow.',
    focus: 'Next.js and TypeScript interfaces, responsive product displays, and client-side authentication state.',
  },
  10: {
    category: 'Product landing page', tone: '#dedfd5',
    summary: 'A focused solar fan landing page with product information and direct WhatsApp contact.',
    focus: 'Responsive React sections, product presentation, and WhatsApp calls to action.',
    note: 'WhatsApp handles inquiries. There is no cart or payment backend, and no conversion results are claimed.',
  },
}

export const portfolioProjects = projectsData.map(project => ({
  ...project,
  displayTitle: project.title,
  ...presentation[project.id],
  // Original screenshots remain available; the generated assets only reduce bytes.
  preview: `/assets/optimized/project-${project.id}.webp`,
  previewSmall: `/assets/optimized/project-${project.id}-640.webp`,
}))

export const featuredProjects = [8, 2, 9, 1].map(id => portfolioProjects.find(project => project.id === id))
export const archivedProjects = portfolioProjects.filter(project => !featuredProjects.includes(project))
