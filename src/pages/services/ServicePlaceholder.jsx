import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, ArrowRight, Lightbulb, Zap, Rocket, Shield } from 'lucide-react'
import { servicesData } from '../../config/data'

const defaultSlides = [
  { image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=85' }
]

const valueAdded = [
  'Custom Enterprise Solutions',
  'Seamless Integration',
  '24/7 Monitoring & Support',
  'Scalable Architecture',
  'Continuous Optimization',
  'Comprehensive Training'
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function ServicePlaceholder({ slug }) {
  const service = servicesData.find(s => s.path === `/services/${slug}`)
  
  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-navy mb-4">Service Not Found</h1>
          <Link to="/" className="btn-gold">Go Home</Link>
        </div>
      </div>
    )
  }

  const slides = [
    { image: service.image },
    ...defaultSlides
  ].slice(0, 2)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Services</span>
              <h1 className="font-heading text-5xl font-bold text-white mb-4">{service.title}</h1>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">{service.title}</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <motion.div {...fadeInUp} className="mb-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <Lightbulb size={28} className="text-gold" />
                <h2 className="font-heading text-2xl font-bold text-navy">Transform Your Business with {service.title}</h2>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                {service.desc}
              </p>
              <p className="text-muted leading-relaxed">
                Our specialized {service.title.toLowerCase()} are currently being updated with comprehensive details. Our expert team leverages cutting-edge technology and industry best practices to deliver solutions that drive real business value. Please contact our team to learn more about how we can support your business requirements in this domain.
              </p>
            </div>
            <div className="bg-navy rounded-card p-7 text-white">
              <div className="font-heading text-xl font-bold text-gold mb-4">Quick Facts</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm"><Rocket size={16} className="text-gold" /><span>Rapid Implementation</span></div>
                <div className="flex items-center gap-3 text-sm"><Shield size={16} className="text-gold" /><span>Enterprise-Grade Security</span></div>
                <div className="flex items-center gap-3 text-sm"><Zap size={16} className="text-gold" /><span>High Performance</span></div>
                <div className="flex items-center gap-3 text-sm"><Lightbulb size={16} className="text-gold" /><span>Innovative Solutions</span></div>
              </div>
            </div>
          </motion.div>

          {/* Value Added */}
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Value-Added Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {valueAdded.map((v, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100 hover:border-gold hover:shadow-card transition-all duration-200">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-navy text-sm font-medium">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">Contact Us For Details <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
