import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import industryData from '../../data/industryData'
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function IndustryPage({ slug }) {
  const data = industryData[slug]
  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-3xl text-navy mb-4">Industry Not Found</h1>
        <Link to="/" className="btn-gold">Go Home</Link>
      </div>
    </div>
  )

  const slides = data.images.map(img => ({ image: img }))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center bg-navy/65">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Industries We Serve</span>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{data.icon}</span>
                <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">{data.title}</h1>
              </div>
              <div className="w-16 h-0.5 bg-gold" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted flex-wrap">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/industries/heavy-equipment" className="hover:text-gold transition-colors">Industries</Link>
          <span>/</span>
          <span className="text-navy font-medium">{data.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Overview */}
          <motion.div {...fadeInUp} className="mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Industry Overview</span>
                <h2 className="font-heading text-3xl font-bold text-navy mb-6">{data.title}</h2>
                <div className="w-12 h-0.5 bg-gold mb-7" />
                <p className="text-muted text-lg leading-relaxed">{data.overview}</p>
              </div>
              <div className="bg-navy rounded-card p-7 text-white self-start">
                <div className="text-5xl mb-4 text-center">{data.icon}</div>
                <div className="font-heading text-gold text-center text-lg font-semibold mb-3">Global Deployment</div>
                <p className="text-white/70 text-sm text-center leading-relaxed">
                  Millinoxx sources and deploys professionals for this sector across {data.countries.length}+ countries worldwide.
                </p>
                <div className="mt-5 pt-5 border-t border-white/10 text-center">
                  <Link to="/contact" className="btn-gold text-sm px-5 py-2 inline-block">Hire Now</Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Roles */}
          <motion.div {...fadeInUp} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-7">Key Job Roles We Place</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.roles.map((role, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-lightbg rounded-lg p-4 hover:bg-gold/5 hover:border hover:border-gold/30 border border-transparent transition-all duration-200">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-navy text-sm font-medium leading-snug">{role}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Countries */}
          <motion.div {...fadeInUp} className="mb-14 bg-lightbg rounded-card p-8">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-2">
              <MapPin size={24} className="text-gold" />
              Countries We Serve
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.countries.map((country, i) => (
                <span key={i} className="bg-white border border-gray-200 hover:border-gold text-navy text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-default">
                  {country}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Why Millinoxx */}
          <motion.div {...fadeInUp} className="bg-navy rounded-card p-10 mb-10">
            <h3 className="font-heading text-2xl font-bold text-gold mb-6">Why Choose Millinoxx for {data.title}?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                'Deep industry expertise and sector-specific candidate pools',
                'Pre-screened, certified professionals ready to deploy',
                'Fast turnaround — 48-72 hours for shortlisting',
                'End-to-end support from sourcing to deployment',
                'Compliance with local labor laws and international standards',
                'Dedicated account managers for seamless communication',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeInUp} className="text-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
