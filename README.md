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
| Google Forms and email | Contact page embeds the published business enquiry form, with direct email and Gmail compose fallbacks |
| Google Analytics 4 (`G-7EPNFPRV03`) | Page views and intent events described below |
| Calendly | Live 30-minute booking calendar embedded on Book-a-call page, with a direct-link fallback |

## Booking
The booking page uses the active, free 30-minute Google Meet event:
https://calendly.com/oladigitalhub/30min

Availability and meeting settings are managed in Calendly. If the embedded calendar is blocked or unavailable, visitors can use **Open booking calendar** or the contact link.

## Product links
The six product buttons on `templates.html` already use direct Payhip product links:

| Product | Direct link |
|---|---|
| HR Analytics Fundamentals | https://payhip.com/b/tl7CH |
| HR Dashboard Launch Checklist | https://payhip.com/b/gn6Gv |
| HR KPI Cheat Sheet | https://payhip.com/b/A3rSF |
| Executive HR Dashboard | https://payhip.com/b/lH58G |
| HR KPI Dictionary | https://payhip.com/b/NQHei |
| Executive HR Report Template | https://payhip.com/b/mIhzv |

When a product URL changes, update its button in `templates.html` and this table. Keep its `data-product` and `data-price` attributes aligned with the product.

## Reporting definitions
| Event / measure | Meaning | Confirmed enquiry or sale? |
|---|---|---|
| `contact_link_click` | Visitor opens an email draft | No — visitor must send the message; only inbox receipt confirms delivery |
| `resource_request_click` | Visitor clicks a free-resource link to Payhip | No — does not confirm download or contact details |
| `booking_link_click` | Visitor opens the Calendly booking page | No — booking is not confirmed |
| `generate_lead` | Calendly embedded widget sends `calendly.event_scheduled` from the verified Calendly origin | Yes — scheduled in embedded widget; reconcile with Calendly records |
| `product_link_click` | Visitor opens a paid-product page on Payhip | No — does not confirm a completed checkout |
| Confirmed enquiry | A recorded Google Form response, an enquiry received in the inbox, or a confirmed Calendly booking | Measure from Forms / inbox / Calendly records; exclude technical tests |

Email draft clicks cannot confirm delivery. The blocked FormSubmit endpoint was replaced by a tested Google Form on 17 October 2026. Count recorded form responses and received inbox messages, excluding audit tests; opening either form or email draft is intent only. Historical `contact_submit_attempt` events remain intent only. The Calendly widget emits `generate_lead` only upon a verified `calendly.event_scheduled` message.

Historical `generate_lead` events from before this change may include contact-form or free-resource clicks. Do not treat those historic events as confirmed enquiries; use the deployment date as the reporting cutover.

## Product descriptions and pricing
The Executive HR Dashboard includes an Excel workbook and a Word Power BI build guide, not a finished .pbix report. The HR KPI Dictionary is a 23-page PDF with 60+ metrics, DAX and SQL examples. Displayed paid-product prices exclude applicable taxes; final totals are shown by Payhip before payment.

## Product and Academy interest
Upcoming-product cards and the Academy page open prefilled emails to the business inbox. Visitors must send the email to register their interest. There is no automatic subscription, list storage or success confirmation on the website. Manage received requests in the inbox and reply only about the requested product or Academy launch. Planned prices may change.

## Site maintenance
All 17 HTML pages include a description, canonical URL and social sharing metadata. Keep `sitemap.xml` aligned when adding or removing pages.

Navigation supports keyboard controls, Escape, outside-click dismissal and viewport changes. Links remain available when JavaScript is disabled. Sample dashboard figures are fixed synthetic values; chart summaries remain readable without Chart.js. The homepage does not randomise its sample metrics.

Product, Academy and article-interest requests use email drafts. They are not automatic subscriptions. Contact submission attempts are not confirmed enquiries.

## Local preview
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Booking attribution
The booking page tracks `generate_lead` only after a verified `calendly.event_scheduled` browser message from the embedded Calendly widget. This does not cover bookings completed on Calendly's external website, so Calendly's meeting records remain the authoritative total. `booking_link_click` measures intent only. Historical `generate_lead` definitions may differ; segment by date and `lead_type`.

## Contact delivery
The former FormSubmit route was blocked by Browser Guard and has been removed. The contact page now embeds a published Google Form owned by the business Google account: https://docs.google.com/forms/d/e/1FAIpQLScZKmv2odVDDeMtmTRr4LWf2E16MrPYL61lDka3-REoocT9Kw/viewform . It requires a manually entered email address and a paragraph message; Google sign-in is not required. Respondents cannot view other responses. Owner notifications are enabled. An authorised technical submission was recorded in Forms and its matching notification reached the business Gmail inbox on 17 October 2026. Exclude responses marked ODH-AUDIT or ODH-EMBED-AUDIT from lead reporting. Form responses remain in Forms and notifications link the owner to them. Email draft and Gmail compose buttons remain available as fallbacks and never report a sent message. The cross-origin form does not emit a confirmed-enquiry GA4 event; use Forms records for confirmation.

## Sales verification (required)
Payhip is an off-site checkout. Product button `product_link_click` indicates outbound intent, **not** a completed sale. Read confirmed orders and refunds from Payhip reports and reconcile with payment receipts; do not invent `purchase` events in GA4 from outbound clicks. Obtain GA4 reports for landing pages, acquisition, `product_link_click`, `contact_link_click`, `booking_link_click`, and embedded `generate_lead`; external Calendly bookings need separate reconciliation. Revenue cannot be asserted without store records.

## Audit changes — 15 October 2026
Paid product links now emit `product_link_click`, never `begin_checkout` or `purchase`. Historical begin_checkout events on this site represent product-link intent. The five standalone product pages now load GA4 and the shared product-click listener. HR Analytics Fundamentals is listed on the Templates page. Paid resources appear before the free resources.

The booking page now uses Calendly\'s standard JavaScript inline widget; the previous bare iframe did not support documented postMessage tracking. The booking listener verifies the Calendly origin and the widget iframe source, and deduplicates repeated booking messages. External-calendar bookings still require reconciliation with Calendly. No test appointment was created. See https://calendly.com/help/advanced-calendly-embed-for-developers .
