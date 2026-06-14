# README – index(1).html

## Beschreibung

Diese Version ist eine **vereinfachte Variante mit HTML-String-Rendering**.

## Besonderheiten

- Rendering erfolgt über:
  - `innerHTML`
  - Template Strings (`return \`...``)

- Weniger Funktionen → kompakter Code
- Schneller zu schreiben, aber weniger strukturiert

## Unterschied zu den anderen Versionen

- Im Vergleich zu `index.html`:
  - **kein DOM-Element-Building**
  - weniger modular
  - einfacher, aber weniger wartbar

- Im Vergleich zu `index(2).html`:
  - noch relativ ähnlich, aber leicht weniger optimiert

## Einsatzgebiet

- Gut für:
  - kleine Projekte
  - Prototypen
  - schnelles Entwickeln
