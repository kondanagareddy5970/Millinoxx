import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import industryData from '../../data/industryData'
import { CheckCircle, ArrowRight, MapPin, Briefcase, Users, BarChart3, PhoneCall } from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function IndustryPage({ slug }) {
  const data = industryData[slug]
  
  if (!data) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-lightbg">
      <h1 className="font-heading text-4xl text-navy mb-4 font-bold">Industry Not Found</h1>
      <p className="text-muted mb-8 text-lg">We couldn't find the requested industry profile.</p>
      <Link to="/" className="btn-gold shadow-md">Return Home</Link>
    </div>
  )

  const slides = data.images && data.images.length > 0 
    ? data.images.map(img => ({ image: img }))
    : [{ image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85' }] // Fallback

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="bg-lightbg min-h-screen">
      
      {/* 1. Hero Banner */}
      <div className="relative">
        <HeroSlider slides={slides} height="65vh" />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <span className="text-gold text-sm font-bold tracking-[0.25em] uppercase block mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold" /> Industries We Serve
              </span>
              <div className="flex items-center gap-5 mb-5">
                {data.icon && <span className="text-5xl text-white opacity-90">{data.icon}</span>}
                <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">{data.title}</h1>
              </div>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed border-l-4 border-gold pl-4 ml-1">
                Delivering world-class recruitment and workforce solutions for the global {data.title.toLowerCase()} sector.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Breadcrumb */}
      <div className="bg-white border-b border-gray-100 shadow-sm py-3 px-6 sticky top-[76px] z-40">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted flex-wrap font-medium">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">Industries</span>
          <span className="text-gray-300">/</span>
          <span className="text-navy">{data.title}</span>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* 3. Industry Overview */}
        <motion.section {...fadeInUp} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Briefcase size={14} /> Overview
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">Empowering the {data.title} Sector</h2>
              <div className="w-16 h-1 bg-gold mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{data.overview}</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We partner with industry leaders to overcome complex talent acquisition challenges. Our deep domain knowledge ensures that your organization is equipped with professionals who possess both the technical acumen and the strategic mindset required to drive innovation and operational excellence.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 rounded-bl-[100px]" />
                <h3 className="font-heading text-xl font-bold text-navy mb-5 flex items-center gap-2">
                  <MapPin size={20} className="text-gold" /> Global Reach
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  We actively source and deploy talent for this sector across key global markets.
                </p>
                <div className="flex flex-wrap gap-2">
                  {(data.countries || ['USA', 'UK', 'UAE', 'Saudi Arabia', 'India', 'Germany']).map((country, i) => (
                    <span key={i} className="bg-lightbg text-navy text-xs font-semibold px-3 py-1.5 rounded-md border border-gray-100">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Services We Provide */}
        <motion.section {...fadeInUp} className="mb-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">Services We Provide</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Comprehensive workforce and staffing solutions tailored strictly to the operational needs of the {data.title} industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.services || [
              'Executive Search & Headhunting',
              'Contract & Temporary Staffing',
              'Permanent Recruitment',
              'Turnkey Project Staffing',
              'Global Manpower Mobilization',
              'Compliance & Payroll Solutions'
            ]).map((service, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-lightbg border border-transparent hover:border-gold/30 hover:bg-gold/5 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <CheckCircle size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-base">{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. Workforce We Deploy */}
        <motion.section {...fadeInUp} className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 text-navy rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Users size={14} /> Talent Pool
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">Workforce We Deploy</h2>
            </div>
            <p className="text-gray-500 max-w-md text-sm md:text-right">
              Our extensive database grants us immediate access to pre-screened, certified professionals ready to integrate into your projects.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(data.roles || ['Project Managers', 'Senior Engineers', 'Technical Specialists', 'Operational Staff']).map((role, i) => (
              <motion.div variants={staggerItem} key={i} 
                className="group p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-navy transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-gold mb-4 group-hover:scale-150 transition-transform" />
                <h4 className="font-semibold text-navy text-sm leading-snug">{role}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 6 & 7. Why Choose Us & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.section {...fadeInUp} className="bg-navy rounded-3xl p-10 md:p-12 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 border-[30px] border-white/5 rounded-full" />
            <h2 className="font-heading text-3xl font-bold mb-8 relative z-10">Why Choose Millinoxx?</h2>
            <div className="space-y-6 relative z-10">
              {[
                'Specialized recruiters with direct industry experience',
                'Rigorous technical and cultural screening process',
                'Rapid mobilization and visa processing support',
                '100% compliance with international labor laws',
                'Scalable solutions for projects of any size'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-gold" />
                  </div>
                  <span className="text-white/90 text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 size={28} className="text-gold" />
              <h2 className="font-heading text-3xl font-bold text-navy">Industry Impact</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {(data.statistics || [
                { value: '500+', label: 'Placements' },
                { value: '98%', label: 'Client Retention' },
                { value: '15+', label: 'Countries' },
                { value: '24/7', label: 'Support Support' }
              ]).map((stat, i) => (
                <div key={i} className="bg-lightbg p-6 rounded-2xl text-center border border-transparent hover:border-gold/20 transition-colors">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* 8 & 9. CTA & Contact Section */}
        <motion.section {...fadeInUp} className="bg-gradient-to-br from-navy to-[#003355] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Team?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Partner with Millinoxx to secure the top-tier talent required to drive your {data.title.toLowerCase()} operations forward. Contact our industry specialists today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-gold/20">
                Contact Our Specialists <ArrowRight size={18} />
              </Link>
              <a href="tel:+919959450031" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-bold text-white border-2 border-white/20 rounded-md hover:bg-white/10 transition-colors">
                <PhoneCall size={18} /> +91 9959450031
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </motion.div>
  )
}
