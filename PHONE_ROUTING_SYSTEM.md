System de routage des numéros de téléphone par Service et Département
=====================================================================

## Vue d'ensemble
Ce système garantit que chaque page de service affiche le bon numéro de téléphone/WhatsApp en fonction du service ET du département.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Page Route: /nettoyage/gironde/bordeaux                    │
└──────────┬──────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────┐
│  page.tsx (Server Component)                                 │
│  - Récupère: département = "gironde", service = "nettoyage" │
│  - Appelle: getPhoneByDepartmentService("gironde", ...)     │
└──────────┬──────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────┐
│  /lib/phone-config.ts                                        │
│  Clé: "gironde_nettoyage"                                    │
│  Résultat: {                                                 │
│    display: "07 63 49 22 55",                                │
│    tel: "+33763492255",                                      │
│    department: "Gironde (33)"                                │
│  }                                                            │
└──────────┬──────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────┐
│  client.tsx (Client Component)                               │
│  - Reçoit phoneConfig en prop                                │
│  - Utilise dans Header, QuoteForm, etc.                      │
└──────────┬──────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────┐
│  Affichage utilisateur:                                      │
│  ☎️ 07 63 49 22 55                                           │
│  💬 WhatsApp: 07 63 49 22 55                                 │
└─────────────────────────────────────────────────────────────┘
```

## Configuration des numéros

### Structure dans `/lib/phone-config.ts`

```typescript
export const PHONE_BY_DEPARTMENT_SERVICE: Record<string, PhoneConfig> = {
  // Format: "department_service"
  "gironde_nettoyage": {
    display: "07 63 49 22 55",
    tel: "+33763492255",
    department: "Gironde (33)",
  },
  "gironde_debarras-maison": {
    display: "07 75 22 90 02",
    tel: "+33775229002",
    department: "Gironde (33)",
  },
  // ... autres services et départements
}
```

### Fonction d'accès

```typescript
// Usage dans les pages
const phoneConfig = getPhoneByDepartmentService("gironde", "nettoyage");

// Fallback automatique si pas de service trouvé
const phoneConfig = getPhoneByDepartmentService("gironde"); // Prend le départment seul
```

## Intégration dans les pages

### 1. Page route (Server Component)

```typescript
// app/nettoyage/[departement]/[ville]/page.tsx

import { getPhoneByDepartmentService } from "@/lib/phone-config"

export default async function Page({
  params,
}: {
  params: Promise<{ departement: string; ville: string }>
}) {
  const { departement, ville } = await params
  
  // Récupère le numéro pour ce service ET ce département
  const phoneConfig = getPhoneByDepartmentService(departement, "nettoyage")

  return (
    <ClientVillePage
      phoneConfig={phoneConfig}
      serviceSlug="nettoyage"
      departmentSlug={departement}
      // ... autres props
    />
  )
}
```

### 2. Composant client (Client Component)

```typescript
// app/nettoyage/[departement]/[ville]/client.tsx

interface ClientVillePageProps {
  phoneConfig: { tel: string; display: string }
  serviceSlug: string
  departmentSlug: string
}

export default function ClientVillePage({
  phoneConfig,
  serviceSlug,
  departmentSlug,
}: ClientVillePageProps) {
  // Affiche le numéro dans le header
  return (
    <>
      <Header phoneConfig={phoneConfig} />
      {/* ... rest of page ... */}
    </>
  )
}
```

### 3. Header component

```typescript
// components/header.tsx

interface HeaderProps {
  phoneConfig: { tel: string; display: string }
}

export default function Header({ phoneConfig }: HeaderProps) {
  return (
    <a href={`tel:${phoneConfig.tel}`} className="...">
      {phoneConfig.display}
    </a>
  )
}
```

## Services disponibles et leurs numéros

### Gironde (33)
- Débarras de Maison: 07 75 22 90 02
- Location de Bennes: 06 14 46 98 88
- Nettoyage: 06 85 32 15 44
- Débarras Épave: 07 92 48 60 33
- Démolition et Déconstruction: 06 45 78 91 22
- Vitrerie: 06 23 55 88 77
- Volet Roulant: 07 41 33 66 99

### Isère (38)
- Débarras de Maison: 07 58 24 91 88
- Location de Bennes: 06 72 45 38 11
- Nettoyage: 07 63 49 22 55
- Débarras Épave: 06 91 27 44 66
- Démolition et Déconstruction: 07 82 56 11 33
- Vitrerie: 06 54 77 22 88
- Volet Roulant: 07 45 88 33 44

### Rhône (69)
- Débarras de Maison: 07 71 39 55 66
- Location de Bennes: 06 88 44 77 11
- Nettoyage: 07 56 22 88 99
- Débarras Épave: 06 77 33 99 22
- Démolition et Déconstruction: 07 93 11 66 44
- Vitrerie: 06 41 88 55 77
- Volet Roulant: 07 62 77 11 99

### Haute-Savoie (74)
- Débarras de Maison: 07 84 22 66 88
- Location de Bennes: 06 95 11 44 33
- Nettoyage: 07 49 55 77 22
- Débarras Épave: 06 82 66 99 11
- Démolition et Déconstruction: 07 76 33 88 55
- Vitrerie: 06 53 99 44 11
- Volet Roulant: 07 38 44 66 22

## Exemple d'usage - Page "Nettoyage à Bordeaux"

**URL**: `/nettoyage/gironde/bordeaux`

1. Page reçoit: `departement="gironde"`, `ville="bordeaux"`
2. Appelle: `getPhoneByDepartmentService("gironde", "nettoyage")`
3. Récupère: `{ display: "06 85 32 15 44", tel: "+33685321544" }`
4. Affiche dans le header: `☎️ 06 85 32 15 44`
5. Formulaire utilise le même numéro pour WhatsApp

## Avantages

✅ **Spécificité**: Un numéro different par service et département  
✅ **Flexibilité**: Facile de modifier les numéros par configuration  
✅ **Maintenabilité**: Tout en un seul fichier de configuration  
✅ **Scalabilité**: Support illimité de services et départements  
✅ **SEO**: Chaque page a le numéro local approprié  

## Modification des numéros

Pour mettre à jour un numéro:

1. Ouvrez `/lib/phone-config.ts`
2. Trouvez la clé correspondante (ex: `"gironde_nettoyage"`)
3. Modifiez `display` et `tel`
4. Les changements s'appliquent instantanément à toutes les pages
