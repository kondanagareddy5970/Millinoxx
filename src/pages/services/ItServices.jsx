import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, ArrowRight, Code, Cloud, Shield, Database, Monitor, Cpu } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1600&q=85' },
]

const services = [
  { icon: Code, title: 'Software Development', desc: 'Full-stack developers, mobile app developers, frontend/backend specialists across all modern frameworks.' },
  { icon: Cloud, title: 'Cloud Engineering', desc: 'AWS, Azure, GCP certified architects and engineers for cloud migration and infrastructure.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Security analysts, ethical hackers, CISO consultants, and compliance specialists.' },
  { icon: Database, title: 'Data Science & AI', desc: 'Data engineers, ML engineers, AI researchers, and business intelligence specialists.' },
  { icon: Monitor, title: 'DevOps & SRE', desc: 'CI/CD specialists, Kubernetes engineers, site reliability engineers for modern infrastructure.' },
  { icon: Cpu, title: 'Digital Transformation', desc: 'Technology consultants guiding organizations through complete digital transformation journeys.' },
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
          <span className="text-navy font-medium">IT Services</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-14">
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">Technology Talent for the Digital Age</h2>
            <p className="text-muted leading-relaxed text-lg mb-5">
              In today's technology-driven world, having the right IT talent is critical to organizational success. Millinoxx Experts specializes in sourcing, screening, and placing top-tier IT professionals across all disciplines — from software engineering to cloud architecture and cybersecurity.
            </p>
            <p className="text-muted leading-relaxed">
              We work with startups, SMEs, and Fortune 500 companies, providing permanent, contract, and project-based IT staffing solutions that align with your technology roadmap and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border border-gray-100 rounded-card p-7 hover:border-gold hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <s.icon size={22} className="text-gold" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">{s.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-navy rounded-card p-10 mb-10">
            <h3 className="font-heading text-2xl font-bold text-gold mb-6">Technology Stacks We Cover</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t, i) => (
                <span key={i} className="bg-white/10 text-white border border-white/20 rounded-full px-4 py-1.5 text-sm hover:border-gold hover:text-gold transition-colors cursor-default">{t}</span>
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
