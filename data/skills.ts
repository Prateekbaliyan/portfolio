export interface SkillItem {
  name: string;
  category: string;
  usedInProjects: string[]; // project slugs e.g. ["veristream", "docuaudit"]
}

export interface SkillCategoryGroup {
  category: string;
  tag: string;
  skills: SkillItem[];
}

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    category: "LANGUAGES",
    tag: "Core Systems",
    skills: [
      { name: "C++", category: "LANGUAGES", usedInProjects: [] },
      { name: "Python", category: "LANGUAGES", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "JavaScript", category: "LANGUAGES", usedInProjects: ["ai-productivity-tracker", "location-intelligence"] },
      { name: "TypeScript", category: "LANGUAGES", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "SQL", category: "LANGUAGES", usedInProjects: ["liquiditypulse"] },
    ],
  },
  {
    category: "AI / ML",
    tag: "Intelligence",
    skills: [
      { name: "Scikit-learn", category: "AI / ML", usedInProjects: ["docuaudit"] },
      { name: "Pandas", category: "AI / ML", usedInProjects: ["liquiditypulse"] },
      { name: "NumPy", category: "AI / ML", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "SciPy", category: "AI / ML", usedInProjects: ["veristream", "docuaudit"] },
      { name: "Machine Learning", category: "AI / ML", usedInProjects: ["docuaudit"] },
      { name: "Computer Vision", category: "AI / ML", usedInProjects: ["veristream", "docuaudit"] },
      { name: "Classification", category: "AI / ML", usedInProjects: ["veristream", "ai-productivity-tracker"] },
      { name: "Regression", category: "AI / ML", usedInProjects: ["liquiditypulse"] },
      { name: "Clustering", category: "AI / ML", usedInProjects: ["docuaudit"] },
      { name: "Feature Engineering", category: "AI / ML", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
    ],
  },
  {
    category: "COMPUTER VISION",
    tag: "Visual Telemetry",
    skills: [
      { name: "OpenCV", category: "COMPUTER VISION", usedInProjects: ["veristream", "docuaudit"] },
      { name: "Image Processing", category: "COMPUTER VISION", usedInProjects: ["veristream", "docuaudit"] },
      { name: "Digital Forensics", category: "COMPUTER VISION", usedInProjects: ["veristream", "docuaudit"] },
    ],
  },
  {
    category: "FRONTEND",
    tag: "Interactive UI",
    skills: [
      { name: "React", category: "FRONTEND", usedInProjects: ["ai-productivity-tracker", "location-intelligence"] },
      { name: "Next.js", category: "FRONTEND", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "TypeScript", category: "FRONTEND", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "Tailwind CSS", category: "FRONTEND", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "HTML", category: "FRONTEND", usedInProjects: ["ai-productivity-tracker", "location-intelligence"] },
      { name: "CSS", category: "FRONTEND", usedInProjects: ["ai-productivity-tracker", "location-intelligence"] },
      { name: "Vite", category: "FRONTEND", usedInProjects: ["location-intelligence"] },
      { name: "Chart.js", category: "FRONTEND", usedInProjects: ["ai-productivity-tracker"] },
    ],
  },
  {
    category: "BACKEND",
    tag: "High-Throughput",
    skills: [
      { name: "FastAPI", category: "BACKEND", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "Node.js", category: "BACKEND", usedInProjects: ["ai-productivity-tracker"] },
      { name: "Express.js", category: "BACKEND", usedInProjects: ["ai-productivity-tracker", "location-intelligence"] },
      { name: "REST APIs", category: "BACKEND", usedInProjects: ["veristream", "docuaudit", "location-intelligence"] },
      { name: "WebSockets", category: "BACKEND", usedInProjects: ["veristream", "liquiditypulse"] },
      { name: "JWT", category: "BACKEND", usedInProjects: ["ai-productivity-tracker"] },
      { name: "Async Programming", category: "BACKEND", usedInProjects: ["veristream", "liquiditypulse"] },
    ],
  },
  {
    category: "DATABASE",
    tag: "Storage & Cache",
    skills: [
      { name: "MongoDB", category: "DATABASE", usedInProjects: ["ai-productivity-tracker"] },
      { name: "Mongoose", category: "DATABASE", usedInProjects: ["ai-productivity-tracker"] },
      { name: "PostgreSQL", category: "DATABASE", usedInProjects: ["liquiditypulse"] },
      { name: "Redis", category: "DATABASE", usedInProjects: ["liquiditypulse"] },
    ],
  },
  {
    category: "QUANT",
    tag: "Market Microstructure",
    skills: [
      { name: "Market Microstructure", category: "QUANT", usedInProjects: ["liquiditypulse"] },
      { name: "L2 Order Book", category: "QUANT", usedInProjects: ["liquiditypulse"] },
      { name: "OFI", category: "QUANT", usedInProjects: ["liquiditypulse"] },
      { name: "VPIN", category: "QUANT", usedInProjects: ["liquiditypulse"] },
      { name: "Micro-price", category: "QUANT", usedInProjects: ["liquiditypulse"] },
      { name: "Backtesting", category: "QUANT", usedInProjects: ["liquiditypulse"] },
      { name: "TCA", category: "QUANT", usedInProjects: ["liquiditypulse"] },
    ],
  },
  {
    category: "CORE CS",
    tag: "Foundations",
    skills: [
      { name: "Data Structures & Algorithms", category: "CORE CS", usedInProjects: [] },
      { name: "OOP", category: "CORE CS", usedInProjects: [] },
      { name: "DBMS", category: "CORE CS", usedInProjects: ["ai-productivity-tracker", "liquiditypulse"] },
      { name: "Operating Systems", category: "CORE CS", usedInProjects: [] },
      { name: "Computer Networks", category: "CORE CS", usedInProjects: ["veristream", "liquiditypulse"] },
    ],
  },
  {
    category: "TOOLS",
    tag: "DevOps & Tooling",
    skills: [
      { name: "Git", category: "TOOLS", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "GitHub", category: "TOOLS", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "Docker", category: "TOOLS", usedInProjects: ["veristream", "liquiditypulse"] },
      { name: "Postman", category: "TOOLS", usedInProjects: ["veristream", "ai-productivity-tracker"] },
      { name: "VS Code", category: "TOOLS", usedInProjects: [] },
      { name: "Vercel", category: "TOOLS", usedInProjects: ["veristream", "docuaudit", "liquiditypulse"] },
      { name: "Render", category: "TOOLS", usedInProjects: ["location-intelligence"] },
    ],
  },
];
