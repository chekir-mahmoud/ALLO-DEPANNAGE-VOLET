"use client"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Phone } from "lucide-react"
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/site"
import Link from "next/link"


// Onglets du menu (gauche et droite du logo sur ordinateur, liste complète sur mobile)
const NAV_LEFT = [
  { href: "/", label: "Accueil" },
  { href: "/nos-services", label: "Nos prestations" },
  { href: "/tarifs", label: "Grille tarifaire" },
  { href: "/estimation", label: "Simulateur de prix" },
  { href: "/zone-intervention", label: "Zones d'intervention" },
]
const NAV_RIGHT = [
  { href: "/temoignages", label: "Avis clients" },
  { href: "/a-propos", label: "Qui sommes-nous ?" },
  { href: "/blog", label: "Conseils pratiques" },
  { href: "/foire-aux-questions", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]
const NAV_MOBILE = [...NAV_LEFT, ...NAV_RIGHT]

interface HeaderProps {
  phoneConfig: { tel: string; display: string }
  onContactClick?: () => void
  forceShowHeader?: boolean
}

export default function Header({ phoneConfig, onContactClick, forceShowHeader }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showWhiteBand, setShowWhiteBand] = useState(true)

  // Force show the full header when the quote form is open
  useEffect(() => {
    if (forceShowHeader) {
      setShowWhiteBand(true)
    }
  }, [forceShowHeader])
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  // Onglet actif : page exacte, ou sous-page (ex. un article de /blog)
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`))
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // ── Bloquer le scroll quand le menu mobile est ouvert ──
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      // If forceShowHeader is true, always keep the header visible
      if (forceShowHeader) {
        setShowWhiteBand(true)
        return
      }

      const currentScrollY = window.scrollY
      // Menu complet (masqué au défilement) à partir de 1536 px ; en dessous, bouton MENU toujours visible
      const isDesktop = window.innerWidth >= 1536

      if (!isDesktop) {
        setShowWhiteBand(true)
        return
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const scrollDifference = Math.abs(currentScrollY - lastScrollY)

        if (scrollDifference < 30) return

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowWhiteBand(false)
        } else if (currentScrollY < lastScrollY - 80) {
          setShowWhiteBand(true)
        } else if (currentScrollY < 50) {
          setShowWhiteBand(true)
        }

        setLastScrollY(currentScrollY)
      }, 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [lastScrollY, forceShowHeader])

  return (
    <>
      {/* Espace réservé sous le menu fixe : hauteur constante.
          S'il rétrécissait quand la bande blanche se masque, le contenu remonterait,
          le navigateur corrigerait le défilement et le menu se réafficherait en boucle (clignotement). */}
      <div className="h-[81px] md:h-[136px] 2xl:h-[141px]" />

      <header className="bg-white fixed top-0 left-0 right-0 z-[9999] font-['Inter',_'Segoe_UI',_system-ui,_sans-serif]">

        {/* ── BANDE BLEUE — Desktop uniquement ── */}
        <div className="hidden md:block bg-gradient-to-r from-[#0E2452] to-[#0E2452] text-white shadow-sm">
          <div className="container mx-auto px-6 py-2">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-9 h-9 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2.5">
                  {GOOGLE_RATING && <span className="text-xl font-bold">{GOOGLE_RATING}</span>}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-yellow-300 drop-shadow-sm" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  {GOOGLE_RATING && GOOGLE_REVIEW_COUNT ? (
                    <span className="text-sm font-medium opacity-95">
                      Basé sur <span className="font-bold">{GOOGLE_REVIEW_COUNT} avis</span>
                    </span>
                  ) : (
                    <Link href="/temoignages" className="text-sm font-medium opacity-95 hover:underline">
                      <span className="font-bold">Avis vérifiés</span> sur Google
                    </Link>
                  )}
                </div>
              </div>

              <a
                href={`tel:${phoneConfig.tel}`}
                className="text-sm font-semibold hover:text-white/90 transition-all whitespace-nowrap relative z-10 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" />
                Appelez-nous : {phoneConfig.display}
              </a>
            </div>
          </div>
        </div>

        {/* ── BANDE BLANCHE — Navigation ── */}
        <div
          className={`bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${showWhiteBand
              ? "max-h-[500px] opacity-100 border-b border-gray-200"
              : "max-h-0 opacity-0 border-b-0"
            }`}
        >
          <div className="container mx-auto px-6 py-4">

            {/* Mobile et tablette / petit écran (bouton MENU) */}
            <div className="2xl:hidden flex items-center justify-between w-full gap-2">
              <a href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="/images/logo-depannage-volet-roulant.png"
                  alt="Allo Dépannage Volet"
                  width={236}
                  height={52}
                  className="h-[52px] w-auto"
                  style={{ width: "auto" }}
                />
              </a>

              <Button
                size="sm"
                className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0E2452] to-[#0E2452] text-white hover:opacity-90 p-2 w-12 h-12 rounded-md gap-[3px] flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-6 h-[2px] bg-white" />
                <span className="text-[8px] font-bold leading-none tracking-tight">MENU</span>
                <div className="w-6 h-[2px] bg-white" />
              </Button>
            </div>

            {/* Grand écran (1536 px et plus) : 5 onglets de chaque côté du logo */}
            <div className="hidden 2xl:flex items-center justify-between gap-8">
              <nav className="flex items-center gap-5 text-[15px] font-semibold flex-1 justify-end whitespace-nowrap">
                {NAV_LEFT.map((item) => <NavLink key={item.href} {...item} active={isActive(item.href)} />)}
              </nav>

              <Link href="/" className="flex items-center mx-6 flex-shrink-0">
                <Image
                  src="/images/logo-depannage-volet-roulant.png"
                  alt="Allo Dépannage Volet"
                  width={262}
                  height={58}
                  className="h-[58px] w-auto transition-transform duration-300 hover:scale-105"
                  style={{ width: "auto" }}
                />
              </Link>

              <nav className="flex items-center gap-5 text-[15px] font-semibold flex-1 whitespace-nowrap">
                {NAV_RIGHT.map((item) => <NavLink key={item.href} {...item} active={isActive(item.href)} />)}
              </nav>
            </div>
          </div>
        </div>

        {/* ── MENU MOBILE ── */}
        {isMobileMenuOpen && (
          <div
            className="2xl:hidden fixed inset-x-0 bottom-0 top-[80px] md:top-[135px] z-[199] flex flex-col"
            style={{ backgroundImage: "linear-gradient(to right, #0E2452, #0E2452)" }}
          >
            <nav className="flex-1 flex flex-col justify-between px-4 py-4 overflow-hidden">

              <div className="flex flex-col gap-1">
                {NAV_MOBILE.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-4 py-2.5 font-semibold transition-colors ${active
                          ? "bg-white text-[#0E2452] shadow-md"
                          : "text-blue-100 hover:bg-white/10 hover:text-white"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`h-2 w-2 flex-shrink-0 rounded-full ${active ? "bg-[#FFC629]" : "bg-white/25"}`} aria-hidden="true" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              {onContactClick && (
                <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                  <Button
                    size="lg"
                    className="w-full font-bold shadow-lg text-[#0E2452] rounded-xl"
                    style={{ backgroundColor: "#FFC629" }}
                    onClick={() => {
                      onContactClick()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Demande de devis gratuit
                  </Button>

                  <Button
                    size="lg"
                    className="w-full font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white border-0"
                    asChild
                  >
                    <a href={`tel:${phoneConfig.tel}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      {phoneConfig.display}
                    </a>
                  </Button>
                </div>
              )}

            </nav>
          </div>
        )}

      </header>
    </>
  )
}

// Lien du menu ordinateur : onglet actif en bleu marine, souligné en jaune ; survol identique
function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative group transition-colors duration-200 ${active ? "text-[#0E2452]" : "text-gray-700 hover:text-[#0E2452]"}`}
    >
      {label}
      <span
        className={`absolute bottom-[-6px] left-0 h-[3px] rounded-full bg-[#FFC629] transition-all duration-200 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
        aria-hidden="true"
      />
    </Link>
  )
}
