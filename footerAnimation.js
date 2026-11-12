import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initFooterAnimations() {
  const footerCard = document.getElementById("footer-card");
  const footerNotchLogo = document.getElementById("footer-notch-logo-container");
  const footerStrip1 = document.getElementById("footer-strip-1");
  const footerStrip2 = document.getElementById("footer-strip-2");
  const footerLine1 = document.getElementById("footer-tagline-line1");
  const footerLine2 = document.getElementById("footer-tagline-line2");
  const footerCharImg = document.querySelector(".footer-character-img");

  if (!footerCard) return;

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
    footerTl.set(footerLine1, { opacity: 1 }, 0.46);
    footerTl.to(
      footerStrip1,
      { left: "100%", width: "0%", duration: 0.36, ease: "power2.inOut" },
      0.46
    );
  }

  // 4. Line 2 "MEETS INNOVATION" block reveal
  if (footerStrip2 && footerLine2) {
    footerTl.fromTo(
      footerStrip2,
      { left: "0%", width: "0%" },
      { left: "0%", width: "100%", duration: 0.36, ease: "power2.inOut" },
      0.48
    );
    footerTl.set(footerLine2, { opacity: 1 }, 0.66);
    footerTl.to(
      footerStrip2,
      { left: "100%", width: "0%", duration: 0.36, ease: "power2.inOut" },
      0.66
    );
  }

  // 5. Letter-by-letter hover animation for all footer links
  const footerLinks = document.querySelectorAll(".footer-link-pill");
  footerLinks.forEach((link) => {
    const wrap = link.querySelector(".footer-link-wrap");
    const rawText = (link.getAttribute("data-text") || (wrap ? wrap.textContent : "")).trim().toUpperCase();

    if (wrap && !wrap.querySelector(".footer-char-box")) {
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
}
