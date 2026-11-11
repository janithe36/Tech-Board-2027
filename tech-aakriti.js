import { initRulebookRenderer } from "./rulebookRenderer.js";
// =============================================================
// TECH AAKRITI — INTRA-COLLEGE EVENT LOGIC
// AIT Technical Board • Army Institute of Technology, Pune
// =============================================================

import "./cursor.js";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vertexShader, bgFragmentShader } from "./shaders.js";

gsap.registerPlugin(ScrollTrigger);

let bgRenderer, bgScene, bgCamera;

function init() {
  initBackgroundCanvas();
  initPreloader();
  initFullscreenMenu();
  initRulebookRenderer();
  initFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// 1. THREE.JS ABSTRACT CRIMSON STREAMLINES CANVAS
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
  function animate() {
    requestAnimationFrame(animate);
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

// 2. PRELOADER SCREEN
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

// 3. FULLSCREEN MENU
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

// 4. UNIFIED SITE FOOTER (HOME-PAGE MATCHING)
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

