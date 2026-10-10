const skills = [
  ['Interfaces', 'HTML, CSS, JavaScript, TypeScript, React, Next.js'],
  ['Styling & motion', 'Tailwind CSS, responsive layouts, Framer Motion'],
  ['Data & services', 'API integration, Node.js, Supabase'],
  ['Workflow', 'Git, GitHub, Vite, npm / pnpm, Figma, Vercel, Netlify'],
]

export function Skills() {
  return (
    <section tabIndex={-1} id="skills" className="skills page-container" aria-labelledby="skills-title">
      <div className="skills-layout">
        <div>
          <p className="eyebrow text-muted">03 / Capabilities</p>
          <h2 id="skills-title" className="section-heading">The right tools.<br /><span className="serif">Used thoughtfully.</span></h2>
          <p className="skills-note">From a focused business website to an interactive product interface, the tools follow the needs of the project.</p>
        </div>
        <div>
          {skills.map(([label, tools]) => (
            <div className="skill-row" key={label}><h3>{label}</h3><p>{tools}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
