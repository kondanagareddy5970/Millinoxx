import {
  Monitor, Factory, Fuel, Zap, Building2,
  HeartPulse, Landmark, ShoppingCart, Radio,
  Truck, GraduationCap, Building, Cpu, Shield,
  FlaskConical, Wrench, Droplets, Settings,
  Anchor, Plane, Leaf
} from 'lucide-react'

export const servicesData = [
  {
    title: 'Artificial Intelligence Solutions',
    label: 'Artificial Intelligence Solutions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/ai-solutions',
    desc: 'Custom enterprise AI models and intelligent systems.'
  },
  {
    title: 'AI Automation & Intelligent Agents',
    label: 'AI Automation & Intelligent Agents',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/ai-automation',
    desc: 'AI agents managing workflows and robotic process automation.'
  },
  {
    title: 'Machine Learning & Predictive Analytics',
    label: 'Machine Learning & Predictive Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/machine-learning',
    desc: 'Predictive models, machine learning algorithms, and analytics.'
  },
  {
    title: 'Information Technology Services',
    label: 'Information Technology Services',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/it-services',
    desc: 'Modern software development, cloud infrastructure & enterprise systems.'
  },
  {
    title: 'Generative AI & LLM Development',
    label: 'Generative AI & LLM Development',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/gen-ai',
    desc: 'Large language models and AI-generated content systems.'
  },
  {
    title: 'Cloud & DevOps Engineering',
    label: 'Cloud & DevOps Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/cloud-devops',
    desc: 'Cloud architecture, Kubernetes, and CI/CD pipelines.'
  },
  {
    title: 'Cyber Security Solutions',
    label: 'Cyber Security Solutions',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/cyber-security',
    desc: 'Security operations, threat monitoring, and network protection.'
  },
  {
    title: 'Data Engineering & Business Intelligence',
    label: 'Data Engineering & Business Intelligence',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/data-engineering',
    desc: 'Big data pipelines, data lakes, and real-time intelligence.'
  },
  {
    title: 'International Recruitment Services',
    label: 'International Recruitment Services',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/international-recruitment',
    desc: 'Global workforce recruitment and overseas hiring solutions.'
  },
  {
    title: 'Indian Recruitment Services',
    label: 'Indian Recruitment Services',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/indian-recruitment',
    desc: 'End-to-end recruitment and talent acquisition across India.'
  },
  {
    title: 'Shutdown & Turnaround Maintenance Services',
    label: 'Shutdown & Turnaround Maintenance Services',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/shutdown-maintenance',
    desc: 'Industrial shutdown planning, turnaround execution, maintenance support, and safety compliance.'
  },
  {
    title: 'Deputation / Manpower Outsourcing & Consulting Services',
    label: 'Deputation / Manpower Outsourcing & Consulting Services',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&h=800&q=80&crop=entropy',
    path: '/services/deputation-outsourcing',
    desc: 'Technical staffing, manpower outsourcing, workforce deployment, and consulting solutions.'
  }
]

export const industriesData = [
  { label: 'Information Technology', icon: Monitor, path: '/industries/information-technology', prominent: true },
  { label: 'Artificial Intelligence', icon: Cpu, path: '/industries/artificial-intelligence', prominent: true },
  { label: 'Cyber Security', icon: Shield, path: '/industries/cyber-security' },
  { label: 'Telecom', icon: Radio, path: '/industries/telecom' },
  { label: 'Healthcare and Medical', icon: HeartPulse, path: '/industries/healthcare', prominent: true },
  { label: 'Oil and Gas', icon: Fuel, path: '/industries/oil-gas', prominent: true },
  { label: 'Petrochemicals', icon: FlaskConical, path: '/industries/petrochemicals', prominent: true },
  { label: 'Engineering and EPC', icon: Wrench, path: '/industries/engineering-epc', prominent: true },
  { label: 'Manufacturing', icon: Factory, path: '/industries/manufacturing' },
  { label: 'Power Plant', icon: Zap, path: '/industries/power-plant' },
  { label: 'Water Treatment', icon: Droplets, path: '/industries/water-treatment' },
  { label: 'MEP and HVAC', icon: Settings, path: '/industries/mep-hvac' },
  { label: 'Construction and Real Estate', icon: Building2, path: '/industries/construction' },
  { label: 'Heavy Equipment', icon: Truck, path: '/industries/heavy-equipment' },
  { label: 'Shipping and Marine', icon: Anchor, path: '/industries/shipping-marine' },
  { label: 'Aviation and Aerospace', icon: Plane, path: '/industries/aviation-aerospace' },
  { label: 'Banking and Finance', icon: Landmark, path: '/industries/banking-finance' },
  { label: 'Agriculture', icon: Leaf, path: '/industries/agriculture' },
  { label: 'FMCG and Garments', icon: ShoppingCart, path: '/industries/fmcg-garments' }
]
