# AIT TECHNICAL BOARD (TECH BOARD)
### Army Institute of Technology, Pune
> *"Engineering Ideas. Building Tomorrow."*

Official web platform for the **AIT Technical Board**, the apex student governing body overseeing engineering innovation, technical activities, and competitive platforms at Army Institute of Technology (AIT), Pune.

---

## 🏛️ Organizational Architecture & Hierarchy

```
AIT TECHNICAL BOARD (Apex Governing Body)
├── About Technical Board & Leadership
├── 🚀 SOLUTIONS 2K27 (Flagship Inter-College Technical Festival)
│   ├── Overview & Highlights
│   ├── 10+ National Competitions (Code Red, B-Plan, Jupyter, Current Clash, Solidworks, etc.)
│   ├── Live Search & Dynamic Category Filters
│   ├── Official Unstop Registration Portal
│   ├── Competition Schedules & Detailed Modals
│   └── Sponsorship & Partnerships
└── 🏆 TECH AAKRITI (Annual Intra-College Branch Championship)
    ├── Inter-Branch Tournament Overview (COMP, E&TC, IT, Mech/ARE)
    ├── 1,740 Student Engineers across 21 Disciplines
    ├── Comprehensive Interactive Rulebook
    │   ├── General Festival Protocol
    │   ├── Official Points Matrix & Formulas
    │   ├── 6-Stage Dispute Resolution Ladder
    │   ├── 21 Event Rulebook Accordions
    │   └── Code of Conduct & Committee Ratification
    └── Official Rulebook (.docx) Download
```

---

## 🌐 Routes & Page Structure

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | `index.html` | Official Technical Board Hub: Hero kinetic typography, 3D Zentry typography, Major Events showcase (Solutions vs Tech Aakriti), Domain Selector, Glimpses, and Aftermovie |
| `/solutions` | `solutions/index.html` | Dedicated SOLUTIONS 2K27 inter-college fest platform with searchable competition directory and Unstop links |
| `/tech-aakriti` | `tech-aakriti/index.html` | Dedicated Tech Aakriti championship portal with branch rosters and complete embedded 21-event rulebook |
| `/team` | `team/index.html` | Core Committee, Executive Leads, and Vertical Coordinators |
| `/sponsors` | `sponsors/index.html` | Official partners, sponsors marquee, and partnership inquiries |
| `/guidelines` | `guidelines/index.html` | Solutions 2K27 national guidelines rollout announcement |
| `/contact` | `contact/index.html` | Departmental contact directory, vertical coordinators, and campus venue map |

---

## ⚡ Tech Stack

- **Core**: Vanilla HTML5, CSS3, Modern ES6+ JavaScript
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/) with Multi-Page Application (MPA) configuration & clean URL middleware
- **3D Graphics & Visuals**: [Three.js](https://threejs.org/) (custom interactive kinetic canvas & streamlines)
- **Animations**: [GSAP](https://greensock.com/gsap/) & ScrollTrigger
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Hosting & Deployment**: [Vercel](https://vercel.com/) with native clean URLs and automated continuous deployment

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/janithe36/Tech-Board-2027.git
cd Tech-Board-2027

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 Official Rulebook Asset
The authoritative intra-college championship rulebook is available directly in [`public/TB_FINAL(C).docx`](./public/TB_FINAL(C).docx) and accessible via the `/tech-aakriti` interactive portal.

---

## © License & Copyright
© 2027 **AIT Technical Board**, Army Institute of Technology, Pune. All rights reserved.  
Developed by Jani with ❤️
