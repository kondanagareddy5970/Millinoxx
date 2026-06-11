import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, MapPin, Search, Database, ArrowRight, Users, Briefcase } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy' }
]

const valueAdded = [
  'Requirement Analysis',
  'Candidate Sourcing',
  'Screening & Shortlisting',
  'Placement & Follow-up',
]

const sectors = ['Engineering & Manufacturing', 'Information Technology', 'Healthcare & Pharma', 'Banking & Finance', 'Retail & FMCG', 'Construction & Real Estate', 'Oil & Gas', 'Hospitality', 'Education', 'Automotive']

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function IndianRecruitment() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Services</span>
              <h1 className="font-heading text-5xl font-bold text-white mb-4">Indian Recruitment Services</h1>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services/indian-recruitment" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-navy font-medium">Indian Recruitment</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <motion.div {...fadeInUp} className="mb-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={28} className="text-gold" />
                <h2 className="font-heading text-2xl font-bold text-navy">Domestic Talent Acquisition Excellence</h2>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                Millinoxx Experts brings decades of collective experience in Indian domestic recruitment, covering all sectors, states, and experience levels. We are your one-stop partner for sourcing top-quality talent across the length and breadth of India.
              </p>
              <p className="text-muted leading-relaxed">
                Our extensive database, digital sourcing strategies, and strategic advertising on leading job portals allow us to identify, attract, and deliver the finest candidates efficiently — saving you time and resources.
              </p>
            </div>
            <div className="bg-navy rounded-card p-7 text-white">
              <div className="font-heading text-xl font-bold text-gold mb-4">Quick Facts</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm"><Database size={16} className="text-gold" /><span>500,000+ Pre-screened Candidates</span></div>
                <div className="flex items-center gap-3 text-sm"><MapPin size={16} className="text-gold" /><span>Pan-India Coverage</span></div>
                <div className="flex items-center gap-3 text-sm"><Search size={16} className="text-gold" /><span>Multi-Portal Reach</span></div>
                <div className="flex items-center gap-3 text-sm"><Briefcase size={16} className="text-gold" /><span>All Sectors Covered</span></div>
              </div>
            </div>
          </motion.div>

          {/* Sectors */}
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Successfully Placed Professionals Across</h3>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s, i) => (
                <span key={i} className="bg-gold/10 text-navy border border-gold/30 rounded-full px-5 py-2 text-sm font-medium">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Value Added / Recruitment Process */}
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Our Recruitment Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {valueAdded.map((v, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100 hover:border-gold hover:shadow-card transition-all duration-200">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-navy text-sm font-medium">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">Get In Touch <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
