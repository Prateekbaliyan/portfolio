export interface AchievementItem {
  title: string;
  category: "Coding" | "Academics" | "Certification";
  value: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    title: "LeetCode Problem Solving",
    category: "Coding",
    value: "182+",
    subtitle: "Problems Solved in C++",
    description:
      "Consistent algorithmic practice across Data Structures & Algorithms with emphasis on Two Pointers, Trees, Graphs, Dynamic Programming, and System Optimization.",
    iconName: "Code2",
    badge: "Algorithmic Rigor",
  },
  {
    title: "Academic Standing",
    category: "Academics",
    value: "8.38",
    subtitle: "CGPA at KIET",
    description:
      "B.Tech in Computer Science & Engineering (Artificial Intelligence) maintaining consistent technical performance and mathematical fundamentals.",
    iconName: "GraduationCap",
    badge: "B.Tech CSE (AI)",
  },
  {
    title: "Cloud Infrastructure",
    category: "Certification",
    value: "AWS",
    subtitle: "Certified Cloud Practitioner",
    description:
      "Validated architectural knowledge of cloud security, distributed compute, identity access management, serverless paradigms, and global infrastructure.",
    iconName: "Award",
    badge: "Industry Certified",
  },
];
