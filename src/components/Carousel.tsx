import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Carousel() {
  const [index, setIndex] = useState(0)
  const images = weddingData.story.images
  const go = (delta: number) => setIndex((index + delta + images.length) % images.length)
  return <div className="relative overflow-hidden border border-[#B5965A]/60 bg-[#42131E] p-2">
    <img src={images[index].src} alt={images[index].alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between"><div className="flex gap-1.5">{images.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={`h-1.5 w-6 ${i === index ? 'bg-[#FFF9EF]' : 'bg-[#FFF9EF]/35'}`} aria-label={`Show photo ${i + 1}`} />)}</div><div className="flex gap-2"><button onClick={() => go(-1)} className="grid h-10 w-10 place-items-center bg-[#FFF9EF] text-[#42131E]" aria-label="Previous photo"><ChevronLeft size={18}/></button><button onClick={() => go(1)} className="grid h-10 w-10 place-items-center bg-[#FFF9EF] text-[#42131E]" aria-label="Next photo"><ChevronRight size={18}/></button></div></div>
  </div>
}
