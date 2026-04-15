import './index.css';
import {
  createIcons,
  Menu,
  Github,
  Linkedin,
  Facebook,
  Award,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide';

// Initialize Lucide icons
try {
  createIcons({
    icons: {
      Menu,
      Github,
      Linkedin,
      Facebook,
      Award,
      ExternalLink,
      ArrowRight,
      ChevronLeft,
      ChevronRight,
    },
  });
} catch (e) {
  console.error('Lucide icons failed to load:', e);
}

// Show body after initialization
document.body.style.opacity = '1';

// Contact Form Toggle
const openContactBtn = document.getElementById('open-contact-btn');
const contactFormContainer = document.getElementById('contact-form-container');

if (openContactBtn && contactFormContainer) {
  openContactBtn.addEventListener('click', () => {
    contactFormContainer.classList.toggle('hidden');
    if (!contactFormContainer.classList.contains('hidden')) {
      contactFormContainer.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
const formStatus = document.getElementById('form-status');
const submitBtn = contactForm?.querySelector('button[type="submit"]') as HTMLButtonElement;

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (submitBtn) submitBtn.disabled = true;

    if (formStatus) {
      formStatus.textContent = 'Sending...';
      formStatus.classList.remove('hidden', 'text-red-500', 'text-green-500');
      formStatus.classList.add('text-accent');
    }

    const formData = new FormData(contactForm);
    const templateParams = {
      from_name: formData.get('user_name'),
      from_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      // @ts-ignore - emailjs is loaded via CDN in index.html
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      if (formStatus) {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.classList.replace('text-accent', 'text-green-600');
        contactForm.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      if (formStatus) {
        formStatus.textContent =
          'Failed to send message. Please try again later.';
        formStatus.classList.replace('text-accent', 'text-red-600');
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px',
  },
);

const initReveal = () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
    // Initial check for elements already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('active');
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}

// Gallery Indicator Logic
document.querySelectorAll('.project-gallery').forEach((gallery) => {
  const wrapper = gallery.parentElement;
  const indicators = wrapper?.querySelectorAll('.gallery-indicator span');
  const prevBtn = wrapper?.querySelector('.prev-btn');
  const nextBtn = wrapper?.querySelector('.next-btn');

  if (indicators && indicators.length > 0)
    indicators[0].classList.add('active');

  // Scroll Sync
  gallery.addEventListener('scroll', () => {
    const index = Math.round(gallery.scrollLeft / gallery.clientWidth);
    indicators?.forEach((span, i) => {
      span.classList.toggle('active', i === index);
    });
  });

  // Click Indicators
  indicators?.forEach((span, i) => {
    span.addEventListener('click', () => {
      gallery.scrollTo({
        left: i * gallery.clientWidth,
        behavior: 'smooth',
      });
    });
  });

  // Click Arrows
  prevBtn?.addEventListener('click', () => {
    gallery.scrollBy({
      left: -gallery.clientWidth,
      behavior: 'smooth',
    });
  });

  nextBtn?.addEventListener('click', () => {
    gallery.scrollBy({
      left: gallery.clientWidth,
      behavior: 'smooth',
    });
  });
});
