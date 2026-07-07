# CRAFFONARA FX — Website

Dark boutique-pedal one-pager. Pure HTML/CSS/JS — no build step, no framework,
runs on any static host.

## Files

    index.html    the complete page (layout, styling, logic)
    products.js   product catalog — THE ONLY FILE YOU EDIT for new pedals
    logos/        SVG logo variants (also used as favicon)
    img/          put real product photos here

## Add a new product (30 seconds)

1. Open `products.js`
2. Copy an existing block `{ ... },` and adjust name, price, specs etc.
3. Optional: put a photo into `img/` and set `image: "img/myphoto.jpg"` —
   otherwise the site auto-generates pedal artwork from `color`, `knobs`
   and `switches`.
4. Save, commit, push. GitHub Pages redeploys automatically.

## Deploy to GitHub Pages (free, recommended)

1. Create a GitHub account and a new repository, e.g. `craffonara-fx`
2. Upload all files (drag & drop in the browser works, or git push)
3. Repository → Settings → Pages → Source: "Deploy from a branch",
   Branch: `main`, folder `/ (root)` → Save
4. After ~1 minute the site is live at
   `https://<username>.github.io/craffonara-fx/`
5. Optional custom domain: buy `craffonara-fx.com`, add it under
   Settings → Pages → Custom domain, set the DNS CNAME at your registrar.
   HTTPS certificate is issued automatically.

Alternatives that work identically well: Netlify and Cloudflare Pages
(drag-and-drop the folder — done).

## Contact form

The form currently composes an email via the visitor's mail app (`mailto:`),
which needs no backend. Replace `hello@craffonara-fx.com` in `index.html`
(2 places) with your real address.

Optional upgrade — real form submission without a server:
1. Create a free account at https://formspree.io
2. Create a form, copy its endpoint URL
3. In `index.html`, replace the submit handler with a `fetch()` POST to
   that URL (Formspree shows ready-made code)

## Customizing

All colors and fonts are defined once at the top of `index.html`
in the `:root { ... }` block (design tokens). Change `--led` to
re-color every accent on the page at once.
