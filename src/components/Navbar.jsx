import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
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

/** Clears the googtrans cookie and reloads to restore English */
function restoreEnglish() {
  const host = window.location.hostname
  const expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie = `googtrans=; ${expires}; path=/`
  document.cookie = `googtrans=; ${expires}; path=/; domain=.${host}`
  document.cookie = `googtrans=; ${expires}; path=/; domain=${host}`
  window.location.reload()
}

/**
 * Watches the <html> element for the class "translated-ltr" or "translated-rtl"
 * that Google Translate adds when a translation is active.
 */
function useIsTranslated() {
  const [translated, setTranslated] = useState(false)

  useEffect(() => {
    const check = () => {
      const cl = document.documentElement.classList
      setTranslated(cl.contains('translated-ltr') || cl.contains('translated-rtl'))
    }
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    // Fallback poll
    const id = setInterval(check, 1000)
    return () => { obs.disconnect(); clearInterval(id) }
  }, [])

  return translated
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)
  const isTranslated = useIsTranslated()

  // ── Reset all states on route change ──────────────────────────────────────
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  // ── Close mobile drawer on ESC key ──────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // ── Helpers ────────────────────────────────────────────────────────────────
  const closeAll = () => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }
  const isActive = (path) => location.pathname === path
  const isParentActive = (link) => {
    if (link.dropdown) return link.dropdown.some(d => location.pathname === d.path)
    if (link.groupedDropdown) return link.groupedDropdown.some(g => g.items.some(d => location.pathname === d.path))
    return false
  }

  return (
    <>
      {/* ── Fixed Navbar wrapper ──────────────────────────────────────── */}
      <div ref={navRef} className="fixed top-0 left-0 right-0 z-50" style={{ overflow: 'visible' }}>
        <nav className="bg-[#004b75] border-b border-white/10 py-3.5 shadow-lg" style={{ overflow: 'visible' }}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 group" onClick={closeAll}>
              <img
                src={logoImg}
                alt="Millinoxx Engineering & Technology"
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* ── Desktop Nav ─────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-5" style={{ overflow: 'visible' }}>
              {navLinks.map((link) =>
                link.dropdown || link.groupedDropdown ? (
                  <div
                    key={link.label}
                    className="relative group py-2"
                    style={{ overflow: 'visible' }}
                  >
                    {link.path ? (
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 px-2.5 py-1 text-sm font-medium transition-colors duration-200 hover:text-gold
                          ${isParentActive(link) ? 'text-gold' : 'text-white'}`}
                      >
                        {link.label}
                        <ChevronDown size={14} className="opacity-60" />
                      </Link>
                    ) : (
                      <button
                        className={`flex items-center gap-1 px-2.5 py-1 text-sm font-medium transition-colors duration-200 hover:text-gold
                          ${isParentActive(link) ? 'text-gold' : 'text-white'}`}
                      >
                        {link.label}
                        <ChevronDown size={14} className="opacity-60" />
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
                            onClick={closeAll}
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
                            onClick={closeAll}
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
                                  onClick={closeAll}
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

              <Link
                to="/contact"
                className="ml-2 bg-gold hover:bg-yellow-500 text-navy text-xs font-bold px-4 py-2 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Get In Touch
              </Link>

              {/* ── Google Translate widget + restore button ─────────── */}
              <div className="ml-2 flex items-center gap-1.5" style={{ overflow: 'visible' }}>
                {/* Native Google Translate SIMPLE widget */}
                <div id="google_translate_element" style={{ overflow: 'visible', display: 'inline-block', verticalAlign: 'middle' }} />

                {/* "↩ English" restore button — only visible when page is translated */}
                {isTranslated && (
                  <button
                    onClick={restoreEnglish}
                    title="Restore original English"
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold
                      bg-white/15 hover:bg-white/30 border border-white/25 hover:border-white/50
                      text-white transition-all duration-200 whitespace-nowrap"
                  >
                    ↩ English
                  </button>
                )}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2 border-l border-white/20 pl-4">
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
              {/* Google Translate widget (smaller) */}
              <div id="google_translate_element_mobile_dummy" style={{ display: 'none' }} />
              <div className="scale-90 origin-right" style={{ overflow: 'visible' }}>
                <div id="google_translate_element_mob" />
              </div>
              {isTranslated && (
                <button
                  onClick={restoreEnglish}
                  className="text-white text-xs font-semibold px-2 py-1 rounded bg-white/15 border border-white/25 whitespace-nowrap"
                >
                  ↩ EN
                </button>
              )}
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

      {/* ── Mobile Drawer ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div
            className="relative w-80 max-w-[85vw] bg-white h-full overflow-y-auto shadow-2xl"
            style={{ animation: 'slideIn 0.3s ease forwards' }}
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#004b75]">
              <img src={logoImg} alt="Millinoxx Logo" className="h-8 w-auto object-contain" />
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
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
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
                                  onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
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

              {/* Restore English in drawer */}
              {isTranslated && (
                <button
                  onClick={restoreEnglish}
                  className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-[#004b75] text-[#004b75] text-sm font-bold hover:bg-[#004b75] hover:text-white transition-colors duration-200"
                >
                  ↩ Restore Original English
                </button>
              )}

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
