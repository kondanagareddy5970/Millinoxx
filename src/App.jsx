import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MillinoxxAI from './components/MillinoxxAI'
import MillinoxxVoiceAI from './components/MillinoxxVoiceAI'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import CompanyProfile from './pages/about/CompanyProfile'
import CeoMessage from './pages/about/CeoMessage'
import TechPartner from './pages/about/TechPartner'
import Testimonials from './pages/about/Testimonials'
import CompanyVideo from './pages/about/CompanyVideo'

// Services
import InternationalRecruitment from './pages/services/InternationalRecruitment'
import IndianRecruitment from './pages/services/IndianRecruitment'
import ShutdownMaintenance from './pages/services/ShutdownMaintenance'
import DeputationOutsourcing from './pages/services/DeputationOutsourcing'
import ItServices from './pages/services/ItServices'
import ServicePlaceholder from './pages/services/ServicePlaceholder'

// Industries
import IndustryPage from './pages/industries/IndustryPage'
import { servicesData, industriesData } from './config/data'

// Gallery
import OfficeGallery from './pages/gallery/OfficeGallery'
import WorkGallery from './pages/gallery/WorkGallery'
import TechGallery from './pages/gallery/TechGallery'

// Contact
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/company-profile" element={<CompanyProfile />} />
          <Route path="/about/ceo-message" element={<CeoMessage />} />
          <Route path="/about/tech-partner" element={<TechPartner />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/about/company-video" element={<CompanyVideo />} />

          {/* Services Routes */}
          <Route path="/services/international-recruitment" element={<InternationalRecruitment />} />
          <Route path="/services/indian-recruitment" element={<IndianRecruitment />} />
          <Route path="/services/shutdown-maintenance" element={<ShutdownMaintenance />} />
          <Route path="/services/deputation-outsourcing" element={<DeputationOutsourcing />} />
          <Route path="/services/it-services" element={<ItServices />} />
          <Route path="/services/ai-solutions" element={<ServicePlaceholder slug="ai-solutions" />} />
          <Route path="/services/ai-automation" element={<ServicePlaceholder slug="ai-automation" />} />
          <Route path="/services/machine-learning" element={<ServicePlaceholder slug="machine-learning" />} />
          <Route path="/services/gen-ai" element={<ServicePlaceholder slug="gen-ai" />} />
          <Route path="/services/cloud-devops" element={<ServicePlaceholder slug="cloud-devops" />} />
          <Route path="/services/cyber-security" element={<ServicePlaceholder slug="cyber-security" />} />
          <Route path="/services/data-engineering" element={<ServicePlaceholder slug="data-engineering" />} />

          {/* Industries Routes */}
          {industriesData.map(industry => (
            <Route key={industry.path} path={industry.path} element={<IndustryPage slug={industry.path.replace('/industries/', '')} />} />
          ))}

          <Route path="/gallery/office" element={<OfficeGallery />} />
          <Route path="/gallery/work" element={<WorkGallery />} />
          <Route path="/gallery/tech" element={<TechGallery />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <MillinoxxAI />
      <MillinoxxVoiceAI />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
