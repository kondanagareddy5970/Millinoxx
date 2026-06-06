import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { ArrowRight, CheckCircle } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function CompanyProfile() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="55vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/60">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">Company Profile</h1>
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
          <span className="text-navy font-medium">Company Profile</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Who We Are</span>
            <h2 className="font-heading text-4xl font-bold text-navy mb-6">About Millinoxx Experts</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-muted text-lg leading-relaxed mb-6">
              At Millinoxx Experts, we are devoted to creating and sustaining a meaningful difference in your staffing strategies. As a highly reputed headhunting and manpower recruitment firm, we've built our name on delivering outstanding client service and connecting top-tier talent with organizations across the globe.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              With successful placements across India, the Gulf, Europe, the UK, the USA, and beyond, we partner with businesses of all sizes—from startups to industry leaders—ensuring their workforce is not only skilled but also aligned with their long-term goals.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-navy rounded-card p-8">
              <h3 className="font-heading text-xl font-bold text-gold mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be the world's most trusted and innovative recruitment partner—recognized for integrity, excellence, and our ability to transform organizations through outstanding human capital solutions.
              </p>
            </div>
            <div className="bg-lightbg rounded-card p-8 border border-gold/20">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                To redefine recruitment by making top-tier global talent accessible to organizations worldwide—through integrity, innovation, and deep industry understanding.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="border-l-4 border-gold pl-8 mb-14">
            <h3 className="font-heading text-2xl font-bold text-navy mb-5">Our Commitment</h3>
            <p className="text-muted leading-relaxed mb-5">
              We don't just fill vacancies—we build teams. At Millinoxx Experts, we understand that employers today seek more than just capable candidates. You need productive, team-oriented professionals with the right mindset, adaptability, and cultural fit to grow with your organization.
            </p>
            <p className="text-muted leading-relaxed">
              Our recruitment process is designed to go deeper—evaluating attitude, alignment, and potential—so that every hire is a step toward your company's vision.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-lightbg rounded-card p-10 mb-10">
            <h3 className="font-heading text-2xl font-bold text-navy mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Integrity & Transparency', 'Innovation & Adaptability', 'Excellence in Delivery', 'Client-Centric Approach', 'Global Mindset', 'Long-term Partnerships'].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  <span className="text-navy font-medium text-sm">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

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
