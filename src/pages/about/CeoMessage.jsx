import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import { Quote, ArrowRight, Globe, Target, Trophy } from 'lucide-react'

const slides = [
  { image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&q=85' },
  { image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1600&q=85' },
]

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

export default function CeoMessage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="relative">
        <HeroSlider slides={slides} height="55vh" />
        <div className="absolute inset-0 flex items-center justify-center bg-navy/60">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">Message from CEO</h1>
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
          <span className="text-navy font-medium">Message from CEO</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
            {/* CEO Photo */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="rounded-card overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                    alt="Srinivasu - Founder & CEO" loading="lazy"
                    className="w-full h-[420px] object-cover object-top" />
                </div>
                <div className="absolute -bottom-5 left-5 right-5 bg-navy rounded-card p-5 shadow-xl">
                  <div className="font-heading text-xl font-bold text-gold">SRINIVASU</div>
                  <div className="text-white text-sm mt-1">Founder & CEO, Millinoxx Experts</div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-3 mt-6 lg:mt-0">
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Leadership</span>
              <h2 className="font-heading text-4xl font-bold text-navy mb-6">A Message from Our CEO</h2>
              <div className="w-12 h-0.5 bg-gold mb-8" />

              <div className="relative mb-6">
                <Quote size={40} className="text-gold/20 absolute -top-2 -left-2" />
                <p className="text-muted text-lg leading-relaxed pl-4 italic">
                  At Millinoxx Experts, our mission is simple yet powerful: to make a meaningful and lasting impact on your staffing strategies.
                </p>
              </div>

              <p className="text-muted leading-relaxed mb-5">
                As a trusted headhunting and manpower recruitment partner, we've earned a reputation for delivering exceptional client service and connecting top-tier talent with organizations across the globe.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                From India to the Gulf, Europe, the UK, the USA, and beyond we serve businesses of all sizes, from emerging startups to global enterprises. Our goal is to ensure that every hire is not just qualified but is a strategic fit someone who aligns with your long term vision.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Globe, title: 'Global Reach', desc: 'Our extensive network spans continents, allowing us to source the best talent for your specific needs.' },
                  { icon: Target, title: 'Tailored Solutions', desc: 'We understand that every business is unique. Our strategies are customized to fit your culture and goals.' },
                  { icon: Trophy, title: 'Expertise Across Industries', desc: 'Deep industry knowledge enabling us to identify candidates who truly thrive in your work environment.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-lightbg rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm mb-1">{item.title}</div>
                      <div className="text-muted text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted leading-relaxed mb-8">
                We don't just fill vacancies we build teams. At Millinoxx Experts, we know that modern businesses need more than just skills on paper. You need professionals who are adaptive, team-oriented, and aligned with your company culture. That's why our recruitment process dives deeper assessing attitude, mindset, and growth potential to ensure every placement contributes to your success.
              </p>
              <p className="text-navy font-semibold italic text-lg border-l-4 border-gold pl-5">
                "Let's build a workforce that drives progress."
              </p>
              <div className="mt-5 text-navy font-heading text-lg font-semibold"> SRINIVASU</div>
              <div className="text-muted text-sm">Founder & CEO, Millinoxx Experts</div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Connect With Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
