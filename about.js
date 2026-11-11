// =============================================================
// AIT TECHNICAL BOARD — ABOUT US LOGIC
// =============================================================

import "./cursor.js";
import * as THREE from "three";
import gsap from "gsap";
import { vertexShader, bgFragmentShader } from "./shaders.js";
import { initFooterAnimations } from "./footerAnimation.js";

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const spiderFill = document.getElementById("spider-fill");
  const counter = document.getElementById("preloader-counter");

  if (!preloader) return;

  const forceDismiss = () => {
    if (preloader) {
      preloader.style.display = "none";
      preloader.style.pointerEvents = "none";
    }
  };

  const failsafe = setTimeout(forceDismiss, 2000);

  const loaderProxy = { progress: 0 };
  gsap.to(loaderProxy, {
    progress: 100,
    duration: 1.2,
    ease: "power2.inOut",
    onUpdate: () => {
      const p = Math.floor(loaderProxy.progress);
      if (counter) counter.textContent = `${p}%`;
      if (spiderFill) spiderFill.style.height = `${p}%`;
    },
    onComplete: () => {
      clearTimeout(failsafe);
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
        onComplete: forceDismiss,
      });
    },
  });
}

function initBackgroundCanvas() {
  const bgCanvas = document.getElementById("bg-canvas");
  if (!bgCanvas) return;

  const isMobile = window.innerWidth <= 768;
  const targetDpr = isMobile ? Math.min(window.devicePixelRatio, 1.0) : Math.min(window.devicePixelRatio, 1.25);

  const bgRenderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    antialias: !isMobile,
    powerPreference: "high-performance",
  });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(targetDpr);

  const bgScene = new THREE.Scene();
  const bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const mouse = new THREE.Vector2(0.5, 0.5);
  const targetMouse = new THREE.Vector2(0.5, 0.5);

  const bgMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uTime: { value: 0 },
      uMouse: { value: mouse },
      uInvertProgress: { value: 0 },
    },
    vertexShader,
    fragmentShader: bgFragmentShader,
  });

  const quadGeom = new THREE.PlaneGeometry(2, 2);
  const bgMesh = new THREE.Mesh(quadGeom, bgMaterial);
  bgScene.add(bgMesh);

  window.addEventListener("pointermove", (e) => {
    targetMouse.x = e.clientX / window.innerWidth;
    targetMouse.y = 1.0 - e.clientY / window.innerHeight;
  });

  window.addEventListener("resize", () => {
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    bgMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  function animateBg() {
    requestAnimationFrame(animateBg);
    const elapsedTime = clock.getElapsedTime();
    mouse.x += (targetMouse.x - mouse.x) * 0.08;
    mouse.y += (targetMouse.y - mouse.y) * 0.08;

    bgMaterial.uniforms.uTime.value = elapsedTime;
    bgMaterial.uniforms.uMouse.value.copy(mouse);
    bgRenderer.render(bgScene, bgCamera);
  }
  animateBg();
}

function initFullscreenMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("fullscreen-menu");
  if (!menuBtn || !menu) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    menu.classList.toggle("is-open");
    const isOpen = menu.classList.contains("is-open");
    menu.setAttribute("aria-hidden", !isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
}

function init() {
  try { initPreloader(); } catch (e) { console.warn(e); }
  try { initBackgroundCanvas(); } catch (e) { console.warn(e); }
  try { initFullscreenMenu(); } catch (e) { console.warn(e); }
  try { initFooterAnimations(); } catch (e) { console.warn(e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
