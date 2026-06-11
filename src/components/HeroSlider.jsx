import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSlider({ slides, height = '100vh', showOverlay = true }) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    setPrev(current)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, slides.length, goTo])

  const prevSlide = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, slides.length, goTo])

  // Reset prev after transition completes
  useEffect(() => {
    const t = setTimeout(() => setPrev(null), 1000)
    return () => clearTimeout(t)
  }, [current])

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [next])

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      {/* All slides stacked — inactive slides hidden, active fully visible */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: i === current ? 2 : i === prev ? 1 : 0,
          }}
        >
          <img 
            src={slide.image} 
            alt="Hero Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: slide.position || 'center' }}
          />
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent" />
          )}
          {/* Slide content only shown on active slide */}
          {slide.content && i === current && (
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                {slide.content}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Previous slide">
        <ChevronLeft size={22} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Next slide">
        <ChevronRight size={22} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2.5 bg-gold' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
