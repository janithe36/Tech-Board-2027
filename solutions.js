// =============================================================
// SOLUTIONS 2K27 — OFFICIAL FESTIVAL LOGIC
// Dynamic Directory, Unstop Integration, Filtering & Event Modals
// AIT Technical Board • Army Institute of Technology, Pune
// =============================================================

import "./cursor.js";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vertexShader, bgFragmentShader } from "./shaders.js";
import {
  SOLUTIONS_METADATA,
  SOLUTIONS_CATEGORIES,
  SOLUTIONS_EVENTS,
} from "./solutionsData.js";

gsap.registerPlugin(ScrollTrigger);

let bgRenderer, bgScene, bgCamera;
let activeCategory = "all";
let searchQuery = "";

function init() {
  initBackgroundCanvas();
  initPreloader();
  initFullscreenMenu();
  renderCategories();
  renderEvents();
  initSearchAndFilters();
  initEventModal();
  initFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// =============================================================
// 1. THREE.JS ABSTRACT CRIMSON STREAMLINES CANVAS
// =============================================================
function initBackgroundCanvas() {
  const bgCanvas = document.getElementById("bg-canvas");
  if (!bgCanvas) return;

  const isMobile = window.innerWidth <= 768;
  const dpr = Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.5);

  bgRenderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    alpha: true,
    antialias: false,
    powerPreference: "high-performance",
  });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(dpr);

  bgScene = new THREE.Scene();
  bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const bgMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader: bgFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(
          window.innerWidth * dpr,
          window.innerHeight * dpr
        ),
      },
    },
    depthTest: false,
    depthWrite: false,
  });

  const bgQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial);
  bgScene.add(bgQuad);

  let isPageVisible = !document.hidden;
  document.addEventListener("visibilitychange", () => {
    isPageVisible = !document.hidden;
  });

  const clock = new THREE.Clock();
  let animationFrameId;

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    if (!isPageVisible) return;
    bgMaterial.uniforms.uTime.value = clock.getElapsedTime() * 0.45;
    bgRenderer.render(bgScene, bgCamera);
  }
  animate();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const curDpr = Math.min(window.devicePixelRatio, w <= 768 ? 1.0 : 1.5);
      bgRenderer.setSize(w, h);
      bgRenderer.setPixelRatio(curDpr);
      bgMaterial.uniforms.uResolution.value.set(w * curDpr, h * curDpr);
    }, 120);
  });
}

// =============================================================
// 2. PRELOADER SCREEN
// =============================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const spiderFill = document.getElementById("spider-fill");
  const counter = document.getElementById("preloader-counter");

  if (!preloader) return;
  document.body.classList.add("is-loading");

  let progress = 0;
  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 6;
    if (progress > 100) progress = 100;

    if (spiderFill) spiderFill.style.height = `${progress}%`;
    if (counter) counter.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            preloader.style.display = "none";
            document.body.classList.remove("is-loading");
          },
        });
      }, 180);
    }
  }, 35);
}

// =============================================================
// 3. FULLSCREEN MENU
// =============================================================
function initFullscreenMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const fullscreenMenu = document.getElementById("fullscreen-menu");
  const menuBg = fullscreenMenu?.querySelector(".menu-bg");
  const menuItems = fullscreenMenu?.querySelectorAll(".menu-item");

  if (!menuBtn || !fullscreenMenu) return;

  const menuTimeline = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.out" },
    onReverseComplete: () => {
      fullscreenMenu.classList.remove("is-menu-open");
      fullscreenMenu.setAttribute("aria-hidden", "true");
    },
  });

  let isMenuOpen = false;
  if (menuBg) {
    menuTimeline.to(menuBg, { opacity: 1, duration: 0.4 }, 0);
  }

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      fullscreenMenu.classList.add("is-menu-open");
      fullscreenMenu.setAttribute("aria-hidden", "false");
      menuBtn.classList.add("menu-active");
      menuTimeline.timeScale(1).play();
    } else {
      menuBtn.classList.remove("menu-active");
      menuTimeline.timeScale(1.5).reverse();
    }
  };

  menuBtn.addEventListener("click", toggleMenu);
  menuItems.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) toggleMenu();
  });
}

// =============================================================
// 4. RENDER CATEGORIES & SEARCH FILTER
// =============================================================
function renderCategories() {
  const container = document.getElementById("categories-filter-bar");
  if (!container) return;

  container.innerHTML = SOLUTIONS_CATEGORIES.map(
    (cat) => `
      <button type="button" class="cat-chip ${cat.id === activeCategory ? "active" : ""}" data-category="${cat.id}">
        ${cat.label} (${cat.count})
      </button>
    `
  ).join("");
}

function renderEvents() {
  const grid = document.getElementById("events-grid-container");
  if (!grid) return;

  const filtered = SOLUTIONS_EVENTS.filter((ev) => {
    const matchesCat = activeCategory === "all" || ev.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      ev.title.toLowerCase().includes(query) ||
      ev.categoryName.toLowerCase().includes(query) ||
      ev.shortDesc.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-dim);">
        <p style="font-family: 'DM Mono', monospace; font-size: 1.1rem; margin-bottom: 0.5rem;">No competitions match your search.</p>
        <p style="font-size: 0.9rem;">Try selecting a different category or clearing the search filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (ev) => `
    <article class="event-card" data-event-id="${ev.id}">
      <div>
        <div class="card-top-meta">
          <span class="event-tag-pill">${ev.tag}</span>
          <span class="event-team-pill">${ev.teamSize}</span>
        </div>
        <h3 class="event-card-title">${ev.title}</h3>
        <p class="event-card-cat">${ev.categoryName}</p>
        <p class="event-card-desc">${ev.shortDesc}</p>
      </div>

      <div class="event-card-actions">
        <button type="button" class="btn-details" data-event-id="${ev.id}">
          Details
        </button>
        <a href="${ev.unstopUrl}" target="_blank" rel="noopener noreferrer" class="btn-unstop-card" title="Register on Unstop">
          <span>Register</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </div>
    </article>
  `
    )
    .join("");

  // Attach detail listeners
  grid.querySelectorAll(".btn-details").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-event-id");
      openEventModal(id);
    });
  });
}

function initSearchAndFilters() {
  const catBar = document.getElementById("categories-filter-bar");
  const searchInput = document.getElementById("events-search-input");

  if (catBar) {
    catBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-chip");
      if (!btn) return;
      activeCategory = btn.getAttribute("data-category");
      catBar.querySelectorAll(".cat-chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      renderEvents();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderEvents();
    });
  }
}

// =============================================================
// 5. EVENT DETAILS MODAL
// =============================================================
function initEventModal() {
  const backdrop = document.getElementById("event-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!backdrop) return;

  const closeModal = () => {
    backdrop.classList.remove("is-active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("is-active")) {
      closeModal();
    }
  });
}

function openEventModal(eventId) {
  const event = SOLUTIONS_EVENTS.find((e) => e.id === eventId);
  const backdrop = document.getElementById("event-modal-backdrop");
  const content = document.getElementById("modal-dynamic-content");

  if (!event || !backdrop || !content) return;

  content.innerHTML = `
    <div class="modal-meta-row">
      <span class="event-tag-pill">${event.tag}</span>
      <span class="event-team-pill">${event.teamSize}</span>
    </div>
    <h2 class="modal-title">${event.title}</h2>
    <p class="modal-cat-tagline">${event.categoryName} • SOLUTIONS 2K27</p>

    <div class="modal-info-strip">
      <div class="info-item">
        <span class="lbl">Eligibility</span>
        <span class="val">${event.eligibility}</span>
      </div>
      <div class="info-item">
        <span class="lbl">Team Size</span>
        <span class="val">${event.teamSize}</span>
      </div>
      <div class="info-item">
        <span class="lbl">Platform</span>
        <span class="val">Unstop Official</span>
      </div>
    </div>

    <h4 class="modal-section-title">Overview</h4>
    <p class="modal-desc-text">${event.overview}</p>

    <h4 class="modal-section-title">Format & Rounds</h4>
    <p class="modal-desc-text">${event.format}</p>

    <h4 class="modal-section-title">Key Guidelines & Regulations</h4>
    <ul class="modal-rules-list">
      ${event.rules.map((r) => `<li>${r}</li>`).join("")}
    </ul>

    <h4 class="modal-section-title">Schedule</h4>
    <p class="modal-desc-text">${event.schedule}</p>

    <div class="modal-cta-row">
      <a href="${event.unstopUrl}" target="_blank" rel="noopener noreferrer" class="cta-btn-primary" style="padding: 0.8rem 1.8rem;">
        <span>Register on Unstop</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </a>
    </div>
  `;

  backdrop.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

// =============================================================
// 6. UNIFIED SITE FOOTER (HOME-PAGE MATCHING)
// =============================================================
function initFooter() {
  const footerLinks = document.querySelectorAll(".footer-link-pill");
  footerLinks.forEach((link) => {
    const wrap = link.querySelector(".footer-link-wrap");
    const rawText = (link.getAttribute("data-text") || (wrap ? wrap.textContent : "")).trim().toUpperCase();

    if (wrap) {
      wrap.innerHTML = rawText
        .split("")
        .map(
          (char) => `
          <span class="footer-char-box">
            <span class="footer-char footer-char-main">${char === " " ? "&nbsp;" : char}</span>
            <span class="footer-char footer-char-clone">${char === " " ? "&nbsp;" : char}</span>
          </span>
        `
        )
        .join("");

      const charMains = wrap.querySelectorAll(".footer-char-main");
      const charClones = wrap.querySelectorAll(".footer-char-clone");

      link.addEventListener("mouseenter", () => {
        gsap.killTweensOf(charMains);
        gsap.killTweensOf(charClones);
        gsap.to(charMains, { yPercent: -100, duration: 0.35, stagger: 0.02, ease: "power2.out" });
        gsap.to(charClones, { yPercent: -100, duration: 0.35, stagger: 0.02, ease: "power2.out" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.killTweensOf(charMains);
        gsap.killTweensOf(charClones);
        gsap.to(charMains, { yPercent: 0, duration: 0.3, stagger: 0.016, ease: "power2.out" });
        gsap.to(charClones, { yPercent: 0, duration: 0.3, stagger: 0.016, ease: "power2.out" });
      });
    }
  });

  const footerCard = document.getElementById("footer-card");
  const footerNotchLogo = document.getElementById("footer-notch-logo-container");
  const footerStrip1 = document.getElementById("footer-strip-1");
  const footerStrip2 = document.getElementById("footer-strip-2");
  const footerLine1 = document.getElementById("footer-tagline-line1");
  const footerLine2 = document.getElementById("footer-tagline-line2");
  const footerCharImg = document.querySelector(".footer-character-img");

  if (footerCard) {
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#site-footer",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    footerTl.fromTo(
      footerCard,
      { scale: 0.95, opacity: 0.7, y: 35 },
      { scale: 1.0, opacity: 1.0, y: 0, duration: 0.8, ease: "power2.out" },
      0
    );

    if (footerNotchLogo) {
      footerTl.fromTo(
        footerNotchLogo,
        { opacity: 0, y: -15, scale: 0.88 },
        { opacity: 1, y: 0, scale: 1.0, duration: 0.6, ease: "power2.out" },
        0.15
      );
    }

    if (footerCharImg) {
      footerTl.fromTo(
        footerCharImg,
        { y: 40, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
        0.1
      );
    }

    if (footerStrip1 && footerLine1) {
      footerTl.fromTo(footerStrip1, { left: "0%", width: "0%" }, { left: "0%", width: "100%", duration: 0.36, ease: "power2.inOut" }, 0.28);
      footerTl.set(footerLine1, { opacity: 1 }, 0.62);
      footerTl.to(footerStrip1, { left: "100%", width: "0%", duration: 0.34, ease: "power2.inOut" }, 0.64);
    }

    if (footerStrip2 && footerLine2) {
      footerTl.fromTo(footerStrip2, { left: "0%", width: "0%" }, { left: "0%", width: "100%", duration: 0.36, ease: "power2.inOut" }, 0.44);
      footerTl.set(footerLine2, { opacity: 1 }, 0.78);
      footerTl.to(footerStrip2, { left: "100%", width: "0%", duration: 0.34, ease: "power2.inOut" }, 0.80);
    }
  }
}

