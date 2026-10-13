# Plan: Change the homepage heading to "Welcome to My Website"

## What you'll see

The big headline at the top of your homepage becomes:

```text
Welcome to My Website
```

Everything else on the page stays exactly as it is — the sunrise photo, the green glow
from the sides, the boxed description underneath, the two buttons, the trust bar,
About, services, testimonials, the interest form, the WhatsApp button, and every link.

## The one change

- File: the homepage page component (`src/pages/Landing.tsx`)
- Location: the main headline, currently split across two lines:
  - line 1: "Your Body Remembers"
  - line 2: "What Peace Feels Like." (italic, very dark green)
- Replace those two lines with the single phrase "Welcome to My Website".
- The headline keeps its present styling: same size (large on laptop, smaller on phone),
  same bold weight, same letter spacing, same soft shadow, same dark colour, and the
  same dark-green italic treatment so it stays just as visible on the light photo.
- The line break that only showed on laptop screens is removed, since the new
  headline is one short line.

## What is deliberately not touched

- No other wording anywhere on the page — the intro paragraph, eyebrow label
  ("Yoga · Wellness · Nutrition · Mindfulness"), buttons, and all sections stay the same.
- No images, colours, fonts, spacing, or responsive (phone) behaviour changes.
- No changes to the interest form, its email address, the WhatsApp number, or Instagram links.
- No changes to the browser tab title, the logo, or the site name in the header.
- No backend, hosting, GitHub, or domain settings changes. Nothing is published by this plan.
- No new files, packages, or dependencies.

## How it gets verified

1. Build check — confirm the page still builds with no errors.
2. Laptop view — screenshot the top of the homepage and confirm the new headline reads
   clearly against the light photo, and that the description box and buttons sit where
   they do today.
3. Phone view — screenshot the same area at phone width to confirm the headline wraps
   neatly and nothing overlaps.
4. Spot check — the two buttons still scroll to their sections, the WhatsApp button
   still opens the chat, and the interest form still submits as it does now.

## Rollback

This is a single, contained text edit. Reverting it restores the original two-line
headline with no side effects.

## Optional safety net

If you would rather compare before and after side by side, this can instead be made in
a separate draft version of the site, which keeps your current site untouched until you
choose to apply it. Say the word and I'll do it that way.

## Technical details

- Single edit: the `<h1>` element at lines 172–175 of `src/pages/Landing.tsx` inside the
  hero `<section className="wellness-hero ...">`.
- The `<h1>` class list (`text-4xl md:text-6xl font-semibold tracking-tight mb-6
  leading-tight drop-shadow-sm`) is unchanged, so typography and vertical rhythm are identical.
- Inner content becomes one line of text; the existing `<br className="hidden md:block" />`
  and the split `<span>` are removed. The dark-green italic styling is preserved by
  keeping the phrase inside a `<span className="italic" style={{ color: '#0a2a1a' }}>`,
  or rendered plain `text-foreground` if you prefer — tell me which you'd like and I'll
  match it. Default: keep the dark-green italic styling.
- Only one `<h1>` exists in the codebase, so no other heading is affected.
- The route `/` renders this component; other unused page files in `src/pages/` are not
  rendered and are left alone.
