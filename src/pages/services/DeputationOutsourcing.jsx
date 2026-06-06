import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, ArrowRight, RefreshCw, BarChart, UserCheck, Building } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1600&q=85' },
]

const models = [
  { title: 'Contract Staffing', desc: 'Short to long-term contract employees for project-based work, covering all skill levels.' },
  { title: 'Contract-to-Hire', desc: 'Trial engagement before permanent hire, minimizing risk while evaluating cultural fit.' },
  { title: 'Project-Based Outsourcing', desc: 'End-to-end project manpower with full accountability and performance guarantees.' },
  { title: 'Payroll Management', desc: 'Complete payroll, compliance, and HR administration outsourced to our expert team.' },
]

const benefits = ['Reduce Operational Costs', 'Scale Workforce Rapidly', 'Access Specialized Skills', 'Maintain Business Continuity', 'Ensure Compliance & Legal Cover', 'Focus on Core Business Activities']

const sectors = ['Oil & Gas', 'Manufacturing', 'IT & Telecom', 'Banking & Finance', 'Healthcare', 'Construction', 'Retail & FMCG', 'Engineering']

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function DeputationOutsourcing() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Services</span>
              <h1 className="font-heading text-5xl font-bold text-white mb-4">Deputation / Manpower Outsourcing & Consulting</h1>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Deputation & Outsourcing</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-14">
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">Flexible Staffing Solutions for Modern Business</h2>
            <p className="text-muted leading-relaxed text-lg">
              In a rapidly evolving business environment, flexibility is paramount. Millinoxx Experts offers comprehensive deputation and manpower outsourcing solutions designed to give your organization the agility it needs — without compromising on quality, compliance, or expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {models.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-lightbg rounded-card p-7 border-l-4 border-gold hover:shadow-card transition-all duration-300">
                <h4 className="font-heading text-lg font-bold text-navy mb-3">{m.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
            <motion.div {...fadeInUp}>
              <h3 className="font-heading text-2xl font-bold text-navy mb-5">Benefits for Employers</h3>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-gold flex-shrink-0" />
                    <span className="text-navy font-medium text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <h3 className="font-heading text-2xl font-bold text-navy mb-5">Sectors We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((s, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-lg p-3 text-center text-sm font-medium text-navy hover:border-gold transition-colors">{s}</div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">Get In Touch <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
