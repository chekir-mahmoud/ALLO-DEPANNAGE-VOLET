import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Contact et devis gratuit | Allo Dépannage Volet",
  description: "Contactez Allo Dépannage Volet par téléphone, WhatsApp, e-mail ou formulaire : dépannage de volets roulants 7j/7, rappel sous 30 minutes et devis gratuit, partout en France.",
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
