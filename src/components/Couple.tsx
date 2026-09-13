import { motion } from 'framer-motion'
import { Carousel } from './Carousel'
import { weddingData } from '../data/weddingData'

export function Couple() {
  return <section className="section-pad bg-[#FFF9EF]">
    <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[.85fr_1fr]">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="text-[10px] uppercase tracking-[0.35em] text-[#6E1F2E]">{weddingData.story.eyebrow}</p><h2 className="mt-4 font-display text-5xl leading-none text-[#42131E] sm:text-6xl">{weddingData.story.title}</h2><div className="my-7 h-px w-24 bg-[#B5965A]"/><p className="font-serif text-base leading-8 text-[#291C1A]/70">{weddingData.story.body}</p><p className="mt-7 font-display text-3xl text-[#6E1F2E]">Ranbir <span className="text-[#B5965A]">&</span> Alia</p></motion.div>
      <Carousel />
    </div>
  </section>
}
