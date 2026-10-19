"use client"

import { useEffect } from "react"

interface DynamicHeadProps {
  cityName: string
  postalCode: string
  department?: string
  lat?: number
  lng?: number
  phone?: string
}

export default function DynamicHead({
  cityName,
  postalCode,
  department,
  lat,
  lng,
  phone,
}: DynamicHeadProps) {
  useEffect(() => {
    // Inject geo meta tags dynamically
    const metas: { name: string; content: string }[] = []

    if (lat !== undefined && lng !== undefined) {
      metas.push({ name: "geo.position", content: `${lat};${lng}` })
      metas.push({ name: "ICBM", content: `${lat}, ${lng}` })
    }

    if (cityName) {
      metas.push({ name: "geo.placename", content: cityName })
    }

    if (department) {
      metas.push({ name: "geo.region", content: `FR-${department}` })
    }

    metas.forEach(({ name, content }) => {
      const existing = document.querySelector(`meta[name="${name}"]`)
      if (existing) {
        existing.setAttribute("content", content)
      } else {
        const meta = document.createElement("meta")
        meta.setAttribute("name", name)
        meta.setAttribute("content", content)
        document.head.appendChild(meta)
      }
    })

    return () => {
      metas.forEach(({ name }) => {
        const el = document.querySelector(`meta[name="${name}"]`)
        if (el) el.remove()
      })
    }
  }, [cityName, postalCode, department, lat, lng])

  return null
}
