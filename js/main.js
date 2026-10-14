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

// Contact form — composes a real email in the visitor's mail app (Outlook, Gmail, Apple Mail)
function sendContactEmail(e) {
  e.preventDefault();
  const name = document.getElementById('c-name').value.trim();
  const from = document.getElementById('c-email').value.trim();
  const msg  = document.getElementById('c-msg').value.trim();
  const subject = encodeURIComponent('Website enquiry from ' + name);
  const body = encodeURIComponent(msg + '\n\n— ' + name + ' (' + from + ')');
  window.location.href = 'mailto:olajumokemedunoye@gmail.com?subject=' + subject + '&body=' + body;
  // Opening an email draft shows intent; it does not confirm delivery.
  if (typeof gtag === 'function') gtag('event', 'contact_intent', { method: 'contact_form', delivery: 'unconfirmed' });
}

// Measure booking-link intent only. Confirmed appointments are recorded by Calendly.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href*="calendly.com/oladigitalhub/30min"]');
  if (link && typeof gtag === 'function') {
    gtag('event', 'booking_link_click', { method: 'calendly', confirmation_status: 'unconfirmed' });
  }
});

// Calendly's postMessage event confirms a successful booking in the embedded widget.
window.addEventListener('message', event => {
  if (event.origin !== 'https://calendly.com' || !event.data || typeof event.data.event !== 'string') return;
  if (event.data.event === 'calendly.event_scheduled' && typeof gtag === 'function') {
    gtag('event', 'generate_lead', { method: 'calendly', lead_type: 'confirmed_booking' });
  }
});
