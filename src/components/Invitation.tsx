import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'

export function Invitation() {
  return <section id="invitation" className="section-pad bg-[#FFF9EF] text-center">
    <div className="mx-auto max-w-3xl">
      <p className="motif text-sm">✦ &nbsp; ॐ &nbsp; ✦</p>
      <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[#6E1F2E]">With the blessings of our families</p>
      <p className="mx-auto mt-5 max-w-xl font-serif text-lg leading-8 text-[#291C1A]/75">{weddingData.invitation.blessing}</p>
      <div className="my-10 flex items-center gap-4"><div className="gold-rule flex-1"/><span className="font-display text-2xl text-[#B5965A]">✧</span><div className="gold-rule flex-1"/></div>
      <p className="font-display text-5xl text-[#6E1F2E] sm:text-7xl">You are invited</p>
      <div className="mt-8 space-y-1">
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-[#291C1A]/60">{weddingData.families.groom}</p>
        <p className="font-display text-4xl text-[#291C1A]">Ranbir</p>
        <p className="font-serif text-xl italic text-[#B5965A]">with</p>
        <p className="font-display text-4xl text-[#291C1A]">Alia</p>
        <p className="font-serif text-sm uppercase tracking-[0.25em] text-[#291C1A]/60">{weddingData.families.bride}</p>
      </div>
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-9 text-sm leading-7 text-[#291C1A]/65">{weddingData.invitation.note}</motion.p>
    </div>
  </section>
}
