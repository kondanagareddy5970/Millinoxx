const industryData = {
  'heavy-equipment': {
    title: 'Heavy Equipment & Engineering Industry',
    icon: '🏗️',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85',
    ],
    overview: 'The Heavy Equipment and Engineering industry serves as the backbone of technological advancement and infrastructure development. It plays a pivotal role in shaping economies through innovation, large-scale construction, and industrial progress. Millinoxx Experts provides highly skilled professionals to drive this vital sector forward.',
    roles: ['Mechanical Engineers', 'Electrical Engineers', 'Civil Engineers', 'Design Engineers (CAD/CAM)', 'Heavy Equipment Operators (Crane, Bulldozer, Loader, Excavator)', 'Hydraulic Mechanics', 'Diesel Mechanics', 'Project Managers', 'Safety Officers / HSE Engineers', 'Procurement Engineers', 'Quality Control Engineers', 'Structural Engineers'],
    countries: ['Russia', 'Singapore', 'Malaysia', 'Bahrain', 'Saudi Arabia', 'UAE', 'Kuwait', 'Oman', 'Qatar', 'Germany', 'UK', 'Australia'],
  },
  'power-plant': {
    title: 'Power Plant / Sewage / Water Treatment',
    icon: '⚡',
    images: [
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&q=85',
      'https://images.unsplash.com/photo-1548669985-9ef9d7b76e23?w=1600&q=85',
    ],
    overview: 'The Power & Energy sector encompasses thermal, hydro, solar, and nuclear power plants, along with water treatment and sewage management facilities. Millinoxx Experts provides specialized manpower to keep these critical infrastructure projects operating at peak performance.',
    roles: ['Power Plant Engineers', 'Electrical Engineers', 'Instrumentation & Control Engineers', 'Turbine Technicians', 'Boiler Engineers', 'Water Treatment Plant Operators', 'Environmental Engineers', 'Control Room Operators', 'Maintenance Engineers', 'Safety Officers', 'Commissioning Engineers', 'SCADA Specialists'],
    countries: ['Saudi Arabia', 'UAE', 'Kuwait', 'Oman', 'Qatar', 'UK', 'Germany', 'India', 'Malaysia', 'Indonesia'],
  },
  'oil-gas': {
    title: 'Oil & Gas / EPC Industry',
    icon: '🛢️',
    images: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
    ],
    overview: 'The Oil & Gas and EPC sector is one of the world\'s most demanding and rewarding industries. Millinoxx Experts has deep expertise in sourcing certified professionals for upstream, midstream, and downstream operations, as well as large-scale EPC projects globally.',
    roles: ['Petroleum Engineers', 'Process Engineers', 'Pipeline Engineers', 'Drilling Engineers', 'Wellsite Geologists', 'Refinery Operators', 'HSE Managers', 'Project Engineers (EPC)', 'Piping Engineers', 'Commissioning Engineers', 'NDT Inspectors', 'Procurement Specialists'],
    countries: ['Saudi Arabia', 'UAE', 'Kuwait', 'Oman', 'Qatar', 'Iraq', 'Bahrain', 'Russia', 'Nigeria', 'UK', 'Norway', 'Australia'],
  },
  'mep': {
    title: 'MEP (Electromechanical / HVAC)',
    icon: '🔧',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
    ],
    overview: 'Mechanical, Electrical, and Plumbing (MEP) engineering is critical to every built environment — from commercial towers to hospitals and industrial complexes. Millinoxx Experts provides expert MEP professionals for construction, maintenance, and commissioning projects worldwide.',
    roles: ['HVAC Engineers & Technicians', 'MEP Coordinators', 'Electrical Engineers', 'Plumbing Engineers', 'Fire Safety Engineers', 'BMS (Building Management System) Engineers', 'Chiller Technicians', 'Low Voltage (LV) Engineers', 'ELV Engineers', 'Facility Management Professionals', 'MEP Supervisors', 'Quantity Surveyors'],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'UK', 'Germany', 'Singapore', 'Malaysia'],
  },
  'construction': {
    title: 'Construction Industry / Real Estate',
    icon: '🏛️',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85',
    ],
    overview: 'Construction and real estate drive economic growth and urban development globally. From mega infrastructure projects to luxury residential developments, Millinoxx Experts sources the skilled professionals needed to bring ambitious projects to life on time and within budget.',
    roles: ['Civil Engineers', 'Structural Engineers', 'Site Engineers', 'Project Managers', 'Construction Managers', 'Quantity Surveyors', 'Architects', 'BIM Engineers', 'Foremen & Supervisors', 'Safety Officers', 'Real Estate Developers', 'Planning Engineers'],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'UK', 'Germany', 'Australia', 'Singapore', 'India', 'Malaysia', 'Oman'],
  },
  'manufacturing': {
    title: 'Manufacturing Industry',
    icon: '🏭',
    images: [
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
    ],
    overview: 'Manufacturing is the engine of industrial economies. From plastics to steel, cement to pharmaceuticals, Millinoxx Experts supplies skilled and semi-skilled manpower for production, quality, maintenance, and engineering functions across all manufacturing sub-sectors.',
    roles: ['Production Engineers', 'Quality Engineers', 'Manufacturing Engineers', 'Process Engineers', 'Maintenance Engineers', 'CNC Operators', 'Tool & Die Makers', 'Welders & Fabricators', 'Industrial Electricians', 'Shift Supervisors', 'Lean/Six Sigma Engineers', 'Supply Chain Managers'],
    countries: ['Germany', 'Malaysia', 'Singapore', 'Saudi Arabia', 'UAE', 'USA', 'UK', 'Japan', 'South Korea', 'India'],
  },
  'shipping': {
    title: 'Shipping & Marine Industry',
    icon: '⚓',
    images: [
      'https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?w=1600&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=85',
    ],
    overview: 'The shipping and marine industry moves over 80% of global trade. Millinoxx Experts provides qualified maritime professionals — from deck officers to marine engineers — for vessels, ports, shipyards, and offshore facilities worldwide.',
    roles: ['Marine Engineers', 'Deck Officers', 'Ship Captains', 'Nautical Officers', 'Port Managers', 'Maritime Safety Officers', 'Shipyard Engineers', 'Naval Architects', 'Marine Electricians', 'Crane Operators', 'Riggers & Welders', 'Logistics Coordinators'],
    countries: ['Singapore', 'UAE', 'UK', 'Norway', 'Greece', 'Malaysia', 'India', 'Japan', 'South Korea', 'Germany'],
  },
  'automotive': {
    title: 'Automotive Industry',
    icon: '🚗',
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1600&q=85',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600&q=85',
    ],
    overview: 'The automotive industry is undergoing a historic transformation with EV adoption, autonomous driving, and connected vehicles. Millinoxx Experts helps automotive companies secure top engineering, design, and manufacturing talent to lead this evolution.',
    roles: ['Automotive Engineers', 'Mechanical Design Engineers', 'Electrical Vehicle (EV) Engineers', 'Embedded Systems Engineers', 'Quality Assurance Engineers', 'Production Managers', 'Supplier Quality Engineers', 'Homologation Engineers', 'R&D Engineers', 'After-Sales Technical Managers', 'Assembly Line Supervisors', 'Logistics & Supply Chain Managers'],
    countries: ['Germany', 'Japan', 'USA', 'UK', 'India', 'South Korea', 'Malaysia', 'Thailand', 'UAE', 'China'],
  },
  'aviation': {
    title: 'Aviation & Aerospace Industry',
    icon: '✈️',
    images: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85',
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=85',
    ],
    overview: 'Aviation and aerospace demand the highest standards of technical precision, safety, and expertise. Millinoxx Experts places qualified aviation professionals — from MRO technicians to flight operations specialists — with airlines, MROs, and aerospace OEMs globally.',
    roles: ['Aircraft Maintenance Engineers (AME)', 'Avionics Technicians', 'Aerospace Engineers', 'Quality Assurance Inspectors', 'Ground Support Equipment Operators', 'Pilots (Commercial & Private)', 'Air Traffic Controllers', 'Flight Operations Officers', 'MRO Technicians', 'Composite Repair Technicians', 'NDT Inspectors (Aviation)', 'Safety & Compliance Officers'],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'UK', 'Germany', 'Singapore', 'Malaysia', 'India', 'USA', 'Australia'],
  },
  'agriculture': {
    title: 'Agricultural Industry',
    icon: '🌾',
    images: [
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=1600&q=85',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=85',
    ],
    overview: 'Modern agriculture integrates technology and sustainability to feed the world. Millinoxx Experts provides agri-professionals for large-scale farms, food processing, research, and agribusiness operations across emerging and developed markets.',
    roles: ['Agricultural Engineers', 'Agronomists', 'Farm Managers', 'Food Processing Technologists', 'Irrigation Engineers', 'Soil Scientists', 'Greenhouse Managers', 'Agri-Machinery Operators', 'Quality Control (Food)', 'Supply Chain Managers', 'Livestock Experts', 'Agricultural Economists'],
    countries: ['Saudi Arabia', 'UAE', 'Australia', 'New Zealand', 'UK', 'Canada', 'India', 'Kenya', 'South Africa', 'Malaysia'],
  },
  'hospitality': {
    title: 'Hospitality Sector',
    icon: '🏨',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85',
    ],
    overview: 'The global hospitality sector demands professionals who deliver extraordinary guest experiences. Millinoxx Experts sources skilled hospitality talent — from five-star hotel management to F&B professionals — for leading hotel brands, resorts, and event companies worldwide.',
    roles: ['Hotel General Managers', 'Food & Beverage Managers', 'Executive Chefs', 'Sous Chefs', 'Front Office Managers', 'Concierge Professionals', 'Revenue Managers', 'Housekeeping Managers', 'Event Coordinators', 'Restaurant Managers', 'Spa & Wellness Managers', 'Guest Relations Officers'],
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Maldives', 'UK', 'France', 'Singapore', 'Malaysia', 'India', 'Australia'],
  },
  'garments': {
    title: 'Garments & FMCG Sector',
    icon: '👗',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&q=85',
    ],
    overview: 'The garments and FMCG sector is one of the largest global employers, requiring specialized talent in design, production, retail, and supply chain. Millinoxx Experts connects garment manufacturers, fashion brands, and FMCG companies with skilled professionals.',
    roles: ['Garment Technologists', 'Fashion Designers', 'Production Managers', 'Merchandisers', 'Quality Control Managers', 'Textile Engineers', 'Pattern Makers', 'FMCG Brand Managers', 'Category Managers', 'Trade Marketing Managers', 'Supply Chain Analysts', 'Retail Operations Managers'],
    countries: ['Bangladesh', 'India', 'UAE', 'UK', 'Germany', 'Malaysia', 'Singapore', 'Turkey', 'Saudi Arabia', 'USA'],
  },
  'hospitals': {
    title: 'Hospitals & Medical Sector',
    icon: '🏥',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=85',
    ],
    overview: 'Healthcare is a mission-critical sector requiring highly qualified professionals with global certifications and compassionate care. Millinoxx Experts specializes in recruiting medical, paramedical, nursing, and allied health professionals for hospitals, clinics, and healthcare systems worldwide.',
    roles: ['Specialist Physicians', 'Surgeons', 'Nurses (ICU, ER, OR)', 'Paramedics', 'Pharmacists', 'Radiologists', 'Medical Lab Technicians', 'Physiotherapists', 'Medical Coders & Billers', 'Healthcare Administrators', 'Dentists', 'Hospital IT Specialists'],
    countries: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'UK', 'Canada', 'Australia', 'Germany'],
  },
  'it-telecom': {
    title: 'IT / Telecom Sector',
    icon: '💻',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=85',
    ],
    overview: 'The IT and telecom sector drives connectivity and digital innovation globally. Millinoxx Experts sources top IT and telecommunications professionals for software companies, internet providers, telecom operators, and digital infrastructure businesses.',
    roles: ['Software Engineers', 'Network Engineers', 'Telecom Architects', '5G Specialists', 'RF Engineers', 'Cloud Engineers', 'DevOps Engineers', 'Cybersecurity Analysts', 'Data Scientists', 'AI/ML Engineers', 'IT Project Managers', 'Technical Support Specialists'],
    countries: ['UAE', 'Saudi Arabia', 'UK', 'Germany', 'Singapore', 'USA', 'India', 'Australia', 'Malaysia', 'Canada'],
  },
  'banking-finance': {
    title: 'Banking & Finance Sector',
    icon: '💰',
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85',
    ],
    overview: 'Banking and finance require precision, compliance, and domain expertise. Millinoxx Experts recruits highly qualified financial professionals for banks, investment firms, insurance companies, fintech startups, and regulatory bodies across the globe.',
    roles: ['Investment Bankers', 'Chartered Accountants', 'Financial Analysts', 'Risk Managers', 'Compliance Officers', 'Treasury Managers', 'Fintech Developers', 'Credit Analysts', 'Wealth Managers', 'Insurance Underwriters', 'Internal Auditors', 'Portfolio Managers'],
    countries: ['UAE', 'Saudi Arabia', 'UK', 'Singapore', 'USA', 'Germany', 'India', 'Australia', 'Bahrain', 'Luxembourg'],
  },
  'cyber-security': {
    title: 'Cyber Security Industry',
    icon: '🛡️',
    images: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=85',
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1600&q=85',
    ],
    overview: 'As digital threats escalate globally, cyber security professionals are among the most sought-after talent in the world. Millinoxx Experts places certified cybersecurity experts with enterprises, government bodies, defense organizations, and technology companies worldwide.',
    roles: ['Chief Information Security Officer (CISO)', 'Penetration Testers / Ethical Hackers', 'Security Operations Center (SOC) Analysts', 'Incident Response Engineers', 'Cloud Security Engineers', 'Identity & Access Management (IAM) Specialists', 'Security Architects', 'Threat Intelligence Analysts', 'Compliance & GRC Managers', 'Cryptography Engineers', 'Malware Analysts', 'Vulnerability Assessment Engineers'],
    countries: ['USA', 'UK', 'Germany', 'UAE', 'Saudi Arabia', 'Australia', 'Singapore', 'India', 'Canada', 'Israel'],
  },
}

export default industryData
