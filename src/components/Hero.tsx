import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import temple from '../assets/temple.png'
import { weddingData } from '../data/weddingData'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 1.28])
  const leftX = useTransform(scrollYProgress, [0.15, 0.78], ['0%', '-48%'])
  const rightX = useTransform(scrollYProgress, [0.15, 0.78], ['0%', '48%'])
  const fade = useTransform(scrollYProgress, [0.55, 0.92], [1, 0])
  const glow = useTransform(scrollYProgress, [0.15, 0.65], [0, 0.9])

  const art = (side: 'left' | 'right') => (
    <motion.img
      src={temple}
      alt="Intricately sculpted South Indian temple gopuram"
      className={`absolute bottom-0 left-1/2 h-[77vh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom md:h-[90vh] ${side === 'left' ? '[clip-path:inset(0_50%_0_0)]' : '[clip-path:inset(0_0_0_50%)]'}`}
      style={reduced ? undefined : { x: side === 'left' ? leftX : rightX, scale }}
    />
  )

  return (
    <section ref={ref} className="relative h-[115vh] overflow-hidden bg-[#87CEEB]" aria-label="Wedding invitation cover">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.32),transparent_34%),linear-gradient(#8ed3ef,#70b9df)]" />
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute left-[-8%] top-[12%] h-24 w-64 rounded-full bg-white/55 blur-2xl" />
        <div className="absolute right-[-10%] top-[25%] h-32 w-80 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute left-[12%] top-[34%] h-16 w-44 rounded-full bg-white/35 blur-2xl" />
      </div>
      <div className="absolute inset-x-0 top-[12%] z-10 px-6 text-center text-white drop-shadow-sm">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.42em] sm:text-xs">A celebration of love</p>
        <h1 className="font-display text-6xl leading-[.9] sm:text-8xl md:text-9xl">Ranbir <span className="text-white/75">weds</span> Alia</h1>
        <p className="mt-7 font-serif text-xl italic sm:text-2xl">{weddingData.date.display}</p>
      </div>
      <motion.div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={reduced ? undefined : { opacity: glow }}>
        <div className="h-[62vh] w-16 bg-[#fff3d0]/70 blur-3xl" />
      </motion.div>
      <motion.div className="absolute inset-0 z-30" style={reduced ? undefined : { opacity: fade }} aria-hidden="true">
        {art('left')}{art('right')}
      </motion.div>
      <a href="#invitation" className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 text-white/90" aria-label="Scroll to explore the invitation">
        <span className="text-[9px] uppercase tracking-[0.35em]">Scroll to explore</span>
        <motion.span animate={reduced ? undefined : { y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ChevronDown size={18} /></motion.span>
      </a>
    </section>
  )
}
