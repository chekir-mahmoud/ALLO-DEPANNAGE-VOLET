# Guide : ajouter une prestation

Ce guide explique comment ajouter une prestation (par exemple « Porte de garage ») au site Allo Dépannage Volet.

Les 6 prestations actuelles : dépannage, réparation, installation et motorisation de volets roulants,
rideau métallique, store banne.

Une fois la prestation déclarée, **toutes ses pages sont créées automatiquement** :

| Page | Exemple |
|---|---|
| Page nationale | `/nos-services/porte-de-garage` |
| Page par département | `/gironde/porte-de-garage` |
| Page par ville (villes de 5 000 habitants ou plus, toutes en Gironde) | `/gironde/bordeaux/porte-de-garage` |
| Sitemap | ajoutée dans `/sitemap/static.xml` et dans chaque `/sitemap/[departement].xml` |

Il n'y a **aucune route à créer** dans `app/`.

---

## Étape 1 : choisir le slug

Le slug est la partie de l'URL : minuscules, sans accents, mots séparés par des tirets (`porte-de-garage`).

⚠️ Il ne doit être identique à **aucune clé de ville** d'un fichier `lib/*-city-config.ts` :
la route `/[departement]/[slug]` sert à la fois aux pages villes et aux pages prestation par département.

---

## Étape 2 : ajouter les photos

Placez les images dans `public/images/volet/`, avec un nom de fichier descriptif en français
(`porte-garage-sectionnelle.jpg`), puis déclarez-les dans l'objet `IMG` de
`lib/sous-services/volet-roulant.ts`.

---

## Étape 3 : écrire le contenu de la prestation

**Fichier :** `lib/sous-services/volet-roulant.ts`, tableau `SOUS_SERVICES_VOLET`

Ajoutez une entrée en copiant une prestation existante (par exemple `store-banne`) et en adaptant tous les textes.
Le type `SousServiceConfig` liste tous les champs obligatoires.

Les textes sont écrits **pour une ville** : les champs qui reçoivent `city` doivent contenir le lieu sous la forme
« à ${city} ».

```typescript
h1: (city) => `Réparation de porte de garage à ${city}`,
heroIntro: (city) => `Porte de garage bloquée à ${city} ? Nos techniciens interviennent 7j/7…`,
```

Le site adapte ensuite ces textes automatiquement :
- **page ville** : « à Bordeaux » ;
- **page département** : « en Gironde », « dans le Rhône » ;
- **page nationale** : la mention de lieu est retirée.

Pour que cette adaptation fonctionne, gardez des tournures simples : « à ${city} », « À ${city}, … »,
« à ${city} et ses environs ».

Ajoutez aussi le titre de la section « Nos services » dans `SERVICES_SECTION_TITLE` (même fichier) :

```typescript
"porte-de-garage": "Nos solutions pour les portes de garage",
```

---

## Étape 4 : la carte de la prestation

**Fichier :** `lib/services-volet-roulant.ts`, tableau `VOLET_SERVICES`

```typescript
{
  slug: "porte-de-garage",
  label: "Porte de garage",
  sub: "Dépannage, motorisation et entretien",
  image: "/images/volet/porte-garage-sectionnelle.jpg",
},
```

Cette liste alimente les cartes de l'accueil, des pages départements et villes, et le pied de page.

---

## Étape 5 : description de la page « Nos services »

**Fichier :** `app/nos-services/page.tsx`, objet `NATIONAL_DESCRIPTIONS`

```typescript
"porte-de-garage": "Dépannage, réparation et motorisation de portes de garage…",
```

---

## Étape 6 (optionnel) : sections affichées

Deux sections ne sont affichées que pour certaines prestations, dans
`app/nos-services/[slug]/service-client.tsx` et `app/[departement]/[ville]/client.tsx` :

- **Pannes fréquentes** (`PannesSection`) : seulement pour `depannage-volet-roulant` et `reparation-volet-roulant` ;
- **Marques** (`BrandsSection`) : masquée pour `rideau-metallique` et `store-banne`.

Ajoutez le slug de la nouvelle prestation à ces listes si besoin.

---

## Checklist

- [ ] Slug choisi, différent de toutes les clés de villes
- [ ] Photos ajoutées dans `public/images/volet/` et déclarées dans `IMG`
- [ ] Prestation ajoutée dans `SOUS_SERVICES_VOLET` et `SERVICES_SECTION_TITLE`
- [ ] Carte ajoutée dans `VOLET_SERVICES`
- [ ] Description ajoutée dans `NATIONAL_DESCRIPTIONS`
- [ ] `npm run build` sans erreur
- [ ] Pages vérifiées en local (`npm run dev`), en relisant les textes :
  - `http://localhost:3000/nos-services/porte-de-garage` (aucune ville, aucun « à » orphelin)
  - `http://localhost:3000/gironde/porte-de-garage` (« en Gironde »)
  - `http://localhost:3000/rhone/porte-de-garage` (« dans le Rhône »)
  - `http://localhost:3000/gironde/bordeaux/porte-de-garage` (« à Bordeaux »)
