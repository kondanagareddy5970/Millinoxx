import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, Minimize2, Maximize2 } from 'lucide-react'
import industryData from '../data/industryData'

// ─── FULL WEBSITE KNOWLEDGE BASE ───────────────────────────────────────────
const KB = {
  company: {
    name: 'Millinoxx Engineering & Technology Pvt. Ltd.',
    shortName: 'Millinoxx Experts',
    hq: 'HITEC City, Hyderabad, Telangana, India',
    founded: '10+ years of excellence',
    website: 'www.millinoxx.com',
    summary: 'Premier international recruitment, manpower outsourcing & engineering technology firm headquartered in Hyderabad, India. We serve clients across the Gulf, Europe, UK, USA and Asia.',
    placements: '5000+ successful placements',
    countries: '25+ countries served',
    vision: 'To be the world\'s most trusted and innovative recruitment partner — recognized for integrity, excellence, and our ability to transform organizations through outstanding human capital solutions.',
    mission: 'To redefine recruitment by making top-tier global talent accessible to organizations worldwide — through integrity, innovation, and deep industry understanding.',
    commitment: 'We don\'t just fill vacancies — we build teams. Our recruitment process evaluates attitude, alignment, and potential so every hire is a step toward your company\'s vision.',
    values: ['Integrity & Transparency', 'Innovation & Adaptability', 'Excellence in Delivery', 'Client-Centric Approach', 'Global Mindset', 'Long-term Partnerships'],
    approach: 'AI-enabled assessments, data-driven insights, and advanced sourcing strategies to identify candidates who align with company culture.',
    ceo: { name: 'SRINIVASU', title: 'Founder & CEO, Millinoxx Experts', quote: '"Let\'s build a workforce that drives progress."' },
  },
  offices: [
    {
      city: 'Hyderabad Office',
      address: '4th Floor, AWFIS Sarvatham, Plot No 12, Deloitte Dr, Phase 2, HITEC City, Hyderabad, Telangana, India — 500081',
      phone: '+91 9959450031',
      email: 'srinivasu@millinoxx.com',
    },
    {
      city: 'Visakhapatnam Office',
      address: 'Plot No: 66-2-48/1, Sri Ram Nagar, Road No: 2, Coramandal Gate, PO: Malkapuram, Visakhapatnam, Andhra Pradesh, India — 530011',
      phone: '+91 9959001731',
      email: 'srinivasu@millinoxx.com',
    },
  ],
  services: {
    international: {
      title: 'International Recruitment Services',
      path: '/services/international-recruitment',
      summary: 'Global talent acquisition connecting organizations worldwide with top-tier professionals.',
      details: 'We specialize in identifying and mobilizing overseas candidates for niche and high-demand skill areas. With 5000+ successful placements across 25+ countries, we operate end-to-end from sourcing to deployment.',
      sectors: ['Oil & Gas', 'Infrastructure & Civil', 'MEP & HVAC', 'Aviation & Aerospace', 'Manufacturing & Heavy Engineering'],
      regions: ['Middle East', 'Africa', 'Russia', 'CIS Countries', 'Korea', 'Japan', 'Europe', 'UK', 'USA'],
      valueAdded: ['Immigration & Visa Guidance', 'Candidate Documentation & Compliance', 'Pre-Departure Orientation', 'Mobilization & Deployment Coordination', 'Post-Deployment Follow-Up', 'Medical Check-Up & Fitness Clearance', 'Consulate Formalities & Visa Stamping', 'Travel & Ticketing Arrangements', 'Orientation Program'],
    },
    indian: {
      title: 'Indian Recruitment Services',
      path: '/services/indian-recruitment',
      summary: 'Domestic talent acquisition covering all sectors, all 28 states, and every experience level across India.',
      details: 'Access to 500,000+ pre-screened candidates. Active on Naukri, Monster, Indeed, LinkedIn, and proprietary job boards. Pan-India coverage with regional expertise.',
      sectors: ['Engineering & Manufacturing', 'Information Technology', 'Healthcare & Pharma', 'Banking & Finance', 'Retail & FMCG', 'Construction & Real Estate', 'Oil & Gas', 'Hospitality', 'Education', 'Automotive'],
      process: ['Requirement Analysis', 'Candidate Sourcing', 'Screening & Shortlisting', 'Placement & Follow-up'],
    },
    shutdown: {
      title: 'Shutdown & Turnaround Maintenance Services',
      path: '/services/shutdown-maintenance',
      summary: 'Specialized technical manpower for planned shutdowns, turnarounds, and maintenance in oil & gas, power, refinery, petrochemical, and heavy industrial sectors.',
      details: 'Rapid mobilization within 24–72 hours of confirmation. All personnel certified in HSE protocols, OSHA, and site-specific safety requirements.',
      roles: ['Shutdown Managers / Coordinators', 'Piping Engineers & Supervisors', 'Mechanical Engineers', 'Electrical Engineers', 'Instrumentation Engineers', 'Welders (GTAW, SMAW, FCAW)', 'Pipe Fitters & Riggers', 'Safety Officers / HSE Engineers', 'NDT Technicians', 'Scaffolders', 'Insulation Technicians', 'Quality Control Inspectors'],
      features: ['Rapid Mobilization (24-72 hrs)', 'HSE & OSHA Safety Compliance', 'Specialized Skills for Shutdowns', 'Zero Downtime Focus'],
    },
    deputation: {
      title: 'Deputation / Manpower Outsourcing & Consulting',
      path: '/services/deputation-outsourcing',
      summary: 'Flexible staffing & consulting solutions giving your organization agility without compromising quality, compliance, or expertise.',
      models: ['Contract Staffing – Short to long-term for project-based work', 'Contract-to-Hire – Trial engagement before permanent hire', 'Project-Based Outsourcing – End-to-end manpower with accountability', 'Payroll Management – Complete payroll, compliance, HR administration'],
      benefits: ['Reduce Operational Costs', 'Scale Workforce Rapidly', 'Access Specialized Skills', 'Maintain Business Continuity', 'Ensure Compliance & Legal Cover', 'Focus on Core Business Activities'],
      sectors: ['Oil & Gas', 'Manufacturing', 'IT & Telecom', 'Banking & Finance', 'Healthcare', 'Construction', 'Retail & FMCG', 'Engineering'],
    },
    it: {
      title: 'Information Technology Services',
      path: '/services/it-services',
      summary: 'IT staffing, DevOps, cloud solutions, cybersecurity & digital transformation for startups, SMEs, and Fortune 500 companies.',
      details: 'We provide permanent, contract, and project-based IT staffing solutions aligned with your technology roadmap.',
      subServices: ['Software Development – Full-stack, mobile, frontend/backend across all frameworks', 'Cloud Engineering – AWS, Azure, GCP certified architects for migration & infrastructure', 'Cybersecurity – Security analysts, ethical hackers, CISO consultants, compliance specialists', 'Data Science & AI – Data engineers, ML engineers, AI researchers, BI specialists', 'DevOps & SRE – CI/CD specialists, Kubernetes engineers, site reliability engineers', 'Digital Transformation – Technology consultants for complete digital transformation'],
      techStack: ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'TensorFlow', 'Salesforce', 'SAP'],
    },
  },
  industries: industryData,
  techPartner: {
    name: 'Kodryx AI',
    role: 'Strategic Technology Partner',
    summary: 'Powers cutting-edge AI and technology solutions including artificial intelligence, machine learning, and advanced software development to enhance training programs and recruitment intelligence systems.',
    team: [
      { name: 'Venkata Talatam', role: 'Chief Executive Officer (CEO)' },
      { name: 'Sonu Kumar', role: 'Chief Technology Officer (CTO)' },
      { name: 'Ekshith Kolla', role: 'Founding Engineer' },
    ],
  },
  testimonials: [
    { quote: 'Millinoxx Experts helped us expand our team across multiple global locations. We don\'t see them as recruiters — we see them as strategic partners.', name: 'HR Director', company: 'Global IT Firm, UAE' },
    { quote: 'We struggled to find skilled manpower for our Europe operations until we partnered with Millinoxx. Their precision, professionalism, and consistent delivery have raised our hiring standards significantly.', name: 'VP Operations', company: 'Engineering Company, Germany' },
    { quote: 'What stands out is their deep understanding of cultural and mindset fit. Every hire has added real value to our team. Outstanding service!', name: 'HR Talent Acquisition Lead', company: 'UK-based Startup' },
  ],
}

// ─── INTENT ENGINE ──────────────────────────────────────────────────────────
function getResponse(msg) {
  const m = msg.toLowerCase().trim()

  // Security guard
  if (m.match(/prompt|system|instruction|secret|api.?key|config|backend|password|internal/)) {
    return `I'm not able to share internal system information. For any technical or business enquiries, please contact our team at **srinivasu@millinoxx.com** or visit our [Contact page](/contact). 🔒`
  }

  // Greetings
  if (m.match(/^(hi|hello|hey|good\s*(morning|afternoon|evening)|namaste|howdy|greetings|start|help me)/)) {
    return `Hello! 👋 Welcome to **Millinoxx Engineering & Technology Pvt. Ltd.**!\n\nI'm **Millinoxx AI**, your intelligent consultant. I can help you with:\n\n• 🌍 **Services** — International, Indian Recruitment, IT, Shutdown, Outsourcing\n• 🏭 **Industries** — 16 sectors including Oil & Gas, Healthcare, IT, Aviation\n• 📞 **Contact** — Office addresses, phone numbers, email\n• 🏢 **About Us** — Company profile, CEO message, values, tech partner\n• 🌟 **Testimonials** — Client success stories\n\nWhat would you like to know?`
  }

  // All Services overview
  if (m.match(/all service|list service|what service|service.*offer|what.*do you (do|offer|provide)/)) {
    return `Millinoxx offers **5 core services**:\n\n1️⃣ **International Recruitment** — Global talent across 25+ countries\n2️⃣ **Indian Recruitment** — Pan-India domestic placements, 500,000+ candidate database\n3️⃣ **Shutdown & Turnaround Maintenance** — Specialized technical manpower (24-72 hr mobilization)\n4️⃣ **Deputation / Manpower Outsourcing** — Contract staffing, payroll management & consulting\n5️⃣ **IT Services** — Software development, cloud, cybersecurity, DevOps, AI/ML\n\nWhich service would you like to explore in detail?`
  }

  // International Recruitment
  if (m.match(/international.*(recruit|hire|talent|placement|staffing)|overseas.*recruit|global.*recruit|recruit.*global|gulf.*recruit|abroad.*recruit/)) {
    const s = KB.services.international
    return `**${s.title}**\n\n${s.summary}\n\n📊 **Key Stats:**\n• 5000+ Successful Placements\n• 25+ Countries Served\n• End-to-end Deployment Support\n\n🌍 **Regions Served:** ${s.regions.join(', ')}\n\n🏭 **Sectors:** ${s.sectors.join(', ')}\n\n✅ **Value-Added Services:**\n${s.valueAdded.slice(0, 5).map(v => `• ${v}`).join('\n')}\n• + more (Visa stamping, travel, orientation)\n\n👉 [Learn More](/services/international-recruitment) or [Contact Us](/contact)`
  }

  // Indian Recruitment
  if (m.match(/indian.*(recruit|hire|placement|domestic)|india.*(recruit|hire|domestic)|domestic.*recruit|pan.?india/)) {
    const s = KB.services.indian
    return `**${s.title}**\n\n${s.summary}\n\n📋 **Features:**\n• 500,000+ pre-screened candidates\n• Active on Naukri, Monster, Indeed, LinkedIn\n• Pan-India coverage — all 28 states\n\n🏭 **Sectors:** ${s.sectors.join(', ')}\n\n🔄 **Our Process:**\n${s.process.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\n👉 [Learn More](/services/indian-recruitment) or [Contact Us](/contact)`
  }

  // Shutdown Maintenance
  if (m.match(/shutdown|turnaround|maintenance.*manpower|plant.*shutdown|industrial.*maintenance/)) {
    const s = KB.services.shutdown
    return `**${s.title}**\n\n${s.summary}\n\n⚡ **Key Features:**\n${s.features.map(f => `• ${f}`).join('\n')}\n\n👷 **Roles We Supply (sample):**\n${s.roles.slice(0, 6).map(r => `• ${r}`).join('\n')}\n• Scaffolders, NDT Technicians, Insulation Technicians, QC Inspectors\n\n👉 [Learn More](/services/shutdown-maintenance) or [Contact Us](/contact)`
  }

  // Deputation / Outsourcing
  if (m.match(/deputation|outsourc|contract.?staff|manpower.*outsourc|payroll.*outsourc|flexible.*staff/)) {
    const s = KB.services.deputation
    return `**${s.title}**\n\n${s.summary}\n\n📦 **Engagement Models:**\n${s.models.map(m => `• ${m}`).join('\n')}\n\n✅ **Benefits for Employers:**\n${s.benefits.map(b => `• ${b}`).join('\n')}\n\n🏭 **Sectors:** ${s.sectors.join(', ')}\n\n👉 [Learn More](/services/deputation-outsourcing) or [Contact Us](/contact)`
  }

  // IT Services
  if (m.match(/it.?service|information.?technology.*service|software.*staff|tech.*staff|cloud.*service|devops|cybersec|digital.?transform/)) {
    const s = KB.services.it
    return `**${s.title}**\n\n${s.summary}\n\n💻 **What We Offer:**\n${s.subServices.map(sv => `• ${sv}`).join('\n')}\n\n🛠️ **Tech Stacks:** ${s.techStack.join(', ')}\n\n🏢 We serve startups, SMEs & Fortune 500 companies with permanent, contract & project-based IT staffing.\n\n👉 [Learn More](/services/it-services) or [Contact Us](/contact)`
  }

  // Contact
  if (m.match(/contact|reach|phone|email|address|office|location|call|whatsapp|where.*are|headquarter/)) {
    return `**Millinoxx Contact Information** 📞\n\n🏢 **Hyderabad Office (HQ)**\n${KB.offices[0].address}\n📞 ${KB.offices[0].phone}\n📧 ${KB.offices[0].email}\n\n🏢 **Visakhapatnam Office**\n${KB.offices[1].address}\n📞 ${KB.offices[1].phone}\n📧 ${KB.offices[1].email}\n\n🌐 **Website:** ${KB.company.website}\n\nYou can also fill our enquiry form at [Contact Us](/contact). Our team responds within **24 business hours**.`
  }

  // CEO Message
  if (m.match(/ceo|founder|srinivasu|leader|director|message from/)) {
    const ceo = KB.company.ceo
    return `**Message from our CEO — ${ceo.name}**\n*${ceo.title}*\n\n"At Millinoxx Experts, our mission is simple yet powerful: to make a meaningful and lasting impact on your staffing strategies."\n\nFrom India to the Gulf, Europe, UK, USA and beyond — Srinivasu leads a team dedicated to ensuring every hire is not just qualified, but a strategic fit aligned with your long-term vision.\n\n${ceo.quote}\n\n👉 [Read Full Message](/about/ceo-message)`
  }

  // Company Profile / About
  if (m.match(/company.?profile|about.*millinoxx|who.*are|millinoxx.*what|background|founded|history|established/)) {
    return `**About Millinoxx Experts**\n\n${KB.company.summary}\n\n📊 **Quick Facts:**\n• ${KB.company.placements}\n• ${KB.company.countries}\n• ${KB.company.founded}\n• HQ: ${KB.company.hq}\n\n🎯 **Mission:** ${KB.company.mission}\n\n👁️ **Vision:** ${KB.company.vision}\n\n💎 **Core Values:** ${KB.company.values.join(', ')}\n\n👉 [Company Profile](/about/company-profile)`
  }

  // Vision / Mission / Values
  if (m.match(/vision|mission|value|commit|goal|approach|philosophy/)) {
    return `**Millinoxx — Our Foundation**\n\n🎯 **Mission:**\n${KB.company.mission}\n\n👁️ **Vision:**\n${KB.company.vision}\n\n🤝 **Commitment:**\n${KB.company.commitment}\n\n💡 **Our Approach:**\n${KB.company.approach}\n\n💎 **Core Values:**\n${KB.company.values.map(v => `• ${v}`).join('\n')}`
  }

  // Tech Partner
  if (m.match(/tech.?partner|kodryx|ai partner|technology partner|artificial.*intelligence|machine.*learn|leadership.*team|team.*kodryx/)) {
    const tp = KB.techPartner
    return `**${tp.name} — ${tp.role}**\n\n${tp.summary}\n\n👥 **Kodryx AI Leadership Team:**\n${tp.team.map(t => `• **${t.name}** — ${t.role}`).join('\n')}\n\n🔬 **Capabilities:**\n• Artificial Intelligence — Advanced AI for data analysis & automation\n• Machine Learning — Powering our candidate assessment & matching\n• Software Development — Enterprise-grade solutions for digital transformation\n\n👉 [Learn More](/about/tech-partner)`
  }

  // Testimonials / Reviews
  if (m.match(/testimonial|review|client.*say|feedback|what.*client|success.*story|case.*study|rating/)) {
    return `**Client Testimonials** ⭐⭐⭐⭐⭐\n\n${KB.testimonials.map((t, i) => `${i + 1}. *"${t.quote}"*\n   — **${t.name}**, ${t.company}`).join('\n\n')}\n\nJoin hundreds of companies worldwide who trust Millinoxx for their talent needs.\n\n👉 [View All Testimonials](/about/testimonials) | [Contact Us](/contact)`
  }

  // Industries list
  if (m.match(/industr|sector|field|domain|which.*industr|all.*industr|list.*industr/)) {
    const ind = Object.values(KB.industries)
    return `Millinoxx serves **${ind.length} industries**:\n\n${ind.map(i => `${i.icon} **${i.title}**`).join('\n')}\n\nAsk me about any specific industry for roles, countries, and details!`
  }

  // Specific Industry checks
  for (const [slug, ind] of Object.entries(KB.industries)) {
    const titleLower = ind.title.toLowerCase();
    const keywords = titleLower.split(/[\s&,\/()-]+/).filter(w => w.length > 3);
    let matched = false;
    
    if (slug === 'hospitals' && m.match(/healthcare|hospital|medical|doctor|nurse|pharma|clinic|surgeon|physician/)) {
      matched = true;
    } else if (slug === 'heavy-equipment' && m.match(/heavy|equipment|crane|bulldozer|excavator|hydraulic/)) {
      matched = true;
    } else if (slug === 'power-plant' && m.match(/power|energy|sewage|water.*treatment|boiler|turbine|scada/)) {
      matched = true;
    } else if (slug === 'oil-gas' && m.match(/oil|gas|petroleum|refin|upstream|downstream|epc|drilling/)) {
      matched = true;
    } else if (slug === 'mep' && m.match(/mep|hvac|plumbing|electromechanical|chiller/)) {
      matched = true;
    } else if (slug === 'construction' && m.match(/construction|real.?estate|infrastructure|civil|architect|structural/)) {
      matched = true;
    } else if (slug === 'manufacturing' && m.match(/manufacturing|factory|production|cnc|welder|fabricator/)) {
      matched = true;
    } else if (slug === 'shipping' && m.match(/shipping|marine|maritime|port|shipyard|captain|deck/)) {
      matched = true;
    } else if (slug === 'automotive' && m.match(/automotive|car|vehicle|ev|assembly/)) {
      matched = true;
    } else if (slug === 'aviation' && m.match(/aviation|aerospace|aircraft|pilot|airline|mro|avionics/)) {
      matched = true;
    } else if (slug === 'agriculture' && m.match(/agri|farm|crop|soil|greenhouse/)) {
      matched = true;
    } else if (slug === 'hospitality' && m.match(/hospitality|hotel|chef|restaurant|f&b|guest|concierge/)) {
      matched = true;
    } else if (slug === 'garments' && m.match(/garment|fashion|textile|clothing|designer/)) {
      matched = true;
    } else if (slug === 'it-telecom' && m.match(/it|telecom|software|network|developer|cloud|devops|data.*science/)) {
      matched = true;
    } else if (slug === 'banking-finance' && m.match(/banking|finance|financial|investment|wealth|fintech|accountant|auditor/)) {
      matched = true;
    } else if (slug === 'cyber-security' && m.match(/cyber|security|ciso|hacker|ethical|penetration|soc/)) {
      matched = true;
    } else if (keywords.some(k => m.includes(k))) {
      matched = true;
    }

    if (matched) {
      return `**${ind.icon} ${ind.title}**\n\n${ind.overview}\n\n👷 **Key Job Roles We Place:**\n${ind.roles.map(r => `• ${r}`).join('\n')}\n\n🌍 **Countries We Serve:**\n${ind.countries.join(', ')}\n\nInterested in hiring or getting placed in this sector? [Contact our team](/contact) for a tailored solution.`
    }
  }

  // Pricing / Cost / Quote
  if (m.match(/price|cost|fee|rate|charge|budget|quote|how much|package|plan/)) {
    return `**Pricing & Packages** 💰\n\nOur pricing is **fully customized** based on:\n• Type of service (international / domestic / IT / shutdown)\n• Number of positions & skill level required\n• Timeline & urgency\n• Engagement model (permanent / contract / project-based)\n\nTo get an accurate proposal, please share:\n1. What service are you looking for?\n2. How many positions / resources?\n3. Your preferred timeline?\n4. Your contact email or phone\n\nOur team will provide a tailored quote within 24 hours!\n\n📞 Call: **+91 9959450031**\n📧 Email: **srinivasu@millinoxx.com**\n👉 Or use our [Contact form](/contact)`
  }

  // Process / How it works
  if (m.match(/process|how.*work|how.*hire|step|procedure|timeline|how.*recruit/)) {
    return `**Our Recruitment Process** 🔄\n\n1️⃣ **Requirement Analysis** — We understand your workforce needs, culture, and goals\n2️⃣ **Candidate Sourcing** — We tap our 500,000+ database, global networks & job portals\n3️⃣ **Screening & Shortlisting** — AI-enabled assessments, interviews & background checks\n4️⃣ **Presentation** — We present the best-matched profiles\n5️⃣ **Client Interviews** — You interview & select your preferred candidates\n6️⃣ **Offer & Onboarding** — We handle documentation, visa (if international), and mobilization\n7️⃣ **Post-Placement Follow-up** — We ensure a smooth integration & long-term success\n\n⏱️ Typical turnaround: 5–15 working days for most roles.`
  }

  // Why Millinoxx
  if (m.match(/why.*millinoxx|why.*choose|why.*us|advantage|benefit.*millinoxx|better.*than|unique/)) {
    return `**Why Choose Millinoxx?** 🏆\n\n✅ **Global Reach** — 25+ countries, network spanning continents\n✅ **Proven Track Record** — 5000+ successful placements in 10+ years\n✅ **AI-Powered Matching** — Smart assessment tools for precise candidate fit\n✅ **Full-Service Support** — Sourcing → Visa → Travel → Deployment\n✅ **Industry Depth** — 16+ sectors, certified specialists for every role\n✅ **Rapid Mobilization** — Shutdown teams deployed in 24–72 hours\n✅ **Tailored Solutions** — No one-size-fits-all; custom strategies for every client\n✅ **Integrity First** — Transparency, honesty & long-term partnerships\n\n👉 [Read Client Testimonials](/about/testimonials) | [Contact Us](/contact)`
  }

  // Visa / immigration
  if (m.match(/visa|immigration|relocation|work.?permit|document|compliance|deploy/)) {
    return `**Visa & Immigration Support** 🛂\n\nMillinoxx provides complete end-to-end immigration support for international placements:\n\n✅ Immigration & Visa Guidance\n✅ Candidate Documentation & Compliance\n✅ Consulate Formalities & Visa Stamping\n✅ Medical Check-Up & Fitness Clearance\n✅ Pre-Departure Orientation Programs\n✅ Travel & Ticketing Arrangements\n✅ Mobilization & Deployment Coordination\n✅ Post-Deployment Follow-Up Support\n\nThis is included as part of our **International Recruitment** service. [Contact us](/contact) to learn more.`
  }

  // Schedule consultation / meeting
  if (m.match(/consult|meeting|appointment|schedule|book.*call|talk.*team|speak.*expert|discuss|enquiry|inquiry/)) {
    return `I'd love to arrange a consultation for you! 🤝\n\nTo connect you with the right Millinoxx specialist, please share:\n\n📝 **Your Name**\n🏢 **Company Name**\n📧 **Email Address**\n📞 **Phone Number**\n💼 **Requirement** (which service / industry)\n📅 **Timeline**\n\nAlternatively:\n📞 Call us directly: **+91 9959450031**\n📧 Email: **srinivasu@millinoxx.com**\n🌐 Fill our form: [Contact Us](/contact)\n\nOur team typically responds within **24 business hours**.`
  }

  // Gallery
  if (m.match(/gallery|office.*photo|work.*photo|photo|image|picture/)) {
    return `**Millinoxx Gallery** 📸\n\nExplore our visual journey:\n\n🏢 [Office Gallery](/gallery/office) — Our workspaces & team environments\n💼 [Work Gallery](/gallery/work) — Projects, placements & field work\n💻 [Tech Gallery](/gallery/tech) — Technology & innovation in action\n\nVisit the gallery to see Millinoxx in action!`
  }

  // Company Video
  if (m.match(/video|film|watch|documentary|company.*video/)) {
    return `**Millinoxx Company Video** 🎬\n\nWatch our company story, team, and services in action.\n\n👉 [View Company Video](/about/company-video)\n\nThis gives you a comprehensive overview of who we are, what we do, and how we've helped organizations worldwide.`
  }

  // Stats / achievements
  if (m.match(/stat|achievement|number|how many|placement|success|milestone|track.*record/)) {
    return `**Millinoxx by the Numbers** 📊\n\n🌍 **25+** Countries Served\n👥 **5000+** Successful Placements\n🏭 **16+** Industries Covered\n⏱️ **10+** Years of Excellence\n📋 **500,000+** Pre-screened Candidates\n⚡ **24–72 hrs** Shutdown Mobilization\n🏢 **2** Offices (Hyderabad & Visakhapatnam)\n\nMillinoxx consistently delivers results for clients across the Gulf, Europe, UK, USA, and Asia.`
  }

  // Default fallback
  return `Thank you for your question! 🙏\n\nI couldn't find that specific detail in the Millinoxx knowledge base. Let me connect you with our expert team who will be happy to assist!\n\n📞 **Call:** +91 9959450031\n📧 **Email:** srinivasu@millinoxx.com\n👉 **Contact Form:** [Click here](/contact)\n\nOr ask me about:\n• Our **Services** (international, domestic, IT, shutdown, outsourcing)\n• **Industries** we serve (16 sectors)\n• **Contact & Office** information\n• **Company Profile** & CEO message`
}

// ─── SUGGESTED QUESTIONS ────────────────────────────────────────────────────
const SUGGESTED = [
  'What services does Millinoxx offer?',
  'Tell me about International Recruitment',
  'Which industries do you serve?',
  'How can I contact Millinoxx?',
]

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function MillinoxxAI() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: `Hello! 👋 I'm **Millinoxx AI** — your intelligent digital consultant.\n\nI have complete knowledge of all Millinoxx services, industries, contact details, company profile, and more. How can I assist you today?`,
      time: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && !minimized) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open, minimized])

  useEffect(() => {
    if (bottomRef.current && open && !minimized)
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open, minimized])

  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 6000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleClose = () => setOpen(false);
    window.addEventListener('close-chatbot', handleClose);
    return () => window.removeEventListener('close-chatbot', handleClose);
  }, []);

  const sendMessage = async (text) => {
    const userText = (text || input).trim()
    if (!userText) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userText, time: new Date() }])
    setTyping(true)
    await new Promise(r => setTimeout(r, 700 + Math.random() * 600))
    setTyping(false)
    setMessages(prev => [...prev, { role: 'bot', text: getResponse(userText), time: new Date() }])
  }

  const formatText = (text) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#b8860b;font-weight:600;text-decoration:underline;" onmouseover="this.style.color=\'#8b6914\'" onmouseout="this.style.color=\'#b8860b\'">$1</a>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .split('\n').join('<br/>')

  const fmtTime = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <>
      {/* Floating Button — bottom-right */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && showPulse && (
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-yellow-200 whitespace-nowrap"
            >
              💬 Chat with Millinoxx AI
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => {
            setOpen(true);
            setMinimized(false);
            setShowPulse(false);
            window.dispatchEvent(new CustomEvent('close-voice-ai'));
          }}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border-2 border-yellow-400 cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1F3C 100%)' }}
          aria-label="Open Millinoxx AI Chat"
        >
          <Bot size={28} className="text-yellow-400" />
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed z-[9998] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            style={{
              bottom: '100px', right: '24px',
              width: '390px',
              maxHeight: minimized ? '64px' : '600px',
              transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
              background: '#fff',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer select-none flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1F3C 100%)' }}
              onClick={() => setMinimized(m => !m)}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)', border: '1.5px solid #C9A84C' }}>
                  <Bot size={18} className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Millinoxx AI</div>
                  <div className="text-xs mt-0.5 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    Online · Instant replies
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={e => { e.stopPropagation(); setMinimized(m => !m) }}
                  className="text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Toggle">
                  {minimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button onClick={e => { e.stopPropagation(); setOpen(false) }}
                  className="text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Close">
                  <X size={14} />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50" style={{ minHeight: 0 }}>
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                      {msg.role === 'bot' && (
                        <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                          style={{ background: 'linear-gradient(135deg, #0A1628, #0D1F3C)', border: '1.5px solid #C9A84C' }}>
                          <Bot size={13} className="text-yellow-400" />
                        </div>
                      )}
                      <div className={`max-w-[80%] flex flex-col gap-0.5 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <div
                          className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm shadow-sm border border-gray-100'}`}
                          style={msg.role === 'user'
                            ? { background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0A1628', fontWeight: 500 }
                            : { background: '#fff', color: '#1a1a2e' }
                          }
                          dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                        />
                        <span className="text-[10px] text-gray-400 px-1">{fmtTime(msg.time)}</span>
                      </div>
                    </div>
                  ))}

                  {typing && (
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #0A1628, #0D1F3C)', border: '1.5px solid #C9A84C' }}>
                        <Bot size={13} className="text-yellow-400" />
                      </div>
                      <div className="bg-white border border-gray-100 shadow-sm px-4 py-2.5 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                        {[0, 1, 2].map(d => (
                          <span key={d} className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#C9A84C', animationDelay: `${d * 0.15}s` }} />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Suggested Questions */}
                {messages.length <= 1 && (
                  <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex-shrink-0">
                    <p className="text-[10px] text-gray-400 mb-1.5 font-semibold uppercase tracking-wider">Quick questions</p>
                    <div className="flex flex-wrap gap-1.5">
                      {SUGGESTED.map((q, i) => (
                        <button key={i} onClick={() => sendMessage(q)}
                          className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all"
                          style={{ borderColor: '#C9A84C', color: '#0A1628', background: '#fff' }}
                          onMouseEnter={e => { e.target.style.background = '#C9A84C'; e.target.style.color = '#fff' }}
                          onMouseLeave={e => { e.target.style.background = '#fff'; e.target.style.color = '#0A1628' }}>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-2 flex-shrink-0">
                  <input
                    ref={inputRef}
                    type="text" value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                    placeholder="Ask anything about Millinoxx…"
                    className="flex-1 text-sm px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 transition-all bg-gray-50"
                    style={{ '--tw-ring-color': 'rgba(201,168,76,0.3)' }}
                  />
                  <button onClick={() => sendMessage()} disabled={!input.trim()}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-40 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)' }}
                    aria-label="Send">
                    <Send size={16} style={{ color: '#0A1628' }} />
                  </button>
                </div>

                {/* Branding */}
                <div className="text-center py-1.5 bg-white border-t border-gray-50 flex-shrink-0">
                  <span className="text-[10px] text-gray-400">Powered by <strong className="text-gray-600">Millinoxx AI</strong></span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
