"use client"

import { useEffect, useState } from "react"

// Année en cours, recalculée dans le navigateur : les pages restent en cache jusqu'au
// prochain déploiement, l'année affichée par le serveur pourrait donc dater.
export default function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear())
  useEffect(() => setYear(new Date().getFullYear()), [])
  return <>{year}</>
}
