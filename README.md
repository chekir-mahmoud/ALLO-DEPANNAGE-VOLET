# Allo Dépannage Volet

Site de [www.allo-depannage-volet.fr](https://www.allo-depannage-volet.fr) : dépannage, réparation, installation et
motorisation de volets roulants, rideaux métalliques et stores bannes.

Next.js (App Router), React, Tailwind CSS, hébergé sur Vercel.

## Lancer le site en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # vérification avant déploiement
```

Variable d'environnement (fichier `.env.local` en local, *Settings → Environment Variables* sur Vercel) :

- `RESEND_API_KEY` : envoi des demandes de devis par email (`app/api/send-quote/route.ts`).

## Organisation

| Dossier / fichier | Contenu |
|---|---|
| `app/[departement]/` | Pages département, ville, prestation par département et par ville |
| `app/nos-services/` | Pages nationales des prestations |
| `lib/departments.ts` | Liste des départements actifs |
| `lib/*-city-config.ts` | Villes de chaque département |
| `lib/sous-services/volet-roulant.ts` | Contenu des prestations |
| `lib/phone-config.ts` | Numéro de téléphone par département |
| `lib/testimonials/` | Avis clients |
| `lib/site.ts` | URL, adresse du siège, note Google |

## Guides

- [Ajouter un département](ADD_NEW_DEPARTMENT_GUIDE.md)
- [Ajouter une prestation](ADD_NEW_SERVICE_GUIDE.md)
