import type { Metadata } from 'next'
import { HelpCenter } from '@/components/help-center'
export const metadata: Metadata = { title: 'Help & answers — First Site', description: 'Find clear answers about getting started, using the site, and publishing your first website.' }
export default function Help(){return <><section className="page-intro help-intro"><p className="eyebrow">A FRIENDLY HELPING HAND</p><h1>Good questions.<br/><span>Clear answers.</span></h1><p>A little stuck? You’re in the right place. Find what you need and get back to making.</p></section><HelpCenter/></>}
