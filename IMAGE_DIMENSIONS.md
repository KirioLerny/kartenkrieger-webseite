# Bild-Dimensionen Übersicht

Diese Dokumentation enthält alle Bildgrößen und -dimensionen der Kartenkrieger-Webseite.

---

## 1. Galerie - Produkt-Cards (Grid-Ansicht)

Die Produkt-Cards in der Galerie verwenden ein responsives Aspect-Ratio-basiertes Layout.

| Breakpoint | Container | Bild-Verhältnis | Beschreibung |
|------------|-----------|-----------------|--------------|
| < 640px (Mobile) | 100% der Card | 4:3 (75% padding-bottom) | 2 Spalten Grid, kleinere Padding |
| 640px - 767px | 100% der Card | 4:3 (75% padding-bottom) | 2 Spalten Grid |
| 768px - 1023px | 100% der Card | 4:3 (75% padding-bottom) | 3 Spalten Grid |
| 1024px - 1279px | 100% der Card | 4:3 (75% padding-bottom) | 3 Spalten Grid |
| 1280px - 1919px | 100% der Card | 4:3 (75% padding-bottom) | 4 Spalten Grid |
| 1920px - 2559px | 100% der Card | 4:3 (75% padding-bottom) | 5 Spalten Grid |
| ≥ 2560px (4K) | 100% der Card | 4:3 (75% padding-bottom) | 6 Spalten Grid |

**CSS-Eigenschaften:**
- `object-fit: contain` - Bild wird komplett angezeigt ohne Beschneidung
- `object-position: center` - Bild zentriert
- Hover-Effekt: `scale(1.05)`

---

## 2. Produkt-Modal (Detailansicht)

Das Modal zeigt das Hauptbild in einem quadratischen Container.

| Breakpoint | Container-Größe | Bild-Verhältnis | Beschreibung |
|------------|-----------------|-----------------|--------------|
| Alle Größen | 100% der Modal-Breite | 1:1 (100% padding-bottom) | Quadratisches Layout |

**CSS-Eigenschaften:**
- `object-fit: contain` - Bild wird komplett angezeigt ohne Beschneidung
- `object-position: center` - Bild zentriert
- Schatten: `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)`

---

## 3. Farbpalette - Carousel/Slideshow

Die Farbpalette-Seite zeigt Bilder in einem Dia-Projektor-artigen Carousel.

| Breakpoint | Bildgröße (Breite × Höhe) | Carousel-Höhe | Beschreibung |
|------------|---------------------------|---------------|--------------|
| < 768px (Mobile) | 350px × 350px | 500px | Mobile Ansicht |
| 768px - 1279px (Tablet) | 450px × 450px | 600px | Tablet Ansicht |
| 1280px - 1919px (Desktop) | 550px × 550px | 700px | Desktop Ansicht |
| ≥ 1920px (Große Monitore) | 650px × 650px | 800px | Full HD+ Ansicht |

**CSS-Eigenschaften:**
- `object-fit: contain` - Bild wird komplett angezeigt
- Quadratische Bilder (1:1 Verhältnis)
- Keine Transparenz/Opacity auf sichtbaren Slides

**Slide-Positionen und Skalierung:**

| Position | translateX | scale | opacity |
|----------|------------|-------|---------|
| Center (aktiv) | 0% | 1.0 | 1.0 |
| Links 1 | -45% | 0.8 | 1.0 |
| Rechts 1 | +45% | 0.8 | 1.0 |
| Links 2 | -80% | 0.6 | 1.0 |
| Rechts 2 | +80% | 0.6 | 1.0 |
| Versteckt | ±110% | 0.4 | 0 |

**Hintergrundfarbe:** `#1f2937` (Dunkelgrau, nicht transparent)

---

## Empfohlene Bildauflösungen für Upload

Für optimale Darstellung auf allen Geräten empfehlen wir folgende Mindestauflösungen:

| Verwendungszweck | Empfohlene Auflösung | Format |
|------------------|----------------------|--------|
| Produkt-Bilder | 800px × 600px (4:3) | WebP, PNG, JPG |
| Farbpalette | 650px × 650px (1:1) | WebP, PNG, JPG |
| Thumbnails | 400px × 400px (1:1) | WebP |

---

*Zuletzt aktualisiert: Januar 2026*
