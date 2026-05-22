/**
 * LensCraft Studio — contact.js
 * Contact form validation and submission handler
 */

(function initContactForm() {
  const form       = document.getElementById('contactForm');
  const statusEl   = document.getElementById('formStatus');
  const submitBtn  = document.getElementById('formSubmit');
  const submitText = document.getElementById('submitText');
  const submitIcon = document.getElementById('submitIcon');

  if (!form) return;

  /* ── Validation rules ── */
  const rules = {
    fullName: { required: true, minLength: 2, label: 'Full Name' },
    email:    { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, label: 'Email' },
    phone:    { required: false, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, label: 'Phone' },
    service:  { required: true, label: 'Service' },
    message:  { required: true, minLength: 10, label: 'Message' },
  };

  function validateField(name, value) {
    const rule = rules[name];
    if (!rule) return null;
    if (rule.required && !value.trim()) return `${rule.label} is required.`;
    if (value && rule.minLength && value.trim().length < rule.minLength)
      return `${rule.label} must be at least ${rule.minLength} characters.`;
    if (value && rule.pattern && !rule.pattern.test(value.trim()))
      return `${rule.label} is not valid.`;
    return null;
  }

  function showError(input, msg) {
    const group = input.closest('.form-group');
    let err = group.querySelector('.field-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'field-error';
      Object.assign(err.style, {
        fontSize: '0.75rem',
        color: '#F87171',
        marginTop: '4px',
        display: 'block',
      });
      group.appendChild(err);
    }
    err.textContent = msg;
    input.style.borderColor = '#F87171';
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    const err   = group.querySelector('.field-error');
    if (err) err.remove();
    input.style.borderColor = '';
  }

  /* Live validation on blur */
  form.querySelectorAll('[name]').forEach(input => {
    input.addEventListener('blur', () => {
      const err = validateField(input.name, input.value);
      if (err) showError(input, err);
      else     clearError(input);
    });
    input.addEventListener('input', () => {
      if (input.style.borderColor === 'rgb(248, 113, 113)') {
        const err = validateField(input.name, input.value);
        if (!err) clearError(input);
      }
    });
  });

  /* ── Submit handler ── */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.className = 'form-status';
    statusEl.style.display = 'none';

    /* Validate all */
    let hasError = false;
    form.querySelectorAll('[name]').forEach(input => {
      const err = validateField(input.name, input.value);
      if (err) { showError(input, err); hasError = true; }
      else clearError(input);
    });

    if (hasError) {
      showStatus('error', '⚠️ Please fix the errors above before submitting.');
      return;
    }

    /* Simulate async submit */
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    showStatus('success', '✅ Message sent! We\'ll get back to you within 24 hours.');
    form.reset();
  });

  function setLoading(loading) {
    submitBtn.disabled = loading;
    submitText.textContent = loading ? 'Sending…' : 'Send Message';
    submitIcon.textContent = loading ? '⏳' : '📨';
    if (loading) submitBtn.style.opacity = '0.75';
    else submitBtn.style.opacity = '';
  }

  function showStatus(type, msg) {
    statusEl.className = `form-status ${type}`;
    statusEl.style.display = 'flex';
    statusEl.innerHTML = msg;
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (type === 'success') setTimeout(() => { statusEl.style.display = 'none'; }, 6000);
  }
})();
