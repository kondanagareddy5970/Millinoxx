import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const officeImages = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Modern Co-working Space' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80', alt: 'HITEC City Office' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80', alt: 'Conference Room' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', alt: 'Team Workstation Area' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', alt: 'Executive Meeting Room' },
  { src: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600&q=80', alt: 'Reception Area' },
  { src: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=600&q=80', alt: 'Open Office Layout' },
  { src: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&q=80', alt: 'Private Cabin' },
  { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80', alt: 'Break Room' },
  { src: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=600&q=80', alt: 'Lobby Area' },
  { src: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&q=80', alt: 'Boardroom' },
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', alt: 'Outdoor Office Terrace' },
]

function GalleryGrid({ images, title }) {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (i) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox(l => (l - 1 + images.length) % images.length)
  const nextImage = () => setLightbox(l => (l + 1) % images.length)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
            className="break-inside-avoid group relative overflow-hidden rounded-card cursor-pointer shadow-card"
            onClick={() => openLightbox(i)}>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            <button onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors z-10">
              <X size={18} className="text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors z-10">
              <ChevronLeft size={22} className="text-white" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={e => e.stopPropagation()}>
              <img src={images[lightbox].src.replace('w=600', 'w=1200')}
                alt={images[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-card shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-card">
                <p className="text-white text-sm font-medium text-center">{images[lightbox].alt}</p>
                <p className="text-white/50 text-xs text-center mt-1">{lightbox + 1} / {images.length}</p>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors z-10">
              <ChevronRight size={22} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function OfficeGallery() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-12 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Gallery</span>
          <h1 className="font-heading text-5xl font-bold text-white mb-4">Office Gallery</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">A glimpse inside our world-class office spaces in Hyderabad's HITEC City.</p>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Office Gallery</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid images={officeImages} title="Office Gallery" />
        </div>
      </section>
    </motion.div>
  )
}
