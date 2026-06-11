import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import {
  ArrowRight, Cpu, Brain, Code, Handshake, TrendingUp,
  ShieldCheck, BarChart3, BookOpen, GraduationCap,
  Building2, Users, CheckCircle, PhoneCall, Mail,
  Monitor, Briefcase, Globe2, Star, Zap
} from 'lucide-react'

import kodryxLogo from '../../assets/kodryx-logo.jpg'
import ceoImg from '../../assets/ceo.jpg'
import ctoImg from '../../assets/cto.jpg'
import foundingImg from '../../assets/founding-engineer.jpg'

// ─── Animation Presets ───────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' }
}
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// ─── Shared Layout Primitives ─────────────────────────────────────────────────
// SectionContainer: one unified wrapper used by every section
function SectionContainer({ children, className = '', bg = 'bg-white' }) {
  return (
    <section className={`${bg} py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

// SectionHeader: badge → heading → divider → description — all centered
function SectionHeader({ badge, heading, headingGold, description, light = false }) {
  return (
    <div className="flex flex-col items-center text-center mb-14">
      {badge && (
        <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] mb-5
          ${light
            ? 'bg-white/10 text-white/80 border border-white/20'
            : 'bg-gold/10 text-gold-dark border border-gold/20'}`}>
          {badge}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4
        ${light ? 'text-white' : 'text-navy'}`}>
        {headingGold
          ? <>{heading} <span className="text-gold">{headingGold}</span></>
          : heading}
      </h2>
      <div className="w-14 h-1 bg-gold rounded-full mb-5" />
      {description && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl
          ${light ? 'text-white/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

// CardGrid: uniform gap and column system for all card layouts
function CardGrid({ cols = 3, children }) {
  const colMap = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  }
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`grid ${colMap[cols] || colMap[3]} gap-6`}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const slides = [
  { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=85' },
]

const team = [
  { name: 'Venkata Talatam', role: 'Chief Executive Officer (CEO)', image: ceoImg },
  { name: 'Sonu Kumar', role: 'Chief Technology Officer (CTO)', image: ctoImg },
  { name: 'Ekshith Kolla', role: 'Founding Engineer', image: foundingImg },
]

const features = [
  { icon: Brain, title: 'Artificial Intelligence', desc: 'Advanced AI solutions for data analysis, predictive modeling, and intelligent automation.' },
  { icon: Cpu, title: 'Machine Learning', desc: 'Cutting-edge ML algorithms powering our candidate assessment and matching systems.' },
  { icon: Code, title: 'Software Development', desc: 'Enterprise-grade software development for digital transformation and business optimization.' },
]

const industryPartners = [
  { icon: Monitor, label: 'Information Technology', count: '40+ Partners' },
  { icon: Briefcase, label: 'Manufacturing', count: '25+ Partners' },
  { icon: Building2, label: 'Construction & Infra', count: '15+ Partners' },
  { icon: Users, label: 'Healthcare', count: '10+ Partners' },
  { icon: BarChart3, label: 'Banking & Finance', count: '8+ Partners' },
  { icon: Globe2, label: 'Aerospace', count: '5+ Partners' },
  { icon: Zap, label: 'Energy & Utilities', count: '5+ Partners' },
  { icon: Star, label: 'E-Commerce & Retail', count: '12+ Partners' },
]

const benefits = [
  { icon: TrendingUp, title: 'Boost NAAC/NIRF Rankings', desc: 'Enhance your institution\'s rankings through industry collaborations and placement records.' },
  { icon: Users, title: 'Access to Skilled Talent', desc: 'Companies get pre-trained, job-ready candidates aligned with their technology stack.' },
  { icon: ShieldCheck, title: 'Quality-Assured Programs', desc: 'All programs follow high education standards to ensure quality learning and industry relevance.' },
  { icon: Handshake, title: 'MoU Support', desc: 'We facilitate formal partnerships with proper documentation and agreements.' },
  { icon: BookOpen, title: 'Internship Pipeline', desc: 'Continuous flow of talented interns for your projects and teams.' },
  { icon: GraduationCap, title: 'Faculty Development', desc: 'Training programs for faculty to stay updated with industry trends.' },
]

const processSteps = [
  { step: '01', icon: PhoneCall, title: 'Initial Discussion', desc: 'Connect with our team to discuss your requirements and explore collaboration opportunities.' },
  { step: '02', icon: BookOpen, title: 'Proposal & MoU', desc: 'We prepare a customized proposal and formal MoU outlining the partnership terms.' },
  { step: '03', icon: Handshake, title: 'Agreement & Onboarding', desc: 'Sign the partnership agreement and complete the onboarding process.' },
  { step: '04', icon: Zap, title: 'Launch & Execute', desc: 'Begin the collaboration with training programs, internships, or recruitment drives.' },
]

// ─── Page Component ───────────────────────────────────────────────────────────
export default function TechPartner() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* Hero */}
      <div className="relative">
        <HeroSlider slides={slides} height="55vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/70">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">Tech Partner</h1>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">About Us</span>
          <span className="text-gray-300">/</span>
          <span className="text-navy font-medium">Tech Partner</span>
        </div>
      </div>

      {/* ── 1. Technical Partner ── */}
      <SectionContainer bg="bg-white">
        <motion.div
          {...fadeInUp}
          className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center"
        >
          {/* decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/5 translate-x-24 -translate-y-24 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 -translate-x-14 translate-y-14 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-block bg-white/10 text-white/90 text-xs font-bold px-4 py-2 rounded-full border border-white/20 uppercase tracking-[0.15em] mb-8">
              Strategic Technology Partner
            </span>

            {/* Logo card */}
            <div className="w-28 h-28 rounded-2xl bg-white shadow-xl overflow-hidden flex items-center justify-center p-3 mb-6">
              <img src={kodryxLogo} alt="Kodryx AI Logo" className="w-full h-full object-contain" />
            </div>

            {/* Title */}
            <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-5">Kodryx AI</div>

            {/* Description */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
              Our strategic technical partner powering cutting-edge AI and technology solutions. Kodryx AI brings expertise in artificial intelligence, machine learning, and advanced software development to enhance our training programs and recruitment intelligence systems.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {features.map((f, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5 shrink-0">
                    <f.icon size={24} className="text-gold" />
                  </div>
                  <div className="font-semibold text-white mb-3 text-lg">{f.title}</div>
                  <div className="text-white/60 text-sm leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionContainer>

      {/* ── 2. Industry Partners (Domains We Cover) ── */}
      <SectionContainer bg="bg-lightbg">
        <motion.div {...fadeInUp}>
          <SectionHeader
            badge="Industry Coverage"
            heading="Domains"
            headingGold="We Cover"
            description="Our partners span across diverse industries, providing professionals with varied career opportunities."
          />
        </motion.div>
        <CardGrid cols={4}>
          {industryPartners.map((item, i) => (
            <motion.div variants={staggerItem} key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-4 shrink-0">
                <item.icon size={22} className="text-gold" />
              </div>
              <div className="font-semibold text-navy text-sm mb-1">{item.label}</div>
              <div className="text-gold text-xs font-bold">{item.count}</div>
            </motion.div>
          ))}
        </CardGrid>
      </SectionContainer>

      {/* ── 3. Partnership Benefits ── */}
      <SectionContainer bg="bg-white">
        <motion.div {...fadeInUp}>
          <SectionHeader
            badge="Why Partner With Us"
            heading="Partnership"
            headingGold="Benefits"
            description="Mutual growth through strategic collaboration — benefits for institutions and companies alike."
          />
        </motion.div>
        <CardGrid cols={3}>
          {benefits.map((b, i) => (
            <motion.div variants={staggerItem} key={i}
              className="bg-lightbg rounded-xl p-7 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 shrink-0">
                <b.icon size={20} className="text-gold" />
              </div>
              <h3 className="font-semibold text-navy text-base mb-2">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{b.desc}</p>
            </motion.div>
          ))}
        </CardGrid>
      </SectionContainer>

      {/* ── 4. Partnership Process ── */}
      <SectionContainer bg="bg-navy">
        <motion.div {...fadeInUp}>
          <SectionHeader
            badge="How It Works"
            heading="Partnership"
            headingGold="Process"
            description="A simple, streamlined process to become our partner in just four steps."
            light
          />
        </motion.div>
        <CardGrid cols={4}>
          {processSteps.map((s, i) => (
            <motion.div variants={staggerItem} key={i}
              className="bg-white/5 rounded-xl p-7 border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col h-full relative">
              <span className="absolute top-5 right-5 font-heading text-4xl font-bold text-white/10 leading-none select-none">{s.step}</span>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 shrink-0">
                <s.icon size={20} className="text-gold" />
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">{s.desc}</p>
              {i < processSteps.length - 1 && (
                <ArrowRight size={16} className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gold/40" />
              )}
            </motion.div>
          ))}
        </CardGrid>
      </SectionContainer>

      {/* ── 5. Leadership Team ── */}
      <SectionContainer bg="bg-white">
        <motion.div {...fadeInUp}>
          <SectionHeader
            badge="The Team"
            heading="Kodryx AI"
            headingGold="Leadership"
            description="Meet the technology leaders driving innovation and excellence at Kodryx AI."
          />
        </motion.div>
        <CardGrid cols={3}>
          {team.map((member, i) => (
            <motion.div variants={staggerItem} key={i}
              className="group bg-white rounded-xl shadow-card overflow-hidden border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-72 overflow-hidden shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center border-t-4 border-gold flex-1 flex flex-col justify-center">
                <h3 className="font-heading text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-muted text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </CardGrid>
      </SectionContainer>

      {/* ── 6. Become a Partner Today CTA ── */}
      <SectionContainer bg="bg-navy">
        <motion.div {...fadeInUp} className="flex flex-col items-center text-center">
          <SectionHeader
            badge="Join Our Network"
            heading="Become a"
            headingGold="Partner Today"
            description="Whether you are an educational institution looking to enhance student outcomes or a company seeking skilled talent — we are ready to collaborate."
            light
          />

          {/* Two CTA cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
            {[
              {
                icon: GraduationCap,
                title: 'For Educational Institutions',
                desc: 'Partner with us to provide your students with industry exposure, internships, and placement opportunities. Boost your institution\'s reputation and rankings.',
                cta: 'Partner as Institution',
              },
              {
                icon: Building2,
                title: 'For Companies',
                desc: 'Access a pipeline of pre-trained, job-ready talent. Reduce hiring costs and time with candidates already skilled in your technology stack.',
                cta: 'Partner as Company',
              },
            ].map((card, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col text-left h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-5 shrink-0">
                  <card.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-semibold text-white text-base mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">{card.desc}</p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy text-sm font-bold px-5 py-2.5 rounded-md transition-colors duration-200 w-fit">
                  {card.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Contact line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm border-t border-white/10 pt-8 w-full">
            <a href="tel:+919492270525" className="flex items-center gap-2 hover:text-gold transition-colors">
              <PhoneCall size={15} /> +91 9492270525
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="mailto:info@skillarondevelopment.in" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={15} /> info@skillarondevelopment.in
            </a>
          </div>
        </motion.div>
      </SectionContainer>

    </motion.div>
  )
}
