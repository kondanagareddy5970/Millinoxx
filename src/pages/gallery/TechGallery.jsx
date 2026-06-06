import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const techImages = [
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', alt: 'Advanced Technology Lab' },
  { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80', alt: 'Cybersecurity Operations' },
  { src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80', alt: 'Software Development Environment' },
  { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', alt: 'AI & Machine Learning Lab' },
  { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80', alt: 'Data Center Infrastructure' },
  { src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80', alt: 'Cloud Computing Setup' },
  { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80', alt: 'Digital Workspace' },
  { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80', alt: 'Network Security Center' },
  { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80', alt: 'Tech Innovation Hub' },
  { src: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80', alt: 'Robotics & Automation' },
  { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', alt: 'Software Engineering' },
  { src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80', alt: 'Server Management' },
]

function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
            className="break-inside-avoid group relative overflow-hidden rounded-card cursor-pointer shadow-card"
            onClick={() => setLightbox(i)}>
            <img src={img.src} alt={img.alt} loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <ZoomIn size={20} className="text-navy" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs font-medium">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors z-10"><X size={18} className="text-white" /></button>
            <button onClick={(e) => { e.stopPropagation(); setLightbox(l => (l - 1 + images.length) % images.length) }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors z-10"><ChevronLeft size={22} className="text-white" /></button>
            <motion.div key={lightbox} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-5xl max-h-[85vh] relative" onClick={e => e.stopPropagation()}>
              <img src={images[lightbox].src.replace('w=600', 'w=1200')} alt={images[lightbox].alt} className="max-w-full max-h-[80vh] object-contain rounded-card shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-card text-center">
                <p className="text-white text-sm font-medium">{images[lightbox].alt}</p>
                <p className="text-white/50 text-xs mt-1">{lightbox + 1} / {images.length}</p>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); setLightbox(l => (l + 1) % images.length) }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors z-10"><ChevronRight size={22} className="text-white" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function TechGallery() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Gallery</span>
          <h1 className="font-heading text-5xl font-bold text-white mb-4">Tech Gallery</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">Our technology infrastructure, AI capabilities, and digital innovation showcased.</p>
        </div>
      </div>
      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Tech Gallery</span>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid images={techImages} />
        </div>
      </section>
    </motion.div>
  )
}
