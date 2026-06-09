import React, { useId } from 'react'

export default function MillinoxxEmblem({ className = "w-12 h-12" }) {
  const id = useId().replace(/:/g, '')
  const textPathId = `text-path-${id}`

  return (
    <svg viewBox="0 0 200 200" className={className}>
      <defs>
        <path id={textPathId} d="M 100, 185 a 85,85 0 1,1 0.0001,0" fill="none" />
      </defs>

      {/* Interlocking Figures Group (3-fold symmetry) */}
      <g fill="currentColor">
        <g id={`fig-${id}`}>
          {/* Stylized head */}
          <circle cx="100" cy="62" r="7.5" />
          {/* Stylized body swoosh */}
          <path d="M 94,70 C 82,78 70,95 72,112 C 73,122 80,128 88,126 C 82,120 78,110 82,96 C 85,86 91,78 94,70 Z" />
        </g>
        <use href={`#fig-${id}`} transform="rotate(120, 100, 100)" />
        <use href={`#fig-${id}`} transform="rotate(240, 100, 100)" />
      </g>

      {/* Text path */}
      <text className="fill-current font-sans text-[9px] font-bold tracking-[0.05em]" fill="currentColor">
        <textPath href={`#${textPathId}`} startOffset="8%">Millinox Experts</textPath>
        <textPath href={`#${textPathId}`} startOffset="38%">Delivering Excellence through Global Standards.</textPath>
      </text>
    </svg>
  )
}
