export interface PersonalInfo {
  name: string;
  brand: string;
  title: string;
  secondaryTitle: string;
  description: string;
  heroTagline: string;
  location: string;
  email: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
  educationShort: {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
  };
  stats: {
    cgpa: string;
    leetcode: string;
    period: string;
    specialization: string;
  };
  badges: string[];
  statusText: string;
  currentlyBuilding: string;
}

export const personalData: PersonalInfo = {
  name: "Prateek Baliyan",
  brand: "PRATEEK // AI LAB",
  title: "AI / ML Engineer & Full-Stack Developer",
  secondaryTitle: "Computer Science & Engineering (Artificial Intelligence)",
  heroTagline: "Building Intelligent Systems.",
  description:
    "Computer Science (AI) undergraduate building AI-powered applications, computer vision systems, real-time platforms, and intelligent software.",
  location: "Ghaziabad, India",
  email: "prateekbaliyan25@gmail.com",
  phone: "9027576634",
  social: {
    github: "https://github.com/Prateekbaliyan",
    linkedin: "https://www.linkedin.com/in/prateek-baliyan-9b7543328/",
    leetcode: "https://leetcode.com/u/prateekbaliyan",
  },
  educationShort: {
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    institution: "KIET Group of Institutions, Ghaziabad",
    period: "2024 – 2028",
    cgpa: "8.38",
  },
  stats: {
    cgpa: "8.38",
    leetcode: "182+",
    period: "2024–2028",
    specialization: "AI & Full-Stack",
  },
  badges: [
    "AI / ML",
    "COMPUTER VISION",
    "FULL-STACK",
    "REAL-TIME SYSTEMS",
    "QUANT",
  ],
  statusText: "SYSTEM ONLINE // AI CORE STABLE",
  currentlyBuilding: "Real-time AI & intelligent software systems",
};
