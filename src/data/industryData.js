const industryData = {
  'information-technology': {
    title: 'Information Technology',
    icon: '💻',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85'
    ],
    overview: 'The IT sector is the driving force behind modern global connectivity and digital transformation. Millinoxx Experts provides top-tier IT professionals to software companies, enterprise IT departments, and digital infrastructure businesses worldwide, ensuring rapid deployment of scalable technical solutions.',
    services: [
      'IT Staff Augmentation',
      'Dedicated Development Teams',
      'Enterprise Software Staffing',
      'Cloud Infrastructure Recruitment',
      'Executive Search for IT Leaders',
      'Global IT Manpower Outsourcing'
    ],
    roles: [
      'Software Engineers (Full Stack, Backend, Frontend)',
      'Cloud & DevOps Engineers',
      'System Architects',
      'IT Project Managers',
      'QA & Automation Engineers',
      'Database Administrators (DBA)'
    ],
    statistics: [
      { value: '500+', label: 'IT Placements' },
      { value: '48h', label: 'Turnaround Time' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '15+', label: 'Countries Served' }
    ],
    countries: ['USA', 'UK', 'UAE', 'Saudi Arabia', 'India', 'Germany', 'Singapore', 'Canada']
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    icon: '🧠',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=85'
    ],
    overview: 'Artificial Intelligence is revolutionizing every major industry through automation, predictive modeling, and intelligent systems. We specialize in sourcing elite AI researchers, data scientists, and ML engineers who can translate complex data into strategic business value.',
    services: [
      'AI & ML Talent Acquisition',
      'Data Science Team Building',
      'Contract AI Specialists',
      'AI Leadership Search',
      'R&D Staffing',
      'Turnkey AI Project Resourcing'
    ],
    roles: [
      'Machine Learning Engineers',
      'Data Scientists',
      'AI Research Scientists',
      'NLP Specialists',
      'Computer Vision Engineers',
      'AI Product Managers'
    ],
    statistics: [
      { value: '200+', label: 'AI Experts Placed' },
      { value: '99%', label: 'Retention Rate' },
      { value: 'Top 1%', label: 'Talent Network' },
      { value: '10+', label: 'Global Markets' }
    ],
    countries: ['USA', 'UK', 'Germany', 'UAE', 'India', 'Canada']
  },
  'cyber-security': {
    title: 'Cyber Security',
    icon: '🛡️',
    images: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=85'
    ],
    overview: 'As digital threats escalate, robust cyber security is non-negotiable for enterprise stability. Millinoxx Experts places highly certified security professionals who safeguard critical digital assets, networks, and enterprise data infrastructure against global cyber threats.',
    services: [
      'Security Operations Staffing',
      'CISO & Leadership Search',
      'Contract Security Analysts',
      'Threat Intelligence Teams',
      'Compliance & Audit Staffing',
      'Red/Blue Team Recruitment'
    ],
    roles: [
      'Security Operations Center (SOC) Analysts',
      'Penetration Testers (Ethical Hackers)',
      'Security Architects',
      'Incident Response Engineers',
      'Cloud Security Engineers',
      'Chief Information Security Officers (CISO)'
    ],
    statistics: [
      { value: '300+', label: 'Security Pros' },
      { value: '100%', label: 'Certified Talent' },
      { value: '24/7', label: 'SOC Deployment' },
      { value: '12+', label: 'Countries' }
    ],
    countries: ['USA', 'UK', 'UAE', 'Saudi Arabia', 'Australia', 'India', 'Germany']
  },
  'telecom': {
    title: 'Telecommunications',
    icon: '📡',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=85'
    ],
    overview: 'The Telecom sector forms the backbone of global connectivity. We supply highly specialized experts in 5G, fiber optics, network architecture, and communications infrastructure to leading telecom operators and OEMs worldwide.',
    services: [
      'Telecom Network Staffing',
      '5G Rollout Project Teams',
      'Field Engineering Outsourcing',
      'Telecom Leadership Search',
      'Network Maintenance Staffing',
      'Contract RF Engineers'
    ],
    roles: [
      'Network Architects',
      'RF Engineers',
      '5G Specialists',
      'Telecom Project Managers',
      'Transmission Engineers',
      'Field Service Technicians'
    ],
    statistics: [
      { value: '1000+', label: 'Engineers Deployed' },
      { value: '5G', label: 'Rollout Experts' },
      { value: '95%', label: 'Client Retention' },
      { value: '20+', label: 'Global Markets' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'UK', 'Germany', 'USA', 'India', 'Oman']
  },
  'healthcare': {
    title: 'Healthcare and Medical',
    icon: '🏥',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85'
    ],
    overview: 'Healthcare is a mission-critical sector requiring certified professionals with uncompromising standards. Millinoxx Experts specializes in recruiting medical, paramedical, nursing, and allied health professionals for hospitals, clinics, and healthcare systems across the globe.',
    services: [
      'International Medical Recruitment',
      'Nursing Staff Augmentation',
      'Allied Health Placement',
      'Hospital Administration Search',
      'Locum Tenens Staffing',
      'Healthcare Compliance Resourcing'
    ],
    roles: [
      'Specialist Physicians & Surgeons',
      'Registered Nurses (ICU, ER, OR)',
      'Paramedics & EMTs',
      'Pharmacists & Radiologists',
      'Medical Lab Technicians',
      'Healthcare Administrators'
    ],
    statistics: [
      { value: '2000+', label: 'Medics Deployed' },
      { value: '100%', label: 'Verified Licensing' },
      { value: '98%', label: 'Placement Success' },
      { value: '15+', label: 'Countries' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'Qatar', 'UK', 'Canada', 'Australia', 'Germany', 'Kuwait']
  },
  'oil-gas': {
    title: 'Oil and Gas',
    icon: '🛢️',
    images: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=85'
    ],
    overview: 'The Oil & Gas industry demands rigorous safety standards and deep technical expertise. We have extensive experience sourcing certified professionals for upstream, midstream, and downstream operations in some of the most challenging environments on earth.',
    services: [
      'Upstream/Downstream Staffing',
      'Rig & Offshore Recruitment',
      'Turnaround & Shutdown Staffing',
      'Technical Manpower Supply',
      'HSE Professional Search',
      'Project Management Teams'
    ],
    roles: [
      'Petroleum & Drilling Engineers',
      'Process Engineers',
      'Refinery Operators',
      'HSE Managers & Safety Officers',
      'Piping & Pipeline Engineers',
      'NDT Inspectors'
    ],
    statistics: [
      { value: '5000+', label: 'Professionals Placed' },
      { value: 'Zero', label: 'Compliance Issues' },
      { value: '25+', label: 'Major EPC Clients' },
      { value: '20+', label: 'Countries Served' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'Kuwait', 'Oman', 'Qatar', 'Iraq', 'Bahrain', 'Nigeria', 'UK', 'Norway']
  },
  'petrochemicals': {
    title: 'Petrochemicals',
    icon: '⚗️',
    images: [
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&q=85'
    ],
    overview: 'Petrochemical facilities operate at the highest levels of complexity. We supply the specialized engineering, process, and maintenance talent required to keep plants running efficiently, safely, and profitably.',
    services: [
      'Plant Operations Staffing',
      'Chemical Engineering Search',
      'Maintenance & Reliability Teams',
      'Quality Control Recruitment',
      'Process Optimization Experts',
      'Shutdown Manpower Supply'
    ],
    roles: [
      'Chemical Engineers',
      'Process Technologists',
      'Plant Managers',
      'Reliability Engineers',
      'Quality Assurance Inspectors',
      'Control Room Operators'
    ],
    statistics: [
      { value: '1500+', label: 'Experts Deployed' },
      { value: '99%', label: 'Safety Record' },
      { value: '48h', label: 'Response Time' },
      { value: '12+', label: 'Countries' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'India', 'Germany', 'USA']
  },
  'engineering-epc': {
    title: 'Engineering and EPC',
    icon: '🏗️',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85'
    ],
    overview: 'Engineering, Procurement, and Construction (EPC) projects form the backbone of global infrastructure. We provide multi-disciplinary engineering talent capable of executing mega-projects safely, on time, and within budget.',
    services: [
      'Turnkey EPC Project Staffing',
      'Multi-disciplinary Engineering Teams',
      'Project Management Recruitment',
      'Procurement & Supply Chain Staffing',
      'Commissioning Teams',
      'Contract Engineering Supply'
    ],
    roles: [
      'Project Managers & Directors',
      'Civil & Structural Engineers',
      'Mechanical & Electrical Engineers',
      'Planning & Cost Control Engineers',
      'Procurement Managers',
      'Commissioning Managers'
    ],
    statistics: [
      { value: '3000+', label: 'Engineers Placed' },
      { value: '100+', label: 'Mega Projects' },
      { value: '98%', label: 'Retention' },
      { value: '18+', label: 'Global Markets' }
    ],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'India', 'UK', 'Australia']
  },
  'manufacturing': {
    title: 'Manufacturing',
    icon: '🏭',
    images: [
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600&q=85'
    ],
    overview: 'Manufacturing is the engine of the industrial economy. Millinoxx Experts supplies skilled, semi-skilled, and leadership manpower for production, quality, maintenance, and engineering functions across all manufacturing sub-sectors.',
    services: [
      'Production Line Staffing',
      'Plant Management Search',
      'Industrial Engineering Teams',
      'Quality Control Recruitment',
      'Lean Manufacturing Experts',
      'Supply Chain & Logistics Staffing'
    ],
    roles: [
      'Production Managers',
      'Manufacturing Engineers',
      'Quality Assurance Engineers',
      'CNC Programmers & Operators',
      'Industrial Electricians',
      'Supply Chain Analysts'
    ],
    statistics: [
      { value: '4000+', label: 'Placements' },
      { value: 'Lean', label: 'Trained Experts' },
      { value: '96%', label: 'Client Satisfaction' },
      { value: '15+', label: 'Countries' }
    ],
    countries: ['Germany', 'USA', 'Malaysia', 'Singapore', 'Saudi Arabia', 'UAE', 'UK', 'India']
  },
  'power-plant': {
    title: 'Power Plant',
    icon: '⚡',
    images: [
      'https://images.unsplash.com/photo-1548669985-9ef9d7b76e23?w=1600&q=85'
    ],
    overview: 'The Power sector encompasses thermal, hydro, solar, and nuclear power plants. We provide the specialized engineering and operational manpower required to keep critical energy infrastructure running safely and at peak performance.',
    services: [
      'Power Plant Operations Staffing',
      'Maintenance & Outage Resourcing',
      'Renewable Energy Recruitment',
      'Grid Modernization Teams',
      'Safety & Compliance Staffing',
      'Commissioning Experts'
    ],
    roles: [
      'Power Plant Engineers',
      'Turbine & Boiler Technicians',
      'Instrumentation & Control Engineers',
      'Control Room Operators',
      'Maintenance Supervisors',
      'SCADA Specialists'
    ],
    statistics: [
      { value: '1200+', label: 'Power Pros' },
      { value: '10GW+', label: 'Projects Supported' },
      { value: '100%', label: 'Safety Compliance' },
      { value: '14+', label: 'Countries' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'Kuwait', 'Oman', 'Qatar', 'UK', 'Germany', 'India']
  },
  'water-treatment': {
    title: 'Water Treatment',
    icon: '💧',
    images: [
      'https://images.unsplash.com/photo-1582455986986-1d1cb535ce9a?w=1600&q=85'
    ],
    overview: 'Water and wastewater management is critical for global sustainability. We recruit specialized professionals for desalination plants, sewage treatment facilities, and civic water infrastructure projects.',
    services: [
      'Desalination Plant Staffing',
      'Wastewater Treatment Recruitment',
      'Environmental Engineering Teams',
      'Plant Operations & Maintenance',
      'Water Process Optimization',
      'Project Management Search'
    ],
    roles: [
      'Water Treatment Engineers',
      'Process Engineers',
      'Environmental Scientists',
      'RO Plant Operators',
      'Hydraulic Engineers',
      'Maintenance Technicians'
    ],
    statistics: [
      { value: '800+', label: 'Experts Placed' },
      { value: '50+', label: 'Plant Projects' },
      { value: '98%', label: 'Retention' },
      { value: '10+', label: 'Countries' }
    ],
    countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'India', 'Australia', 'UK']
  },
  'mep-hvac': {
    title: 'MEP and HVAC',
    icon: '🔧',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85'
    ],
    overview: 'Mechanical, Electrical, and Plumbing (MEP) engineering brings buildings to life. We provide expert MEP professionals for construction, maintenance, and commissioning projects spanning commercial towers to industrial complexes.',
    services: [
      'MEP Project Staffing',
      'HVAC Installation & Maintenance Teams',
      'BIM Modeling Recruitment',
      'Facility Management Staffing',
      'Electrical Engineering Search',
      'Plumbing & Fire Safety Teams'
    ],
    roles: [
      'MEP Coordinators & Managers',
      'HVAC Engineers & Chiller Technicians',
      'Electrical & Plumbing Engineers',
      'BIM Engineers & Draftsmen',
      'Fire Safety Engineers',
      'BMS Operators'
    ],
    statistics: [
      { value: '2500+', label: 'MEP Experts' },
      { value: '300+', label: 'Commercial Projects' },
      { value: '95%', label: 'Client Satisfaction' },
      { value: '12+', label: 'Countries' }
    ],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'UK', 'Singapore']
  },
  'construction': {
    title: 'Construction and Real Estate',
    icon: '🏗️',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85'
    ],
    overview: 'From mega infrastructure developments to luxury residential real estate, Millinoxx Experts sources the skilled professionals needed to bring ambitious architectural projects to life on time and within budget.',
    services: [
      'Construction Management Recruitment',
      'Site Engineering Staffing',
      'Skilled Trades & Labor Supply',
      'Real Estate Development Search',
      'Quantity Surveying Teams',
      'Health & Safety Staffing'
    ],
    roles: [
      'Construction Managers',
      'Civil & Structural Engineers',
      'Architects & Urban Planners',
      'Quantity Surveyors',
      'Site Supervisors & Foremen',
      'HSE Officers'
    ],
    statistics: [
      { value: '6000+', label: 'Placements' },
      { value: '1M+', label: 'Man-hours Supported' },
      { value: '99%', label: 'Safety Record' },
      { value: '15+', label: 'Countries' }
    ],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'UK', 'Germany', 'Australia', 'Singapore', 'India']
  },
  'heavy-equipment': {
    title: 'Heavy Equipment',
    icon: '🚜',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85'
    ],
    overview: 'The Heavy Equipment sector requires specialized operators, mechanics, and logistics experts. We provide highly skilled professionals to manage, operate, and maintain industrial machinery across global mega-projects.',
    services: [
      'Heavy Machinery Operator Supply',
      'Equipment Maintenance Recruitment',
      'Logistics & Transport Staffing',
      'Fleet Management Search',
      'Hydraulic Engineering Teams',
      'Safety & Compliance Resourcing'
    ],
    roles: [
      'Crane & Excavator Operators',
      'Heavy Duty Diesel Mechanics',
      'Hydraulic Engineers',
      'Fleet Managers',
      'Riggers & Slingers',
      'Heavy Equipment Supervisors'
    ],
    statistics: [
      { value: '3500+', label: 'Operators Deployed' },
      { value: '100%', label: 'Certified Staff' },
      { value: '97%', label: 'Client Retention' },
      { value: '12+', label: 'Countries' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'Qatar', 'Russia', 'Australia', 'Canada', 'India']
  },
  'shipping-marine': {
    title: 'Shipping and Marine',
    icon: '⚓',
    images: [
      'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=1600&q=85'
    ],
    overview: 'The shipping and marine industry moves global trade. Millinoxx Experts provides qualified maritime professionals—from deck officers to marine engineers—for vessels, ports, shipyards, and offshore facilities worldwide.',
    services: [
      'Maritime Crewing Services',
      'Port Operations Staffing',
      'Shipyard Engineering Recruitment',
      'Offshore Platform Resourcing',
      'Marine Logistics Staffing',
      'Naval Architecture Search'
    ],
    roles: [
      'Marine Engineers & Deck Officers',
      'Ship Captains & Nautical Officers',
      'Port Managers',
      'Shipyard Engineers',
      'Naval Architects',
      'Marine Electricians & Mechanics'
    ],
    statistics: [
      { value: '1500+', label: 'Marine Pros' },
      { value: 'STCW', label: 'Certified' },
      { value: '98%', label: 'Retention' },
      { value: '15+', label: 'Countries' }
    ],
    countries: ['Singapore', 'UAE', 'UK', 'Norway', 'Greece', 'Malaysia', 'India', 'Japan']
  },
  'aviation-aerospace': {
    title: 'Aviation and Aerospace',
    icon: '✈️',
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85'
    ],
    overview: 'Aviation demands the absolute highest standards of technical precision and safety. We place qualified aviation professionals with airlines, MROs, airports, and aerospace OEMs globally.',
    services: [
      'MRO & Technical Staffing',
      'Flight Operations Recruitment',
      'Aerospace Engineering Teams',
      'Airport Ground Staffing',
      'Aviation Leadership Search',
      'Quality & Compliance Resourcing'
    ],
    roles: [
      'Aircraft Maintenance Engineers (AME)',
      'Avionics Technicians',
      'Aerospace Engineers',
      'Pilots & Air Traffic Controllers',
      'Quality Assurance Inspectors',
      'Flight Operations Officers'
    ],
    statistics: [
      { value: '1000+', label: 'Aviation Pros' },
      { value: 'EASA/FAA', label: 'Certified Staff' },
      { value: '100%', label: 'Safety Record' },
      { value: '12+', label: 'Countries' }
    ],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'UK', 'Germany', 'Singapore', 'USA', 'India']
  },
  'banking-finance': {
    title: 'Banking and Finance',
    icon: '💰',
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=85'
    ],
    overview: 'Banking and finance require precision, compliance, and deep domain expertise. We recruit highly qualified financial professionals for global banks, investment firms, insurance companies, and fintech startups.',
    services: [
      'Investment Banking Recruitment',
      'Risk & Compliance Staffing',
      'Fintech Development Teams',
      'Executive Search for Finance',
      'Accounting & Audit Resourcing',
      'Wealth Management Staffing'
    ],
    roles: [
      'Investment Bankers',
      'Financial Analysts & Modellers',
      'Risk Managers & Compliance Officers',
      'Chartered Accountants',
      'Fintech Developers',
      'Portfolio & Wealth Managers'
    ],
    statistics: [
      { value: '1200+', label: 'Finance Pros' },
      { value: 'CFA/CPA', label: 'Certified Talent' },
      { value: '96%', label: 'Client Satisfaction' },
      { value: '14+', label: 'Global Financial Hubs' }
    ],
    countries: ['UAE', 'Saudi Arabia', 'UK', 'Singapore', 'USA', 'Germany', 'Bahrain', 'Luxembourg']
  },
  'agriculture': {
    title: 'Agriculture',
    icon: '🌾',
    images: [
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=1600&q=85'
    ],
    overview: 'Modern agriculture integrates technology and sustainability to feed the world. We provide agri-professionals for large-scale farms, food processing, agricultural research, and agribusiness operations globally.',
    services: [
      'Agribusiness Executive Search',
      'Farm Management Staffing',
      'Food Processing Recruitment',
      'Agronomy & Research Teams',
      'Agricultural Engineering Supply',
      'Supply Chain Staffing'
    ],
    roles: [
      'Agronomists & Soil Scientists',
      'Farm Managers',
      'Agricultural Engineers',
      'Food Processing Technologists',
      'Irrigation Engineers',
      'Agri-Economists'
    ],
    statistics: [
      { value: '800+', label: 'Agri Experts Placed' },
      { value: '100+', label: 'Mega Farms' },
      { value: '98%', label: 'Retention' },
      { value: '15+', label: 'Countries' }
    ],
    countries: ['Saudi Arabia', 'UAE', 'Australia', 'New Zealand', 'UK', 'Canada', 'India', 'South Africa']
  },
  'fmcg-garments': {
    title: 'FMCG and Garments',
    icon: '🛒',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85'
    ],
    overview: 'The FMCG and garments sectors require highly specialized talent in design, production, retail, and complex global supply chains. Millinoxx Experts connects manufacturers and retail brands with skilled industry professionals.',
    services: [
      'Production & Manufacturing Staffing',
      'Supply Chain & Logistics Recruitment',
      'Retail Operations Staffing',
      'Fashion & Apparel Search',
      'FMCG Brand Management Teams',
      'Quality Control Resourcing'
    ],
    roles: [
      'Production & Plant Managers',
      'Supply Chain Analysts',
      'FMCG Brand Managers',
      'Garment Technologists',
      'Quality Control Managers',
      'Retail Operations Leaders'
    ],
    statistics: [
      { value: '2500+', label: 'Professionals' },
      { value: '50+', label: 'Global Brands' },
      { value: '97%', label: 'Satisfaction' },
      { value: '18+', label: 'Countries' }
    ],
    countries: ['Bangladesh', 'India', 'UAE', 'UK', 'Germany', 'Malaysia', 'Singapore', 'USA']
  }
}

export default industryData
