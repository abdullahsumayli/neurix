# About page — angled photo collage banner

**Date:** 2026-06-10
**Status:** Implemented

## Goal

Add a hero banner to `about.html` modeled on the reference "ABOUT NEURIX" collage:
a row of skewed (parallelogram) photo panels from the healthcare sector with the
page title overlaid, adapted to the NEURIX "Sovereign Clinical" identity
(navy + champagne gold + ivory) instead of the reference's orange.

## Design decisions

- **Panels:** flex columns of `skewX(-12deg)` panels; inner images counter-skewed
  and oversized (170% width) so the parallelogram is always fully covered.
- **Images:** 8 royalty-free Unsplash photos stored locally in `assets/about/`
  (lab pipettes, surgery team, fluorescent cells, hospital ward, Riyadh skyline,
  hospital reception, clinician with device, stethoscope). Riyadh replaces the
  reference's Geneva shot for local identity.
- **Title:** stacked `pb-t1` (gold gradient, bold) + `pb-t2` (navy ink) absolute
  at inline-start, inside the white gap of the first column — bilingual via the
  existing `data-en` / `data-ar` toggle ("ABOUT NEURIX" / "من نحن نيوريكس").
- **Decoration:** thin champagne-gold skewed outline (`.pb-frame`) behind the
  panels, echoing the reference's yellow rectangle.
- **RTL:** logical properties + flex auto-mirroring; same markup serves both
  directions.
- **Responsive:** ≤900px hides the fifth column; ≤640px moves the title above
  the strip (static, centered), hides the frame, and equalizes the title column.
- The banner `h1` becomes the page heading; the old hero heading was demoted to
  `h2` and its duplicate "من نحن" eyebrow removed.

## Verified

Headless-browser screenshots at 1440px (AR + EN) and 375px (AR): panels render
fully covered, title legible, language toggle and RTL/LTR mirroring correct,
no console errors.

## Update — v2 (same day)

Per founder feedback the banner was rebuilt on all five pages (Home untouched):

- **3 panels instead of 8** (`.pb-3` variant: strip gets `margin-inline-start`
  for the title block; middle panel offset down for rhythm).
- **All photos AI-generated** via Higgsfield (`nano_banana_pro`, 3:4, 1k →
  resized to 720px JPEG q82 in `assets/ai/`). 15 unique images, zero reuse
  across pages. Stock photos (`assets/about/`, `assets/banners/`) deleted.
- **Saudi identity mandatory**: Saudi men in correct white thobe + red-white
  shemagh + black agal, women in elegant abaya, Riyadh skyline, Saudi coffee
  dallah; all graded in brand navy/gold.
- **Vision 2030 logo** (official bilingual mark, Wikimedia) added under the
  banner title on every page (`.pb-vision`).
