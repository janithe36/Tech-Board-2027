// =============================================================
// TECH AAKRITI 2027 — OFFICIAL GUIDELINES & RULEBOOK DATA
// Extracted from authoritative Technical Board Document: TB_FINAL(C).docx
// Army Institute of Technology (AIT), Pune
// =============================================================

export const generalGuidelines = [
  {
    icon: "calendar",
    title: "Inauguration Ceremony",
    desc: "The inauguration will be held on 18th March 2026 at 4:00 PM at the Central Foyer. All students must be present at the inauguration.",
  },
  {
    icon: "file-text",
    title: "Participant Nomination Deadline",
    desc: "List of participants for Code Red (FE-SE / TE-BE), SQL Mania, Robotics events, Rubix Challenge, Sci-Fi Writing, and all Gaming events must be submitted the day before (by 11:59 PM) as per schedule by Branch Heads to: technicalboard@aitpune.edu.in. Late submission incurs a 25-point penalty.",
  },
  {
    icon: "user-check",
    title: "First-Year (FE) Participation Caps",
    desc: "To ensure fair representation: Core Events — 2 maximum; Coding Events — 2 maximum; Gaming Events — 1 maximum per FE participant.",
  },
  {
    icon: "id-card",
    title: "Mandatory College ID Card",
    desc: "Carrying official college ID cards is compulsory. Entry into any competition arena or exam room will not be permitted without producing a valid ID card matching photo and name.",
  },
  {
    icon: "clock",
    title: "Punctuality & Attendance",
    desc: "Participants must report to the venue 10 minutes prior to scheduled time (15 minutes prior for Mass Events). Any participant failing to show up on or before the specified time will be disqualified, with 15 points deducted from the branch if deemed necessary by the Event Head.",
  },
  {
    icon: "users",
    title: "Team Integrity Policy",
    desc: "In team events, all registered members must be present. Single participation is strictly disallowed in team events. Failure to field a full roster leads to disqualification and a 15-point penalty.",
  },
  {
    icon: "laptop",
    title: "Bring Your Own Device (BYOD)",
    desc: "For NAND-IT, SolidWorks, AutoCAD, Coding, Valorant, BGMI, and Free Fire, teams must bring their own laptops/phones with required software pre-installed in the latest version. Tech Board will not provide software installations.",
  },
  {
    icon: "phone-off",
    title: "Mobile Phone Ban During Events",
    desc: "No mobile phones are permitted during competition rounds. Phones must be deposited in designated areas. Any participant caught using unauthorized devices will be disqualified under malpractice regulations.",
  },
  {
    icon: "shield-alert",
    title: "Misbehavior & Altercation Penalties",
    desc: "Misbehavior towards organizers results in a 25-point deduction. Any physical altercation with staff, participants, or spectators attracts a fine of INR 15,000, immediate disqualification, and -50 points awarded to the participating branch.",
  },
  {
    icon: "scale",
    title: "Issue Resolvement Hierarchy Compliance",
    desc: "All disputes must strictly follow the 6-tier AIT Technical Board Resolvement Hierarchy. Any hierarchical bypass by any student will result in an immediate -50 points penalty for their branch.",
  },
];

export const pointsTable = [
  { sNo: 1, event: "Code Red (TE - BE)", category: "Coding", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 2, event: "Code Red (SE - FE)", category: "Coding", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 3, event: "DSA Event (TE - BE)", category: "Coding", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 4, event: "DSA Event (SE - FE)", category: "Coding", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 5, event: "SQL Mania", category: "Coding", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 6, event: "NAND-IT (TE - BE)", category: "Core I", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 7, event: "NAND-IT (SE - FE)", category: "Core I", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 8, event: "AutoCAD", category: "Core II", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 9, event: "SolidWorks", category: "Core II", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 10, event: "TechMatrix", category: "Mass Event", points: "50 + 40 + 30 (+30)", note: "+30 pts to branch with max participation %" },
  { sNo: 11, event: "Placement Apti", category: "Mass Event", points: "50 + 40 + 30 (+30)", note: "+30 pts to branch with max participation %" },
  { sNo: 12, event: "Movie Making", category: "Major Event", points: "125 + 100 + 75 + 50", note: "Flagship 4-tier podium points" },
  { sNo: 13, event: "Ad Making", category: "Major Event", points: "125 + 100 + 75 + 50", note: "Flagship 4-tier podium points" },
  { sNo: 14, event: "Contraption", category: "Major Event", points: "125 + 100 + 75 + 50", note: "Flagship 4-tier podium points" },
  { sNo: 15, event: "Maze Runner", category: "Major Event", points: "125 + 100 + 75 + 50", note: "Flagship 4-tier podium points" },
  { sNo: 16, event: "Robo Soccer", category: "Major Event", points: "125 + 100 + 75 + 50", note: "Flagship 4-tier podium points" },
  { sNo: 17, event: "Rubik's Challenge", category: "Open Event", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 18, event: "Sci-Fi Writing", category: "Open Event", points: "50 + 40 + 30", note: "1st: 50, 2nd: 40, 3rd: 30" },
  { sNo: 19, event: "Valorant", category: "Gaming (Esports)", points: "50 + 40 + 30 + 20", note: "1st: 50, 2nd: 40, 3rd: 30, 4th: 20" },
  { sNo: 20, event: "BGMI", category: "Gaming (Esports)", points: "50 + 40 + 30 + 20", note: "1st: 50, 2nd: 40, 3rd: 30, 4th: 20" },
  { sNo: 21, event: "Free Fire", category: "Gaming (Esports)", points: "50 + 40 + 30 + 20", note: "1st: 50, 2nd: 40, 3rd: 30, 4th: 20" },
];

export const massParticipationFormulas = {
  desc: "For Mass Participation events (TechMatrix & Placement Apti), an additional +30 points will be awarded to the branch with the highest percentage attendance.",
  formula: "Maximum Participation % = (Number of Branch Participants Present) / (Branch Total Strength)",
  denominators: [
    { branch: "Computer Engineering (COMP)", strength: 480 },
    { branch: "Electronics & Telecommunication (E&TC)", strength: 480 },
    { branch: "Information Technology (IT)", strength: 420 },
    { branch: "Mechanical + ARE", strength: 360 },
  ],
};

export const disputeHierarchy = [
  { level: 1, role: "Technical Aakriti Event Heads", scope: "First point of contact for round-specific questions, venue logistics, and rule clarification." },
  { level: 2, role: "Technical Secretaries (Sneha & Shashank Tiwari)", scope: "Review of event proceedings, scoring discrepancy reports, and official branch appeals." },
  { level: 3, role: "Techboard Dispute Committee", scope: "Independent committee for unresolved inter-branch disputes, tie-breakers, and malpractice investigations." },
  { level: 4, role: "Faculty In-Charge (AIT Technical Board)", scope: "Dr. P.B. Karandikar, Dr. Ashwini Sapkal, Dr. R.B. Gurav, Prof. P.R. Sonwane, Dr. Ganesh Munde." },
  { level: 5, role: "Joint Director, AIT Pune", scope: "Institutional review of high-level disciplinary matters and policy enforcement." },
  { level: 6, role: "Director, AIT Pune", scope: "Apex authority. Final, supreme, and binding judgment on all matters concerning Tech Aakriti 2027." },
];

export const malpracticesList = [
  { title: "Impersonation", penalty: "Disqualification + -25 pts", desc: "Participating under someone else's identity to gain unfair advantage." },
  { title: "Unauthorized Materials", penalty: "Disqualification + -25 pts", desc: "Carrying notes, cheat sheets, or unauthorized electronic tools into contest arenas." },
  { title: "External Assistance", penalty: "Disqualification + -25 pts", desc: "Seeking answers or advice from mentors, seniors, or external sources during live contests." },
  { title: "Collusion & Teaming", penalty: "Disqualification + -25 pts", desc: "Pre-arranging results, soft play in esports, or sharing code between competing squads." },
  { title: "Pre-Prepared Material", penalty: "Disqualification + -50 pts", desc: "Submitting pre-written essays, copied video footage from YouTube, or pre-built code templates." },
  { title: "Exploitation & Hacking", penalty: "Instant Disqualification + Fine", desc: "Using third-party scripts, exploits, memory injection, or tampering with contest systems." },
  { title: "Physical Altercation", penalty: "INR 15,000 Fine + -50 pts", desc: "Fighting, intimidation, manhandling organizers, participants, or spectators." },
  { title: "Hierarchy Bypass", penalty: "-50 pts immediately", desc: "Attempting to skip the 6-level issue resolution ladder to escalate directly to senior authorities." },
];

export const eventRulebooks = [
  // 1. CODING
  {
    id: "code-red",
    name: "Code Red",
    category: "Coding",
    tagline: "Competitive Programming Drill: Junior & Senior Brackets",
    teamSize: "Individual (8 nominees per branch: 4 FE-SE, 4 TE-BE)",
    eligibility: "Open to FE, SE, TE, BE across all branches",
    format: "Single 2-Hour intensive coding contest. No separate prelims; nominated participants compete directly on computers.",
    evaluation: "Problems solved, execution time, and algorithmic test case coverage. Highest scores decide 1st, 2nd, 3rd.",
    specialRules: [
      "Branch Heads must submit the 8 nominees before the given deadline.",
      "Strict individual participation; collaboration or tab switching leads to immediate disqualification.",
      "Points awarded separately for Junior (SE-FE) and Senior (TE-BE) categories.",
    ],
  },
  {
    id: "dsa-event",
    name: "DSA Event",
    category: "Coding",
    tagline: "Data Structures & Algorithms Theory to Implementation",
    teamSize: "Individual (Open to all branches)",
    eligibility: "Separate brackets: FE-SE & TE-BE",
    format: "Round 1: 30-min paper-based MCQ test (20 fundamental DSA questions). Top 12 FE-SE & Top 12 TE-BE advance to Round 2. Round 2: 2-hour HackerRank-style live contest.",
    evaluation: "Round 2 rank is determined by number of test cases passed and time taken.",
    specialRules: [
      "Plagiarism checks are automatically executed post-contest on all submitted code.",
      "Any violation of competitive programming guidelines results in immediate disqualification.",
    ],
  },
  {
    id: "sql-mania",
    name: "SQL Mania",
    category: "Coding",
    tagline: "Relational Database Engineering & Query Optimization",
    teamSize: "Team of 2 members (6 teams per branch, minimum 2 Pure FE teams)",
    eligibility: "All branches; mandatory FE representation",
    format: "Single 2-hour live challenge solving complex SQL queries, relational joins, subqueries, and database constraints.",
    evaluation: "Query correctness, execution efficiency, and completion time.",
    specialRules: [
      "Each branch must nominate exactly 6 teams (minimum 2 pure FE teams).",
      "No external documentation, internet lookup, or stored query scripts permitted.",
    ],
  },

  // 2. CORE ENGINEERING
  {
    id: "nand-it",
    name: "NAND-IT",
    category: "Core Events",
    tagline: "Boolean Logic, Circuit Analysis & Proteus Simulation",
    teamSize: "Team of 2 members (FE-SE: 8 teams per branch, min 3 pure FE; TE-BE: 3 teams per branch)",
    eligibility: "Junior Level: FE-SE | Senior Level: TE-BE",
    format: "Round 1: 30-min MCQ test on Digital Electronics & Boolean logic. Round 2: Top 10 FE-SE and Top 6 TE-BE teams solve 3-5 real-world digital circuit challenges on Proteus (90 mins).",
    evaluation: "Circuit correctness, simulation wave accuracy, and completion time for tie-breaks.",
    specialRules: [
      "Finalists must bring laptops with pre-installed Proteus software in working condition.",
      "Technical Board will not install software on the day of the event.",
    ],
  },
  {
    id: "autocad",
    name: "AutoCAD Challenge",
    category: "Core Events",
    tagline: "2D Drafting, Orthographic & Isometric Projections",
    teamSize: "Team of 2 members (Min 8 teams per branch, min 3 pure FE teams)",
    eligibility: "All branches",
    format: "Round 1: 30-min MCQ test on 2D/3D CAD functionalities. Top 16 teams qualify. Round 2: 60-min live drafting challenge focusing on orthographic projections, isometric views, and 3D modeling.",
    evaluation: "Dimensional accuracy, layer management, drafting neatness, and submission time.",
    specialRules: [
      "Finalists must bring laptops with pre-installed AutoCAD software.",
      "Judging decisions are final and non-questionable.",
    ],
  },
  {
    id: "solidworks",
    name: "SolidWorks Assembly",
    category: "Core Events",
    tagline: "Parametric 3D Modeling, Mates & Mechanical Assemblies",
    teamSize: "Team of 2 members (Min 8 teams per branch, min 3 pure FE teams)",
    eligibility: "All branches",
    format: "Round 1: 30-min MCQ test on CAD tools & mechanical features. Top 16 teams qualify. Round 2: 60-min live 3D modeling and mechanical assembly challenge.",
    evaluation: "Feature tree cleanliness, constraint accuracy, mate specifications, and completion time.",
    specialRules: [
      "Teams must bring their own laptops with pre-installed SolidWorks software.",
      "Pattern updates will be communicated at least 24 hours prior to the event.",
    ],
  },

  // 3. MASS EVENTS
  {
    id: "techmatrix",
    name: "TechMatrix",
    category: "Mass Events",
    tagline: "Sudoku Mastery & Technical Crossword Warfare",
    teamSize: "Team of 2 members (Min 15 teams per branch, min 3 pure FE teams)",
    eligibility: "Open to all students across all years",
    format: "Round 1: 45-min challenge combining standard numerical Sudoku with technical engineering crosswords. Round 2: Top 20 teams compete in advanced-difficulty puzzle rounds.",
    evaluation: "Sudoku is evaluated ONLY if completely filled. Crosswords are evaluated per correct answer. +30 bonus points to branch with highest % attendance.",
    specialRules: [
      "Participants must bring their own pens. Tech Board will not distribute stationery.",
      "Max participation formula: Total Branch Participants / Branch Total Strength.",
    ],
  },
  {
    id: "placement-apti",
    name: "Placement Apti",
    category: "Mass Events",
    tagline: "Corporate Aptitude, Technical Screening & 1-on-1 HR Interview",
    teamSize: "Individual (Min 20 participants per branch, min 5 FE participants)",
    eligibility: "Open to all students across all years",
    format: "Round 1: 30-min MCQ aptitude test (Quantitative, Logical, Verbal). Top 30 advance. Round 2: Advanced aptitude screening. Top 10 advance. Round 3: One-on-one professional HR & candidate behavioral pattern interview.",
    evaluation: "Final podium is decided strictly on candidate performance in Round 3 HR Interview. +30 bonus points to branch with highest % attendance.",
    specialRules: [
      "Interview mimics Tier-1 tech company recruitment rounds.",
      "Professional dress code and decorum required during Round 3.",
    ],
  },

  // 4. MAJOR EVENTS
  {
    id: "movie-making",
    name: "Movie Making",
    category: "Major Events",
    tagline: "Original Cinematic Short Film Showcase (Raman Theatre)",
    teamSize: "1 Team per Branch (Min 10 on-screen actors, min 20% FE actors, 1 faculty required)",
    eligibility: "One official entry per branch",
    format: "Original short film screened at Raman Theatre. Duration: exactly 7 + 7 (14 minutes). Export format: 1080p @ 30fps minimum. Theme & abstract submitted by 21st March 2026, 11:59 PM.",
    evaluation: "Creativity & innovation, theme representation, audience engagement, adherence to guidelines, and technical execution (cinematography, editing, sound).",
    specialRules: [
      "Branch name must NOT be mentioned anywhere in the movie (instant disqualification if violated).",
      "Negative cheering or branch cheering in Raman Theatre will attract a -10 points penalty.",
      "Must include at least 1 faculty member (teaching or non-teaching staff); -20 points if missing.",
      "Duration penalty: -1 point per second for exceeding or lagging beyond 7+7 minutes.",
    ],
  },
  {
    id: "ad-making",
    name: "Ad Making",
    category: "Major Events",
    tagline: "Commercial Product Marketing, Narrative & Storytelling",
    teamSize: "1 Team per Branch (Min 2 on-screen members)",
    eligibility: "One official entry per branch",
    format: "Create an impactful advertisement for a real or fictional product. Duration: 1 + 1 (2 minutes total). Export: at least 720p @ 30fps.",
    evaluation: "Concept originality, product highlighting (USPs), audience engagement, and production quality.",
    specialRules: [
      "Branch name must NOT be mentioned anywhere in the ad.",
      "Duration penalty: -1 point per second for exceeding or lagging beyond 2 minutes.",
      "Direct copying of online ads or taglines results in a 30-point deduction.",
      "Negative or branch cheering during screening in Raman Theatre attracts a -10 points penalty.",
    ],
  },
  {
    id: "contraption",
    name: "Contraption",
    category: "Major Events",
    tagline: "7x7 ft Rube Goldberg Mechanical Energy Chain Reaction",
    teamSize: "1 Team per Branch (Exactly 8 members: min 2 FE, min 1 Girl member compulsory)",
    eligibility: "One official team per branch",
    format: "2-hour on-site setup within a 7x7 sq. ft arena. Teams must trigger a continuous energy conversion chain that drops 5 marbles into a designated 6cm x 7cm cup via freefall.",
    evaluation: "Completion of problem statement (20 pts), energy conversions (2 pts per conversion + 5 pts per new variety), abstract neatness (5 pts), freefall height bonuses (+5 pts per 10cm above 50cm). Hand touch penalty: -5 pts each.",
    specialRules: [
      "Abstract stating all energy conversions and a working video must be submitted 2 hours before setup.",
      "Minimum freefall height is 50 cm without obstruction.",
      "Marbles must enter with at least 2 seconds time difference between each.",
    ],
  },
  {
    id: "maze-runner",
    name: "Maze Runner",
    category: "Major Events",
    tagline: "Autonomous / Manual Robotics Obstacle Navigation",
    teamSize: "Robotics Squad (Official branch nominations)",
    eligibility: "Open to branch robotics teams",
    format: "Timed run navigating a complex physical maze arena loaded with switchbacks, blind corners, and elevation changes.",
    evaluation: "Time to complete course minus penalty points for wall collisions and track breaches.",
    specialRules: [
      "Bot dimensions and weight must pass inspection before entering arena.",
      "Arena specifications released 24 hours prior to the event.",
    ],
  },
  {
    id: "robo-soccer",
    name: "Robo Soccer",
    category: "Major Events",
    tagline: "Robotic Ball Control, Striking & Goal Defense Arena",
    teamSize: "Robotics Squad (Official branch nominations)",
    eligibility: "Open to branch robotics teams",
    format: "Head-to-head robotic soccer match on a closed pitch with designated goal posts and ball handling rules.",
    evaluation: "Match points (goals scored, possession control, defense stops).",
    specialRules: [
      "Bots must not damage arena walls or opponent chassis with sharp/unauthorized attachments.",
      "Frequency interference checks required before each match.",
    ],
  },

  // 5. OPEN EVENTS
  {
    id: "rubix-cube",
    name: "Rubik's Challenge",
    category: "Open Events",
    tagline: "Speedcubing Precision, Muscle Memory & Inspection",
    teamSize: "Team of 5 members per Branch (Min 1 FE participant compulsory)",
    eligibility: "Open to all students",
    format: "Single round. 10-second inspection time followed by 3-second countdown. Every student gets 3 trials; best timing is considered. Winner decided by branch team average.",
    evaluation: "Average of the best timings of all 5 team members.",
    specialRules: [
      "Participants must bring their own standard 3x3 cube and download the 'Twisty Timer' app.",
      "Exceeding 10s inspection warning or taking more than 6 minutes nullifies the trial.",
    ],
  },
  {
    id: "sci-fi-writing",
    name: "Sci-Fi Writing",
    category: "Open Events",
    tagline: "Speculative Fiction, Creative Thinking & World Building",
    teamSize: "5 students per Branch (Min 2 FE participants compulsory)",
    eligibility: "Open to all students",
    format: "Single 45-minute on-the-spot creative writing contest. Topic provided at venue. Students must craft an original sci-fi short story.",
    evaluation: "Creativity, scientific plausibility/imagination, narrative structure, and thematic depth.",
    specialRules: [
      "Paper provided by Tech Board; participants must bring their own stationery.",
      "Topic announced on the spot; no prior drafts or internet usage permitted.",
    ],
  },

  // 6. GAMING EVENTS (ESPORTS)
  {
    id: "valorant",
    name: "Valorant Tournament",
    category: "Gaming (Esports)",
    tagline: "Tactical 5v5 First-Person Shooter Arena",
    teamSize: "2 Teams per Branch (5 active + 2 reserves; min 2 FE in playing 5 across the teams)",
    eligibility: "Open to branch squads; Tech Board members eligible except secretaries/event heads",
    format: "Round Robin league: Best-of-One (Bo1). Semis & Finals: Best-of-Three (Bo3). Map Pool matches current competitive pool. Toss decides map pick or ban.",
    evaluation: "Match wins (5 pts per win, 0 pts loss). Tie-breakers decided by Round Delta (Rounds won - Rounds lost).",
    specialRules: [
      "Each team gets two 60-second tactical timeouts per game.",
      "Strict competitive integrity: zero tolerance for smurfing, account sharing, or 3rd-party software.",
      "Participants must use their own network; no pauses/remakes for high ping or disconnects unless server fails.",
    ],
  },
  {
    id: "bgmi",
    name: "BGMI Championship",
    category: "Gaming (Esports)",
    tagline: "Battle Royale Squad Survival & Kill Multipliers",
    teamSize: "4 Teams per Branch (4 players each, min 2 teams with FE)",
    eligibility: "Min Level 15 account, Tier Gold V or above",
    format: "9 total matches across Erangel (5 matches), Miramar (2 matches), and Rondo (2 matches). Aim assist disabled.",
    evaluation: "Placement points (1st: 10, 2nd: 6, 3rd: 5, 4th: 4, 5th: 3, 6th: 2, 7-8th: 1) + 1 point per kill. Branch tally is sum of all 4 teams.",
    specialRules: [
      "No account switching during tournament. Save account 6-hour limit.",
      "Teaming or hacking results in immediate disqualification of the ENTIRE branch.",
      "Maps (Erangel, Miramar, Rondo) must be downloaded prior to match day.",
    ],
  },
  {
    id: "free-fire",
    name: "Free Fire Clash",
    category: "Gaming (Esports)",
    tagline: "Fast-Paced Battle Royale Squad Warfare",
    teamSize: "3 Teams per Branch (4 players each, min 2 teams with FE)",
    eligibility: "Min Level 15 account, Tier Gold V or above",
    format: "8 total matches across Bermuda (4 matches), Purgatory (2 matches), and NexTerra (2 matches).",
    evaluation: "Placement points (1st: 12, 2nd: 9, 3rd: 8, 4th: 7, 5th: 6, 6th: 5, 7th: 4, 8th: 3, 9th: 2, 10th: 1) + 2 points per kill.",
    specialRules: [
      "No substitutes allowed during the tournament; team must play with registered roster.",
      "Save account 6-hour limit beforehand; zero account switching allowed.",
      "Unfair practices lead to disqualification of the entire branch.",
    ],
  },
];

export const committeeSignOff = {
  branches: [
    { name: "Computer Engineering (COMP)", representative: "Branch Head & Technical Captains" },
    { name: "Information Technology (IT)", representative: "Branch Head & Technical Captains" },
    { name: "Electronics & Telecommunication (E&TC)", representative: "Branch Head & Technical Captains" },
    { name: "Mechanical + ARE", representative: "Branch Head & Technical Captains" },
  ],
  technicalSecretaries: [
    { name: "Sneha", role: "Technical Secretary, AIT Technical Board" },
    { name: "Shashank Tiwari", role: "Technical Secretary, AIT Technical Board" },
  ],
  facultyInCharge: [
    { name: "Dr. P.B. Karandikar", role: "Faculty In-Charge, Technical Board" },
    { name: "Dr. Ashwini Sapkal", role: "Faculty In-Charge, Technical Board" },
    { name: "Dr. R.B. Gurav", role: "Faculty In-Charge, Technical Board" },
    { name: "Prof. P.R. Sonwane", role: "Faculty In-Charge, Technical Board" },
    { name: "Dr. Ganesh Munde", role: "Faculty In-Charge, Technical Board" },
  ],
};

