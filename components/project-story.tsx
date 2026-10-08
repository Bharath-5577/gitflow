import { ArrowUpRight, Code2, GitBranch, Globe } from 'lucide-react'

const steps = [
  { number: '01', title: 'Start with an idea.', description: 'Describe a page in plain words. Give it a purpose, a little personality, and a place to begin.', icon: Code2, note: 'DESCRIBE & BUILD' },
  { number: '02', title: 'Make it your own.', description: 'Read it like a visitor. Try it on a phone. Change a detail, then publish it with v0.', icon: Globe, note: 'REFINE & PUBLISH' },
  { number: '03', title: 'Keep the story going.', description: 'Connect a GitHub repository. Keep a history of your changes and open the door to collaboration.', icon: GitBranch, note: 'CONNECT & GROW' },
]

export function ProjectStory() {
  return (
    <>
      <section className="about-section" id="about" aria-labelledby="about-heading">
        <p className="eyebrow section-label"><span className="section-index">01 /</span> THE PROJECT</p>
        <div className="about-content"><h2 id="about-heading">Small by design.<br />Full of possibility.</h2><div className="about-description"><p>First Site is a simple project with a simple purpose: turn an idea into a real web page, then learn how to share it and keep building.</p><p>No grand launch. No perfect first draft. Just a hands-on introduction to making something for the web—and the tools that help it grow.</p><span className="text-note"><span className="tiny-line" /> A starting point, not a finished story.</span></div></div>
      </section>
      <section className="process-section" id="process" aria-labelledby="process-heading">
        <div className="section-heading"><div><p className="eyebrow"><span className="section-index">02 /</span> THE PROCESS</p><h2 id="process-heading">From a thought to a thing.</h2></div><p>Three small steps.<br />A whole new set of possibilities.</p></div>
        <div className="steps-grid">{steps.map(({ number, title, description, icon: Icon, note }) => <article className="step" key={number}><div className="step-top"><span>{number}</span><Icon size={22} strokeWidth={1.4} aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p><span className="step-note">{note}</span></article>)}</div>
      </section>
      <section className="resources-section" id="resources" aria-labelledby="resources-heading"><div><p className="eyebrow"><span className="section-index">03 /</span> THE TOOLKIT</p><h2 id="resources-heading">Good ideas.<br />Meet good tools.</h2><p>The tools behind the first step—and whatever comes next.</p></div><div className="resource-links"><a href="https://v0.app" target="_blank" rel="noreferrer"><div><span className="resource-name">v0</span><span>Turn your words into a working website.</span></div><ArrowUpRight aria-label="Opens in a new tab" /></a><a href="https://github.com" target="_blank" rel="noreferrer"><div><span className="resource-name">GitHub</span><span>A home for your code and its next chapter.</span></div><ArrowUpRight aria-label="Opens in a new tab" /></a></div></section>
    </>
  )
}
