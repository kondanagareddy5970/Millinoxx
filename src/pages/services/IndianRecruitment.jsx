import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, ArrowRight, MapPin, Briefcase, Search, Database } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85' },
]

const features = [
  { icon: Database, title: 'Vast Candidate Database', desc: 'Access to over 500,000+ pre-screened candidates across all disciplines and experience levels.' },
  { icon: Search, title: 'Multi-Portal Reach', desc: 'Active presence on Naukri, Monster, Indeed, LinkedIn, and proprietary job boards across India.' },
  { icon: MapPin, title: 'Pan-India Coverage', desc: 'Serving all 28 states and union territories with regional expertise and local industry knowledge.' },
  { icon: Briefcase, title: 'All Sectors Covered', desc: 'Engineering, IT, healthcare, finance, retail, manufacturing, FMCG, and more.' },
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
          <span className="text-navy font-medium">Indian Recruitment Services</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-14">
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">Domestic Talent Acquisition Excellence</h2>
            <p className="text-muted leading-relaxed mb-5 text-lg">
              Millinoxx Experts brings decades of collective experience in Indian domestic recruitment, covering all sectors, states, and experience levels. We are your one-stop partner for sourcing top-quality talent across the length and breadth of India.
            </p>
            <p className="text-muted leading-relaxed">
              Our extensive database, digital sourcing strategies, and strategic advertising on leading job portals allow us to identify, attract, and deliver the finest candidates efficiently — saving you time and resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-lightbg rounded-card p-6 border border-transparent hover:border-gold transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-gold" />
                </div>
                <h4 className="font-heading text-base font-bold text-navy mb-2">{f.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Sectors We Recruit For</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {sectors.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg p-3 hover:border-gold transition-colors">
                  <CheckCircle size={14} className="text-gold flex-shrink-0" />
                  <span className="text-navy text-xs font-medium">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-navy rounded-card p-10 mb-10">
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Our Recruitment Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Requirement Analysis', 'Candidate Sourcing', 'Screening & Shortlisting', 'Placement & Follow-up'].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gold text-navy font-bold text-lg flex items-center justify-center mx-auto mb-3">{i + 1}</div>
                  <div className="text-white text-sm font-medium">{step}</div>
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
