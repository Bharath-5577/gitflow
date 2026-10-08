import { ArrowUpRight, Asterisk, MoveUpRight } from 'lucide-react'

export function ProjectArtwork() {
  return (
    <figure className="artwork" aria-label="Typographic artwork: Hello, world. A little idea with somewhere to go.">
      <div className="artwork-top"><span>A LITTLE IDEA, ONLINE.</span><Asterisk size={25} aria-hidden="true" /></div>
      <div className="art-browser" aria-hidden="true">
        <div className="browser-toolbar"><div className="browser-dots"><i /><i /><i /></div><span>my-first-site</span><ArrowUpRight size={12} /></div>
        <div className="browser-page"><span className="mini-eyebrow">A NEW BEGINNING</span><div className="hello">Hello,<br />world<span>.</span></div><div className="browser-baseline"><span>A little idea.<br />Somewhere to go.</span><MoveUpRight size={47} strokeWidth={1.2} /></div></div>
      </div>
      <figcaption className="artwork-bottom"><span>FIRST SITE — PROJECT 001</span><ArrowUpRight size={18} aria-hidden="true" /></figcaption>
    </figure>
  )
}
