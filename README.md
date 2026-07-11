# OlaDigitalHub

Professional website for OlaDigitalHub — Fractional People Analytics, HR dashboards, and executive reporting templates by Olajumoke (Ola) Medunoye.

**Live site:** https://olajumokemedunoye.github.io/OlaDigitalHub/

## Stack
Static HTML/CSS/JS — no build step, no dependencies. Deploys on GitHub Pages.

## Connected services
| Service | Where it's used |
|---|---|
| Payhip (`payhip.com/OlaDigitalHub`) | Buy buttons on Templates page + footer |
| Fiverr (`fiverr.com/olajumokemed`) | Services page band + footer |
| Notion (Launch Ops Hub) | Resources page band + footer |
| Email (Outlook/any client) | Contact form composes a real email via mailto |
| Google Analytics 4 (`G-7EPNFPRV03`) | All pages; begin_checkout + generate_lead events |
| Calendly | Book-a-call page |

## Updating Payhip links
Each Buy button on `templates.html` currently points to the store. Once a product exists in Payhip, replace the `href` with its direct link (`https://payhip.com/b/XXXXX`) — there is an HTML comment above each button marking the spot.

## Local preview
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.
