import { Instagram as InstagramIcon } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Instagram() {
  return <section className="section-pad bg-[#F8F0E3] text-center"><div className="mx-auto max-w-2xl"><InstagramIcon className="mx-auto text-[#6E1F2E]" size={24}/><p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#6E1F2E]">Share the celebration</p><h2 className="mt-4 font-display text-5xl text-[#42131E]">Tag your moments</h2><p className="mx-auto mt-5 max-w-md font-serif text-base leading-7 text-[#291C1A]/65">Use our wedding hashtag so every laugh, dance and candid moment can become part of the story.</p><p className="mt-8 font-serif text-2xl italic text-[#B5965A]">{weddingData.couple.hashtag}</p></div></section>
}
