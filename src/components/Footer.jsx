import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import logoImg from '../assets/logo.png'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services/international-recruitment' },
  { label: 'Industries', path: '/industries/heavy-equipment' },
  { label: 'Gallery', path: '/gallery/office' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  { label: 'International Recruitment', path: '/services/international-recruitment' },
  { label: 'Indian Recruitment', path: '/services/indian-recruitment' },
  { label: 'Shutdown & Maintenance', path: '/services/shutdown-maintenance' },
  { label: 'Deputation & Outsourcing', path: '/services/deputation-outsourcing' },
  { label: 'IT Services', path: '/services/it-services' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-5 flex items-center">
              <img src={logoImg} alt="Millinoxx Engineering & Technology" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Connecting Global Talent with World-Class Opportunities. Your trusted partner in international recruitment and engineering technology.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/Millinoxx-Pvt-Ltd/61579129431567/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-200">
                <FaFacebookF size={15} />
              </a>
              <a href="https://www.linkedin.com/company/millinoxxprivatelimited/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-200">
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-5 pb-2 border-b border-gold/30">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-5 pb-2 border-b border-gold/30">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0"></span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-5 pb-2 border-b border-gold/30">Contact Us</h4>
            <ul className="space-y-5">

              {/* Moscow Office */}
              <li>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded">Global HQ</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/60 mb-1.5">
                  <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>105005, Moscow, St. Baumanskaya, 7, Bldg. 1, Room 22/1, Russia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Mail size={15} className="text-gold flex-shrink-0" />
                  <a href="mailto:info@millinoxx.ru" className="hover:text-gold transition-colors break-all">info@millinoxx.ru</a>
                </div>
              </li>

              {/* Hyderabad Office */}
              <li>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">India Operations</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/60 mb-1.5">
                  <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>HITEC City, Hyderabad, Telangana, India — 500081</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Phone size={15} className="text-gold flex-shrink-0" />
                  <a href="tel:+919959450031" className="hover:text-gold transition-colors">+91 9959450031</a>
                </div>
              </li>

              {/* Web */}
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Globe size={15} className="text-gold flex-shrink-0" />
                <a href="https://www.millinoxx.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">www.millinoxx.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm text-center">
            © 2025 Millinoxx Engineering & Technology Pvt. Ltd. | All Rights Reserved
          </p>
          <p className="text-white/40 text-xs">
            Designed with excellence for global reach
          </p>
        </div>
      </div>
    </footer>
  )
}
