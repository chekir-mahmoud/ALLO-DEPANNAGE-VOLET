# Configuration de l'envoi d'email

Pour activer l'envoi d'emails vers mahmoud.chekir91@gmail.com, suivez ces étapes:

## Option 1: Utiliser Resend (Recommandé)

1. Créez un compte sur [Resend](https://resend.com)
2. Obtenez votre clé API
3. Ajoutez la variable d'environnement dans Vercel:
   - `RESEND_API_KEY=votre_clé_api`

4. Installez le package Resend:
   \`\`\`bash
   npm install resend
   \`\`\`

5. Décommentez le code dans `app/api/send-estimation/route.ts`

## Option 2: Utiliser un autre service d'email

Vous pouvez aussi utiliser:
- SendGrid
- Mailgun
- Nodemailer avec Gmail

## Test actuel

Pour le moment, le formulaire fonctionne et affiche les données dans la console.
Les emails seront envoyés une fois que vous aurez configuré Resend.

## Email de destination

Tous les formulaires seront envoyés à: **mahmoud.chekir91@gmail.com**
