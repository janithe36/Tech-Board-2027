// =============================================================
// SOLUTIONS 2K27 — OFFICIAL CENTRALIZED EVENT DATA
// Flagship National Inter-College Technical Festival of AIT Pune
// Organized by: AIT Technical Board, Army Institute of Technology, Pune
// Official Unstop Portal: https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997
// =============================================================

export const SOLUTIONS_METADATA = {
  festivalName: "SOLUTIONS 2K27",
  edition: "2027 Edition",
  type: "National Inter-College Technical Festival",
  organizer: "AIT Technical Board",
  institution: "Army Institute of Technology (AIT), Pune",
  tagline: "Engineering Ideas. Building Tomorrow.",
  unstopMainUrl:
    "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  venue: "Army Institute of Technology, Alandi Road, Dighi, Pune - 411015",
  mode: "Hybrid (Online Prelims & Offline Grand Finale)",
  status: "Registrations Live on Unstop",
};

export const SOLUTIONS_CATEGORIES = [
  { id: "all", label: "All Competitions", count: 10 },
  { id: "coding-ai", label: "Coding & AI", count: 4 },
  { id: "core-engineering", label: "Core Engineering & CAD", count: 2 },
  { id: "web-design", label: "Web & Design", count: 1 },
  { id: "management-quiz", label: "Strategy & Aptitude", count: 2 },
  { id: "esports-gaming", label: "Esports & Gaming", count: 1 },
];

export const SOLUTIONS_EVENTS = [
  {
    id: "project-jupyter",
    slug: "project-jupyter",
    title: "Project Jupyter",
    category: "coding-ai",
    categoryName: "Artificial Intelligence & ML",
    tag: "Flagship Hackathon",
    teamSize: "1 - 4 Members",
    eligibility: "Open to all engineering college students across India",
    shortDesc:
      "A national-level AI/ML hackathon and project presentation challenge where teams develop innovative data-driven models and intelligent software solutions.",
    overview:
      "Project Jupyter invites the brightest algorithmic minds and machine learning enthusiasts to build real-world solutions. Teams identify domain bottlenecks, preprocess datasets, engineer feature pipelines, and present trained predictive models before an esteemed panel of industry judges.",
    format: "Round 1: Online Abstract & Code Submission on Unstop. Round 2: Offline Final Presentation & Live Evaluation at AIT Pune campus.",
    rules: [
      "Inter-college team formation is permitted.",
      "Projects must be original; pre-built commercial solutions or plagiarized models lead to immediate disqualification.",
      "Submissions must include repository link, documented Jupyter notebooks, and a pitch deck.",
      "Evaluation is based on innovation, architectural feasibility, technical depth, and real-world applicability.",
    ],
    schedule: "Registration & Abstract Submission live on Unstop. Offline Finale schedule announced on Unstop.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "crackhunt",
    slug: "crackhunt",
    title: "Crackhunt",
    category: "coding-ai",
    categoryName: "Cybersecurity & Cryptography",
    tag: "Ethical Hacking",
    teamSize: "1 - 2 Members",
    eligibility: "Open to all enrolled college students",
    shortDesc:
      "An intense Capture The Flag (CTF) and ethical hacking competition testing reverse engineering, forensic analysis, binary exploitation, and cryptography.",
    overview:
      "Crackhunt puts participants into simulated cybersecurity warfare. Solve cryptographic puzzles, analyze network packet captures, exploit vulnerable binaries, and decrypt hidden flags in a race against the clock.",
    format: "Online Jeopardy-style CTF challenge hosted on the dedicated competition portal with live scoreboard.",
    rules: [
      "Any attack on the platform infrastructure or scoring engine results in immediate blacklisting.",
      "Sharing flags or colluding with rival teams is strictly prohibited.",
      "First blood bonus points awarded for being the first to crack hard-tier challenges.",
      "Decision of the Technical Board Cyber Council is final.",
    ],
    schedule: "Detailed challenge timeline and portal credentials will be dispatched to registered participants via Unstop.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "code-red",
    slug: "code-red",
    title: "Code Red",
    category: "coding-ai",
    categoryName: "Competitive Programming",
    tag: "Algorithm Battle",
    teamSize: "Individual / Team of 2",
    eligibility: "Undergraduate & postgraduate engineering students",
    shortDesc:
      "A high-octane competitive programming contest testing data structures, algorithms, mathematical problem solving, and optimal time complexity.",
    overview:
      "Designed in ICPC format, Code Red challenges participants to crack complex algorithmic problems across graphs, dynamic programming, combinatorics, and geometry under strict execution limits.",
    format: "Round 1: Online Qualifier on online judge. Round 2: Offline On-Campus Coding Grand Finale.",
    rules: [
      "Allowed languages: C++, Java, Python.",
      "Standard penalties apply for incorrect submissions.",
      "Plagiarism checks will be conducted post-contest with zero tolerance.",
    ],
    schedule: "Timings and contest links published on Unstop prior to the event round.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "css-battle",
    slug: "css-battle",
    title: "CSS Battle",
    category: "web-design",
    categoryName: "Frontend Engineering",
    tag: "Visual Precision",
    teamSize: "Individual",
    eligibility: "Open to all web developers and designers",
    shortDesc:
      "Recreate complex visual targets using pure HTML and CSS with pixel-perfect accuracy and minimal code size within strict time limits.",
    overview:
      "Showcase your mastery of modern layout engines, Flexbox, CSS Grid, custom selectors, and creative shorthand tricks. Match the reference target pixel-for-pixel to achieve a 100% score.",
    format: "Timed multiplayer rounds on an interactive code editor with real-time diff evaluation.",
    rules: [
      "External stylesheets, frameworks (Bootstrap/Tailwind), and JavaScript are strictly prohibited.",
      "Scoring formula considers both visual match percentage and code golf character count.",
    ],
    schedule: "Session slots will be allotted upon registration on Unstop.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "b-plan",
    slug: "b-plan",
    title: "B Plan",
    category: "management-quiz",
    categoryName: "Business & Entrepreneurship",
    tag: "Startup Pitch",
    teamSize: "1 - 4 Members",
    eligibility: "College students with innovative business or product ideas",
    shortDesc:
      "A premier national business pitching arena where student entrepreneurs present disruptive startups, financial models, and go-to-market strategies.",
    overview:
      "B Plan bridges the gap between engineering innovation and commercial viable enterprises. Pitch your tech startup before angel investors, venture capitalists, and industry mentors.",
    format: "Round 1: Executive Summary & Pitch Deck screening. Round 2: Live Pitch & 10-minute Q&A before jury.",
    rules: [
      "Decks must cover problem statement, TAM/SAM/SOM, revenue model, competitor matrix, and financial projections.",
      "Presentations must adhere strictly to the 8-minute pitch limit followed by Q&A.",
    ],
    schedule: "Deck submission deadline announced on the official Unstop page.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "current-clash",
    slug: "current-clash",
    title: "Current Clash",
    category: "core-engineering",
    categoryName: "Electronics & Hardware",
    tag: "Circuit Challenge",
    teamSize: "1 - 3 Members",
    eligibility: "Electronics, Electrical, and allied engineering branches",
    shortDesc:
      "Test your circuit design, breadboard debugging, microcontrollers, and embedded logic skills in an intensive hardware challenge.",
    overview:
      "From analog filter design to digital microcontroller interfacing, Current Clash challenges engineers to diagnose faulty circuits, simulate behavior, and fabricate working hardware prototypes.",
    format: "Round 1: Theoretical Aptitude & Circuit Simulation. Round 2: On-Campus Hardware Prototyping & Debugging.",
    rules: [
      "All standard components and instruments (DSO, Multimeter, Power Supply) provided on campus.",
      "Evaluation based on circuit functionality, component efficiency, and debugging speed.",
    ],
    schedule: "Hardware lab timings will be shared with shortlisted finalists on Unstop.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "solidworks",
    slug: "solidworks",
    title: "Solidworks CAD Arena",
    category: "core-engineering",
    categoryName: "Mechanical & CAD Design",
    tag: "3D Modeling",
    teamSize: "Individual / Team of 2",
    eligibility: "Mechanical, ARE, Civil, and Design Engineering students",
    shortDesc:
      "A timed 3D CAD modeling and parametric assembly showdown challenging participants to design precision industrial components from engineering blueprints.",
    overview:
      "Engineers are provided orthographic projections and geometric dimensioning tolerances. Create parametric solid models, mechanical assemblies, and production drawings with zero tolerance errors.",
    format: "Timed offline CAD modeling round conducted on certified computer workstations.",
    rules: [
      "Standard CAD software (Solidworks, Fusion 360, AutoCAD) supported.",
      "Model accuracy, parametric constraint tree hygiene, and design speed determine final rank.",
    ],
    schedule: "Lab allocation and software slots will be communicated via Unstop.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "drive-link",
    slug: "drive-link",
    title: "Drive Link",
    category: "core-engineering",
    categoryName: "Technical Innovation",
    tag: "Engineering Design",
    teamSize: "1 - 3 Members",
    eligibility: "Open to all engineering streams",
    shortDesc:
      "A multidisciplinary engineering challenge testing spatial mechanisms, gear train kinematics, and applied mechanical linkage systems.",
    overview:
      "Participants analyze real-world mechanical transmission problems, calculate torque and velocity ratios, and engineer linkage mechanisms satisfying strict boundary conditions.",
    format: "Stage 1: Linkage design problem statement. Stage 2: Physical prototype simulation and stress testing.",
    rules: [
      "Detailed problem statements and boundary constraints supplied at the start of the round.",
      "Judged on mechanical advantage, safety factor, and structural elegance.",
    ],
    schedule: "Check event slot details on the SOLUTIONS Unstop festival portal.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "arcade",
    slug: "arcade",
    title: "Arcade Gaming Tournament",
    category: "esports-gaming",
    categoryName: "Esports & Gaming",
    tag: "Competitive Esports",
    teamSize: "Individual / Squad",
    eligibility: "Open to all college gamers",
    shortDesc:
      "National inter-college gaming showdown testing tactical reflexes, strategic team play, and esports dominance across competitive titles.",
    overview:
      "Arcade brings the thrilling energy of collegiate esports to SOLUTIONS 2K27. Compete across knockout brackets with live commentary and high-refresh tournament displays.",
    format: "Online knockout qualifiers leading to LAN finals at AIT Pune campus.",
    rules: [
      "Third-party cheats, macros, or exploit scripts will lead to instant permanent ban.",
      "Tournament admin decisions regarding disconnects and disputes are final.",
    ],
    schedule: "Tournament brackets and match timings posted on Unstop.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
  {
    id: "placement-apti-quiz",
    slug: "placement-apti-quiz",
    title: "Placement Aptitude & Tech Quiz",
    category: "management-quiz",
    categoryName: "Aptitude & Knowledge",
    tag: "Mind Challenge",
    teamSize: "Individual",
    eligibility: "Open to all undergraduate students",
    shortDesc:
      "A rapid-fire aptitude, logical reasoning, data interpretation, and core computer science quiz simulating top-tier corporate placement assessments.",
    overview:
      "Benchmark your placement readiness! Solve quantitative problems, data interpretation cases, verbal logic puzzles, and core CS fundamentals against peers from across India.",
    format: "Timed computer-based test on Unstop with negative marking for accuracy.",
    rules: [
      "Strict proctoring protocols apply during the online test window.",
      "Ties resolved based on completion speed and accuracy in high-difficulty sections.",
    ],
    schedule: "Test window will be active on Unstop as per published schedule.",
    unstopUrl:
      "https://unstop.com/college-fests/solutions-2k27-army-institute-of-technology-pune-542997?lb=WSgfyqIG&utm_medium=Share&utm_source=WhatsApp",
  },
];

