import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { Play, X } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85' },
]

const videos = [
  { title: 'Company Introduction', thumb: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80' },
  { title: 'Our Services', thumb: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { title: 'Our News', thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
  { title: 'Our Team', thumb: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80' },
  { title: 'Client Testimonials', thumb: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80' },
  { title: 'Company Achievements', thumb: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80' },
  { title: 'Testing', thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
  { title: 'Future Plans', thumb: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function CompanyVideo() {
  const [modal, setModal] = useState(null)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="55vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/60">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">Company Video</h1>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
          <span>/</span>
          <span className="text-navy font-medium">Company Video</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Story in Motion</span>
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">Video Gallery</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group cursor-pointer rounded-card overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 card-hover"
                onClick={() => setModal(v)}>
                <div className="relative h-44 overflow-hidden">
                  <img src={v.thumb} alt={v.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={22} className="text-navy ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 border-t-2 border-gold">
                  <div className="font-heading text-sm font-semibold text-navy group-hover:text-gold transition-colors">▶ {v.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setModal(null)}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-3xl bg-navy rounded-card overflow-hidden"
              onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h3 className="font-heading text-lg font-semibold text-white">{modal.title}</h3>
                <button onClick={() => setModal(null)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors">
                  <X size={16} className="text-white" />
                </button>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title={modal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
