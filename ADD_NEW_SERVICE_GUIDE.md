# Guide Complet : Ajouter un Nouveau Service

Ce guide explique étape par étape comment ajouter un nouveau service (par exemple, "plomberie") à l'architecture du projet Debarreo.

## Architecture Actuelle

Le projet utilise la structure suivante :
- **Services** : nettoyage, debarras-maison, debarras-epave, location-bennes, demolition-et-deconstruction, vitrerie, volet-roulant
- **Départements** : Gironde (33), Isère (38), Rhône (69), Haute-Savoie (74)
- **Villes** : Multiples villes par département

Structure des fichiers :
```
app/
  ├── [service]/
  │   ├── page.tsx                          # Page principale du service
  │   └── [departement]/[ville]/
  │       ├── page.tsx                      # Page SSR servant le client
  │       └── client.tsx                    # Composant client avec UI
  └── [departement]/page.tsx                # Pages par département
```

---

## Étapes pour Ajouter un Nouveau Service

### 1️⃣ **Ajouter le Service à la Configuration**

**Fichier** : `/lib/service-config.ts`

Ajoutez une nouvelle entrée dans l'objet `SERVICES` :

```typescript
export const SERVICES: Record<string, ServiceConfig> = {
  // ... services existants ...
  "plomberie": {
    name: "Plomberie",
    slug: "plomberie",
    description: "Services de plomberie professionnels",
    phoneKey: "plomberie", // Clé pour récupérer le numéro de téléphone
  },
}
```

**Important** : 
- `slug` doit être en minuscules avec tirets (kebab-case)
- `phoneKey` doit correspondre à une clé dans `/lib/phone-config.ts`

---

### 2️⃣ **Ajouter le Numéro de Téléphone du Service**

**Fichier** : `/lib/phone-config.ts`

Trouvez la fonction `getPhoneByDepartmentService()` et ajoutez une case pour votre service :

```typescript
export function getPhoneByDepartmentService(department: string, service: string): { tel: string; display: string } {
  const dept = department.toLowerCase()
  const srv = service.toLowerCase()

  // ... cases existantes ...

  if (srv === "plomberie") {
    if (dept === "gironde") return { tel: "+33XXX", display: "0XXX" }
    if (dept === "isere") return { tel: "+33XXX", display: "0XXX" }
    if (dept === "rhone") return { tel: "+33XXX", display: "0XXX" }
    if (dept === "haute-savoie") return { tel: "+33XXX", display: "0XXX" }
  }

  // Valeur par défaut
  return GIRONDE_PHONES.default
}
```

---

### 3️⃣ **Ajouter les Témoignages du Service**

**Fichier** : `/lib/testimonials/service-testimonials.ts`

Ajoutez les témoignages pour votre service :

```typescript
export const PLOMBERIE_TESTIMONIALS: Testimonial[] = [
  {
    name: "Jean Dupont",
    location: "Bordeaux",
    rating: 5,
    text: "Service rapide et professionnel. Je recommande vivement!",
    date: "2024-01-15",
  },
  // ... plus de témoignages ...
]
```

Puis, ajoutez la fonction pour récupérer les témoignages du service :

```typescript
export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  switch (serviceSlug.toLowerCase()) {
    // ... cases existantes ...
    case "plomberie":
      return PLOMBERIE_TESTIMONIALS
    default:
      return []
  }
}
```

---

### 4️⃣ **Créer la Structure des Dossiers**

Créez les dossiers suivants :

```
app/plomberie/
├── page.tsx                    # Page principale du service
└── [departement]/[ville]/
    ├── page.tsx                # Page SSR
    └── client.tsx              # Composant client
```

---

### 5️⃣ **Créer la Page Principale du Service**

**Fichier** : `app/plomberie/page.tsx`

Copiez et adaptez depuis un service existant (ex: `app/nettoyage/page.tsx`) :

```typescript
import { getServiceConfig } from "@/lib/service-config"
import ClientVillePage from "./[departement]/[ville]/client"

export const metadata = {
  title: "Plomberie - Devis Gratuit | Debarreo",
  description: "Services de plomberie professionnels",
}

const Page = () => {
  const serviceConfig = getServiceConfig("plomberie")

  if (!serviceConfig) {
    return <div>Service not found</div>
  }

  return (
    <main>
      {/* Contenu spécifique au service plomberie */}
      <h1>{serviceConfig.name}</h1>
      {/* ... resto du contenu ... */}
    </main>
  )
}

export default Page
```

---

### 6️⃣ **Créer la Page SSR (Page.tsx) pour Département/Ville**

**Fichier** : `app/plomberie/[departement]/[ville]/page.tsx`

Copiez et adaptez depuis `app/nettoyage/[departement]/[ville]/page.tsx` :

```typescript
import { getCityDataByDepartment, getDepartmentConfig, getServiceConfig } from "@/lib/service-config"
import { getCitiesByDepartment } from "@/lib/service-config"
import { getPhoneByDepartmentService } from "@/lib/phone-config"
import { getTestimonialsByServiceAndDepartment } from "@/lib/testimonials"
import ClientVillePage from "./client"
import { notFound } from "next/navigation"

const Page = async ({ params }: { params: { departement: string; ville: string } }) => {
  const { departement, ville } = params
  
  const cityData = getCityDataByDepartment(departement, ville)
  const departmentConfig = getDepartmentConfig(departement)
  const serviceConfig = getServiceConfig("plomberie")

  if (!cityData || !departmentConfig || !serviceConfig) {
    return <div>Page not found</div>
  }

  return (
    <ClientVillePage
      cityData={cityData}
      phoneConfig={getPhoneByDepartmentService(departement, "plomberie")}
      initialVilleSlug={ville}
      serviceSlug="plomberie"
      departmentSlug={departement}
      departmentConfig={departmentConfig}
      testimonials={getTestimonialsByServiceAndDepartment("plomberie", departement)}
      departmentCities={getCitiesByDepartment(departement)}
    />
  )
}

export default Page
