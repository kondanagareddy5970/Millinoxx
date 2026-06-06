import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { ArrowRight, Cpu, Brain, Code } from 'lucide-react'

// Import assets
import kodryxLogo from '../../assets/kodryx-logo.jpg'
import ceoImg from '../../assets/ceo.jpg'
import ctoImg from '../../assets/cto.jpg'
import foundingImg from '../../assets/founding-engineer.jpg'

const slides = [
  { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=85' },
]

const team = [
  { name: 'Venkata Talatam', role: 'Chief Executive Officer (CEO)', image: ceoImg },
  { name: 'Sonu Kumar', role: 'Chief Technology Officer (CTO)', image: ctoImg },
  { name: 'Ekshith kolla', role: 'Founding Engineer', image: foundingImg },
]

const features = [
  { icon: Brain, title: 'Artificial Intelligence', desc: 'Advanced AI solutions for data analysis, predictive modeling, and intelligent automation.' },
  { icon: Cpu, title: 'Machine Learning', desc: 'Cutting-edge ML algorithms powering our candidate assessment and matching systems.' },
  { icon: Code, title: 'Software Development', desc: 'Enterprise-grade software development for digital transformation and business optimization.' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function TechPartner() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="55vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/70">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">Tech Partner</h1>
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
          <span className="text-navy font-medium">Tech Partner</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Kodryx AI Card */}
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-navy to-navy-light rounded-card p-10 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-steel/10 -translate-x-10 translate-y-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white overflow-hidden flex items-center justify-center p-1">
                  <img src={kodryxLogo} alt="Kodryx AI Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-gold">Kodryx AI</div>
                  <div className="text-white/60 text-sm mt-1">Strategic Technology Partner</div>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
                Our strategic technical partner powering cutting-edge AI and technology solutions. Kodryx AI brings expertise in artificial intelligence, machine learning, and advanced software development to enhance our training programs and recruitment intelligence systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {features.map((f, i) => (
                  <div key={i} className="bg-white/5 rounded-card p-6 border border-white/10 hover:border-gold/40 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <f.icon size={20} className="text-gold" />
                    </div>
                    <div className="font-semibold text-white mb-2">{f.title}</div>
                    <div className="text-white/60 text-sm leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Cards */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">The Team</span>
            <h2 className="font-heading text-3xl font-bold text-navy">Leadership Team</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {team.map((member, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white rounded-card shadow-card overflow-hidden card-hover border border-gray-100">
                <div className="h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center border-t-4 border-gold">
                  <h3 className="font-heading text-xl font-bold text-navy mb-1">{member.name}</h3>
                  <p className="text-muted text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Partner With Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
