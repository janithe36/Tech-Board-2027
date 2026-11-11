// =============================================================
// TECH AAKRITI — INTRA-COLLEGE EVENT DATA
// Annual Inter-Branch Technical Championship of AIT Pune
// Organized by: AIT Technical Board
// Participating Branches: COMP (480), E&TC (480), IT (420), Mech+ARE (360)
// =============================================================

export const TECH_AAKRITI_METADATA = {
  name: "TECH AAKRITI",
  edition: "2027",
  type: "Annual Intra-College Technical Championship",
  organizer: "AIT Technical Board",
  institution: "Army Institute of Technology (AIT), Pune",
  tagline: "The Inter-Branch Technical Arena of AIT",
  description:
    "Tech Aakriti is the premier intra-college technical festival of Army Institute of Technology, Pune. Over 1,700 students across all four engineering departments compete in 21 technical disciplines for the prestigious Departmental Technical Trophy.",
  rulebookDownloadUrl: "/rulebooks/Tech_Aakriti_2027_Official_Rulebook.docx",
  guidelinesPageUrl: "/guidelines",
  branches: [
    { code: "COMP", name: "Computer Engineering", strength: 480 },
    { code: "E&TC", name: "Electronics & Telecommunication", strength: 480 },
    { code: "IT", name: "Information Technology", strength: 420 },
    { code: "MECH_ARE", name: "Mechanical + Automation & Robotics", strength: 360 },
  ],
  totalEvents: 21,
  totalStrength: 1740,
  categories: [
    { name: "Coding & Software", count: 3, examples: "Codehunt, Reverse Coding, Bug Hunt" },
    { name: "Core Engineering", count: 3, examples: "Circuitrix, CAD Clash, Robo Soccer" },
    { name: "Mass Events", count: 2, examples: "Technical Quiz, Branch Showcase" },
    { name: "Major Flagships", count: 5, examples: "Hackathon, Robotics War, Innovation Expo" },
    { name: "Open Category", count: 2, examples: "Tech Debate, Paper Presentation" },
    { name: "Esports & Gaming", count: 3, examples: "Valorant, BGMI, FIFA" },
  ],
};

