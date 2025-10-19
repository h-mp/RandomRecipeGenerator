# Random Recipe Generator -kravspecifikation

## Syfte
Syftet med webbapplikationen är att bjuda användarna nya recept från olika länder. Appen gör det möjligt att lätt omvandla från US enheter till metriska med ett klick. 

## Målgrupp
Personer intresserade av matlagning och som vill få inspiration i form av slumpmässiga recept. Även personer som vill kunna lätt omvandla mängder mellan olika enhetssystem.

## Funktionella krav
1. Hämta slumpmässigt recept från ett API
2. Visa recept med information:
  - Namn
  - Bild
  - Ursprung
  - Ingredienser
  - Instruktioner
3. Konvertera olika ingrediensmängder mellan enhetssystem (med hjälp av en modul)
4. Formatera ändrande data från API:et
5. Hantera bråk och blandade mått

## Icke-funktionella krav
1. Användarvänlig design
2. Kod följer Clean Code -principer

## Struktur
- Javascript
- Återanvändbara klasser och webbkomponenter

## Externa beroenden
API: The Meal DB används för att få färdiga recept.

Modul: UnitConverter används för konvertering av mått mellan enheter
