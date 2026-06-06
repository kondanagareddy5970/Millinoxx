import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import { ArrowRight, Globe, Users, Target } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <div className="relative">
        <HeroSlider slides={slides} height="60vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/60">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">About Us</h1>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">About Us</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <motion.div {...fadeInUp}>
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Our Story</span>
              <h2 className="font-heading text-4xl font-bold text-navy mb-6">About Millinoxx Experts</h2>
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <p className="text-muted leading-relaxed mb-5">
                At Millinoxx Experts, we are devoted to creating and sustaining a meaningful difference in your staffing strategies. As a highly reputed headhunting and manpower recruitment firm, we've built our name on delivering outstanding client service and connecting top-tier talent with organizations across the globe.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                With successful placements across India, the Gulf, Europe, the UK, the USA, and beyond, we partner with businesses of all sizes—from startups to industry leaders—ensuring their workforce is not only skilled but also aligned with their long-term goals.
              </p>
              <Link to="/about/company-profile" className="btn-gold inline-flex items-center gap-2">
                Read Full Profile <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative">
              <img src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80" loading="lazy"
                alt="About Millinoxx" className="w-full h-[400px] object-cover rounded-card shadow-xl" />
              <div className="absolute -bottom-5 -left-5 bg-navy p-6 rounded-card shadow-xl hidden lg:block">
                <div className="font-heading text-3xl font-bold text-gold">25+</div>
                <div className="text-white text-sm mt-1">Countries Served</div>
              </div>
            </motion.div>
          </div>

          {/* International Recruitment */}
          <motion.div {...fadeInUp} className="bg-lightbg rounded-card p-10 mb-14">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Globe size={28} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">International Recruitment</h3>
                <p className="text-muted leading-relaxed">
                  Our global recruitment network spans continents, allowing us to source the finest talent for technical, engineering, healthcare, IT, and management roles across the Middle East, Europe, UK, USA, and beyond. We leverage deep industry knowledge and a vast candidate database to deliver results swiftly and precisely.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Commitment */}
          <motion.div {...fadeInUp} className="border-l-4 border-gold pl-8">
            <h3 className="font-heading text-2xl font-bold text-navy mb-4">Our Commitment</h3>
            <p className="text-muted leading-relaxed mb-5">
              We don't just fill vacancies—we build teams. At Millinoxx Experts, we understand that employers today seek more than just capable candidates. You need productive, team-oriented professionals with the right mindset, adaptability, and cultural fit to grow with your organization.
            </p>
            <p className="text-muted leading-relaxed">
              Our recruitment process is designed to go deeper—evaluating attitude, alignment, and potential—so that every hire is a step toward your company's vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Why Choose Millinoxx?</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Global Reach', desc: 'Our extensive network spans 25+ countries, allowing us to source the best talent for your specific needs.' },
              { icon: Target, title: 'Tailored Solutions', desc: 'We understand every business is unique. Our strategies are customized to fit your organizational culture and goals.' },
              { icon: Users, title: 'Industry Expertise', desc: 'Deep industry knowledge enabling us to identify candidates who not only meet requirements but thrive in your environment.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/5 rounded-card p-8 border border-white/10 hover:border-gold/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
