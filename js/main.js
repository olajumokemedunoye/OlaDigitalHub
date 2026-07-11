// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText += open ? '' : 'flex-direction:column; position:absolute; top:64px; left:0; right:0; background:#fff; padding:20px 24px; border-bottom:1px solid #E1E6ED;';
    });
  }

  // Hero KPI pulse — small randomized "live" feel on synthetic figures
  document.querySelectorAll('[data-pulse]').forEach(el => {
    const base = parseFloat(el.dataset.pulse);
    const suffix = el.dataset.suffix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    setInterval(() => {
      const jitter = (Math.random() - 0.5) * (base * 0.01);
      el.textContent = (base + jitter).toFixed(decimals) + suffix;
    }, 2600);
  });
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
  if (typeof gtag === 'function') gtag('event', 'generate_lead', { method: 'contact_form' });
}
