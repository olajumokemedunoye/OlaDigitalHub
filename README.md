# OlaDigitalHub

Professional website for OlaDigitalHub — Fractional People Analytics, HR dashboards, and executive reporting templates by Olajumoke (Ola) Medunoye.

**Live site:** https://olajumokemedunoye.github.io/OlaDigitalHub/

## Stack
Static HTML/CSS/JS — no build step, no dependencies. Deploys on GitHub Pages.

## Connected services
| Service | Where it's used |
|---|---|
| Payhip (`payhip.com/OlaDigitalHub`) | Direct product links on Templates page; store link in footer |
| Fiverr (`fiverr.com/olajumokemed`) | Services page band + footer |
| Notion (Launch Ops Hub) | Resources page band + footer |
| Email (any configured mail client) | Contact form opens an email draft via mailto; visitor must send it |
| Google Analytics 4 (`G-7EPNFPRV03`) | Page views and intent events described below |
| Calendly | Live 30-minute booking calendar embedded on Book-a-call page, with a direct-link fallback |

## Booking
The booking page uses the active, free 30-minute Google Meet event:
https://calendly.com/oladigitalhub/30min

Availability and meeting settings are managed in Calendly. If the embedded calendar is blocked or unavailable, visitors can use **Open booking calendar** or the contact link.

## Product links
The five buttons on `templates.html` already use direct Payhip product links:

| Product | Direct link |
|---|---|
| HR Dashboard Launch Checklist | https://payhip.com/b/gn6Gv |
| HR KPI Cheat Sheet | https://payhip.com/b/A3rSF |
| Executive HR Dashboard | https://payhip.com/b/lH58G |
| HR KPI Dictionary | https://payhip.com/b/NQHei |
| Executive HR Report Template | https://payhip.com/b/mIhzv |

When a product URL changes, update its button in `templates.html` and this table. Keep its `data-product` and `data-price` attributes aligned with the product.

## Reporting definitions
| Event / measure | Meaning | Confirmed enquiry or sale? |
|---|---|---|
| `contact_intent` | Contact form opens an email draft; `delivery: unconfirmed` | No — the visitor must still send the email |
| `resource_request_click` | Visitor clicks a free-resource link to Payhip | No — does not confirm download or contact details |
| `begin_checkout` | Visitor clicks a paid-product link to Payhip | No — does not confirm a completed checkout |
| Confirmed enquiry | An enquiry actually received in the inbox, or a confirmed Calendly booking | Measure from inbox / Calendly records |

The static website does not emit `generate_lead` for clicks and cannot confirm email delivery. Report contact intent separately from confirmed enquiries. Do not mark intent events as confirmed-enquiry key events. Confirmed-enquiry automation would require a verified delivery or booking integration; it is not implemented here.

Historical `generate_lead` events from before this change may include contact-form or free-resource clicks. Do not treat those historic events as confirmed enquiries; use the deployment date as the reporting cutover.

## Product descriptions and pricing
The Executive HR Dashboard includes an Excel workbook and a Word Power BI build guide, not a finished .pbix report. The HR KPI Dictionary is a 23-page PDF with 60+ metrics, DAX and SQL examples. Displayed paid-product prices exclude applicable taxes; final totals are shown by Payhip before payment.

## Product and Academy interest
Upcoming-product cards and the Academy page open prefilled emails to the business inbox. Visitors must send the email to register their interest. There is no automatic subscription, list storage or success confirmation on the website. Manage received requests in the inbox and reply only about the requested product or Academy launch. Planned prices may change.

## Local preview
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.
