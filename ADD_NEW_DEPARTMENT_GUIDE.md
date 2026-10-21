# Guide : ajouter un département

Ce guide explique comment ajouter un département (avec ses villes) au site Allo Dépannage Volet.
L'exemple utilisé est la Loire-Atlantique (44).

Une fois le département déclaré, **toutes les pages sont créées automatiquement** :

| Page | Exemple |
|---|---|
| Page département | `/loire-atlantique` |
| Prestations du département | `/loire-atlantique/depannage-volet-roulant` |
| Pages villes | `/loire-atlantique/nantes` |
| Prestations par ville (villes de 5 000 habitants ou plus) | `/loire-atlantique/nantes/store-banne` |
| Sitemap du département | `/sitemap/loire-atlantique.xml` |

Il n'y a **aucune route à créer** dans `app/`.

---

## Étape 1 : déclarer le département

**Fichier :** `lib/departments.ts`, objet `ACTIVE_DEPARTMENTS`

```typescript
"loire-atlantique": {
  slug: "loire-atlantique",
  name: "Loire-Atlantique",
  displayName: "en Loire-Atlantique", // utilisé dans les textes : « Dépannage de volet roulant en Loire-Atlantique »
  postalCode: "44",
  citiesConfig: "loire-atlantique-city-config",
},
```

- `slug` : minuscules, sans accents, mots séparés par des tirets. C'est l'URL du département.
- `displayName` : la bonne préposition compte (« en Gironde », « dans le Rhône », « dans l'Ain »).

---

## Étape 2 : créer le fichier des villes

**Fichier :** `lib/loire-atlantique-city-config.ts`

```typescript
// Configuration des villes de Loire-Atlantique (44)
export const VALID_CITIES: Record<string, { name: string; postalCode: string; population?: string }> = {
  nantes: { name: "Nantes", postalCode: "44000", population: "320732" },
  "saint-herblain": { name: "Saint-Herblain", postalCode: "44800", population: "49082" },
  "reze": { name: "Rezé", postalCode: "44400", population: "42405" },
  // ...
}
```

Règles :
- **Clé** = slug de la ville dans l'URL : minuscules, sans accents, tirets (`saint-herblain`).
  Une clé ne doit jamais être identique à un slug de prestation (`store-banne`, `rideau-metallique`…).
- **`name`** : nom officiel avec accents (affiché sur le site).
- **`population`** : à renseigner. Les pages prestation par ville (`/loire-atlantique/nantes/store-banne`)
  ne sont créées que pour les villes d'au moins 5 000 habitants (toutes les villes en Gironde).
  Le seuil se règle avec `SOUS_SERVICE_MIN_POPULATION` dans `lib/service-config.ts`.
- Les 48 premières villes du fichier sont affichées dans le bloc « villes desservies » des pages villes :
  placez les plus importantes en premier.

---

## Étape 3 : brancher le fichier des villes

**Fichier :** `lib/service-config.ts`

Ajoutez l'import en haut du fichier :

```typescript
import { VALID_CITIES as LOIRE_ATLANTIQUE_CITIES } from "./loire-atlantique-city-config"
```

puis le cas correspondant dans `getRawCitiesByDepartment()` :

```typescript
case "loire-atlantique":
  return LOIRE_ATLANTIQUE_CITIES
```

---

## Étape 4 : numéro de téléphone

**Fichier :** `lib/phone-config.ts`, objet `DEPARTMENT_PHONE_CONFIG`

```typescript
"loire-atlantique": makeDept(D, T, "Loire-Atlantique (44)"),
```

`D` et `T` correspondent au numéro principal. Pour un numéro propre au département,
passez un objet `{ display: "06 …", tel: "+336…" }` en dernier argument (voir les exemples existants).

---

## Étape 5 : genre grammatical

**Fichier :** `lib/department-area-phrase.ts`, objet `DEPARTMENT_GENDER`

```typescript
"loire-atlantique": "f",
```

Sert à écrire correctement « dans toute la Loire-Atlantique » / « dans tout le Rhône ».
Valeurs possibles : `"m"`, `"f"`, `"mp"`, `"fp"`, `"none"`, `"f-article-included"`.

---

## Étape 6 : cartes

Deux fichiers contiennent les coordonnées utilisées par les cartes :

1. **`components/department-map.tsx`**
   - `geojsonMap` : contour du département (fichiers du dépôt `gregoiredavid/france-geojson`) ;
   - `departmentCenterMap` : centre de la carte `[latitude, longitude]`.
2. **`app/[departement]/[ville]/client.tsx`**, objet `DEPT_COORDINATES` : coordonnées GPS du département
   (données structurées Google des pages villes).

```typescript
// components/department-map.tsx
"loire-atlantique": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/44-loire-atlantique/departement-44-loire-atlantique.geojson",
"loire-atlantique": [47.2, -1.55],

// app/[departement]/[ville]/client.tsx
"loire-atlantique": { lat: "47.2184", lng: "-1.5536" },
```

---

## Ce qui est automatique

- **Pages et sitemap** : générés à partir de `ACTIVE_DEPARTMENTS` et du fichier des villes.
- **Textes des prestations** : adaptés au département et à la ville (`lib/sous-services/volet-roulant.ts`).
- **Avis clients** : sur les pages du département, seuls les avis de ce département sont affichés
  (`avisPourDepartement` dans `lib/testimonials/exemples-volet-roulant.ts`). Il n'y a pas de fichier
  d'avis à créer par département.
- **URL avec accents ou majuscules** (`/Loire-Atlantique/Rezé`) : redirigées automatiquement vers
  l'URL normalisée (`proxy.ts`).

---

## Checklist

- [ ] Département ajouté dans `lib/departments.ts`
- [ ] Fichier `lib/loire-atlantique-city-config.ts` créé (avec `population`)
- [ ] Import et `case` ajoutés dans `lib/service-config.ts`
- [ ] Téléphone ajouté dans `lib/phone-config.ts`
- [ ] Genre ajouté dans `lib/department-area-phrase.ts`
- [ ] Coordonnées ajoutées dans `components/department-map.tsx` et `app/[departement]/[ville]/client.tsx`
- [ ] `npm run build` sans erreur
- [ ] Pages vérifiées en local (`npm run dev`) :
  - `http://localhost:3000/loire-atlantique`
  - `http://localhost:3000/loire-atlantique/depannage-volet-roulant`
  - `http://localhost:3000/loire-atlantique/nantes`
  - `http://localhost:3000/loire-atlantique/nantes/store-banne`
  - `http://localhost:3000/sitemap/loire-atlantique.xml`

---

## Astuce : récupérer les communes d'un département

L'API officielle `geo.api.gouv.fr` renvoie les communes avec leur code postal et leur population :

```bash
curl "https://geo.api.gouv.fr/departements/44/communes?fields=nom,codesPostaux,population"
```

Pensez à retirer les accents des clés (`Rezé` → `reze`) et à trier les villes par population.
