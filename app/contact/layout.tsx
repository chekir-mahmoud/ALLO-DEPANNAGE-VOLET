import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Contact et devis gratuit | Débarras Proximité",
  description: "Contactez Débarras Proximité par téléphone, WhatsApp, e-mail ou formulaire : rappel sous 30 minutes, devis gratuit le jour même, partout en France.",
  path: "/contact",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", path: "/contact" }]} />
      {children}
    </>
  )
}
