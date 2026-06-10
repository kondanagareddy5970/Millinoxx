import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import logoImg from '../assets/logo.jpeg'

import { servicesData, industriesData } from '../config/data'

const navLinks = [
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
    path: '/services',
    isMegaMenu: true,
    groupedDropdown: [
      {
        groupLabel: 'AI & Technology',
        items: servicesData.filter(s => ['/services/ai-solutions', '/services/ai-automation', '/services/machine-learning', '/services/gen-ai', '/services/it-services'].includes(s.path))
      },
      {
        groupLabel: 'Cloud & Security',
        items: servicesData.filter(s => ['/services/cloud-devops', '/services/cyber-security', '/services/data-engineering'].includes(s.path))
      },
      {
        groupLabel: 'Recruitment & Staffing',
        items: servicesData.filter(s => ['/services/international-recruitment', '/services/indian-recruitment'].includes(s.path))
      },
      {
        groupLabel: 'Industrial Services',
        items: servicesData.filter(s => ['/services/shutdown-maintenance', '/services/deputation-outsourcing'].includes(s.path))
      }
    ]
  },
  {
    label: 'Industries We Serve',
    path: '/industries',
    isMegaMenu: true,
    dropdown: industriesData,
  },
  {
    label: 'Gallery',
    dropdown: [
      { label: 'Office Gallery', path: '/gallery/office' },
      { label: 'Work Gallery', path: '/gallery/work' },
      { label: 'Tech Gallery', path: '/gallery/tech' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

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
  const isParentActive = (link) => {
    if (link.dropdown) return link.dropdown.some(d => location.pathname === d.path)
    if (link.groupedDropdown) return link.groupedDropdown.some(g => g.items.some(d => location.pathname === d.path))
    return false
  }

  return (
    <>
      {/* Fixed wrapper */}
      <div ref={navRef} className="fixed top-0 left-0 right-0 z-50">
        {/* Main Navbar */}
        <nav className="bg-[#004b75] border-b border-white/10 py-3.5 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <img src={logoImg} alt="Millinoxx Engineering & Technology" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) =>
                link.dropdown || link.groupedDropdown ? (
                  <div key={link.label} className="relative group py-2">
                    {link.path ? (
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 px-2.5 py-1 text-sm font-medium transition-colors duration-200 hover:text-gold
                          ${isParentActive(link) ? 'text-gold' : 'text-white'}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        className={`flex items-center gap-1 px-2.5 py-1 text-sm font-medium transition-colors duration-200 hover:text-gold
                          ${isParentActive(link) ? 'text-gold' : 'text-white'}`}
                      >
                        {link.label}
                      </button>
                    )}

                    {/* Dropdown panel */}
                    <div className={`absolute top-full pt-2 z-[200] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out
                      ${link.isMegaMenu ? 'left-1/2 -translate-x-[45%] w-[960px]' : 'left-0 min-w-[240px]'}`}>
                      <div className={`bg-white shadow-2xl rounded-lg border border-gray-100 max-h-[75vh] overflow-y-auto
                        ${link.isMegaMenu ? 'p-8 grid gap-x-8 gap-y-4 ' + (link.groupedDropdown ? 'grid-cols-4' : 'grid-cols-3') : 'p-2 flex flex-col space-y-1'}`}>
                        
                        {/* Normal Dropdown */}
                        {link.dropdown && !link.isMegaMenu && link.dropdown.map(item => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block py-2 px-4 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors duration-150 rounded-md
                              ${isActive(item.path) ? 'text-navy bg-gray-50 font-semibold' : ''}`}
                          >
                            {item.label}
                          </Link>
                        ))}

                        {/* MegaMenu Flat Dropdown (Industries) */}
                        {link.dropdown && link.isMegaMenu && link.dropdown.map(item => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 py-2.5 px-4 text-sm transition-colors duration-150 rounded-md border border-transparent
                              ${item.prominent 
                                ? 'bg-navy/5 font-semibold text-navy hover:bg-navy/10 border-navy/10' 
                                : 'text-gray-600 hover:text-navy hover:bg-gray-50'}
                              ${isActive(item.path) ? 'text-navy bg-gray-50 font-semibold' : ''}`}
                          >
                            {item.icon && <item.icon size={16} className={item.prominent ? 'text-gold' : 'text-gray-400'} />}
                            <span>{item.label}</span>
                          </Link>
                        ))}

                        {/* MegaMenu Grouped Dropdown (Services) */}
                        {link.groupedDropdown && link.groupedDropdown.map((group, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h4 className="font-heading text-sm font-bold text-navy mb-4 border-b border-gray-100 pb-3">{group.groupLabel}</h4>
                            <div className="flex flex-col space-y-1.5">
                              {group.items.map(item => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={`block py-2 px-3 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors duration-150 rounded-md
                                    ${isActive(item.path) ? 'text-navy bg-gray-50 font-semibold' : ''}`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-gold
                      ${isActive(link.path) ? 'text-gold' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link to="/contact" className="ml-3 bg-gold hover:bg-yellow-500 text-navy text-xs font-bold px-4 py-2 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
                Get In Touch
              </Link>

              {/* Translate Element */}
              <div className="ml-2 flex items-center">
                <div id="google_translate_element" className="scale-90 origin-right" />
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2 ml-3 border-l border-white/20 pl-4">
                <a href="https://www.facebook.com/people/Millinoxx-Pvt-Ltd/61579129431567/" target="_blank" rel="noopener noreferrer"
                  className="w-7 h-7 rounded bg-white hover:bg-gold flex items-center justify-center transition-colors duration-200">
                  <FaFacebookF size={12} className="text-[#004b75]" />
                </a>
                <a href="https://www.linkedin.com/company/millinoxxprivatelimited/" target="_blank" rel="noopener noreferrer"
                  className="w-7 h-7 rounded bg-white hover:bg-gold flex items-center justify-center transition-colors duration-200">
                  <FaLinkedinIn size={12} className="text-[#004b75]" />
                </a>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <div id="google_translate_element_mobile" className="scale-75 origin-right" />
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 text-white hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative w-80 max-w-[85vw] bg-white h-full overflow-y-auto shadow-2xl" style={{ animation: 'slideIn 0.3s ease forwards' }}>
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#004b75]">
              <div className="flex items-center text-white">
                <img src={logoImg} alt="Millinoxx Logo" className="h-8 w-auto object-contain" />
              </div>
              <button onClick={() => setMobileOpen(false)}>
                <X size={22} className="text-white" />
              </button>
            </div>
            <nav className="p-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold mb-1
                  ${isActive('/') ? 'text-navy bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Home
              </Link>
              {navLinks.map((link) =>
                link.dropdown || link.groupedDropdown ? (
                  <div key={link.label}>
                    <div className="flex items-center justify-between w-full pr-2">
                      {link.path ? (
                        <Link
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex-1 px-4 py-3 rounded-lg text-sm font-semibold
                            ${isParentActive(link) ? 'text-navy bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className={`flex-1 px-4 py-3 rounded-lg text-sm font-semibold
                          ${isParentActive(link) ? 'text-navy bg-gray-50' : 'text-gray-700'}`}>
                          {link.label}
                        </span>
                      )}
                      
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="p-2 text-gray-500 hover:text-navy rounded-md"
                        aria-label={`Expand ${link.label}`}
                      >
                        <span className="text-xl leading-none">{mobileExpanded === link.label ? '−' : '+'}</span>
                      </button>
                    </div>
                    
                    {mobileExpanded === link.label && (
                      <div className="ml-4 mb-2 border-l-2 border-gray-200 pl-3 mt-1">
                        {link.dropdown && link.dropdown.map(item => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-2 py-2 px-3 text-sm rounded transition-colors ${item.prominent ? 'font-semibold text-navy bg-navy/5' : ''} ${isActive(item.path) ? 'text-navy font-semibold bg-gray-50' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
                          >
                            {item.icon && <item.icon size={14} className={item.prominent ? 'text-gold' : 'text-gray-400'} />}
                            <span>{item.label}</span>
                          </Link>
                        ))}
                        {link.groupedDropdown && link.groupedDropdown.map((group, idx) => (
                          <div key={idx} className="mb-4 mt-2">
                            <h4 className="text-xs font-bold text-gray-400 mb-2 px-3 uppercase tracking-wider">{group.groupLabel}</h4>
                            <div className="flex flex-col space-y-1">
                              {group.items.map(item => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block py-2 px-3 text-sm rounded transition-colors ${isActive(item.path) ? 'text-navy font-semibold bg-gray-50' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
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
                      ${isActive(link.path) ? 'text-navy bg-gray-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 block text-center bg-gold text-navy font-bold px-6 py-3 rounded-sm transition-all duration-200 hover:bg-yellow-500 shadow-md"
              >
                Get In Touch
              </Link>

              <div className="mt-8 flex justify-center gap-4 pb-6">
                <a href="https://www.facebook.com/people/Millinoxx-Pvt-Ltd/61579129431567/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#004b75] flex items-center justify-center">
                  <FaFacebookF size={14} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/company/millinoxxprivatelimited/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#004b75] flex items-center justify-center">
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
