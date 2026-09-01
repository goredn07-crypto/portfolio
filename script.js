/* ==========================================================
   ATHARV GORE PORTFOLIO - CORE JAVASCRIPT
   Typewriter, 3D Tilt, ScrollSpy, Lightbox, Copy & Safe Form
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------
     1. DEVELOPER TERMINAL TYPEWRITER EFFECT
     -------------------------------------------------------- */
  const words = [
    "B.Tech CSE Core Fresher ('26-'30) @ VIT Bhopal",
    "Python Developer & Problem Solving Enthusiast",
    "Vibecoding & AI-Powered Fast Prototyping",
    "Frontend Creator • HTML5, CSS3 & JavaScript"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimer = null;
  const typedTarget = document.getElementById('typedText');
  const typingSpeed = 65;
  const deletingSpeed = 30;
  const pauseTime = 1900;

  function typeEffect() {
    if (!typedTarget) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typedTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    typingTimer = setTimeout(typeEffect, speed);
  }

  typeEffect();

  /* --------------------------------------------------------
     2. 3D CYBER-IDE CARD TILT & INTERACTIVE TAB SWITCHER
     -------------------------------------------------------- */
  const ideCard = document.getElementById('devIdeCard');

  if (ideCard) {
    const handleTilt = (e) => {
      if (window.innerWidth < 992) return;
      
      const rect = ideCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      ideCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const resetTilt = () => {
      ideCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    ideCard.addEventListener('mousemove', handleTilt);
    ideCard.addEventListener('mouseleave', resetTilt);
  }

  // Interactive IDE Tabs
  const ideTabs = document.querySelectorAll('.ide-tab');
  const codeContent = document.querySelector('.code-content code');
  const lineNumbers = document.querySelector('.code-line-numbers');
  const consoleText = document.querySelector('.console-text');
  const outputMetric = document.querySelector('.output-metric');
  const ideStatus = document.querySelector('.ide-status-badge span:last-child');

  const tabData = [
    {
      name: "atharv.py",
      status: "Python 3.12",
      metric: "Runtime: 6ms • RAM: 12MB",
      output: "✨ Vibecoding 'High-Impact Tech Solution' at warp speed 🚀",
      lines: 14,
      code: `<span class="syn-kw">class</span> <span class="syn-class">AtharvGore</span>:
    <span class="syn-kw">def</span> <span class="syn-func">__init__</span>(<span class="syn-self">self</span>):
        <span class="syn-self">self</span>.name = <span class="syn-str">"Atharv Gore"</span>
        <span class="syn-self">self</span>.role = <span class="syn-str">"B.Tech CSE Core ('26-'30)"</span>
        <span class="syn-self">self</span>.university = <span class="syn-str">"VIT Bhopal"</span>
        <span class="syn-self">self</span>.stack = [<span class="syn-str">"Python"</span>, <span class="syn-str">"Vibecoding"</span>, <span class="syn-str">"HTML/CSS/JS"</span>]
        <span class="syn-self">self</span>.mindset = <span class="syn-str">"10x Builder & AI-Native Prototyper"</span>

    <span class="syn-kw">def</span> <span class="syn-func">build_and_ship</span>(<span class="syn-self">self</span>, idea):
        <span class="syn-kw">return</span> <span class="syn-str">f"✨ Vibecoding '{idea}' at warp speed 🚀"</span>

dev = <span class="syn-class">AtharvGore</span>()
<span class="syn-func">print</span>(dev.<span class="syn-func">build_and_ship</span>(<span class="syn-str">"High-Impact Tech Solution"</span>))`
    },
    {
      name: "vibecode.ai",
      status: "AI Engine",
      metric: "Latency: 12ms • Vibe: 100%",
      output: "🚀 Autonomous build complete: 'Next-Gen Experience' live!",
      lines: 12,
      code: `<span class="syn-comment"># AI-Native Vibecoding Workflow</span>
<span class="syn-kw">from</span> vibecode <span class="syn-kw">import</span> AutonomousEngine

<span class="syn-kw">async def</span> <span class="syn-func">run_vibe_session</span>(prompt):
    engine = AutonomousEngine(model=<span class="syn-str">"frontier-ai"</span>, vibe=<span class="syn-str">"100%"</span>)
    product = <span class="syn-kw">await</span> engine.build(
        goal=prompt,
        stack=[<span class="syn-str">"Python"</span>, <span class="syn-str">"HTML5"</span>, <span class="syn-str">"CSS3"</span>, <span class="syn-str">"JS"</span>],
        speed=<span class="syn-str">"instant"</span>
    )
    <span class="syn-kw">return</span> product.deploy()

run_vibe_session(<span class="syn-str">"Next-Gen Experience"</span>)`
    },
    {
      name: "frontend.js",
      status: "Node ES6+",
      metric: "FPS: 60 • DOM Load: 0.1s",
      output: "⚡ Crafting ultra-fast, responsive & accessible UI...",
      lines: 11,
      code: `<span class="syn-comment">// Modern Web Engineering Stack</span>
<span class="syn-kw">const</span> <span class="syn-class">AtharvPortfolio</span> = {
  stack: [<span class="syn-str">"HTML5"</span>, <span class="syn-str">"CSS3"</span>, <span class="syn-str">"JavaScript"</span>],
  design: <span class="syn-str">"Cyber-Luxe Glassmorphism"</span>,
  responsive: <span class="syn-kw">true</span>,
  <span class="syn-func">build</span>() {
    <span class="syn-func">console</span>.log(<span class="syn-str">"⚡ Crafting ultra-fast UI..."</span>);
    <span class="syn-kw">return</span> <span class="syn-str">"100% Performance & Fluidity"</span>;
  }
};

<span class="syn-class">AtharvPortfolio</span>.<span class="syn-func">build</span>();`
    }
  ];

  if (ideTabs.length > 0 && codeContent && lineNumbers) {
    ideTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        ideTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const data = tabData[index];
        if (data) {
          codeContent.innerHTML = data.code;
          let numSpans = '';
          for (let i = 1; i <= data.lines; i++) {
            numSpans += `<span>${i}</span>`;
          }
          lineNumbers.innerHTML = numSpans;
          if (consoleText) consoleText.textContent = data.output;
          if (outputMetric) outputMetric.textContent = data.metric;
          if (ideStatus) ideStatus.textContent = data.status;
        }
      });
    });
  }

  /* --------------------------------------------------------
     3. NAVBAR SCROLLSPY (Dynamic Section Highlight)
     -------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  function updateScrollSpy() {
    let scrollPos = window.scrollY + 200;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();

  /* --------------------------------------------------------
     4. GALLERY CATEGORY FILTERING
     -------------------------------------------------------- */
  const filterPills = document.querySelectorAll('.filter-pill');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      const filter = pill.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* --------------------------------------------------------
     5. CAMPUS 9-PHOTO LIGHTBOX MODAL
     -------------------------------------------------------- */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  
  function getVisibleCards() {
    return Array.from(galleryCards).filter(c => !c.classList.contains('hide'));
  }

  function openLightbox(card) {
    const visibleCards = getVisibleCards();
    currentGalleryIndex = visibleCards.indexOf(card);
    if (currentGalleryIndex === -1) currentGalleryIndex = 0;

    const targetCard = visibleCards[currentGalleryIndex];
    if (!targetCard) return;

    const src = targetCard.getAttribute('data-src');
    const title = targetCard.getAttribute('data-title') || 'Campus View';
    const desc = targetCard.getAttribute('data-desc') || '';

    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNextImage() {
    const visibleCards = getVisibleCards();
    if (visibleCards.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % visibleCards.length;
    openLightbox(visibleCards[currentGalleryIndex]);
  }

  function showPrevImage() {
    const visibleCards = getVisibleCards();
    if (visibleCards.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + visibleCards.length) % visibleCards.length;
    openLightbox(visibleCards[currentGalleryIndex]);
  }

  galleryCards.forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(card);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });
  }

  // Lightbox Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    }
  });

  // Mobile Touch Swipe Gesture
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        showNextImage(); // Swiped left
      } else if (touchEndX - touchStartX > 50) {
        showPrevImage(); // Swiped right
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------
     6. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------- */
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = document.getElementById('toastIcon');
  let toastTimeout = null;

  function showToast(message, isError = false) {
    if (!toast || !toastMsg) return;
    
    if (toastTimeout) clearTimeout(toastTimeout);

    toastMsg.textContent = message;
    if (toastIcon) {
      toastIcon.className = isError ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-check';
      toastIcon.style.color = isError ? 'var(--accent-pink)' : 'var(--accent-cyan)';
    }

    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  /* --------------------------------------------------------
     7. SAFE CLIPBOARD COPY HANDLER
     -------------------------------------------------------- */
  function copyToClipboard(text, successMsg = 'Copied to clipboard! 📋') {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopyText(text, successMsg);
      });
    } else {
      fallbackCopyText(text, successMsg);
    }
  }

  function fallbackCopyText(text, successMsg) {
    try {
      const tempArea = document.createElement('textarea');
      tempArea.value = text;
      tempArea.style.position = 'fixed';
      tempArea.style.left = '-9999px';
      document.body.appendChild(tempArea);
      tempArea.focus();
      tempArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(tempArea);
      if (success) {
        showToast(successMsg);
      } else {
        showToast('Email address: ' + text);
      }
    } catch (e) {
      showToast('Email address: ' + text);
    }
  }

  // Email Card Click
  const emailCard = document.getElementById('emailQuickCopy');
  if (emailCard) {
    const handleCopy = () => {
      const email = emailCard.getAttribute('data-email') || 'atharvgore41@gmail.com';
      copyToClipboard(email, 'Email address copied to clipboard! 📋');
    };

    emailCard.addEventListener('click', handleCopy);
    emailCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCopy();
      }
    });
  }

  // Phone Card Click
  const phoneItem = document.getElementById('phoneItem');
  if (phoneItem) {
    phoneItem.addEventListener('click', () => {
      showToast('Connect with Atharv via direct Email or LinkedIn! ✉️');
    });
    phoneItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showToast('Connect with Atharv via direct Email or LinkedIn! ✉️');
      }
    });
  }

  /* --------------------------------------------------------
     8. SECURE CONTACT FORM VALIDATION & SAFE SUBMIT
     -------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      let hasError = false;

      if (!name || name.length < 2) {
        if (nameInput) nameInput.classList.add('is-invalid');
        showToast('Please enter your name.', true);
        hasError = true;
      } else {
        if (nameInput) nameInput.classList.remove('is-invalid');
      }

      if (!email || !emailPattern.test(email)) {
        if (emailInput) emailInput.classList.add('is-invalid');
        if (!hasError) showToast('Please enter a valid email address.', true);
        hasError = true;
      } else {
        if (emailInput) emailInput.classList.remove('is-invalid');
      }

      if (!message || message.length < 5) {
        if (messageInput) messageInput.classList.add('is-invalid');
        if (!hasError) showToast('Please write a message (min 5 characters).', true);
        hasError = true;
      } else {
        if (messageInput) messageInput.classList.remove('is-invalid');
      }

      if (hasError) return;

      const safeName = encodeURIComponent(name.slice(0, 100));
      const safeBody = encodeURIComponent(
        `From: ${name} (${email})\n\nMessage:\n${message.slice(0, 1000)}`
      );

      const mailtoLink = `mailto:atharvgore41@gmail.com?subject=Portfolio%20Inquiry%20from%20${safeName}&body=${safeBody}`;

      showToast('Opening default email client... 🚀');
      
      setTimeout(() => {
        window.location.href = mailtoLink;
        contactForm.reset();
      }, 500);
    });

    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('is-invalid');
        });
      }
    });
  }

  /* --------------------------------------------------------
     9. RESPONSIVE MOBILE NAVIGATION TOGGLE
     -------------------------------------------------------- */
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    const toggleMenu = () => {
      const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    };

    const closeMenu = () => {
      mobileBtn.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
    };

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== mobileBtn) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }
});