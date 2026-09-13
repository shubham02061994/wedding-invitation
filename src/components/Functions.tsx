import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Functions() {
  return <section className="section-pad bg-[#6E1F2E] text-[#FFF9EF]">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center"><p className="text-[10px] uppercase tracking-[0.35em] text-[#d9c18e]">Three days. One beautiful celebration.</p><h2 className="mt-4 font-display text-6xl">The Celebrations</h2></div>
      <div className="grid gap-5 md:grid-cols-3">
        {weddingData.functions.map((event, i) => <motion.article key={event.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .08 }} className="border border-[#B5965A]/60 bg-[#42131E]/45 p-7">
          <p className="font-serif text-2xl italic text-[#d9c18e]">0{i + 1}</p><h3 className="mt-8 font-display text-4xl">{event.title}</h3>
          <div className="mt-6 space-y-3 text-xs text-[#FFF9EF]/75"><p className="flex gap-3"><CalendarDays size={15} className="text-[#d9c18e]"/>{event.date}</p><p className="flex gap-3"><Clock3 size={15} className="text-[#d9c18e]"/>{event.time}</p><p className="flex gap-3"><MapPin size={15} className="text-[#d9c18e]"/>{event.venue}</p></div>
          <div className="my-6 h-px bg-[#B5965A]/40"/><p className="font-serif text-sm leading-7 text-[#FFF9EF]/70">{event.description}</p>
        </motion.article>)}
      </div>
    </div>
  </section>
}
