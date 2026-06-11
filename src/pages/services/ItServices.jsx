import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, ArrowRight, Code, Cloud, Shield, Database, Monitor, Cpu } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy' }
]

const valueAdded = [
  'Software & App Development',
  'Cloud Architecture & Migration',
  'Cybersecurity & Compliance',
  'Data Science & Analytics',
  'DevOps & SRE',
  'Digital Transformation Consulting'
]

const techStack = ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'TensorFlow', 'Salesforce', 'SAP']

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function ItServices() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Services</span>
              <h1 className="font-heading text-5xl font-bold text-white mb-4">Information Technology Services</h1>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services/it-services" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-navy font-medium">IT Services</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <motion.div {...fadeInUp} className="mb-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <Code size={28} className="text-gold" />
                <h2 className="font-heading text-2xl font-bold text-navy">Technology Talent for the Digital Age</h2>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                In today's technology-driven world, having the right IT talent is critical to organizational success. Millinoxx Experts specializes in sourcing, screening, and placing top-tier IT professionals across all disciplines — from software engineering to cloud architecture and cybersecurity.
              </p>
              <p className="text-muted leading-relaxed">
                We work with startups, SMEs, and Fortune 500 companies, providing permanent, contract, and project-based IT staffing solutions that align with your technology roadmap and business objectives.
              </p>
            </div>
            <div className="bg-navy rounded-card p-7 text-white">
              <div className="font-heading text-xl font-bold text-gold mb-4">Quick Facts</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm"><Monitor size={16} className="text-gold" /><span>Full-stack Capabilities</span></div>
                <div className="flex items-center gap-3 text-sm"><Cloud size={16} className="text-gold" /><span>Cloud Infrastructure Experts</span></div>
                <div className="flex items-center gap-3 text-sm"><Shield size={16} className="text-gold" /><span>Security & Compliance Focus</span></div>
                <div className="flex items-center gap-3 text-sm"><Cpu size={16} className="text-gold" /><span>Modern DevOps Practices</span></div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Technology Stacks We Cover</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t, i) => (
                <span key={i} className="bg-gold/10 text-navy border border-gold/30 rounded-full px-5 py-2 text-sm font-medium">{t}</span>
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
