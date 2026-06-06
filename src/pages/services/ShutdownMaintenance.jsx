import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, ArrowRight, AlertTriangle, Clock, Shield, Wrench } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85' },
]

const roles = ['Shutdown Managers / Coordinators', 'Piping Engineers & Supervisors', 'Mechanical Engineers', 'Electrical Engineers', 'Instrumentation Engineers', 'Welders (GTAW, SMAW, FCAW)', 'Pipe Fitters & Riggers', 'Safety Officers / HSE Engineers', 'NDT Technicians', 'Scaffolders', 'Insulation Technicians', 'Quality Control Inspectors']

const features = [
  { icon: Clock, title: 'Rapid Mobilization', desc: 'Quick turnaround — qualified manpower mobilized within 24-72 hours of confirmation.' },
  { icon: Shield, title: 'Safety Compliance', desc: 'All personnel certified in HSE protocols, OSHA, and site-specific safety requirements.' },
  { icon: Wrench, title: 'Specialized Skills', desc: 'Highly skilled tradesmen with experience in complex shutdown and turnaround operations.' },
  { icon: AlertTriangle, title: 'Zero Downtime Focus', desc: 'Experienced in high-pressure, time-critical operations with minimal plant downtime.' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function ShutdownMaintenance() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Services</span>
              <h1 className="font-heading text-5xl font-bold text-white mb-4">Shutdown & Turnaround Maintenance Services</h1>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Shutdown & Turnaround Maintenance</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-14">
            <h2 className="font-heading text-3xl font-bold text-navy mb-5">Specialized Maintenance Manpower</h2>
            <p className="text-muted leading-relaxed mb-5 text-lg">
              Millinoxx Experts specializes in providing highly skilled technical manpower for planned shutdowns, turnaround operations, and maintenance projects in the oil & gas, power generation, refinery, petrochemical, and heavy industrial sectors.
            </p>
            <p className="text-muted leading-relaxed">
              Our extensive roster of certified tradesmen and engineers ensures you have the right personnel on-site at exactly the right time — keeping your operations on schedule and within budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy rounded-card p-6 text-white">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-gold" />
                </div>
                <h4 className="font-heading text-base font-bold text-gold mb-2">{f.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Key Roles We Supply</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {roles.map((r, i) => (
                <div key={i} className="flex items-center gap-3 bg-lightbg rounded-lg p-4 hover:bg-gold/5 transition-colors">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span className="text-navy text-sm font-medium">{r}</span>
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
