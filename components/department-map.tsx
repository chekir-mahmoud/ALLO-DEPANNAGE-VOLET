"use client"

import { useEffect, useRef } from "react"

interface DepartmentMapProps {
  departmentSlug: string
  serviceSlug?: string
}

export default function DepartmentMap({ departmentSlug = "gironde", serviceSlug }: DepartmentMapProps) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  const geojsonMap: Record<string, string> = {
    gironde: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/33-gironde/departement-33-gironde.geojson",
    isere: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/38-isere/departement-38-isere.geojson",
    rhone: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/69-rhone/departement-69-rhone.geojson",
    "haute-savoie": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/74-haute-savoie/departement-74-haute-savoie.geojson",
    "loire-atlantique": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/44-loire-atlantique/departement-44-loire-atlantique.geojson",
    herault: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/34-herault/departement-34-herault.geojson",
    "haute-garonne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/31-haute-garonne/departement-31-haute-garonne.geojson",
    ain: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/01-ain/departement-01-ain.geojson",
    ardeche: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/07-ardeche/departement-07-ardeche.geojson",
    drome: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/26-drome/departement-26-drome.geojson",
    loire: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/42-loire/departement-42-loire.geojson",
    savoie: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/73-savoie/departement-73-savoie.geojson",
    allier: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/03-allier/departement-03-allier.geojson",
    cantal: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/15-cantal/departement-15-cantal.geojson",
    "haute-loire": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/43-haute-loire/departement-43-haute-loire.geojson",
    "puy-de-dome": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/63-puy-de-dome/departement-63-puy-de-dome.geojson",
    charente: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/16-charente/departement-16-charente.geojson",
    "charente-maritime": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/17-charente-maritime/departement-17-charente-maritime.geojson",
    martinique: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/972-martinique/departement-972-martinique.geojson",
    guadeloupe: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/971-guadeloupe/departement-971-guadeloupe.geojson",
    paris: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/75-paris/departement-75-paris.geojson",
    "alpes-maritimes": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/06-alpes-maritimes/departement-06-alpes-maritimes.geojson",
    "bouches-du-rhone": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/13-bouches-du-rhone/departement-13-bouches-du-rhone.geojson",
    "val-d-oise": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/95-val-d-oise/departement-95-val-d-oise.geojson",
    "cote-d-or": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/21-cote-d-or/departement-21-cote-d-or.geojson",
    aisne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/02-aisne/departement-02-aisne.geojson",
    "haute-marne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/52-haute-marne/departement-52-haute-marne.geojson",
    cher: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/18-cher/departement-18-cher.geojson",
    calvados: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/14-calvados/departement-14-calvados.geojson",
    tarn: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/81-tarn/departement-81-tarn.geojson",
    "maine-et-loire": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/49-maine-et-loire/departement-49-maine-et-loire.geojson",
    mayenne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/53-mayenne/departement-53-mayenne.geojson",
    sarthe: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/72-sarthe/departement-72-sarthe.geojson",
    vendee: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/85-vendee/departement-85-vendee.geojson",
    "alpes-de-haute-provence": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/04-alpes-de-haute-provence/departement-04-alpes-de-haute-provence.geojson",
    "hautes-alpes": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/05-hautes-alpes/departement-05-hautes-alpes.geojson",
    var: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/83-var/departement-83-var.geojson",
    vaucluse: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/84-vaucluse/departement-84-vaucluse.geojson",
    ariege: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/09-ariege/departement-09-ariege.geojson",
    aude: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/11-aude/departement-11-aude.geojson",
    aveyron: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/12-aveyron/departement-12-aveyron.geojson",
    gard: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/30-gard/departement-30-gard.geojson",
    gers: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/32-gers/departement-32-gers.geojson",
    lot: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/46-lot/departement-46-lot.geojson",
    lozere: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/48-lozere/departement-48-lozere.geojson",
    "hautes-pyrenees": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/65-hautes-pyrenees/departement-65-hautes-pyrenees.geojson",
    "pyrenees-orientales": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/66-pyrenees-orientales/departement-66-pyrenees-orientales.geojson",
    "tarn-et-garonne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/82-tarn-et-garonne/departement-82-tarn-et-garonne.geojson",
    correze: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/19-correze/departement-19-correze.geojson",
    creuse: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/23-creuse/departement-23-creuse.geojson",
    dordogne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/24-dordogne/departement-24-dordogne.geojson",
    landes: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/40-landes/departement-40-landes.geojson",
    "lot-et-garonne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/47-lot-et-garonne/departement-47-lot-et-garonne.geojson",
    "pyrenees-atlantiques": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/64-pyrenees-atlantiques/departement-64-pyrenees-atlantiques.geojson",
    "deux-sevres": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/79-deux-sevres/departement-79-deux-sevres.geojson",
    vienne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/86-vienne/departement-86-vienne.geojson",
    "haute-vienne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/87-haute-vienne/departement-87-haute-vienne.geojson",
    doubs: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/25-doubs/departement-25-doubs.geojson",
    jura: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/39-jura/departement-39-jura.geojson",
    nievre: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/58-nievre/departement-58-nievre.geojson",
    "haute-saone": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/70-haute-saone/departement-70-haute-saone.geojson",
    "saone-et-loire": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/71-saone-et-loire/departement-71-saone-et-loire.geojson",
    yonne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/89-yonne/departement-89-yonne.geojson",
    "territoire-de-belfort": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/90-territoire-de-belfort/departement-90-territoire-de-belfort.geojson",
    "cotes-d-armor": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/22-cotes-d-armor/departement-22-cotes-d-armor.geojson",
    finistere: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/29-finistere/departement-29-finistere.geojson",
    "ille-et-vilaine": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/35-ille-et-vilaine/departement-35-ille-et-vilaine.geojson",
    morbihan: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/56-morbihan/departement-56-morbihan.geojson",
    "eure-et-loir": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/28-eure-et-loir/departement-28-eure-et-loir.geojson",
    indre: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/36-indre/departement-36-indre.geojson",
    "indre-et-loire": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/37-indre-et-loire/departement-37-indre-et-loire.geojson",
    "loir-et-cher": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/41-loir-et-cher/departement-41-loir-et-cher.geojson",
    loiret: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/45-loiret/departement-45-loiret.geojson",
    ardennes: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/08-ardennes/departement-08-ardennes.geojson",
    aube: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/10-aube/departement-10-aube.geojson",
    marne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/51-marne/departement-51-marne.geojson",
    "meurthe-et-moselle": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/54-meurthe-et-moselle/departement-54-meurthe-et-moselle.geojson",
    meuse: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/55-meuse/departement-55-meuse.geojson",
    moselle: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/57-moselle/departement-57-moselle.geojson",
    "bas-rhin": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/67-bas-rhin/departement-67-bas-rhin.geojson",
    "haut-rhin": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/68-haut-rhin/departement-68-haut-rhin.geojson",
    vosges: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/88-vosges/departement-88-vosges.geojson",
    nord: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/59-nord/departement-59-nord.geojson",
    oise: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/60-oise/departement-60-oise.geojson",
    "pas-de-calais": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/62-pas-de-calais/departement-62-pas-de-calais.geojson",
    somme: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/80-somme/departement-80-somme.geojson",
    "seine-et-marne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/77-seine-et-marne/departement-77-seine-et-marne.geojson",
    yvelines: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/78-yvelines/departement-78-yvelines.geojson",
    essonne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/91-essonne/departement-91-essonne.geojson",
    "hauts-de-seine": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/92-hauts-de-seine/departement-92-hauts-de-seine.geojson",
    "seine-saint-denis": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/93-seine-saint-denis/departement-93-seine-saint-denis.geojson",
    "val-de-marne": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/94-val-de-marne/departement-94-val-de-marne.geojson",
    "val-d-oise": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/95-val-d-oise/departement-95-val-d-oise.geojson",
    eure: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/27-eure/departement-27-eure.geojson",
    manche: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/50-manche/departement-50-manche.geojson",
    orne: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/61-orne/departement-61-orne.geojson",
    "seine-maritime": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/76-seine-maritime/departement-76-seine-maritime.geojson",
    "corse-du-sud": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/2A-corse-du-sud/departement-2A-corse-du-sud.geojson",
    "haute-corse": "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/2B-haute-corse/departement-2B-haute-corse.geojson",
    guyane: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/973-guyane/departement-973-guyane.geojson",
    reunion: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/974-reunion/departement-974-reunion.geojson",
    mayotte: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/976-mayotte/departement-976-mayotte.geojson",
  }

  // Coordonnées du centre de chaque département
  const departmentCenterMap: Record<string, [number, number]> = {
    gironde: [44.75, -0.57],
    isere: [45.5, 5.7],
    rhone: [45.7, 4.6],
    "haute-savoie": [46.2, 6.4],
    "loire-atlantique": [47.2, -1.55], // Centré sur Nantes
    herault: [43.6, 3.3], // Centré sur Montpellier
    "haute-garonne": [43.6, 1.45], // Centré sur Toulouse
    ain: [46.0, 5.3], // Centré sur Bourg-en-Bresse
    ardeche: [44.7, 4.4], // Centré sur Privas
    drome: [44.7, 5.2], // Centré sur Valence
    loire: [45.6, 4.2], // Centré sur Saint-Étienne
    savoie: [45.5, 6.5], // Centré sur Chambéry
    allier: [46.3, 3.3], // Centré sur Moulins
    cantal: [45.0, 2.7], // Centré sur Aurillac
    "haute-loire": [45.0, 3.9], // Centré sur Le Puy-en-Velay
    "puy-de-dome": [45.7, 3.1], // Centré sur Clermont-Ferrand
    charente: [45.65, 0.15], // Centré sur Angoulême
    "charente-maritime": [45.85, -0.95], // Centré sur La Rochelle
    martinique: [14.6349, -61.0242], // Centré sur Fort-de-France
    guadeloupe: [16.2333, -61.5333], // Centré sur Basse-Terre
    paris: [48.8566, 2.3522], // Centré sur Paris
    "alpes-maritimes": [43.7102, 7.262], // Centré sur Nice
    "bouches-du-rhone": [43.3, 5.4], // Centré sur Marseille
    "val-d-oise": [49.0, 2.0], // Centré sur Pontoise/Cergy
    "cote-d-or": [47.3, 5.0], // Centré sur Dijon
    aisne: [49.5, 3.5], // Centré sur Laon
    "haute-marne": [48.0, 5.2], // Centré sur Chaumont
    cher: [47.1, 2.4], // Centré sur Bourges
    calvados: [49.2, -0.2], // Centré sur Caen
    tarn: [43.6, 2.2], // Centré sur Albi
    "maine-et-loire": [47.4, -0.55], // Centré sur Angers
    mayenne: [48.3, -0.6], // Centré sur Laval
    sarthe: [48.0, 0.2], // Centré sur Le Mans
    vendee: [46.7, -1.4], // Centré sur La Roche-sur-Yon
    "alpes-de-haute-provence": [44.1, 5.9], // Centré sur Digne-les-Bains
    "hautes-alpes": [45.0, 6.0], // Centré sur Gap
    var: [43.1, 6.2], // Centré sur Toulon
    vaucluse: [44.0, 4.8], // Centré sur Avignon
    ariege: [42.9, 1.5], // Centré sur Foix
    aude: [43.2, 2.3], // Centré sur Carcassonne
    aveyron: [43.8, 2.6], // Centré sur Rodez
    gard: [44.0, 4.0], // Centré sur Nîmes
    gers: [43.7, 0.6], // Centré sur Auch
    lot: [44.4, 1.4], // Centré sur Cahors
    lozere: [44.5, 3.5], // Centré sur Mende
    "hautes-pyrenees": [43.1, 0.0], // Centré sur Tarbes
    "pyrenees-orientales": [42.5, 2.2], // Centré sur Perpignan
    "tarn-et-garonne": [44.0, 1.3], // Centré sur Montauban
    correze: [45.3, 1.75], // Centré sur Tulle
    creuse: [46.1, 2.0], // Centré sur Guéret
    dordogne: [45.2, 0.7], // Centré sur Périgueux
    landes: [43.9, -0.6], // Centré sur Mont-de-Marsan
    "lot-et-garonne": [44.2, 0.7], // Centré sur Agen
    "pyrenees-atlantiques": [43.3, -0.6], // Centré sur Pau
    "deux-sevres": [46.5, -0.45], // Centré sur Niort
    vienne: [46.6, 0.35], // Centré sur Poitiers
    "haute-vienne": [45.8, 1.25], // Centré sur Limoges
    doubs: [47.0, 6.0], // Centré sur Besançon
    jura: [46.5, 5.5], // Centré sur Lons-le-Saunier
    nievre: [46.8, 3.8], // Centré sur Nevers
    "haute-saone": [47.6, 6.2], // Centré sur Vesoul
    "saone-et-loire": [46.3, 4.3], // Centré sur Mâcon
    yonne: [47.8, 3.6], // Centré sur Auxerre
    "territoire-de-belfort": [47.65, 6.87], // Centré sur Belfort
    "cotes-d-armor": [48.5, -2.75], // Centré sur Saint-Brieuc
    finistere: [48.4, -4.1], // Centré sur Quimper
    "ille-et-vilaine": [48.1, -1.7], // Centré sur Rennes
    morbihan: [47.65, -3.35], // Centré sur Vannes
    "eure-et-loir": [48.4, 1.5], // Centré sur Chartres
    indre: [46.8, 1.7], // Centré sur Châteauroux
    "indre-et-loire": [47.4, 0.7], // Centré sur Tours
    "loir-et-cher": [47.6, 1.3], // Centré sur Blois
    loiret: [47.9, 2.3], // Centré sur Orléans
    ardennes: [49.77, 4.72], // Centré sur Charleville-Mézières
    aube: [48.3, 4.1], // Centré sur Troyes
    marne: [49.05, 4.35], // Centré sur Châlons-en-Champagne
    "meurthe-et-moselle": [48.7, 6.2], // Centré sur Nancy
    meuse: [48.9, 5.15], // Centré sur Bar-le-Duc
    moselle: [49.12, 6.18], // Centré sur Metz
    "bas-rhin": [48.58, 7.75], // Centré sur Strasbourg
    "haut-rhin": [47.75, 7.34], // Centré sur Colmar/Mulhouse
    vosges: [48.18, 6.45], // Centré sur Épinal
    nord: [50.5, 3.8], // Centré sur Lille
    oise: [49.25, 2.25], // Centré sur Beauvais
    "pas-de-calais": [50.5, 2.3], // Centré sur Calais/Arras
    somme: [50.0, 2.3], // Centré sur Amiens
    "seine-et-marne": [48.5, 2.95], // Centré sur Melun
    yvelines: [48.6, 1.8], // Centré sur Versailles
    essonne: [48.4, 2.3], // Centré sur Évry
    "hauts-de-seine": [48.85, 2.2], // Centré sur Nanterre
    "seine-saint-denis": [48.92, 2.35], // Centré sur Saint-Denis
    "val-de-marne": [48.78, 2.48], // Centré sur Créteil
    "val-d-oise": [49.07, 2.18], // Centré sur Cergy-Pontoise
    eure: [49.05, 1.15], // Centré sur Évreux
    manche: [48.93, -1.35], // Centré sur Saint-Lô
    orne: [48.45, 0.1], // Centré sur Alençon
    "seine-maritime": [49.44, 1.1], // Centré sur Rouen
    "corse-du-sud": [41.95, 8.95], // Centré sur Ajaccio
    "haute-corse": [42.45, 9.0], // Centré sur Bastia
    guyane: [4.0, -52.5], // Centré sur Cayenne
    reunion: [-21.1, 55.6], // Centré sur Saint-Denis
    mayotte: [-12.78, 45.18], // Centré sur Mamoudzou
  }

  const geojsonUrl = geojsonMap[departmentSlug.toLowerCase()] || geojsonMap.gironde
  const mapCenter = departmentCenterMap[departmentSlug.toLowerCase()] || departmentCenterMap.gironde

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Destroy any existing instance before creating a new one
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    let cancelled = false
    const container = mapRef.current

    import("leaflet").then((L) => {
      if (cancelled || !container) return

      // Guard against Leaflet double-init on the same DOM node
      if ((container as any)._leaflet_id) {
        L.map(container).remove()
      }

      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      const map = L.map(container, {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        tap: false,
      }).setView(mapCenter, 8)

      mapInstanceRef.current = map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(map)

      let deptLayer: any
      let opacity = 0.2
      let increasing = true
      const minOpacity = 0.2
      const maxOpacity = 0.6
      const step = 0.005

      fetch(geojsonUrl)
        .then((r) => r.json())
        .then((data) => {
          if (cancelled) return

          deptLayer = L.geoJSON(data, {
            style: {
              color: "#0E2452",
              weight: 2,
              fillColor: "#FFC629",
              fillOpacity: 0.2,
            },
          }).addTo(map)

          map.fitBounds(deptLayer.getBounds())

          function animateOrange() {
            if (!deptLayer || cancelled) return

            deptLayer.setStyle({ fillOpacity: opacity })

            if (increasing) {
              opacity += step
              if (opacity >= maxOpacity) increasing = false
            } else {
              opacity -= step
              if (opacity <= minOpacity) increasing = true
            }

            requestAnimationFrame(animateOrange)
          }

          animateOrange()
        })
    })

    return () => {
      cancelled = true
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [departmentSlug, geojsonUrl])

  if (!departmentSlug || departmentSlug.trim() === "") {
    return (
      <div className="flex gap-4 w-full h-full">
        <div className="flex-1 rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p>Carte non disponible</p>
          </div>
        </div>
        <div className="w-full md:w-64 bg-white rounded-lg shadow-lg p-4">
          <p className="text-sm text-gray-500">Aucun département sélectionné</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <div className="rounded-lg shadow-lg overflow-hidden h-full">
        <div ref={mapRef} className="w-full h-full min-h-[400px] md:min-h-[500px]" />
      </div>
    </div>
  )
}
