# Guide Complet : Ajouter un Département avec ses Villes

Ce guide explique comment ajouter un nouveau département (ex: Loire-Atlantique, Haute-Garonne) à votre architecture avec toutes ses villes et témoignages.

## Architecture Actuelle

Vos départements existants:
- **Gironde** (33)
- **Isère** (38)
- **Rhône** (69)
- **Haute-Savoie** (74)

## Étapes pour Ajouter un Département

### ÉTAPE 1️⃣ : Créer le Fichier de Configuration des Villes

**Fichier:** `lib/[departement]-city-config.ts`

**Exemple pour Loire-Atlantique (44):**

```typescript
// lib/loire-atlantique-city-config.ts
export const LOIRE_ATLANTIQUE_CITIES = {
  nantes: { name: "Nantes", postalCode: "44000" },
  saint_nazaire: { name: "Saint-Nazaire", postalCode: "44600" },
  saint_brévin_les_pins: { name: "Saint-Brévin-les-Pins", postalCode: "44250" },
  carquefou: { name: "Carquefou", postalCode: "44470" },
  orvault: { name: "Orvault", postalCode: "44700" },
  couéron: { name: "Couéron", postalCode: "44220" },
  rezé: { name: "Rezé", postalCode: "44400" },
  guerande: { name: "Guérande", postalCode: "44350" },
  saint_herblain: { name: "Saint-Herblain", postalCode: "44800" },
  vertou: { name: "Vertou", postalCode: "44120" },
  // Ajoutez 38+ autres villes pour couvrir votre zone d'intervention
};
```


**Structure requise:**
- Clé: slug de la ville (minuscules, tirets pour espaces)
- Valeur: objet avec `name` (nom officiel) et `postalCode` (code postal)
- Minimum recommandé: 48 villes

---

### ÉTAPE 2️⃣ : Ajouter les Témoignages par Département

**Fichier:** `lib/testimonials/[departement]-testimonials.ts`

**Exemple pour Loire-Atlantique:**

```typescript
// lib/testimonials/loire-atlantique-testimonials.ts
export const LOIRE_ATLANTIQUE_TESTIMONIALS = [
  {
    name: "Marie Dupont",
    location: "Nantes",
    rating: 5,
    testimonial: "Service impeccable ! L'équipe était professionnelle et rapide. Je recommande vivement.",
    service: "debarras-maison"
  },
  {
    name: "Jean Moreau",
    location: "Saint-Nazaire",
    rating: 5,
    testimonial: "Très satisfait du nettoyage après démolition. Travail de qualité.",
    service: "demolition-et-deconstruction"
  },
  {
    name: "Sophie Martin",
    location: "Carquefou",
    rating: 4.8,
    testimonial: "Élagage parfait ! Équipe courtoise et efficace.",
    service: "elagage"
  },
  // Ajoutez 10-15 témoignages supplémentaires
];
```

---

### ÉTAPE 3️⃣ : Ajouter le Département à la Configuration Principale

**Fichier:** `lib/department-config.ts`

Le département est déjà dans `DEPARTEMENTS_FRANCE`. Vérifiez qu'il y est (il doit y être!):

```typescript
// Exemple: Loire-Atlantique y est déjà
loire_atlantique: { name: "en Loire-Atlantique", postalCode: "44" }
```

**Si ce n'est pas le cas, ajoutez-le:**

```typescript
export const DEPARTEMENTS_FRANCE = {
  // ... autres départements
  loire_atlantique: { name: "en Loire-Atlantique", postalCode: "44" },
  // ...
};
```

---

### ÉTAPE 4️⃣ : Importer les Témoignages dans le Service

**Fichier:** `lib/testimonials/service-testimonials.ts`

Ajoutez l'import et l'export pour chaque service:

```typescript
// Pour débarras-maison
import { LOIRE_ATLANTIQUE_TESTIMONIALS as LOIRE_ATLANTIQUE_DEBARRAS } from "./loire-atlantique-testimonials";

export const DEBARRAS_MAISON_TESTIMONIALS_BY_DEPARTMENT = {
  // ... autres départements
  loire_atlantique: LOIRE_ATLANTIQUE_DEBARRAS.filter(t => t.service === "debarras-maison"),
};
```

---

### ÉTAPE 5️⃣ : Ajouter le Département à la Page d'Aperçu

**Fichier:** `app/[departement]/page.tsx`

Le système est déjà dynamique, mais si vous voulez une page d'aperçu par département:

1. Créez `app/loire-atlantique/page.tsx`
2. Copiez le contenu de `app/gironde/page.tsx`
3. Modifiez les références au département

**Exemple:**
```typescript
export default function LoireAtlantiqueServicePage() {
  return (
    <div>
      <Header cityName="Loire-Atlantique" />
      {/* Contenu spécifique */}
    </div>
  );
}
```

---

### ÉTAPE 6️⃣ : Créer les Routes par Service et Ville

**Répertoires à créer:**

```
app/
├── nettoyage/
│   └── loire-atlantique/
│       ├── [ville]/
│       │   ├── page.tsx
│       │   └── client.tsx
│       └── page.tsx
├── debarras-maison/
│   └── loire-atlantique/
│       ├── [ville]/
│       │   ├── page.tsx
│       │   └── client.tsx
│       └── page.tsx
├── elagage/
│   └── loire-atlantique/
│       ├── [ville]/
│       │   ├── page.tsx
│       │   └── client.tsx
│       └── page.tsx
// ... répétez pour tous les services
```

**Fichier:** `app/nettoyage/loire-atlantique/[ville]/page.tsx`

```typescript
import { getCityDataByDepartment, getDepartmentConfig } from "@/lib/department-config";
import ClientVillePage from "@/app/nettoyage/[departement]/[ville]/client";
import { LOIRE_ATLANTIQUE_CITIES } from "@/lib/loire-atlantique-city-config";
import { NETTOYAGE_TESTIMONIALS_BY_DEPARTMENT } from "@/lib/testimonials/service-testimonials";

export async function generateStaticParams() {
  return Object.keys(LOIRE_ATLANTIQUE_CITIES).map((slug) => ({
    ville: slug,
    departement: "loire-atlantique",
  }));
}

export default function Page({ params }: { params: { ville: string } }) {
  const cityData = getCityDataByDepartment("loire-atlantique", params.ville);
  
  return (
    <ClientVillePage
      cityData={cityData}
      phoneConfig={PHONE_CONFIG.nettoyage}
      initialVilleSlug={params.ville}
      serviceSlug="nettoyage"
      departmentSlug="loire-atlantique"
      testimonials={NETTOYAGE_TESTIMONIALS_BY_DEPARTMENT["loire-atlantique"] || []}
      departmentCities={LOIRE_ATLANTIQUE_CITIES}
    />
  );
}
```

---

## 📋 Checklist de Vérification

- [ ] Fichier `lib/loire-atlantique-city-config.ts` créé avec 48+ villes
- [ ] Fichier `lib/testimonials/loire-atlantique-testimonials.ts` créé avec 10+ témoignages
- [ ] Département ajouté à `DEPARTEMENTS_FRANCE` dans `lib/department-config.ts`
- [ ] Témoignages importés dans `lib/testimonials/service-testimonials.ts`
- [ ] Routes `/nettoyage/loire-atlantique/[ville]/` créées
- [ ] Routes `/debarras-maison/loire-atlantique/[ville]/` créées
- [ ] Routes `/elagage/loire-atlantique/[ville]/` créées
- [ ] Routes `/vitrerie/loire-atlantique/[ville]/` créées
- [ ] Routes `/volet-roulant/loire-atlantique/[ville]/` créées
- [ ] Routes `/demolition-et-deconstruction/loire-atlantique/[ville]/` créées
- [ ] Routes `/location-bennes/loire-atlantique/[ville]/` créées
- [ ] Routes `/debarras-epave/loire-atlantique/[ville]/` créées
- [ ] Données testées sur `/nettoyage/loire-atlantique/nantes`

---

## 🔍 Fichiers à Modifier

| Fichier | Action | Priorité |
|---------|--------|----------|
| `lib/loire-atlantique-city-config.ts` | **Créer** | 🔴 Haute |
| `lib/testimonials/loire-atlantique-testimonials.ts` | **Créer** | 🔴 Haute |
| `lib/department-config.ts` | Vérifier | 🟢 Basse |
| `lib/testimonials/service-testimonials.ts` | Ajouter imports | 🟡 Moyenne |
| Routes par service `app/[service]/loire-atlantique/[ville]/` | **Créer** | 🔴 Haute |

---

## 💡 Astuces

### Lister toutes les villes d'un département

Utilisez l'API Gouv.fr:
```bash
curl https://geo.api.gouv.fr/departements/44/communes
```

### Générer rapidement 48 villes

Exploitez l'API:
```javascript
const data = await fetch('https://geo.api.gouv.fr/departements/44/communes').then(r => r.json());
const cities = data.slice(0, 48).map(c => ({
  [c.nom.toLowerCase().replace(/\s+/g, '-')]: { name: c.nom, postalCode: c.code }
}));
```

### Valider le format des villes

Chaque ville DOIT avoir:
- **name**: Chaîne (nom officiel)
- **postalCode**: Chaîne avec code postal

---

## 🚀 Après l'Ajout

1. **Testez les URLs:**
   - `https://www.debarreo.fr/nettoyage/loire-atlantique/nantes`
   - `https://www.debarreo.fr/debarras-maison/loire-atlantique/carquefou`

2. **Vérifiez le SEO:**
   - Métadonnées correctes
   - Schema.org présent
   - Témoignages affichés

3. **Validez les liens:**
   - Grille des 48 villes visible
   - Carrousel de témoignages fonctionne
   - Formulaire de devis fonctionnel

---

## ❓ Questions Fréquentes

**Q: Pourquoi 48 villes?**
A: C'est le nombre optimal pour la grille 3x16 sur la page. Vous pouvez en ajouter plus ou moins.

**Q: Les témoignages sont-ils obligatoires?**
A: Non, mais fortement recommandés pour le SEO et la conversion.

**Q: Comment dupliquer pour plusieurs départements?**
A: Répétez les étapes 1-6 pour chaque nouveau département avec ses données spécifiques.

**Q: Puis-je automatiser l'ajout de départements?**
A: Oui! Créez un script qui génère les fichiers à partir des données de l'API Gouv.fr.
