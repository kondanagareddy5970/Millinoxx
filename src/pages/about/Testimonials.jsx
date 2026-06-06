import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { Quote, Star } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85' },
]

const testimonials = [
  {
    quote: "Millinoxx Experts helped us expand our team across multiple global locations. Their ability to understand our culture and find candidates who truly fit made all the difference. We don't see them as recruiters—we see them as strategic partners.",
    name: 'HR Director',
    company: 'Global IT Firm, UAE',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    quote: "We struggled to find skilled manpower for our Europe operations until we partnered with Millinoxx. Their precision, professionalism, and consistent delivery have raised our hiring standards significantly.",
    name: 'VP Operations',
    company: 'Engineering Company, Germany',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
  },
  {
    quote: "What stands out about Millinoxx Experts is their deep understanding of not just skill requirements, but also cultural and mindset fit. Every hire has added real value to our team. Outstanding service!",
    name: 'HR Talent Acquisition Lead',
    company: 'UK-based Startup',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=100&q=80',
  },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function Testimonials() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="55vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/60">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">Testimonials</h1>
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
          <span className="text-navy font-medium">Testimonials</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">What Our Clients Say</span>
            <h2 className="font-heading text-4xl font-bold text-navy mb-4">Client Testimonials</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
            <p className="text-muted max-w-2xl mx-auto">Real feedback from global businesses who trust Millinoxx Experts for their talent acquisition needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-white rounded-card shadow-card border-l-4 border-gold p-8 hover:shadow-xl transition-all duration-300 group">
                <Quote size={48} className="text-gold/15 absolute top-6 right-6 group-hover:text-gold/25 transition-colors" />
                <div className="flex mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-8 italic relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                  <img src={t.avatar} alt={t.name} loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold" />
                  <div>
                    <div className="font-semibold text-navy text-sm">— {t.name}</div>
                    <div className="text-muted text-xs mt-0.5">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fadeInUp} className="mt-20 bg-navy rounded-card p-12 text-center">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">Ready to Transform Your Hiring?</h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Join hundreds of companies worldwide who trust Millinoxx Experts for their talent acquisition needs.</p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
