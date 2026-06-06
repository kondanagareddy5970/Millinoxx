import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Counter({ target, suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 5000, suffix: '+', label: 'Successful Placements' },
  { value: 25, suffix: '+', label: 'Countries Served' },
  { value: 15, suffix: '+', label: 'Industries Covered' },
  { value: 10, suffix: '+', label: 'Years Experience' },
]

export default function StatsCounter() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-heading text-5xl font-bold text-gold mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
              <div className="w-10 h-0.5 bg-gold/40 mx-auto mt-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
