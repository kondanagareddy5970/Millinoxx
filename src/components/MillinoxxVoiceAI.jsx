import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff, X, Volume2, VolumeX, Loader } from 'lucide-react'
import industryData from '../data/industryData'

// ─── FULL VOICE RESPONSES from REAL WEBSITE CONTENT ─────────────────────────
function getVoiceResponse(transcript) {
  const t = transcript.toLowerCase().trim()

  // Security guard
  if (t.match(/prompt|system|instruction|secret|api.?key|config|backend|password|internal/)) {
    return `I'm unable to share internal or confidential information. For technical or business enquiries, please contact our team at srinivasu at millinoxx dot com or call plus 91 9959450031.`
  }

  // Greeting
  if (t.match(/^(hi|hello|hey|good\s*(morning|afternoon|evening)|namaste|start|help)/)) {
    return `Welcome to Millinoxx Engineering and Technology! I'm Millinoxx Voice AI. I can help you with information about our services, industries, contact details, company profile, and much more. Just ask me anything!`
  }

  // All services
  if (t.match(/all service|list service|what service|service.*offer|what.*do you (do|offer|provide)/)) {
    return `Millinoxx offers 5 core services. First, International Recruitment — global talent acquisition across 25 plus countries. Second, Indian Recruitment — domestic placements with a database of over 500,000 pre-screened candidates. Third, Shutdown and Turnaround Maintenance — specialized technical manpower with rapid mobilization in 24 to 72 hours. Fourth, Deputation and Manpower Outsourcing — flexible contract staffing, project-based outsourcing, and payroll management. Fifth, Information Technology Services — software development, cloud engineering, cybersecurity, DevOps, and digital transformation. Which service would you like to know more about?`
  }

  // International Recruitment
  if (t.match(/international.*(recruit|hire|talent|placement|staffing)|overseas.*recruit|global.*recruit|gulf.*recruit|abroad/)) {
    return `Our International Recruitment Services connect organizations worldwide with top-tier professionals across 25 plus countries. We cover regions including the Middle East, Africa, Russia, CIS Countries, Korea, Japan, Europe, UK, and USA. Our sectors include Oil and Gas, Infrastructure, MEP and HVAC, Aviation, and Manufacturing. We provide end-to-end support including visa guidance, documentation, medical clearance, travel arrangements, and post-deployment follow-up. With over 5000 successful placements, we are your trusted global recruitment partner.`
  }

  // Indian Recruitment
  if (t.match(/indian.*(recruit|hire|placement|domestic)|india.*(recruit|hire)|domestic.*recruit|pan.?india/)) {
    return `Our Indian Recruitment Services cover the full length and breadth of India with a database of over 500,000 pre-screened candidates. We are active on Naukri, Monster, Indeed, LinkedIn, and proprietary job boards. We serve all 28 states and union territories across sectors including Engineering, IT, Healthcare, Banking and Finance, Retail, Construction, Hospitality, Education, and Automotive. Our process includes requirement analysis, candidate sourcing, screening and shortlisting, and placement with follow-up.`
  }

  // Shutdown Maintenance
  if (t.match(/shutdown|turnaround|maintenance.*manpower|plant.*shutdown|industrial.*maintenance/)) {
    return `Our Shutdown and Turnaround Maintenance service provides highly skilled technical manpower for planned shutdowns, turnaround operations, and maintenance in oil and gas, power generation, refinery, petrochemical, and heavy industrial sectors. We can mobilize qualified manpower within 24 to 72 hours of confirmation. All personnel are certified in HSE protocols, OSHA, and site-specific safety requirements. Key roles include Shutdown Managers, Piping Engineers, Mechanical and Electrical Engineers, Welders, Safety Officers, NDT Technicians, Scaffolders, and Quality Control Inspectors.`
  }

  // Deputation / Outsourcing
  if (t.match(/deputation|outsourc|contract.?staff|manpower.*outsourc|payroll|flexible.*staff/)) {
    return `Our Deputation and Manpower Outsourcing service offers flexible staffing solutions for modern businesses. We offer four engagement models: Contract Staffing for short to long-term project-based work, Contract-to-Hire for trial engagement before permanent hire, Project-Based Outsourcing with end-to-end accountability, and Payroll Management with complete HR administration. Benefits include reducing operational costs, scaling workforce rapidly, accessing specialized skills, and maintaining business continuity. We serve sectors including Oil and Gas, Manufacturing, IT, Banking, Healthcare, and Construction.`
  }

  // IT Services
  if (t.match(/it.?service|information.?technology.*service|software.*staff|tech.*staff|cloud|devops|cybersec|digital.?transform/)) {
    return `Our Information Technology Services cover the full digital spectrum. We offer IT staffing and talent acquisition, cloud solutions on AWS Azure and GCP, cybersecurity consulting, DevOps and automation, Data Science and AI staffing, and digital transformation consulting. We work with startups, SMEs, and Fortune 500 companies. Our technology stacks include React, Node JS, Python, Java, Kubernetes, Docker, TensorFlow, Salesforce, and SAP.`
  }

  // Contact
  if (t.match(/contact|reach|phone|email|address|office|location|call|where.*are|headquarter/)) {
    return `Millinoxx has two offices. Our Hyderabad headquarters is at the 4th Floor, AWFIS Sarvatham, HITEC City, Hyderabad, Telangana, Pin 500081. Phone plus 91 9959450031. Our Visakhapatnam office is at Sri Ram Nagar, Malkapuram, Visakhapatnam, Andhra Pradesh, Pin 530011. Phone plus 91 9959001731. Email for both offices is srinivasu at millinoxx dot com. Our website is www dot millinoxx dot com. You can also submit an enquiry through our contact form and our team responds within 24 business hours.`
  }

  // CEO
  if (t.match(/ceo|founder|srinivasu|leader|director/)) {
    return `Millinoxx was founded by Srinivasu, our Founder and CEO, whose vision has driven the company to become a premier global recruitment technology partner. Srinivasu says — At Millinoxx Experts, our mission is simple yet powerful: to make a meaningful and lasting impact on your staffing strategies. Under his leadership, Millinoxx has completed 5000 plus placements across 25 plus countries in over 10 years of excellence.`
  }

  // Company Profile / About
  if (t.match(/company.?profile|about.*millinoxx|who.*are|background|founded|history|established/)) {
    return `Millinoxx Engineering and Technology Private Limited is a premier international recruitment, manpower outsourcing, and engineering technology firm headquartered in HITEC City, Hyderabad, India. With over 10 years of excellence, we have completed 5000 plus successful placements across 25 plus countries, serving clients in the Gulf, Europe, UK, USA, and Asia. Our mission is to redefine recruitment by making top-tier global talent accessible to organizations worldwide through integrity, innovation, and deep industry understanding.`
  }

  // Tech Partner
  if (t.match(/tech.?partner|kodryx|ai partner|technology partner|leadership.*team|team/)) {
    return `Millinoxx's strategic technology partner is Kodryx AI. Their team includes Venkata Talatam as Chief Executive Officer, Sonu Kumar as Chief Technology Officer, and Ekshith Kolla as Founding Engineer. Kodryx AI powers cutting-edge artificial intelligence, machine learning, and software development solutions to enhance our recruitment intelligence systems and training programs.`
  }

  // Testimonials
  if (t.match(/testimonial|review|client.*say|feedback|success.*story/)) {
    return `Our clients love working with Millinoxx. One HR Director from a Global IT Firm in UAE said — Millinoxx Experts helped us expand our team across multiple global locations. We don't see them as recruiters — we see them as strategic partners. A VP Operations from an Engineering Company in Germany said — Their precision, professionalism, and consistent delivery have raised our hiring standards significantly. Join hundreds of companies worldwide who trust Millinoxx for their talent needs.`
  }

  // Industries overview
  if (t.match(/industr|sector|field|domain|which.*industr|all.*industr/)) {
    return `Millinoxx serves 16 industries. Heavy Equipment and Engineering, Power Plant and Energy, Oil and Gas EPC, MEP and HVAC, Construction and Real Estate, Manufacturing, Shipping and Marine, Automotive, Aviation and Aerospace, Agriculture, Hospitality, Garments and FMCG, Hospitals and Medical, IT and Telecom, Banking and Finance, and Cyber Security. Ask me about any specific industry and I'll share the roles and countries we serve.`
  }

  // Specific Industry checks
  for (const [slug, ind] of Object.entries(industryData)) {
    const titleLower = ind.title.toLowerCase();
    const keywords = titleLower.split(/[\s&,\/()-]+/).filter(w => w.length > 3);
    let matched = false;
    
    if (slug === 'hospitals' && t.match(/healthcare|hospital|medical|doctor|nurse|pharma|clinic|surgeon|physician/)) {
      matched = true;
    } else if (slug === 'heavy-equipment' && t.match(/heavy|equipment|crane|bulldozer|excavator|hydraulic/)) {
      matched = true;
    } else if (slug === 'power-plant' && t.match(/power|energy|sewage|water.*treatment|boiler|turbine|scada/)) {
      matched = true;
    } else if (slug === 'oil-gas' && t.match(/oil|gas|petroleum|refin|upstream|downstream|epc|drilling/)) {
      matched = true;
    } else if (slug === 'mep' && t.match(/mep|hvac|plumbing|electromechanical|chiller/)) {
      matched = true;
    } else if (slug === 'construction' && t.match(/construction|real.?estate|infrastructure|civil|architect|structural/)) {
      matched = true;
    } else if (slug === 'manufacturing' && t.match(/manufacturing|factory|production|cnc|welder|fabricator/)) {
      matched = true;
    } else if (slug === 'shipping' && t.match(/shipping|marine|maritime|port|shipyard|captain|deck/)) {
      matched = true;
    } else if (slug === 'automotive' && t.match(/automotive|car|vehicle|ev|assembly/)) {
      matched = true;
    } else if (slug === 'aviation' && t.match(/aviation|aerospace|aircraft|pilot|airline|mro|avionics/)) {
      matched = true;
    } else if (slug === 'agriculture' && t.match(/agri|farm|crop|soil|greenhouse/)) {
      matched = true;
    } else if (slug === 'hospitality' && t.match(/hospitality|hotel|chef|restaurant|f&b|guest|concierge/)) {
      matched = true;
    } else if (slug === 'garments' && t.match(/garment|fashion|textile|clothing|designer/)) {
      matched = true;
    } else if (slug === 'it-telecom' && t.match(/it|telecom|software|network|developer|cloud|devops|data.*science/)) {
      matched = true;
    } else if (slug === 'banking-finance' && t.match(/banking|finance|financial|investment|wealth|fintech|accountant|auditor/)) {
      matched = true;
    } else if (slug === 'cyber-security' && t.match(/cyber|security|ciso|hacker|ethical|penetration|soc/)) {
      matched = true;
    } else if (keywords.some(k => t.includes(k))) {
      matched = true;
    }

    if (matched) {
      const sampleRoles = ind.roles.slice(0, 6).join(', ');
      const sampleCountries = ind.countries.slice(0, 5).join(', ');
      const otherCountriesCount = ind.countries.length - 5;
      
      return `For the ${ind.title}, we source and place qualified professionals globally. Our key roles include ${sampleRoles}, and others. We serve countries such as ${sampleCountries}, and ${otherCountriesCount} more. Our overview for this sector: ${ind.overview}`;
    }
  }

  // Pricing
  if (t.match(/price|cost|fee|rate|charge|budget|quote|how much|package/)) {
    return `Our pricing is fully customized based on the type of service, number of positions, skill level required, timeline, and engagement model. To get an accurate proposal, please contact our team at plus 91 9959450031 or email srinivasu at millinoxx dot com. You can also fill our contact form on the website and our team will respond within 24 hours with a tailored quote.`
  }

  // Process
  if (t.match(/process|how.*work|how.*hire|step|procedure|timeline|how.*recruit/)) {
    return `Our recruitment process has 7 steps. First, requirement analysis where we understand your needs and goals. Second, candidate sourcing from our database of over 500,000 candidates and global networks. Third, AI-enabled screening and shortlisting. Fourth, presentation of best-matched profiles. Fifth, client interviews. Sixth, offer and onboarding with documentation, visa support for international roles, and mobilization. Seventh, post-placement follow-up to ensure long-term success. Typical turnaround is 5 to 15 working days for most roles.`
  }

  // Why Millinoxx
  if (t.match(/why.*millinoxx|why.*choose|advantage|benefit.*millinoxx|unique/)) {
    return `There are many reasons to choose Millinoxx. We have global reach across 25 plus countries. We have a proven track record of 5000 plus placements over 10 years. We use AI-powered candidate matching for precise results. We provide full-service support from sourcing through visa, travel, and deployment. We have deep expertise in 16 plus industries. Our shutdown teams can be mobilized in 24 to 72 hours. And we deliver tailored solutions with integrity and long-term partnerships.`
  }

  // Gallery
  if (t.match(/gallery|photo|image|video|company.*video/)) {
    return `Millinoxx has an Office Gallery, a Work Gallery showing projects and placements, and a Tech Gallery showcasing our technology in action. You can also watch our Company Video to learn about our story, team, and services. Visit the gallery sections on our website for a visual tour.`
  }

  // Stats
  if (t.match(/stat|achievement|number|how many|milestone/)) {
    return `Here are Millinoxx's key achievements. We have served 25 plus countries, completed 5000 plus successful placements, covered 16 plus industries, maintained 10 plus years of excellence, built a database of 500,000 plus pre-screened candidates, and can mobilize shutdown teams in 24 to 72 hours. We operate from 2 offices in Hyderabad and Visakhapatnam.`
  }

  // Default
  return `Thank you for your question! I want to make sure I give you the most accurate information about Millinoxx. You can ask me about our services such as international recruitment, Indian recruitment, IT services, shutdown maintenance, or outsourcing. You can also ask about the 16 industries we serve, our contact information, company profile, CEO, tech partner Kodryx AI, or client testimonials. How can I help you?`
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function MillinoxxVoiceAI() {
  const [open, setOpen] = useState(false)
  const [listening, setListening] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [muted, setMuted] = useState(false)
  const [status, setStatus] = useState('idle')
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')
  const [supported, setSupported] = useState(true)
  const [showPulse, setShowPulse] = useState(true)
  const [waveActive, setWaveActive] = useState(false)

  const recognitionRef = useRef(null)
  const synthRef = useRef(window.speechSynthesis)

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    recognitionRef.current = null
    setListening(false)
    setWaveActive(false)
  }, [])

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setSupported(false)
    }
    const t = setTimeout(() => setShowPulse(false), 6000)
    
    const handleCloseVoice = () => {
      stopListening()
      synthRef.current?.cancel()
      setSpeaking(false); setWaveActive(false); setStatus('idle')
      setTranscript(''); setResponse('')
      setOpen(false)
    }
    window.addEventListener('close-voice-ai', handleCloseVoice)
    
    return () => {
      clearTimeout(t)
      window.removeEventListener('close-voice-ai', handleCloseVoice)
    }
  }, [stopListening])

  const speak = useCallback((text) => {
    if (muted || !synthRef.current) return
    synthRef.current.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1.05
    utterance.volume = 1
    const voices = synthRef.current.getVoices()
    const voice = voices.find(v => v.name.includes('Google') && v.lang.startsWith('en'))
      || voices.find(v => v.lang.startsWith('en-'))
    if (voice) utterance.voice = voice
    utterance.onstart = () => { setSpeaking(true); setWaveActive(true); setStatus('speaking') }
    utterance.onend = () => { setSpeaking(false); setWaveActive(false); setStatus('idle') }
    utterance.onerror = () => { setSpeaking(false); setWaveActive(false); setStatus('idle') }
    synthRef.current.speak(utterance)
  }, [muted])

  const startListening = useCallback(() => {
    if (!supported) return
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    const rec = new SR()
    rec.continuous = false
    rec.interimResults = true
    rec.lang = 'en-US'
    rec.onstart = () => { setListening(true); setStatus('listening'); setWaveActive(true); setTranscript(''); setResponse('') }
    rec.onresult = (e) => {
      const current = Array.from(e.results).map(r => r[0].transcript).join('')
      setTranscript(current)
    }
    rec.onend = () => {
      setListening(false)
      setWaveActive(false)
      setStatus('processing')
      setTimeout(() => {
        setTranscript(prev => {
          if (prev.trim()) {
            const reply = getVoiceResponse(prev)
            setResponse(reply)
            speak(reply)
          } else {
            setStatus('idle')
          }
          return prev
        })
      }, 400)
    }
    rec.onerror = (e) => {
      setListening(false)
      setWaveActive(false)
      if (e.error === 'not-allowed') {
        setStatus('error')
        setResponse('Microphone access was denied. Please allow microphone permissions and try again.')
      } else {
        setStatus('idle')
      }
    }
    recognitionRef.current = rec
    rec.start()
  }, [supported, speak])

  const handleMicClick = () => {
    if (listening) { stopListening() }
    else if (speaking) { synthRef.current?.cancel(); setSpeaking(false); setWaveActive(false); setStatus('idle') }
    else { startListening() }
  }

  const toggleMute = () => {
    setMuted(m => {
      if (!m && speaking) { synthRef.current?.cancel(); setSpeaking(false); setWaveActive(false); setStatus('idle') }
      return !m
    })
  }

  const handleOpen = () => {
    setOpen(true)
    setShowPulse(false)
    window.dispatchEvent(new CustomEvent('close-chatbot'));
    const welcome = `Welcome to Millinoxx Engineering and Technology! I'm Millinoxx Voice AI. Ask me anything about our international recruitment services, the 16 industries we serve, our contact information, or our company profile. I'm here to help!`
    setResponse(welcome)
    setTimeout(() => speak(welcome), 500)
  }

  const handleClose = () => {
    stopListening()
    synthRef.current?.cancel()
    setSpeaking(false); setWaveActive(false); setStatus('idle')
    setTranscript(''); setResponse('')
    setOpen(false)
  }

  const statusLabels = {
    idle: 'Tap the mic to speak',
    listening: '🎙️ Listening… speak now',
    processing: '⏳ Processing your request…',
    speaking: '🔊 Millinoxx Voice AI speaking…',
    error: '⚠️ Microphone access required',
  }

  const WaveBars = ({ active }) => (
    <div className="flex items-end justify-center gap-[3px] h-8">
      {[...Array(11)].map((_, i) => (
        <motion.div key={i} className="rounded-full"
          style={{ width: 3, background: i % 2 === 0 ? '#C9A84C' : '#E8C97A' }}
          animate={active
            ? { height: [6, 20 + Math.sin(i * 0.8) * 10, 6], opacity: [0.5, 1, 0.5] }
            : { height: 3, opacity: 0.25 }
          }
          transition={active
            ? { duration: 0.5 + i * 0.06, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }
            : { duration: 0.3 }
          }
        />
      ))}
    </div>
  )

  return (
    <>
      {/* Floating Button — RIGHT side, above the chatbot (bottom: 90px so it sits above the chat button) */}
      <div className="fixed z-[99999] flex flex-col items-end gap-3 right-4 sm:right-6" style={{ bottom: '90px' }}>
        <AnimatePresence>
          {!open && showPulse && (
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-yellow-200 whitespace-nowrap"
            >
              🎙️ Voice AI — Talk to us!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-yellow-400 cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)' }}
          aria-label="Open Millinoxx Voice AI"
        >
          <Mic size={22} style={{ color: '#0A1628' }} />
          <motion.span className="absolute inset-0 rounded-full border-2 border-yellow-400"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.button>
      </div>

      {/* Voice AI Panel — right side, above the buttons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed z-[99999] rounded-3xl shadow-2xl overflow-hidden"
            style={{
              bottom: '160px', right: '16px',
              width: 'calc(100vw - 32px)', maxWidth: '340px',
              maxHeight: 'calc(100vh - 180px)',
              background: 'linear-gradient(160deg, #0A1628 0%, #0D1F3C 60%, #13244A 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
              display: 'flex', flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1.5px solid #C9A84C' }}>
                  <Mic size={18} className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Millinoxx Voice AI</div>
                  <div className="text-xs" style={{ color: 'rgba(201,168,76,0.7)' }}>Conversational Assistant</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={toggleMute}
                  className="text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors" aria-label={muted ? 'Unmute' : 'Mute'}>
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
                <button onClick={handleClose}
                  className="text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Close">
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Orb & Waveform */}
            <div className="flex flex-col items-center px-5 py-4 gap-3">
              <div className="relative flex items-center justify-center">
                {waveActive && [1, 2, 3].map(i => (
                  <motion.div key={i} className="absolute rounded-full border"
                    style={{ borderColor: `rgba(201,168,76,${0.22 - i * 0.05})` }}
                    animate={{ width: [80, 80 + i * 26], height: [80, 80 + i * 26], opacity: [0.8, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28, ease: 'easeOut' }}
                  />
                ))}
                <motion.button
                  onClick={handleMicClick}
                  animate={waveActive
                    ? { boxShadow: ['0 0 18px rgba(201,168,76,0.35)', '0 0 40px rgba(201,168,76,0.65)', '0 0 18px rgba(201,168,76,0.35)'] }
                    : { boxShadow: '0 0 18px rgba(201,168,76,0.22)' }
                  }
                  transition={{ duration: 1.2, repeat: waveActive ? Infinity : 0 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer relative z-10"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)' }}
                  aria-label={listening ? 'Stop' : speaking ? 'Stop speaking' : 'Start speaking'}
                >
                  {status === 'processing'
                    ? <Loader size={28} style={{ color: '#0A1628' }} className="animate-spin" />
                    : listening
                      ? <MicOff size={28} style={{ color: '#0A1628' }} />
                      : <Mic size={28} style={{ color: '#0A1628' }} />
                  }
                </motion.button>
              </div>

              <WaveBars active={waveActive} />

              <motion.p key={status} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold text-center"
                style={{ color: status === 'error' ? '#f87171' : '#C9A84C' }}>
                {statusLabels[status]}
              </motion.p>
            </div>

            {/* Transcript & Response */}
            <div className="px-5 pb-5 space-y-3 flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {transcript && (
                  <motion.div key="t" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xs text-white/40 mb-1 uppercase tracking-wider font-semibold">You said</p>
                    <p className="text-white/80 leading-relaxed">{transcript}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence mode="wait">
                {response && (
                  <motion.div key="r" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-3 rounded-xl text-sm max-h-36 overflow-y-auto"
                    style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    <p className="text-xs mb-1 uppercase tracking-wider font-semibold" style={{ color: '#C9A84C' }}>Millinoxx AI</p>
                    <p className="text-white/70 leading-relaxed text-xs">{response}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!supported && (
              <div className="px-5 pb-4">
                <div className="p-3 rounded-xl text-xs text-center" style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', color: '#fca5a5' }}>
                  Voice recognition is not supported in your browser. Please use Chrome or Edge, or use our chat widget instead.
                </div>
              </div>
            )}

            <div className="px-5 py-3 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Powered by <strong style={{ color: 'rgba(201,168,76,0.7)' }}>Millinoxx Voice AI</strong>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
