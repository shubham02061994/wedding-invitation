import { Play } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Video() {
  return <section className="section-pad bg-[#291C1A] text-[#FFF9EF]"><div className="mx-auto max-w-5xl"><div className="mb-8 text-center"><p className="text-[10px] uppercase tracking-[0.35em] text-[#d9c18e]">{weddingData.video.eyebrow}</p><h2 className="mt-4 font-display text-5xl">{weddingData.video.title}</h2></div><div className="relative aspect-video overflow-hidden border border-[#B5965A]/50"><iframe className="h-full w-full" loading="lazy" src={`https://www.youtube.com/embed/${weddingData.video.youtubeId}?rel=0`} title="Wedding video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/><div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/10"><span className="grid h-16 w-16 place-items-center rounded-full border border-white/60 bg-black/20 backdrop-blur-sm"><Play size={24} fill="currentColor"/></span></div></div></div></section>
}
