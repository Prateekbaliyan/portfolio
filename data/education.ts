export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  score: string;
  scoreLabel: string;
  location?: string;
  description?: string;
}

export const educationData: EducationItem[] = [
  {
    institution: "KIET Group of Institutions",
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    field: "Artificial Intelligence & Core Computing",
    period: "2024 – 2028",
    score: "8.38",
    scoreLabel: "Current CGPA",
    location: "Ghaziabad, India",
    description:
      "Core coursework in Artificial Intelligence, Machine Learning, Computer Vision, Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks.",
  },
  {
    institution: "The Skyland School",
    degree: "Intermediate (Class XII)",
    field: "Science Stream",
    period: "2024",
    score: "94.6%",
    scoreLabel: "Academic Aggregate",
    location: "India",
  },
  {
    institution: "The Skyland School",
    degree: "High School (Class X)",
    field: "General Academic Curriculum",
    period: "2022",
    score: "95.4%",
    scoreLabel: "Academic Aggregate",
    location: "India",
  },
];
