import { ArrowUpRight } from 'lucide-react'

const principles = [
  ['Understand first.', 'Start with the people using the product, the problem it solves, and the constraints that shape it.'],
  ['Build with clarity.', 'Keep components focused, interactions understandable, and the code practical to maintain.'],
  ['Care for the details.', 'Make time for the small screens, loading states, keyboard interactions, and finishing touches.'],
]

export function About() {
  return (
    <section tabIndex={-1} id="about" className="about page-container" aria-labelledby="about-title">
      <div className="about-grid">
        <div>
          <p className="eyebrow">02 / A little about me</p>
          <h2 id="about-title" className="section-heading">An eye for design.<br /><span className="serif">A mind for systems.</span></h2>
        </div>
        <div className="about-copy">
          <p>I’m Ozioma Okafor, a frontend engineer who enjoys the point where design becomes something you can use. My work spans business websites, product interfaces, and applications connected to APIs.</p>
          <p>I work primarily with React and Next.js. I care about clear structure, reusable components, and experiences that make sense on a small screen as much as a large one.</p>
          <p>My approach is straightforward: understand the need, choose tools that fit, and refine the details that help people find their way.</p>
          <a className="text-link" href="https://github.com/ozi-Shalom2333" target="_blank" rel="noopener noreferrer">
            See how I build on GitHub <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="principles">
        {principles.map(([title, description], index) => (
          <div className="principle" key={title}>
            <span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
