import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { CheckCircle, Clock, Shield, Wrench, ArrowRight, AlertTriangle, Activity } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy' }
]

const valueAdded = [
  'Pre-Shutdown Planning',
  'On-site Coordination',
  'Safety Protocol Management',
  'Quality Control & Inspection',
  'Progress Reporting',
  'Post-Shutdown Handover'
]

const roles = ['Shutdown Managers / Coordinators', 'Piping Engineers & Supervisors', 'Mechanical Engineers', 'Electrical Engineers', 'Instrumentation Engineers', 'Welders (GTAW, SMAW, FCAW)', 'Pipe Fitters & Riggers', 'Safety Officers / HSE Engineers', 'NDT Technicians', 'Scaffolders', 'Insulation Technicians', 'Quality Control Inspectors']

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
          <Link to="/services/shutdown-maintenance" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-navy font-medium">Shutdown & Turnaround Maintenance</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro */}
          <motion.div {...fadeInUp} className="mb-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <Wrench size={28} className="text-gold" />
                <h2 className="font-heading text-2xl font-bold text-navy">Specialized Maintenance Manpower Solutions</h2>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                Millinoxx Experts specializes in providing highly skilled technical manpower for planned shutdowns, turnaround operations, and maintenance projects in the oil & gas, power generation, refinery, petrochemical, and heavy industrial sectors.
              </p>
              <p className="text-muted leading-relaxed">
                Our extensive roster of certified tradesmen and engineers ensures you have the right personnel on-site at exactly the right time — keeping your operations on schedule and within budget.
              </p>
            </div>
            <div className="bg-navy rounded-card p-7 text-white">
              <div className="font-heading text-xl font-bold text-gold mb-4">Quick Facts</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm"><Clock size={16} className="text-gold" /><span>Rapid Mobilization (24-72 hrs)</span></div>
                <div className="flex items-center gap-3 text-sm"><Shield size={16} className="text-gold" /><span>100% Safety Compliance</span></div>
                <div className="flex items-center gap-3 text-sm"><Wrench size={16} className="text-gold" /><span>Specialized Technical Skills</span></div>
                <div className="flex items-center gap-3 text-sm"><Activity size={16} className="text-gold" /><span>Zero Downtime Focus</span></div>
              </div>
            </div>
          </motion.div>

          {/* Roles */}
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Key Roles We Supply</h3>
            <div className="flex flex-wrap gap-3">
              {roles.map((r, i) => (
                <span key={i} className="bg-gold/10 text-navy border border-gold/30 rounded-full px-5 py-2 text-sm font-medium">{r}</span>
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
