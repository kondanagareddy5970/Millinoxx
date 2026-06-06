import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, Globe, ArrowRight, Users, MapPin, Plane } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85' },
]

const valueAdded = [
  'Comprehensive Immigration & Visa Guidance',
  'Candidate Documentation & Compliance',
  'Pre-Departure Orientation',
  'Mobilization & Deployment Coordination',
  'Post-Deployment Follow-Up',
  'Medical Check-Up & Fitness Clearance',
  'Consulate Formalities & Visa Stamping',
  'Travel & Ticketing Arrangements',
  'Orientation Program',
]

const sectors = ['Oil & Gas', 'Infrastructure & Civil', 'MEP & HVAC', 'Aviation & Aerospace', 'Manufacturing & Heavy Engineering']
const regions = ['Middle East', 'Africa', 'Russia', 'CIS Countries', 'Korea', 'Japan', 'Europe', 'UK', 'USA']

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function InternationalRecruitment() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Services</span>
              <h1 className="font-heading text-5xl font-bold text-white mb-4">International Recruitment Services</h1>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services/international-recruitment" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-navy font-medium">International Recruitment</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <motion.div {...fadeInUp} className="mb-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <Globe size={28} className="text-gold" />
                <h2 className="font-heading text-2xl font-bold text-navy">Global Recruitment Expertise & Talent Acquisition Solutions</h2>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                At Millinoxx Experts, we are devoted to creating and sustaining a meaningful difference in your staffing strategies. As a highly reputed headhunting and manpower recruitment firm, we've built our name on delivering outstanding client service and connecting top-tier talent with organizations across the globe.
              </p>
              <p className="text-muted leading-relaxed">
                In today's competitive landscape, the search for exceptional talent often extends beyond borders. At Millinoxx, we specialize in identifying and mobilizing overseas candidates for niche and high-demand skill areas.
              </p>
            </div>
            <div className="bg-navy rounded-card p-7 text-white">
              <div className="font-heading text-xl font-bold text-gold mb-4">Quick Facts</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm"><Users size={16} className="text-gold" /><span>5000+ Successful Placements</span></div>
                <div className="flex items-center gap-3 text-sm"><Globe size={16} className="text-gold" /><span>25+ Countries Served</span></div>
                <div className="flex items-center gap-3 text-sm"><MapPin size={16} className="text-gold" /><span>HQ: HITEC City, Hyderabad</span></div>
                <div className="flex items-center gap-3 text-sm"><Plane size={16} className="text-gold" /><span>End-to-end Deployment Support</span></div>
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

          {/* Regions */}
          <motion.div {...fadeInUp} className="mb-14 bg-lightbg rounded-card p-8">
            <h3 className="font-heading text-2xl font-bold text-navy mb-5">Serving Regions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {regions.map((r, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-navy border border-gray-100 hover:border-gold transition-colors">
                  {r}
                </div>
              ))}
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
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">Get In Touch <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
