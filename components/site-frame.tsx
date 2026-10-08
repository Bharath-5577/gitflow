'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Asterisk, ArrowUpRight, Menu, X } from 'lucide-react'

const links = [['/', 'Home'], ['/about', 'About'], ['/guides', 'Guides'], ['/help', 'Help']] as const
export function SiteFrame({ children }: { children: React.ReactNode }) {
 const path = usePathname()
 const [open, setOpen] = useState(false)
 return <div className="site-shell clean-site"><a className="skip-link" href="#main">Skip to content</a><header className="clean-header"><Link href="/" className="wordmark" onClick={() => setOpen(false)}><Asterisk aria-hidden="true" />first site.</Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}</nav><Link href="/guides" className="header-action">Start exploring <ArrowUpRight size={16} aria-hidden="true" /></Link><button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([href,label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></Link>)}</nav>}<main id="main">{children}</main><footer className="clean-footer"><div><Link className="wordmark" href="/"><Asterisk aria-hidden="true" />first site.</Link><p>Small beginnings. Real possibilities.</p></div><nav aria-label="Footer navigation">{links.slice(1).map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}</nav><span>Made for the curious.</span></footer></div>
}
