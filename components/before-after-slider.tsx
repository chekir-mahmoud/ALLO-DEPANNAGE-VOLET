"use client"

import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Comparateur avant / après.
// - On fait glisser la séparation (doigt sur mobile, souris maintenue sur ordinateur).
//   Un simple toucher ou clic ne change rien ; le défilement vertical de la page reste possible.
// - Au clavier : flèches gauche / droite.
// Chaque étiquette est attachée à son image : elle disparaît quand son image est entièrement cachée.
export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  className?: string
  sizes?: string
}) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const startX = useRef<number | null>(null)
  const startPosition = useRef(50)

  // La séparation suit le glissement à partir de sa position actuelle ;
  // le déplacement ne commence qu'après un vrai glissement horizontal (> 6 px)
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
    startPosition.current = position
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return
    const dx = e.clientX - startX.current
    if (!dragging && Math.abs(dx) < 6) return
    if (!dragging) setDragging(true)
    const width = ref.current?.getBoundingClientRect().width || 1
    setPosition(Math.min(100, Math.max(0, startPosition.current + (dx / width) * 100)))
  }
  const endDrag = () => {
    startX.current = null
    setDragging(false)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5))
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5))
    if (e.key === "Home") setPosition(0)
    if (e.key === "End") setPosition(100)
  }

  const transition = dragging ? "none" : "clip-path 0.45s ease, left 0.45s ease"

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label="Comparer avant et après le débarras : faites glisser la séparation"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className={`relative cursor-ew-resize select-none overflow-hidden touch-pan-y outline-none focus-visible:ring-4 focus-visible:ring-[#FFC629] ${className}`}
    >
      {/* Après (dessous) + son étiquette */}
      <Image src={after} alt={afterAlt} fill sizes={sizes} draggable={false} className="object-cover" />
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
        Après
      </span>

      {/* Avant (dessus), découpé selon la séparation, avec son étiquette */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, transition }}>
        <Image src={before} alt={beforeAlt} fill sizes={sizes} draggable={false} className="object-cover" />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#0E2452]/85 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
          Avant
        </span>
      </div>

      {/* Ligne de séparation et poignée */}
      <div
        className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%`, transition }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#0E2452] text-[#FFC629] shadow-lg">
          <ChevronLeft className="h-4 w-4 -mr-1" aria-hidden="true" />
          <ChevronRight className="h-4 w-4 -ml-1" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
