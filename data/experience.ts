export interface ExperienceItem {
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Development & AI Engineering",
    type: "Self-Directed Development",
    period: "2024 – Present",
    location: "Ghaziabad, India",
    summary:
      "Engineering full-stack systems, computer vision pipelines, and quantitative applications from concept to production deployments.",
    bullets: [
      "Practiced Data Structures and Algorithms using C++ with 182+ LeetCode problems solved.",
      "Built machine learning pipelines and predictive models utilizing Scikit-learn, Pandas, NumPy, and OpenCV.",
      "Developed end-to-end full-stack applications with React, Next.js, Node.js, Express.js, FastAPI, and MongoDB.",
      "Engineered real-time streaming architectures using WebSockets, Redis pub/sub, and asynchronous Python runtime.",
      "Utilized Git and GitHub for modular codebase architecture, version control, and continuous deployment to modern cloud platforms.",
      "Continuously explored modern AI/ML architectures, digital document forensics, and computer vision forensic pipelines.",
    ],
    tags: [
      "C++ DSA",
      "Python AI/ML",
      "FastAPI & Node.js",
      "React & Next.js",
      "MongoDB & Redis",
      "Git & Cloud Deploy",
    ],
  },
];
