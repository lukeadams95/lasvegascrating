(() => {
  'use strict';

  /* ---------------------------------------------------------------------
     Mobile nav toggle
     ------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------------------------------------------------------------------
     Desktop shrink-on-scroll sticky header — the slim logo + CTA bar
     appears once the full header has scrolled out of view.
     ------------------------------------------------------------------- */
  const stickyHeader = document.getElementById('stickyHeader');
  const mainnav = document.querySelector('.mainnav');

  if (stickyHeader && mainnav) {
    const toggleStickyHeader = () => {
      const threshold = mainnav.offsetTop + mainnav.offsetHeight;
      stickyHeader.classList.toggle('is-visible', window.scrollY > threshold);
    };
    window.addEventListener('scroll', toggleStickyHeader, { passive: true });
    window.addEventListener('resize', toggleStickyHeader);
    toggleStickyHeader();
  }

  /* ---------------------------------------------------------------------
     "About" dropdown — hover works via CSS; click/tap toggle for touch,
     plus outside-click and Escape to close.
     ------------------------------------------------------------------- */
  const aboutDropdown = document.getElementById('aboutDropdown');

  if (aboutDropdown) {
    const aboutTrigger = aboutDropdown.querySelector('.nav__link');

    aboutTrigger.addEventListener('click', (e) => {
      // Only intercept on touch/narrow layouts where hover isn't available;
      // on desktop, let the link navigate normally unless already open.
      if (window.matchMedia('(hover: hover)').matches && window.innerWidth > 900) return;
      e.preventDefault();
      const isOpen = aboutDropdown.classList.toggle('is-open');
      aboutTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!aboutDropdown.contains(e.target)) {
        aboutDropdown.classList.remove('is-open');
        aboutTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        aboutDropdown.classList.remove('is-open');
        aboutTrigger.setAttribute('aria-expanded', 'false');
        if (primaryNav) {
          primaryNav.classList.remove('is-open');
          navToggle && navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  /* ---------------------------------------------------------------------
     Trust logo strip — draggable, auto-scrolling, pauses on hover/drag.
     The track's markup contains the logo set twice back-to-back so the
     loop can reset invisibly at the halfway point.
     ------------------------------------------------------------------- */
  const trustTrack = document.getElementById('trustTrack');

  if (trustTrack) {
    let autoScrollPaused = false;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDragStart = (pageX) => {
      dragging = true;
      moved = false;
      startX = pageX;
      startScroll = trustTrack.scrollLeft;
      trustTrack.classList.add('is-dragging');
    };
    const onDragMove = (pageX) => {
      if (!dragging) return;
      const delta = pageX - startX;
      if (Math.abs(delta) > 3) moved = true;
      trustTrack.scrollLeft = startScroll - delta;
    };
    const onDragEnd = () => {
      dragging = false;
      trustTrack.classList.remove('is-dragging');
    };

    trustTrack.addEventListener('mousedown', (e) => onDragStart(e.pageX));
    window.addEventListener('mousemove', (e) => onDragMove(e.pageX));
    window.addEventListener('mouseup', onDragEnd);
    trustTrack.addEventListener('touchstart', (e) => onDragStart(e.touches[0].pageX), { passive: true });
    trustTrack.addEventListener('touchmove', (e) => onDragMove(e.touches[0].pageX), { passive: true });
    trustTrack.addEventListener('touchend', onDragEnd);

    // Prevent the drag from also firing a click on a logo (not currently
    // linked, but keeps this robust if logos become links later).
    trustTrack.addEventListener('click', (e) => { if (moved) e.preventDefault(); }, true);

    trustTrack.addEventListener('mouseenter', () => { autoScrollPaused = true; });
    trustTrack.addEventListener('mouseleave', () => { autoScrollPaused = false; onDragEnd(); });
    trustTrack.addEventListener('focusin', () => { autoScrollPaused = true; });
    trustTrack.addEventListener('focusout', () => { autoScrollPaused = false; });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      setInterval(() => {
        if (autoScrollPaused || dragging) return;
        trustTrack.scrollLeft += 1;
        if (trustTrack.scrollLeft >= trustTrack.scrollWidth / 2) {
          trustTrack.scrollLeft -= trustTrack.scrollWidth / 2;
        }
      }, 20);
    }
  }

  /* ---------------------------------------------------------------------
     Hero video — falls back to the poster image (and the matching CSS
     background behind it) if playback ever errors out.
     ------------------------------------------------------------------- */
  const heroVideo = document.getElementById('heroVideo');

  if (heroVideo) {
    heroVideo.addEventListener('error', () => heroVideo.classList.add('is-errored'));
    heroVideo.play().catch(() => {});
  }

  /* ---------------------------------------------------------------------
     Google Reviews carousel
     ------------------------------------------------------------------- */
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewsPrev = document.getElementById('reviewsPrev');
  const reviewsNext = document.getElementById('reviewsNext');

  if (reviewsTrack && reviewsPrev && reviewsNext) {
    const scrollByCard = (direction) => {
      const card = reviewsTrack.firstElementChild;
      const gap = 24;
      const step = (card ? card.getBoundingClientRect().width : 300) + gap;
      reviewsTrack.scrollLeft += step * direction;
    };
    reviewsPrev.addEventListener('click', () => scrollByCard(-1));
    reviewsNext.addEventListener('click', () => scrollByCard(1));
  }

  /* ---------------------------------------------------------------------
     Locations — dotted US-outline map, generated the same way as the
     original design prototype (point-in-polygon fill over a rough US
     outline in lon/lat degrees, remapped to the map's percentage grid).
     ------------------------------------------------------------------- */
  const locationsMap = document.getElementById('locationsMap');

  if (locationsMap) {
    const usOutline = [
      [-124, 49], [-95, 49], [-83, 45], [-71, 45], [-67, 44], [-70, 41], [-74, 40], [-76, 36],
      [-81, 31], [-80, 26], [-81, 25], [-83, 28], [-89, 30], [-94, 29], [-97, 26], [-103, 29],
      [-108, 31], [-114, 32], [-117, 33], [-122, 38], [-124, 42],
    ];

    const pointInPolygon = (lon, lat, poly) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i];
        const [xj, yj] = poly[j];
        const intersect = ((yi > lat) !== (yj > lat)) &&
          (lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    };

    const lonMin = -125, lonMax = -66, latMin = 24, latMax = 49;
    const fragment = document.createDocumentFragment();

    for (let lat = latMin; lat <= latMax; lat += 1.0) {
      for (let lon = lonMin; lon <= lonMax; lon += 1.3) {
        if (!pointInPolygon(lon, lat, usOutline)) continue;
        const dot = document.createElement('div');
        dot.className = 'map-dot';
        dot.style.left = (((lon - lonMin) / (lonMax - lonMin)) * 100).toFixed(2) + '%';
        dot.style.top = (((latMax - lat) / (latMax - latMin)) * 100).toFixed(2) + '%';
        fragment.appendChild(dot);
      }
    }

    locationsMap.prepend(fragment);
  }

  /* ---------------------------------------------------------------------
     Validated forms (hero quote form, Contact page, Get a Quote page) —
     client-side validation only. Submission is not wired to a backend yet.
     Mark a <form data-validated-form>, put data-validate="required" /
     "email" / "phone" on the fields that need checking, a
     data-error-for="<field-id>" <p> next to each, and a
     [data-form-status] element for the success message.
     ------------------------------------------------------------------- */
  const phonePattern = /^[\d\s()+.-]{7,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validators = {
    required: (value) => value.length > 0,
    email: (value) => emailPattern.test(value),
    phone: (value) => phonePattern.test(value),
  };

  document.querySelectorAll('form[data-validated-form]').forEach((form) => {
    const statusEl = form.querySelector('[data-form-status]');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let firstInvalid = null;
      const payload = {};

      form.querySelectorAll('[data-validate]').forEach((field) => {
        const value = field.value.trim();
        const isValid = validators[field.dataset.validate](value);
        const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
        if (errorEl) errorEl.classList.toggle('is-visible', !isValid);
        field.setAttribute('aria-invalid', isValid ? 'false' : 'true');
        if (!isValid && !firstInvalid) firstInvalid = field;
        payload[field.name || field.id] = value;
      });

      form.querySelectorAll('input:not([data-validate]), textarea:not([data-validate])').forEach((field) => {
        payload[field.name || field.id] = field.value.trim();
      });

      if (firstInvalid) {
        if (statusEl) statusEl.classList.remove('is-visible');
        firstInvalid.focus();
        return;
      }

      // TODO: wire to Resend API (or other notification backend).
      // Example shape once ready:
      //   await fetch('/api/contact', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(payload),
      //   });
      console.log('Form ready to submit:', payload);

      if (statusEl) {
        statusEl.textContent = "Thanks — we've got your info and will respond within one business day.";
        statusEl.classList.add('is-visible');
      }
      form.reset();
    });
  });

  /* ---------------------------------------------------------------------
     Service tab pages (Packaging, Shipping, Crating, Logistics) — pill
     buttons switch which .service-panel is visible; each panel's
     accordion resets to its first item open, matching the original
     per-service default state.
     ------------------------------------------------------------------- */
  const resetAccordion = (panel) => {
    panel.querySelectorAll('.accordion-item').forEach((item, i) => {
      item.classList.toggle('is-open', i === 0);
    });
  };

  document.querySelectorAll('[data-service-page]').forEach((root) => {
    const pills = root.querySelectorAll('[data-tab-target]');
    const panels = root.querySelectorAll('[data-tab-panel]');

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const target = pill.dataset.tabTarget;
        pills.forEach((p) => p.classList.toggle('is-active', p === pill));
        panels.forEach((panel) => {
          const isTarget = panel.dataset.tabPanel === target;
          panel.classList.toggle('is-active', isTarget);
          if (isTarget) resetAccordion(panel);
        });
      });
    });
  });

  /* ---------------------------------------------------------------------
     Accordions (FAQ-style and tab-page applications sections alike) —
     one open item at a time within each .accordion container, anywhere
     on the page.
     ------------------------------------------------------------------- */
  document.querySelectorAll('.accordion-item__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const wasOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.accordion-item').forEach((i) => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  /* ---------------------------------------------------------------------
     Price list category cards (Local Shipping Supplies) — each category
     toggles open independently, and the jump-nav row opens + scrolls to
     the matching category so visitors don't have to scroll past
     unrelated tables to find bulk/bundle pricing.
     ------------------------------------------------------------------- */
  const priceCards = document.querySelectorAll('.price-table-card');
  if (priceCards.length) {
    priceCards.forEach((card) => {
      const head = card.querySelector('.price-table-card__head');
      head.addEventListener('click', () => {
        card.classList.toggle('is-open');
        head.setAttribute('aria-expanded', card.classList.contains('is-open'));
      });
    });

    document.querySelectorAll('.price-list-nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        const card = document.getElementById('price-' + link.dataset.priceTarget);
        if (!card) return;
        card.classList.add('is-open');
        card.querySelector('.price-table-card__head').setAttribute('aria-expanded', 'true');
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Deep links (e.g. packaging.html linking to #price-shipping-boxes)
    // should land on an already-open card, not a collapsed one.
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target && target.classList.contains('price-table-card')) {
        target.classList.add('is-open');
        target.querySelector('.price-table-card__head').setAttribute('aria-expanded', 'true');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }

  /* ---------------------------------------------------------------------
     Expandable mid-cards (e.g. "Sizes & Types" on Corrugated Shipping
     Boxes) — reveals a fuller size list instead of just looking
     clickable with nothing behind it.
     ------------------------------------------------------------------- */
  document.querySelectorAll('.mid-card--expandable').forEach((card) => {
    const toggle = card.querySelector('.mid-card__label--toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      card.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', card.classList.contains('is-open'));
    });
  });

  /* ---------------------------------------------------------------------
     "Read More Posts" toggle (Blog index) — reveals the hidden posts
     and swaps the button for a static "Showing all posts" label.
     ------------------------------------------------------------------- */
  const loadMoreBtn = document.getElementById('loadMorePosts');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      document.querySelectorAll('.blog-card.is-hidden').forEach((card) => card.classList.remove('is-hidden'));
      loadMoreBtn.replaceWith(Object.assign(document.createElement('span'), {
        className: 'blog-index__showing-all',
        textContent: 'Showing all posts',
      }));
    });
  }

  /* ---------------------------------------------------------------------
     Single-select pill groups (e.g. "What Do You Need?" on Get a Quote) —
     clicking a pill marks it active and stores its value in the group's
     hidden input, which is picked up by the validated-form handler above.
     ------------------------------------------------------------------- */
  document.querySelectorAll('[data-option-group]').forEach((group) => {
    const hiddenInput = group.querySelector('input[type="hidden"]');
    const pills = group.querySelectorAll('.option-pill');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        if (hiddenInput) hiddenInput.value = pill.dataset.value;
      });
    });
  });
})();
