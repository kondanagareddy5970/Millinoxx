import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    dropdown: [
      { label: 'Company Profile', path: '/about/company-profile' },
      { label: 'Message from CEO', path: '/about/ceo-message' },
      { label: 'Tech Partner', path: '/about/tech-partner' },
      { label: 'Testimonials', path: '/about/testimonials' },
      { label: 'Company Video', path: '/about/company-video' },
    ],
  },
  {
    label: 'Services',
    dropdown: [
      { label: 'Artificial Intelligence Solutions', path: '/services/ai-solutions' },
      { label: 'AI Automation & Intelligent Agents', path: '/services/ai-automation' },
      { label: 'Machine Learning & Predictive Analytics', path: '/services/machine-learning' },
      { label: 'Information Technology Services', path: '/services/it-services' },
      { label: 'Generative AI & LLM Development', path: '/services/gen-ai' },
      { label: 'Cloud & DevOps Engineering', path: '/services/cloud-devops' },
      { label: 'Cyber Security Solutions', path: '/services/cyber-security' },
      { label: 'Data Engineering & Business Intelligence', path: '/services/data-engineering' },
    ],
  },
  {
    label: 'Industries We Serve',
    dropdown: [
      { label: 'Heavy Equipment / Engineering', path: '/industries/heavy-equipment' },
      { label: 'Power Plant / Sewage / Water Treatment', path: '/industries/power-plant' },
      { label: 'Oil & Gas / EPC', path: '/industries/oil-gas' },
      { label: 'MEP (Electromechanical / HVAC)', path: '/industries/mep' },
      { label: 'Construction Industry / Real Estate', path: '/industries/construction' },
      { label: 'Manufacturing', path: '/industries/manufacturing' },
      { label: 'Shipping & Marine Industry', path: '/industries/shipping' },
      { label: 'Automotive Industry', path: '/industries/automotive' },
      { label: 'Aviation & Aerospace', path: '/industries/aviation' },
      { label: 'Agricultural Industry', path: '/industries/agriculture' },
      { label: 'Hospitality Sector', path: '/industries/hospitality' },
      { label: 'Garments & FMCG', path: '/industries/garments' },
      { label: 'Hospitals & Medical', path: '/industries/hospitals' },
      { label: 'IT / Telecom Sector', path: '/industries/it-telecom' },
      { label: 'Banking & Finance', path: '/industries/banking-finance' },
      { label: 'Cyber Security', path: '/industries/cyber-security' },
    ],
  },
  {
    label: 'Gallery',
    dropdown: [
      { label: 'Office Gallery', path: '/gallery/office' },
      { label: 'Work Gallery', path: '/gallery/work' },
      { label: 'Tech Gallery', path: '/gallery/tech' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [location.pathname])

  // Close dropdown when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (path) => location.pathname === path
  const isParentActive = (dropdown) => dropdown?.some(d => location.pathname === d.path)

  const toggleDropdown = (label) => {
    setActiveDropdown(prev => (prev === label ? null : label))
  }

  return (
    <>
      {/* Fixed wrapper */}
      <div ref={navRef} className="fixed top-0 left-0 right-0 z-50">

        {/* Top announcement + social + translate bar */}
        <div className={`transition-all duration-300 ${scrolled ? 'hidden' : 'block'} bg-navy/95 backdrop-blur-sm py-1.5 px-6`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-gold text-xs font-medium tracking-widest uppercase hidden sm:block">
              Connecting Global Talent with World-Class Opportunities
            </span>
            <div className="flex items-center gap-3 ml-auto">
              {/* Google Translate */}
              <div id="google_translate_element" />
              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/people/Millinoxx-Pvt-Ltd/61579129431567/" target="_blank" rel="noopener noreferrer"
                  className="w-7 h-7 rounded bg-white hover:bg-gold flex items-center justify-center transition-colors duration-200">
                  <FaFacebookF size={12} className="text-navy" />
                </a>
                <a href="https://www.linkedin.com/company/millinoxxprivatelimited/" target="_blank" rel="noopener noreferrer"
                  className="w-7 h-7 rounded bg-white hover:bg-gold flex items-center justify-center transition-colors duration-200">
                  <FaLinkedinIn size={12} className="text-navy" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'}`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://millinoxx.com/img/logo.png"
                alt="Millinoxx Logo"
                className="h-12 w-auto object-contain"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div style={{ display: 'none' }} className="items-center gap-2">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-navy font-heading font-bold text-lg">M</span>
                </div>
                <div>
                  <div className={`font-heading font-bold text-xl ${scrolled ? 'text-navy' : 'text-white'}`}>Millinoxx</div>
                  <div className={`text-xs font-medium tracking-wider ${scrolled ? 'text-muted' : 'text-white/80'}`}>ENGINEERING & CONSULTANCY</div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group py-2">
                    <button
                      className={`flex items-center gap-1 px-3 py-1 rounded text-sm font-medium transition-colors duration-200
                        ${isParentActive(link.dropdown)
                          ? 'text-gold'
                          : scrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div className={`absolute top-full pt-2 z-[200] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out
                      ${link.label === 'Industries We Serve' ? 'left-1/2 -translate-x-1/2 w-[620px]' : 'left-0 min-w-[270px]'}`}>
                      <div className={`bg-white shadow-2xl rounded-lg border border-gray-100 max-h-[75vh] overflow-y-auto py-2
                        ${link.label === 'Industries We Serve' ? 'grid grid-cols-2 gap-x-2 p-3' : ''}`}>
                        {link.dropdown.map(item => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-2 px-5 py-2.5 text-sm hover:bg-amber-50 hover:text-yellow-700 transition-colors duration-150 rounded-md
                              ${isActive(item.path) ? 'text-yellow-700 bg-amber-50 font-semibold' : 'text-navy'}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors duration-200
                      ${isActive(link.path)
                        ? 'text-gold'
                        : scrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contact" className="ml-3 bg-gold hover:bg-yellow-500 text-navy text-sm font-semibold px-5 py-2 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg">
                Get In Touch
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <Menu size={26} className={scrolled ? 'text-navy' : 'text-white'} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative w-full max-w-sm bg-white h-full overflow-y-auto shadow-2xl" style={{ animation: 'slideIn 0.3s ease forwards' }}>
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-navy">
              <img
                src="https://millinoxx.com/img/logo.png"
                alt="Millinoxx"
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                onError={e => { e.target.style.display = 'none' }}
              />
              <button onClick={() => setMobileOpen(false)}>
                <X size={22} className="text-white" />
              </button>
            </div>
            <nav className="p-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold mb-1
                        ${isParentActive(link.dropdown) ? 'text-yellow-700 bg-amber-50' : 'text-navy hover:bg-gray-50'}`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="ml-4 mb-2 border-l-2 border-gold pl-3">
                        {link.dropdown.map(item => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2 px-2 text-sm rounded transition-colors ${isActive(item.path) ? 'text-yellow-700 font-semibold' : 'text-gray-500 hover:text-yellow-700'}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold mb-1
                      ${isActive(link.path) ? 'text-yellow-700 bg-amber-50' : 'text-navy hover:bg-gray-50'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4 block text-center bg-gold text-navy font-bold px-6 py-3 rounded-sm">
                Get In Touch
              </Link>
              <div className="mt-6 flex justify-center gap-4">
                <a href="https://www.facebook.com/people/Millinoxx-Pvt-Ltd/61579129431567/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <FaFacebookF size={14} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/company/millinoxxprivatelimited/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <FaLinkedinIn size={14} className="text-white" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
