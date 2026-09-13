import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function DateReveal() {
  const [open, setOpen] = useState(false)
  return <section className="section-pad bg-[#F8F0E3]">
    <div className="mx-auto max-w-xl text-center">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#6E1F2E]">A date to remember</p>
      <h2 className="mt-4 font-display text-5xl text-[#42131E] sm:text-6xl">{open ? weddingData.date.display : 'Reveal the Date'}</h2>
      <button onClick={() => setOpen(v => !v)} className="mx-auto mt-9 inline-flex min-h-12 items-center gap-3 border border-[#B5965A] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#42131E] transition hover:bg-[#6E1F2E] hover:text-[#FFF9EF]" aria-expanded={open}>
        <Sparkles size={15}/>{open ? 'The secret is out' : 'Open the invitation'}
      </button>
      {open && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 border-y border-[#B5965A]/50 py-6">
        <p className="font-serif text-lg italic text-[#291C1A]/70">{weddingData.date.weekday} · 6:00 PM onwards</p>
        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#6E1F2E]">The Temple Courtyard</p>
      </motion.div>}
    </div>
  </section>
}
