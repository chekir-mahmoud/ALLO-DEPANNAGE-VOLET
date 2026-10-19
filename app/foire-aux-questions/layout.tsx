import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "FAQ débarras : prix, délais, succession | Débarras Proximité",
  description: "Toutes les réponses sur nos débarras partout en France : devis, tarifs, délais, succession, tri et recyclage des objets.",
  path: "/foire-aux-questions",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Questions fréquentes", path: "/foire-aux-questions" }]} />
      {children}
    </>
  )
}
