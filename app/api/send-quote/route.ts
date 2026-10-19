import { NextResponse } from "next/server"

interface EstimationLine {
  label: string
  detail?: string
  qty: number
  price: number | null // null = sur devis
}

const escapeHtml = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

// Bloc "estimation" envoyé par le simulateur de prix (/estimation)
function renderEstimation(lines: EstimationLine[], total?: number, hasDevis?: boolean, min?: number, max?: number): string {
  const rows = lines
    .map((l) => `
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
          <strong>${escapeHtml(l.qty)} × ${escapeHtml(l.label)}</strong>
          ${l.detail ? `<br><span style="color: #6b7280; font-size: 13px;">${escapeHtml(l.detail)}</span>` : ""}
        </td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right; white-space: nowrap;">
          ${l.price === null ? "Sur devis" : `${escapeHtml(l.price * l.qty)} €`}
        </td>
      </tr>`)
    .join("")
  return `
    <div class="info-block" style="border-left-color: #16a34a;">
      <h2 style="margin-top: 0; color: #111827; font-size: 18px;">🧮 Estimation du client</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">${rows}</table>
      <p style="margin: 12px 0 0 0; font-size: 16px; text-align: right;">
        <strong>Total estimé : ${escapeHtml(total ?? 0)} €${hasDevis ? " + éléments sur devis" : ""}</strong>
      </p>
      ${min && max ? `<p style="margin: 4px 0 0 0; font-size: 14px; text-align: right; color: #6b7280;">Fourchette affichée au client : ${escapeHtml(min)} € – ${escapeHtml(max)} €</p>` : ""}
    </div>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { prenom, nom, telephone, email, adresse, message, pagePath, estimation, estimationTotal, estimationHasDevis, estimationMin, estimationMax } = body
    const estimationLines: EstimationLine[] = Array.isArray(estimation) ? estimation.slice(0, 50) : []

    // Validate required fields (email facultatif)
    if (!prenom || !nom || !telephone || !adresse) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis" }, { status: 400 })
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DÉBARRAS PROXIMITÉ <onboarding@resend.dev>",
        to: "chekir.mahmoud91@gmail.com",
        subject: `🔔 Nouvelle demande de devis${estimationLines.length ? ` (estimation ${estimationMin && estimationMax ? `${estimationMin}–${estimationMax}` : estimationTotal ?? 0} €)` : ''}${pagePath ? ` - ${pagePath}` : ''}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 10px; }
              .header { background: linear-gradient(135deg, #FFC629 0%, #E6AE14 100%); color: white; padding: 20px 15px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 20px; }
              .content { background: #ffffff; padding: 15px; border: 1px solid #e5e7eb; border-top: none; }
              .info-block { background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #FFC629; }
              .info-row { display: block; padding: 8px 0; border-bottom: 1px solid #e5e7eb; word-wrap: break-word; }
              .info-row:last-child { border-bottom: none; }
              .label { font-weight: 600; color: #6b7280; display: block; margin-bottom: 4px; }
              .value { color: #111827; display: block; word-wrap: break-word; overflow-wrap: break-word; }
              .message-block { background: #fffbeb; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #f59e0b; }
              .message-block h3 { margin-top: 0; color: #92400e; font-size: 16px; }
              .page-info { background: #eff6ff; padding: 12px; border-radius: 8px; margin-top: 15px; font-size: 14px; border-left: 4px solid #3b82f6; }
              .footer { text-align: center; padding: 15px; color: #9ca3af; font-size: 12px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; background: #f9fafb; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Nouvelle Demande de Devis</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">Un nouveau client souhaite obtenir un devis</p>
              </div>
              
              <div class="content">
                <div class="info-block">
                  <h2 style="margin-top: 0; color: #111827; font-size: 18px;">👤 Informations du client</h2>
                  <div class="info-row">
                    <span class="label">Nom complet :</span>
                    <span class="value"><strong>${escapeHtml(prenom)} ${escapeHtml(nom)}</strong></span>
                  </div>
                  <div class="info-row">
                    <span class="label">📞 Téléphone :</span>
                    <span class="value"><a href="tel:${escapeHtml(telephone)}" style="color: #FFC629; text-decoration: none; font-weight: 600; word-wrap: break-word;">${escapeHtml(telephone)}</a></span>
                  </div>
                  ${email ? `<div class="info-row">
                    <span class="label">📧 Email :</span>
                    <span class="value"><a href="mailto:${escapeHtml(email)}" style="color: #FFC629; text-decoration: none; word-wrap: break-word; overflow-wrap: break-word;">${escapeHtml(email)}</a></span>
                  </div>` : ''}
                  <div class="info-row">
                    <span class="label">📍 Adresse :</span>
                    <span class="value">${escapeHtml(adresse)}</span>
                  </div>
                </div>

                ${estimationLines.length ? renderEstimation(estimationLines, estimationTotal, estimationHasDevis, estimationMin, estimationMax) : ''}

                ${message ? `
                <div class="message-block">
                  <h3>💬 Message du client</h3>
                  <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
                </div>
                ` : ''}

                ${pagePath ? `
                <div class="page-info">
                  <strong>🌐 Formulaire envoyé depuis la page :</strong><br>
                  <span style="color: #2563eb; font-weight: 600;">${escapeHtml(pagePath)}</span>
                </div>
                ` : ''}
              </div>
              
              <div class="footer">
                <p style="margin: 0;">Email automatique généré depuis le site <strong>DÉBARRAS PROXIMITÉ</strong></p>
                <p style="margin: 5px 0 0 0; color: #d1d5db;">⏱️ Envoyé le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "Une erreur est survenue" }, { status: 500 })
  }
}
