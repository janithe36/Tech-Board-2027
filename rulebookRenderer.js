// =============================================================
// TECH AAKRITI — RULEBOOK & GUIDELINES DYNAMIC RENDERER
// =============================================================

import {
  generalGuidelines,
  pointsTable,
  massParticipationFormulas,
  disputeHierarchy,
  malpracticesList,
  eventRulebooks,
  committeeSignOff,
} from "./guidelinesData.js";

let currentEventCategory = "all";
let activeSearchQuery = "";

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



export function initRulebookRenderer() {
  renderAllSections();
  bindInteractionEvents();
}
