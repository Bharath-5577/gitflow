import { ArrowUpRight, Asterisk, MoveUpRight } from 'lucide-react'

export function ProjectArtwork() {
  return (
    <figure className="artwork" aria-label="Typographic artwork: Hello, world. A little idea with somewhere to go.">
      <div className="artwork-grid" aria-hidden="true" />
      <div className="artwork-top"><span>IDEA → INTERNET</span><Asterisk size={25} aria-hidden="true" /></div>
      <div className="browser-back" aria-hidden="true" />
      <div className="art-browser" aria-hidden="true">
        <div className="browser-toolbar"><div className="browser-dots"><i /><i /><i /></div><span>my-first-site</span><ArrowUpRight size={12} /></div>
        <div className="browser-page"><span className="mini-eyebrow">A NEW BEGINNING</span><div className="hello">Hello,<br />world<span>.</span></div><div className="browser-baseline"><span>A little idea.<br />Somewhere to go.</span><MoveUpRight size={47} strokeWidth={1.2} /></div></div>
      </div>
      <div className="edition-sticker" aria-hidden="true">EDITION<span>001</span></div>
      <figcaption className="artwork-bottom"><span>NOT THE FINISH LINE.<br />THE STARTING POINT.</span><span className="artwork-coordinate flex items-center gap-3"><ArrowUpRight size={20} aria-hidden="true" />001</span></figcaption>
    </figure>
  )
}
