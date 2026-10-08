import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react'
import { ProjectArtwork } from '@/components/project-artwork'
import { ProjectStory } from '@/components/project-story'

export default function Page() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="First Site home"><Asterisk aria-hidden="true" strokeWidth={2.5} /> first site<span className="brand-period">.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">The project</a>
          <a href="#process">The process</a>
          <a href="#resources" className="nav-cta">Explore the tools <ArrowUpRight aria-hidden="true" size={15} /></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> A SMALL BEGINNING</p>
            <h1 id="hero-heading">One idea.<br />One page.<br /><span>A first step.</span></h1>
            <p className="hero-description">A simple idea, brought to life. A place to learn by making—and see where it takes you.</p>
            <a className="primary-link" href="#about">Meet the project <ArrowDown size={17} aria-hidden="true" /></a>
            <p className="hero-footnote">Built with curiosity. Made with v0.</p>
          </div>
          <ProjectArtwork />
        </section>
        <div className="project-meta" aria-label="Project details">
          <div><span className="meta-label">PROJECT 001</span><span>First Site</span></div>
          <div><span className="meta-label">THE FORMAT</span><span>One page. Room to grow.</span></div>
          <div><span className="meta-label">THE APPROACH</span><span>Learn by making</span></div>
          <a href="#about" aria-label="Scroll to the project"><ArrowDown size={20} /></a>
        </div>
        <ProjectStory />
      </main>
      <footer className="site-footer"><a href="#top" className="wordmark"><Asterisk aria-hidden="true" size={20} /> first site.</a><p>Every project starts somewhere. This one starts here.</p><a href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a></footer>
    </div>
  )
}

