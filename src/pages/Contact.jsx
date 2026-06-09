import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }

const offices = [
  {
    city: 'Russia Office',
    badge: 'Global Headquarters',
    badgeStyle: 'bg-gold/20 text-gold',
    company: 'Millinoxx Engineering & Consultancy',
    address: '105005, Moscow, St. Baumanskaya, 7, Bldg. 1, Room 22/1',
    pin: '105005',
    phone: '',
    email: 'info@millinoxx.ru',
  },
  {
    city: 'Hyderabad Office',
    badge: 'India Operations',
    badgeStyle: 'bg-navy text-white/70 border border-white/20',
    company: 'Millinoxx Engineering & Consultancy Pvt. Ltd.',
    address: '4th Floor, AWFIS Sarvatham, Plot No 12, Deloitte Dr, Phase 2, HITEC City, Hyderabad, Telangana, India',
    pin: '500081',
    phone: '+91 9959450031',
    email: 'srinivasu@millinoxx.com',
  },
  {
    city: 'Visakhapatnam Office',
    badge: 'India Operations',
    badgeStyle: 'bg-navy text-white/70 border border-white/20',
    company: 'Millinoxx Engineering & Consultancy Pvt. Ltd.',
    address: 'Plot No: 66-2-48/1, Sri Ram Nagar, Road No: 2, Coramandal Gate, PO: Malkapuram, Visakhapatnam, Andhra Pradesh, India',
    pin: '530011',
    phone: '+91 9959001731',
    email: 'srinivasu@millinoxx.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', phone: '', message: '' })
    }, 1200)
  }

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="pt-36 pb-14 bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Reach Us</span>
          <h1 className="font-heading text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">Ready to transform your workforce? Get in touch with our team today.</p>
        </div>
      </div>

      <div className="bg-lightbg border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Contact</span>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form */}
            <motion.div {...fadeInUp} className="lg:col-span-3">
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase block mb-3">Send a Message</span>
              <h2 className="font-heading text-3xl font-bold text-navy mb-2">Business Enquiry</h2>
              <p className="text-muted mb-8">Fill in the form below and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-gold/10 border-2 border-gold rounded-card p-10 text-center">
                  <CheckCircle2 size={56} className="text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-muted">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 btn-gold text-sm">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Full Name *</label>
                    <input type="text" value={form.name} onChange={e => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 border-2 rounded-lg text-navy placeholder:text-muted/60 focus:outline-none transition-colors duration-200 bg-white
                        ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gold'}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number *</label>
                    <input type="tel" value={form.phone} onChange={e => handleChange('phone', e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-4 py-3 border-2 rounded-lg text-navy placeholder:text-muted/60 focus:outline-none transition-colors duration-200 bg-white
                        ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gold'}`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Message *</label>
                    <textarea value={form.message} onChange={e => handleChange('message', e.target.value)}
                      rows={5} placeholder="Tell us about your requirement..."
                      className={`w-full px-4 py-3 border-2 rounded-lg text-navy placeholder:text-muted/60 focus:outline-none transition-colors duration-200 resize-none bg-white
                        ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-gold'}`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-gold hover:shadow-xl disabled:opacity-70">
                    {loading ? (
                      <><div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={18} />SUBMIT</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6">
              {offices.map((office, i) => (
                <div key={i} className={`rounded-card p-7 border ${i === 0 ? 'bg-navy border-gold/30' : 'bg-lightbg border-gray-100'}`}>
                  {/* Badge */}
                  <div className="mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded ${i === 0 ? 'bg-gold text-navy' : 'bg-gray-200 text-gray-500'}`}>
                      {office.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${i === 0 ? 'bg-gold/20' : 'bg-gold'}`}>
                      <MapPin size={14} className={i === 0 ? 'text-gold' : 'text-navy'} />
                    </div>
                    <h3 className={`font-heading text-lg font-bold ${i === 0 ? 'text-white' : 'text-navy'}`}>{office.city}</h3>
                  </div>
                  <p className={`text-sm font-semibold mb-1 ${i === 0 ? 'text-white/80' : 'text-navy'}`}>{office.company}</p>
                  <p className={`text-sm mb-1 leading-relaxed ${i === 0 ? 'text-white/60' : 'text-muted'}`}>{office.address}</p>
                  <p className={`text-sm mb-4 ${i === 0 ? 'text-white/60' : 'text-muted'}`}>Pin Code: {office.pin}</p>
                  <div className="space-y-2.5">
                    {office.phone && (
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className={`flex items-center gap-3 text-sm transition-colors hover:text-gold ${i === 0 ? 'text-white/70' : 'text-navy'}`}>
                        <Phone size={15} className="text-gold flex-shrink-0" />
                        {office.phone}
                      </a>
                    )}
                    <a href={`mailto:${office.email}`} className={`flex items-center gap-3 text-sm transition-colors hover:text-gold ${i === 0 ? 'text-white/70' : 'text-navy'}`}>
                      <Mail size={15} className="text-gold flex-shrink-0" />
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-lightbg rounded-card p-7 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Globe size={14} className="text-navy" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">Online</h3>
                </div>
                <a href="https://www.millinoxx.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-navy hover:text-gold transition-colors">
                  <Globe size={15} className="text-gold flex-shrink-0" />
                  www.millinoxx.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div {...fadeInUp} className="mt-16 rounded-card overflow-hidden shadow-card border border-gray-100">
            <div className="bg-navy px-6 py-4 flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              <span className="text-white font-semibold text-sm">India Operations — HITEC City, Hyderabad, India</span>
            </div>
            <iframe
              title="Millinoxx HITEC City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1739252657157!2d78.37193871487675!3d17.44781600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d93d67d74f%3A0x73f7be5f6ceb6d6e!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
