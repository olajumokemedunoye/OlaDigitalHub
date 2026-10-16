// Progressive enhancement: navigation remains available if JavaScript fails.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!nav || !toggle || !links) return;
  nav.classList.add('nav-ready');
  const setOpen = open => {
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(max-width:1100px)').addEventListener('change', () => setOpen(false));
});

// A form submission attempt is not proof of email delivery. FormSubmit handles delivery.
document.addEventListener('submit', event => {
  if (event.target.matches('form[action^="https://formsubmit.co/"]') && typeof gtag === 'function') {
    gtag('event', 'contact_submit_attempt', { method: 'formsubmit', confirmation_status: 'unconfirmed' });
  }
});

// Measure booking-link intent only. Confirmed appointments are recorded by Calendly.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href*="calendly.com/oladigitalhub/30min"]');
  if (link && typeof gtag === 'function') {
    gtag('event', 'booking_link_click', { method: 'calendly', confirmation_status: 'unconfirmed' });
  }
});

// Product-page links express intent; the payment platform confirms orders and refunds.
document.addEventListener('click', event => {
  const link = event.target.closest('a.payhip-buy[data-product]');
  if (!link || typeof gtag !== 'function') return;
  const price = Number.parseFloat(link.dataset.price) || 0;
  gtag('event', price > 0 ? 'product_link_click' : 'resource_request_click', {
    method: 'payhip',
    confirmation_status: 'unconfirmed',
    currency: 'GBP',
    value: price,
    items: [{ item_id: link.dataset.product, item_name: link.dataset.product, price, quantity: 1 }]
  });
});

// Only a completion message from this page's Calendly widget confirms a booking.
const recordedBookings = new Set();
window.addEventListener('message', event => {
  if (event.origin !== 'https://calendly.com' || !event.data || typeof event.data.event !== 'string') return;
  const frame = document.querySelector('#calendly-embed iframe');
  if (!frame || event.source !== frame.contentWindow) return;
  if (event.data.event !== 'calendly.event_scheduled' || typeof gtag !== 'function') return;
  const booking = event.data.payload?.event?.uri || 'embedded-booking';
  if (recordedBookings.has(booking)) return;
  recordedBookings.add(booking);
  gtag('event', 'generate_lead', {
    method: 'calendly', lead_type: 'confirmed_booking', confirmation_status: 'confirmed'
  });
});
