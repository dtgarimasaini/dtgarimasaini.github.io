# Plan: Homepage heading becomes "Welcome to My Website"

## What you'll see

The large headline at the top of your homepage changes to:

```text
Welcome to My Website
```

Same size, same bold weight, same dark colour, same position over the sunrise photo.
Everything else on the page is untouched: the photo, the green glow from the sides, the
intro paragraph in its box, the two buttons, the trust bar, About, services, the
approach and journey sections, testimonials, the interest form, the WhatsApp chat
button, and every link.

## The single change

- One file: the homepage component (`src/pages/Landing.tsx`).
- One element: the main headline (the `<h1>` at lines 172-175), currently reading
  "Your Body Remembers / What Peace Feels Like." across two lines.
- Its words are replaced by "Welcome to My Website". The styling classes on the headline
  are not modified, so nothing else shifts.
- The laptop-only line break inside the old headline is dropped, because the new
  headline is one short line.

## What is not touched

- No other text anywhere on the page.
- No images, colours, fonts, spacing, or phone-layout changes.
- No changes to the interest form, your email address, the WhatsApp number, or Instagram links.
- No changes to the browser tab title, the logo, or the site name in the header.
- No backend, hosting, GitHub, domain, or integration changes. Nothing is published.
- No new files or packages.

## How it gets verified

1. Build check: the page builds with no errors.
2. Laptop view: a screenshot of the page top confirms the new headline is clearly
   readable over the light photo and the description box and buttons sit where they do today.
3. Phone view: a screenshot at phone width confirms the headline wraps neatly with no overlap.
4. Spot check: the two buttons still scroll to their sections, WhatsApp still opens a chat,
   and the interest form still submits as it does now.

## Reverting

If you decide you don't like it, restoring the original two-line headline is a single
edit with no side effects.

## Technical details

- Edit target: the `<h1>` inside the hero `<section className="wellness-hero ...">` in
  `src/pages/Landing.tsx`.
- The class list `text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight
  drop-shadow-sm` stays exactly as is; only the text nodes inside are replaced.
- Default styling for the new words: kept in the same dark-green italic treatment
  (`<span className="italic" style={{ color: '#0a2a1a' }}>`) so contrast against the
  light photo is unchanged. Say the word if you'd rather have it plain dark text
  (`text-foreground`) instead.
- Only one `<h1>` exists in the project, so no other heading is affected.
- The `/` route renders this component; the other unused page files in `src/pages/`
  are not rendered and are left alone.
