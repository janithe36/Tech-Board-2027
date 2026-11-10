// =============================================================
// TECH AAKRITI 2027 — OFFICIAL GUIDELINES & RULEBOOK LOGIC
// Dynamic Rendering, Interactive Filters, Accordions & Three.js Canvas
// =============================================================

import "./cursor.js";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vertexShader, bgFragmentShader } from "./shaders.js";
import {
  generalGuidelines,
  pointsTable,
  massParticipationFormulas,
  disputeHierarchy,
  malpracticesList,
  eventRulebooks,
  committeeSignOff,
} from "./guidelinesData.js";

gsap.registerPlugin(ScrollTrigger);

let bgRenderer, bgScene, bgCamera;
let currentEventCategory = "all";
let activeSearchQuery = "";

function init() {
  initBackgroundCanvas();
  initPreloader();
  initFullscreenMenu();
  renderAllSections();
  bindInteractionEvents();
  initFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// =============================================================
// 1. THREE.JS ABSTRACT CRIMSON STREAMLINES BACKGROUND
// =============================================================
function initBackgroundCanvas() {
  const bgCanvas = document.getElementById("bg-canvas");
  if (!bgCanvas) return;

  const isMobile = window.innerWidth <= 768;
  const targetDpr = isMobile ? Math.min(window.devicePixelRatio, 1.0) : Math.min(window.devicePixelRatio, 1.25);

  bgRenderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    antialias: !isMobile,
    powerPreference: "high-performance",
  });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(targetDpr);

  bgScene = new THREE.Scene();
  bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const mouse = new THREE.Vector2(0.5, 0.5);
  const targetMouse = new THREE.Vector2(0.5, 0.5);

  const bgMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uTime: { value: 0 },
      uMouse: { value: mouse },
      uInvertProgress: { value: 0 },
      uWhiteLinesProgress: { value: 0 },
    },
    vertexShader,
    fragmentShader: bgFragmentShader,
  });

  const quadGeom = new THREE.PlaneGeometry(2, 2);
  const bgMesh = new THREE.Mesh(quadGeom, bgMaterial);
  bgScene.add(bgMesh);

  if (!isMobile) {
    window.addEventListener(
      "pointermove",
      (e) => {
        targetMouse.x = e.clientX / window.innerWidth;
        targetMouse.y = 1.0 - e.clientY / window.innerHeight;
      },
      { passive: true }
    );
  }

  window.addEventListener(
    "resize",
    () => {
      bgRenderer.setSize(window.innerWidth, window.innerHeight);
      bgMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    },
    { passive: true }
  );

  const clock = new THREE.Clock();
  function animateBg() {
    requestAnimationFrame(animateBg);
    // Pause WebGL rendering when tab is hidden or minimized to conserve battery
    if (document.hidden) return;

    const delta = clock.getDelta();
    bgMaterial.uniforms.uTime.value += delta * 0.45;
    mouse.lerp(targetMouse, 0.05);
    bgMaterial.uniforms.uMouse.value.copy(mouse);
    bgRenderer.render(bgScene, bgCamera);
  }
  animateBg();
}

// =============================================================
// 2. CENTRAL ASSET PRELOADER (SPIDER FILL & REVEAL)
// =============================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const spiderFill = document.getElementById("spider-fill");
  const counter = document.getElementById("preloader-counter");

  if (!preloader || !spiderFill || !counter) return;

  document.documentElement.classList.add("is-loading");
  document.body.classList.add("is-loading");

  let progress = 0;
  let hasFinished = false;

  const forceDismiss = () => {
    if (preloader) {
      preloader.style.display = "none";
      preloader.style.pointerEvents = "none";
    }
    document.documentElement.classList.remove("is-loading");
    document.body.classList.remove("is-loading");
    animateEntrance();
  };

  const failsafe = setTimeout(() => {
    if (!hasFinished) {
      hasFinished = true;
      if (interval) clearInterval(interval);
      forceDismiss();
    }
  }, 1200);

  const interval = setInterval(() => {
    progress = Math.min(100, progress + 12);
    spiderFill.style.height = `${progress}%`;
    counter.textContent = `${progress}%`;

    if (progress >= 100) {
      hasFinished = true;
      clearInterval(interval);
      clearTimeout(failsafe);
      setTimeout(forceDismiss, 180);
    }
  }, 40);
}

// =============================================================
// 3. FULLSCREEN WEARECASEY INTERACTIVE MENU OVERLAY
// =============================================================
function initFullscreenMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const fullscreenMenu = document.getElementById("fullscreen-menu");
  const menuBg = fullscreenMenu?.querySelector(".menu-bg");
  const menuItems = fullscreenMenu?.querySelectorAll(".menu-item");

  if (!menuBtn || !fullscreenMenu) return;

  const menuAnimItems = Array.from(menuItems).map((link) => {
    const indexSpan = link.querySelector(".item-index");
    const labelSpan = link.querySelector(".item-label");
    const dividerSpan = link.querySelector(".item-divider");

    let indexWord = null;
    if (indexSpan) {
      const idxText = indexSpan.textContent.trim();
      indexSpan.innerHTML = `<span class="word-mask"><span class="anim-word">${idxText}</span></span>`;
      indexWord = indexSpan.querySelector(".anim-word");
    }

    let firstChar = null;
    let trailingChars = [];
    let trailingCharBox = null;

    if (labelSpan) {
      const fullText = labelSpan.textContent.trim();
      const first = fullText.charAt(0);
      const rest = fullText.slice(1);

      labelSpan.innerHTML = `
        <span class="first-char-box"><span class="first-char">${first}</span></span>
        <span class="trailing-char-box">
          ${rest
            .split("")
            .map((char) => `<span class="char-span">${char}</span>`)
            .join("")}
        </span>
      `;

      firstChar = labelSpan.querySelector(".first-char");
      trailingCharBox = labelSpan.querySelector(".trailing-char-box");
      trailingChars = Array.from(labelSpan.querySelectorAll(".char-span"));
    }

    // Hide characters off-screen initially so they never leak into the page
    if (indexWord && firstChar) {
      gsap.set([indexWord, firstChar], { yPercent: 100 });
    }
    if (trailingChars.length > 0) {
      gsap.set(trailingChars, { xPercent: 125 });
    }
    if (trailingCharBox) {
      gsap.set(trailingCharBox, { width: 0 });
    }
    if (dividerSpan) {
      gsap.set(dividerSpan, { scaleY: 0 });
    }

    return {
      link,
      indexWord,
      firstChar,
      trailingChars,
      trailingCharBox,
      divider: dividerSpan,
    };
  });

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
    menuTimeline.to(menuBg, { opacity: 1, duration: 0.5 }, 0);
  }

  menuAnimItems.forEach(({ indexWord, firstChar, trailingChars, trailingCharBox, divider }, i) => {
    const startTime = 0.25 + i * 0.08;

    if (indexWord && firstChar) {
      menuTimeline.to([indexWord, firstChar], { yPercent: 0, duration: 0.5 }, startTime);
    }
    if (divider) {
      menuTimeline.to(divider, { scaleY: 1, duration: 0.6, ease: "power3.out" }, startTime + 0.04);
    }
    if (trailingCharBox) {
      menuTimeline.to(
        trailingCharBox,
        {
          width: () => trailingCharBox.scrollWidth,
          duration: 0.6,
          ease: "power4.inOut",
        },
        startTime + 0.1
      );
    }
    if (trailingChars.length > 0) {
      menuTimeline.to(
        trailingChars,
        { xPercent: 0, duration: 0.5, stagger: 0.02 },
        startTime + 0.2
      );
    }
  });

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
  menuBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  menuItems.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu();
    }
  });
}

// =============================================================
// 4. RENDER ALL SECTIONS DYNAMICALLY FROM DATA
// =============================================================
function renderAllSections() {
  renderGeneralGuidelines();
  renderPointsTable();
  renderDisputeHierarchy();
  renderEventRulebooks();
  renderMalpractices();
  renderCommittee();
}

// 4.1 General Protocol
function renderGeneralGuidelines() {
  const container = document.getElementById("general-rules-container");
  if (!container) return;

  container.innerHTML = generalGuidelines
    .map(
      (rule) => `
    <article class="rule-card">
      <div class="rule-card-header">
        <div class="rule-card-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="rule-card-title">${rule.title}</h3>
      </div>
      <p class="rule-card-desc">${rule.desc}</p>
    </article>
  `
    )
    .join("");
}

// 4.2 Points Table & Formula
function renderPointsTable() {
  const tbody = document.getElementById("points-table-body");
  if (!tbody) return;

  tbody.innerHTML = pointsTable
    .map(
      (row) => `
    <tr>
      <td style="font-family: 'DM Mono', monospace; font-weight: 700; color: rgba(255,255,255,0.4);">${String(
        row.sNo
      ).padStart(2, "0")}</td>
      <td class="event-name-cell">${row.event}</td>
      <td><span class="cat-badge-cell">${row.category}</span></td>
      <td class="points-value-cell">${row.points}</td>
      <td>${row.note}</td>
    </tr>
  `
    )
    .join("");
}

// 4.3 Dispute Hierarchy
function renderDisputeHierarchy() {
  const container = document.getElementById("hierarchy-chain-container");
  if (!container) return;

  container.innerHTML = disputeHierarchy
    .map(
      (step) => `
    <article class="hierarchy-card">
      <span class="hierarchy-level-tag">LEVEL ${step.level} OF 06</span>
      <h3 class="hierarchy-role-title">${step.role}</h3>
      <p class="hierarchy-scope-desc">${step.scope}</p>
    </article>
  `
    )
    .join("");
}

// 4.4 Event Rulebooks Accordion
function renderEventRulebooks() {
  const container = document.getElementById("event-accordion-container");
  if (!container) return;

  const filtered = eventRulebooks.filter((event) => {
    const matchesCategory =
      currentEventCategory === "all" ||
      event.category.toLowerCase().includes(currentEventCategory.toLowerCase());

    const matchesSearch =
      !activeSearchQuery ||
      event.name.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
      event.tagline.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
      event.format.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
      event.specialRules.some((r) => r.toLowerCase().includes(activeSearchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: rgba(14,14,20,0.6); border: 1px dashed rgba(255,255,255,0.15); border-radius: 6px;">
        <p style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.6rem; font-weight: 700; color: #ffffff; text-transform: uppercase;">No Event Rulebooks Found</p>
        <p style="color: rgba(255,255,255,0.6); font-size: 0.88rem; margin-top: 0.5rem;">No events match your current category filter or search keyword.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((event, idx) => {
      const isOpen = idx === 0 && !activeSearchQuery ? "is-open" : "";
      return `
      <div class="accordion-item ${isOpen}" data-id="${event.id}">
        <div class="accordion-header" tabindex="0" role="button" aria-expanded="${isOpen ? "true" : "false"}">
          <div class="accordion-title-wrap">
            <span class="accordion-cat-tag">${event.category}</span>
            <h3 class="accordion-title">${event.name}</h3>
            <span class="accordion-tagline">— ${event.tagline}</span>
          </div>
          <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div class="accordion-body">
          <div class="event-details-grid">
            <div class="detail-block">
              <span class="detail-label">Roster & Team Size</span>
              <p class="detail-val">${event.teamSize}</p>
            </div>
            <div class="detail-block">
              <span class="detail-label">Eligibility Bracket</span>
              <p class="detail-val">${event.eligibility}</p>
            </div>
            <div class="detail-block" style="grid-column: 1 / -1;">
              <span class="detail-label">Competition Format & Rounds</span>
              <p class="detail-val">${event.format}</p>
            </div>
            <div class="detail-block" style="grid-column: 1 / -1;">
              <span class="detail-label">Evaluation & Podium Criteria</span>
              <p class="detail-val">${event.evaluation}</p>
            </div>
          </div>
          ${
            event.specialRules && event.specialRules.length > 0
              ? `
            <div class="special-rules-section">
              <h4 class="special-rules-title">Mandatory Technical Regulations</h4>
              <ul class="special-rules-list">
                ${event.specialRules.map((rule) => `<li>${rule}</li>`).join("")}
              </ul>
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;
    })
    .join("");

  // Re-bind accordion toggle listeners
  container.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const wasOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open");
      header.setAttribute("aria-expanded", String(!wasOpen));
    });

    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });
}

// 4.5 Malpractices
function renderMalpractices() {
  const container = document.getElementById("malpractices-grid-container");
  if (!container) return;

  container.innerHTML = malpracticesList
    .map(
      (m) => `
    <article class="malpractice-card">
      <div class="malpractice-top">
        <h3 class="malpractice-title">${m.title}</h3>
        <span class="malpractice-penalty">${m.penalty}</span>
      </div>
      <p class="malpractice-desc">${m.desc}</p>
    </article>
  `
    )
    .join("");
}

// 4.6 Committee Sign-Off
function renderCommittee() {
  const branchContainer = document.getElementById("committee-branches-list");
  const secContainer = document.getElementById("committee-secretaries-list");
  const facContainer = document.getElementById("committee-faculty-list");

  if (branchContainer) {
    branchContainer.innerHTML = committeeSignOff.branches
      .map(
        (b) => `
      <div class="committee-entry">
        <span class="entry-name">${b.name}</span>
        <span class="entry-role">${b.representative}</span>
      </div>
    `
      )
      .join("");
  }

  if (secContainer) {
    secContainer.innerHTML = committeeSignOff.technicalSecretaries
      .map(
        (s) => `
      <div class="committee-entry">
        <span class="entry-name">${s.name}</span>
        <span class="entry-role">${s.role}</span>
      </div>
    `
      )
      .join("");
  }

  if (facContainer) {
    facContainer.innerHTML = committeeSignOff.facultyInCharge
      .map(
        (f) => `
      <div class="committee-entry">
        <span class="entry-name">${f.name}</span>
        <span class="entry-role">${f.role}</span>
      </div>
    `
      )
      .join("");
  }
}

// =============================================================
// 5. BIND INTERACTION EVENTS
// =============================================================
function bindInteractionEvents() {
  // 5.1 Tab Switching
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const targetId = btn.getAttribute("data-target");
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // 5.2 Event Rulebook Category Filter Buttons
  const eventCatBtns = document.querySelectorAll(".event-cat-filter-btn");
  eventCatBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      eventCatBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentEventCategory = btn.getAttribute("data-cat") || "all";
      renderEventRulebooks();
    });
  });

  // 5.3 Live Search Bar
  const searchInput = document.getElementById("guidelines-search-input");
  const clearBtn = document.getElementById("search-clear-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value.trim();
      if (clearBtn) {
        clearBtn.style.display = activeSearchQuery ? "block" : "none";
      }
      renderEventRulebooks();

      // If user types a search, auto-scroll to the event rulebooks section
      if (activeSearchQuery && activeSearchQuery.length >= 2) {
        const sec = document.getElementById("event-rulebooks-section");
        if (sec) {
          sec.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      activeSearchQuery = "";
      clearBtn.style.display = "none";
      renderEventRulebooks();
      searchInput.focus();
    });
  }
}

// =============================================================
// 6. INITIAL PAGE ENTRANCE ANIMATION
// =============================================================
function animateEntrance() {
  const tl = gsap.timeline();
  tl.from(".guidelines-meta-tag", { opacity: 0, y: -15, duration: 0.5, ease: "power2.out" })
    .from(".guidelines-main-heading", { opacity: 0, y: 25, duration: 0.7, ease: "power3.out" }, "-=0.3")
    .from(".guidelines-subtext-bar", { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" }, "-=0.4")
    .from(".guidelines-control-bar", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.3");
}

// =============================================================
// 7. FOOTER INTERACTION & SCROLL ENTRANCE (MATCHING HOME PAGE)
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

        gsap.to(charMains, {
          yPercent: -100,
          duration: 0.35,
          stagger: 0.02,
          ease: "power2.out",
        });

        gsap.to(charClones, {
          yPercent: -100,
          duration: 0.35,
          stagger: 0.02,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.killTweensOf(charMains);
        gsap.killTweensOf(charClones);

        gsap.to(charMains, {
          yPercent: 0,
          duration: 0.3,
          stagger: 0.016,
          ease: "power2.out",
        });

        gsap.to(charClones, {
          yPercent: 0,
          duration: 0.3,
          stagger: 0.016,
          ease: "power2.out",
        });
      });
    }
  });

  // Footer scroll entrance animation & Block Wipe Tagline Reveal
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

    // 1. Footer Card scale and rise
    footerTl.fromTo(
      footerCard,
      { scale: 0.95, opacity: 0.7, y: 35 },
      { scale: 1.0, opacity: 1.0, y: 0, duration: 0.8, ease: "power2.out" },
      0
    );

    // 1b. In-Footer Notch Logo
    if (footerNotchLogo) {
      footerTl.fromTo(
        footerNotchLogo,
        { opacity: 0, y: -15, scale: 0.88 },
        { opacity: 1, y: 0, scale: 1.0, duration: 0.6, ease: "power2.out" },
        0.15
      );
    }

    // 2. Character visual smooth entrance
    if (footerCharImg) {
      footerTl.fromTo(
        footerCharImg,
        { y: 40, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
        0.1
      );
    }

    // 3. Line 1 "WHERE BRILLIANCE" block reveal
    if (footerStrip1 && footerLine1) {
      footerTl.fromTo(
        footerStrip1,
        { left: "0%", width: "0%" },
        { left: "0%", width: "100%", duration: 0.36, ease: "power2.inOut" },
        0.28
      );
      footerTl.set(footerLine1, { opacity: 1 }, 0.62);
      footerTl.to(
        footerStrip1,
        { left: "100%", width: "0%", duration: 0.34, ease: "power2.inOut" },
        0.64
      );
    }

    // 4. Line 2 "MEETS INNOVATION" block reveal
    if (footerStrip2 && footerLine2) {
      footerTl.fromTo(
        footerStrip2,
        { left: "0%", width: "0%" },
        { left: "0%", width: "100%", duration: 0.36, ease: "power2.inOut" },
        0.44
      );
      footerTl.set(footerLine2, { opacity: 1 }, 0.78);
      footerTl.to(
        footerStrip2,
        { left: "100%", width: "0%", duration: 0.34, ease: "power2.inOut" },
        0.80
      );
    }
  }
}


