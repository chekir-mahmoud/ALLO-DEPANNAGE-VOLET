# Schema.org & Structured Data Guidelines

## ⚠️ RÈGLE CRITIQUE : Pas de Ratings Dupliqués

Google Search Console rapporte une erreur si **plusieurs avis/ratings** sont présents sur une même page avec des structures invalides.

### Règle d'Or
- **Une seule source de ratings** par page
- **JAMAIS** `aggregateRating` + `review` array ensemble sur la même entité
- Les ratings doivent être dans une structure `@graph` séparée SI vous avez besoin des deux

## 📍 Utilisation Correcte

### 1. Page d'Accueil (SEULE page avec ratings)
```typescript
// ✅ CORRECT
import { generateHomepageSchema } from "@/lib/schema-org"

const homepageSchema = generateHomepageSchema()
// Contient SOIT aggregateRating SOIT review array, jamais les deux dans la même entité
```

### 2. Pages de Services / Pages Secondaires (SANS ratings)
```typescript
// ✅ CORRECT
const schema = generateLocalBusinessSchema({
  name: "Service Name",
  description: "...",
  telephone: "+33...",
  url: "https://debarreo.fr/service",
  includeRating: false // ← IMPORTANT: false pour éviter les doublons
})

// ❌ INCORRECT - Ne pas faire:
const schema = generateLocalBusinessSchema({
  includeRating: true // ← Causera des erreurs Google
})
```

### 3. Structure Valide avec Reviews ET Ratings
```typescript
// Si vous DEVEZ avoir les deux, utilisez @graph:
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "aggregateRating": { ... } // Rating global ici
    },
    {
      "@type": "LocalBusiness", 
      "@id": "https://example.com/#local-business",
      "review": [ ... ] // Reviews individuels ici, PAS d'aggregateRating
    }
  ]
}
```

## 📋 Checklist pour Nouvelles Pages

- [ ] Page d'accueil? → Utilisez `generateHomepageSchema()`
- [ ] Page de service? → Utilisez `generateLocalBusinessSchema({ includeRating: false })`
- [ ] Avez-vous besoin de ratings? → Utilisez UNIQUEMENT `generateHomepageSchema()`
- [ ] Vérifiez qu'il n'y a qu'UN `SchemaOrgScript` avec ratings par page
- [ ] Testez avec: https://schema.org/validator ou Google's Rich Result Test

## 🔍 Debugging

Si Google Search Console rapporte "plusieurs notes cumulées":
1. Ouvrez DevTools → Network → trouvez les `<script type="application/ld+json">`
2. Vérifiez qu'il n'y a qu'**un seul** schéma contenant `ratingValue` ou `reviewRating`
3. Si vous voyez plusieurs, supprimez les `includeRating: true` inutiles
4. Relancez un scan dans Google Search Console

## 📚 Fichiers Concernés

- `/lib/schema-org.ts` - Générateurs de schemas
- `/components/schema-org-script.tsx` - Composant de rendu
- `/app/page.tsx` - Utilise `generateHomepageSchema()`
- Toutes les autres pages - Utilisent `generateLocalBusinessSchema({ includeRating: false })`
