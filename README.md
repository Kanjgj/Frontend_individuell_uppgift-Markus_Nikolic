# Produktlista – Tillgänglighet & LCP-optimering

## Projektbeskrivning

Detta projekt är en förbättrad version av en befintlig produktsida. 
Målet med uppgiften var att:

- Förbättra tillgängligheten enligt WCAG
- Identifiera och optimera Largest Contentful Paint (LCP)
- Använda axe för att analysera tillgänglighetsproblem
- Mäta prestanda före och efter optimeringar

Projektet består av tre filer:

- index.html
- styles.css
- script.js

Den version som finns i detta repository är den slutgiltiga, optimerade versionen.

---

## Tillgänglighetsförbättringar

Följande förbättringar genomfördes:

- Korrekt semantisk struktur med `<header>`, `<main>` och `<footer>`
- Klickbara `<div>`-element ersattes med riktiga `<button>`-element
- Beskrivande `alt`-texter lades till på bilder
- Färgkontraster justerades för att uppfylla WCAG AA
- Förbättrad tangentbordsnavigering

### Test med axe

Tillgängligheten analyserades med axe-core.

- Före ändringar: 5 violations
- Efter ändringar: 0 violations

Detta visar att identifierade tillgänglighetsproblem har åtgärdats.

---

## LCP (Largest Contentful Paint)

LCP mättes med Chrome DevTools.

### Före optimering
LCP: 0.50 sekunder

### Efter optimering
LCP: 0.45 sekunder

### Genomförda optimeringar

- Script flyttades till slutet av `<body>` eller försågs med `defer`
- Bilder optimerades i storlek
- `width` och `height` sattes på bilder
- `loading="lazy"` lades till på bilder under folden
- Förbättrad HTML-struktur

Resultatet visar en mätbar förbättring av sidans upplevda laddningstid.

---

## Hur sidan körs

1. Klona repositoryt
2. Öppna projektmappen
3. Starta med Live Server eller öppna `index.html` direkt i webbläsare

---

## Sammanfattning

Projektet visar hur tillgänglighet och prestanda kan förbättras genom:

- Semantisk HTML
- Korrekt användning av interaktiva element
- Bildoptimering
- Script-optimering
- Mätning och verifiering med axe och DevTools

Alla ändringar dokumenterades med atomära commits
