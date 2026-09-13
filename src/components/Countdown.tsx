import { useEffect, useState } from 'react'
import { weddingData } from '../data/weddingData'

type Remaining = { days: number; hours: number; minutes: number; seconds: number }
const zero: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 }
function getRemaining(): Remaining { const diff = Math.max(0, new Date(weddingData.date.iso).getTime() - Date.now()); const s = Math.floor(diff / 1000); return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 } }
export function Countdown() { const [r, setR] = useState<Remaining>(zero); useEffect(() => { setR(getRemaining()); const id = window.setInterval(() => setR(getRemaining()), 1000); return () => window.clearInterval(id) }, []); return <section className="section-pad bg-[#FFF9EF] text-center"><p className="text-[10px] uppercase tracking-[0.35em] text-[#6E1F2E]">Until we say “I do”</p><h2 className="mt-4 font-display text-5xl text-[#42131E]">The countdown</h2><div className="mx-auto mt-10 grid max-w-3xl grid-cols-4 divide-x divide-[#B5965A]/40 border-y border-[#B5965A]/40 py-7">{Object.entries(r).map(([key, value]) => <div key={key}><p className="font-display text-4xl text-[#6E1F2E] sm:text-5xl">{String(value).padStart(2, '0')}</p><p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#291C1A]/55">{key}</p></div>)}</div></section> }
