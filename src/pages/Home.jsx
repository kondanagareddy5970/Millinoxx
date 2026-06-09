import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import StatsCounter from '../components/StatsCounter'
import {
  ArrowRight, CheckCircle,
  Monitor, ShieldCheck, BrainCircuit, Zap, Fuel, Factory,
  Cog, Building2, Hammer, Car, Ship, HeartPulse
} from 'lucide-react'

// Import slider images
import heroRefinery from '../assets/hero-refinery-bright.jpg'
import heroFuturisticRefinery from '../assets/hero-futuristic-refinery.png'
import heroGlobalRecruitment from '../assets/hero-global-recruitment.png'

const heroSlides = [
  {
    image: heroRefinery,
    content: (
      <div className="max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Premier Global Consultancy</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="font-heading text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Connecting Global Talent with World-Class Opportunities
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-white/80 text-lg mb-8 leading-relaxed">
          International recruitment, manpower outsourcing & engineering consultancy — headquartered in Hyderabad, serving the world.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4">
          <Link to="/services/international-recruitment" className="btn-gold flex items-center gap-2">
            Explore Our Services <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline-gold">
            Contact Us
          </Link>
        </motion.div>
      </div>
    )
  },
  {
    image: heroFuturisticRefinery,
    content: (
      <div className="max-w-2xl">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="font-heading text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Engineering Excellence Across Industries
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-white/80 text-lg mb-8">
          Specialized manpower solutions for Oil & Gas, Power, MEP, Construction, Manufacturing and more.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <Link to="/industries/heavy-equipment" className="btn-gold inline-flex items-center gap-2">
            Industries We Serve <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    )
  },
  {
    image: heroGlobalRecruitment,
    content: (
      <div className="max-w-2xl">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="font-heading text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Your Strategic Global Recruitment Partner
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-white/80 text-lg mb-8">
          From the Gulf to Europe, the UK to the USA — we source, screen, and deliver world-class talent.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    )
  }
]

const services = [
  { title: 'Artificial Intelligence Solutions', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', path: '/services/ai-solutions', desc: 'Custom enterprise AI models and intelligent systems.' },
  { title: 'AI Automation & Intelligent Agents', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', path: '/services/ai-automation', desc: 'AI agents managing workflows and robotic process automation.' },
  { title: 'Machine Learning & Predictive Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', path: '/services/machine-learning', desc: 'Predictive models, machine learning algorithms, and analytics.' },
  { title: 'Information Technology Services', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', path: '/services/it-services', desc: 'Modern software development, cloud infrastructure & enterprise systems.' },
  { title: 'Generative AI & LLM Development', image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&q=80', path: '/services/gen-ai', desc: 'Large language models and AI-generated content systems.' },
  { title: 'Cloud & DevOps Engineering', image: '/cloud-devops.png', path: '/services/cloud-devops', desc: 'Cloud architecture, Kubernetes, and CI/CD pipelines.' },
  { title: 'Cyber Security Solutions', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', path: '/services/cyber-security', desc: 'Security operations, threat monitoring, and network protection.' },
  { title: 'Data Engineering & Business Intelligence', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', path: '/services/data-engineering', desc: 'Big data pipelines, data lakes, and real-time intelligence.' },
]

const industries = [
  // Row 1 – Technology-focused
  { label: 'Information Technology',           icon: Monitor,      path: '/industries/it-telecom' },
  { label: 'Cyber Security',                   icon: ShieldCheck,  path: '/industries/cyber-security' },
  { label: 'Artificial Intelligence & ML',     icon: BrainCircuit, path: '/services/ai-solutions' },
  { label: 'Power & Energy',                   icon: Zap,          path: '/industries/power-plant' },
  { label: 'Oil & Gas',                        icon: Fuel,         path: '/industries/oil-gas' },
  { label: 'Manufacturing',                    icon: Factory,      path: '/industries/manufacturing' },
  // Row 2 – Industry-focused
  { label: 'Heavy Equipment & Engineering',    icon: Cog,          path: '/industries/heavy-equipment' },
  { label: 'Construction Industry',            icon: Building2,    path: '/industries/construction' },
  { label: 'MEP (Mechanical, Electrical & Plumbing)', icon: Hammer, path: '/industries/mep' },
  { label: 'Automotive',                       icon: Car,          path: '/industries/automotive' },
  { label: 'Shipping & Logistics',             icon: Ship,         path: '/industries/shipping' },
  { label: 'MedTech / Healthcare Technology',  icon: HeartPulse,   path: '/industries/healthcare' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} height="100vh" />

      {/* Services Section */}
      <section className="py-20 bg-lightbg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Link to={s.path} className="group flex flex-col bg-white rounded-card shadow-card overflow-hidden card-hover h-full">
                  <div className="h-40 overflow-hidden shrink-0">
                    <img src={s.image} alt={s.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="w-8 h-0.5 bg-gold mb-4 shrink-0" />
                    <h3 className="font-heading text-lg font-semibold text-navy mb-3 leading-snug group-hover:text-gold transition-colors">{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed flex-grow">{s.desc}</p>
                    <div className="mt-4 text-gold text-sm font-semibold flex items-center gap-1 shrink-0">Learn More <ArrowRight size={14} /></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Millinoxx Consultants Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-4">Who We Are</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Millinoxx Consultants
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              One of the greatest challenges faced by any organization is matching the right person to the right position. Recruitment and candidate selection can often become time consuming and resource-intensive, consuming both money and valuable time.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Millinoxx Consultants is a distinguished international placement bureau that helps organizations recruit high-quality manpower without the need to go through complex and lengthy hiring processes.
            </p>
            <div className="mt-10">
              <Link to="/about/company-profile" className="btn-outline-gold inline-flex items-center gap-2">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve – 2-Row 6-Column Grid */}
      <section className="py-20 bg-lightbg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Sectors We Cover</span>
            <h2 className="section-title">Industries We Serve</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </motion.div>

          {/* 12-Card Grid: 6 per row on desktop, 3 on tablet, 2 on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.path}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link
                  to={ind.path}
                  className="group flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 h-full min-h-[140px]"
                >
                  <div className="w-14 h-14 rounded-full bg-lightbg group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300 mb-3 shrink-0">
                    <ind.icon size={26} className="text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="text-navy text-xs font-semibold text-center leading-snug group-hover:text-gold transition-colors duration-300">
                    {ind.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/industries/heavy-equipment" className="btn-gold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
              EXPLORE ALL INDUSTRIES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Millinoxx Experts */}
      <section className="py-20 bg-lightbg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative">
              <div className="relative rounded-card overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" loading="lazy"
                  alt="About Millinoxx Experts" className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold rounded-card p-6 shadow-xl hidden lg:block">
                <div className="font-heading text-3xl font-bold text-navy">10+</div>
                <div className="text-navy text-sm font-semibold">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">About Us</span>
              <h2 className="font-heading text-4xl font-bold text-navy mb-6 leading-tight">About Millinoxx Experts</h2>
              <p className="text-muted leading-relaxed mb-5">
                Millinoxx Experts is a premier international job consultancy based in Hyderabad, India, specializing in providing high-caliber human capital solutions to organizations across industries and continents. We connect the right talent with the right opportunity—empowering businesses to grow and professionals to thrive in today's dynamic global market.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Whether it's healthcare, education, IT, engineering, manufacturing, or corporate sectors, Millinoxx Experts excels in delivering customized recruitment solutions that meet the complex demands of modern businesses.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy text-sm">Our Mission</div>
                    <div className="text-muted text-sm">To redefine recruitment by making top-tier global talent accessible to organizations worldwide—through integrity, innovation, and deep industry understanding.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy text-sm">Our Approach</div>
                    <div className="text-muted text-sm">AI-enabled assessments, data-driven insights, and advanced sourcing strategies to identify candidates who align with company culture.</div>
                  </div>
                </div>
              </div>

              <Link to="/about/company-profile" className="btn-gold inline-flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />
    </motion.div>
  )
}
