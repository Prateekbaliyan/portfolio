export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Computer Vision & AI" | "Security & Forensics" | "Quantitative Systems" | "Full-Stack Intelligence" | "Geospatial Analytics" | "Applied Machine Learning";
  featured: boolean;
  priority: number; // 1, 2, 3 for top featured
  year: string;
  description: string;
  fullOverview?: string;
  architectureDetails?: string[];
  keyFeatures: string[];
  resumeBullets: string[];
  technologies: string[];
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image?: string;
  themeColor: {
    primary: string;
    border: string;
    glow: string;
    gradient: string;
  };
}

export interface MLSubProject {
  title: string;
  type: "Classification" | "Regression" | "Clustering" | "Probabilistic" | "Time-Series";
  description: string;
  stack: string[];
  focus: string[];
}

export const majorProjects: Project[] = [
  {
    id: "veristream",
    slug: "veristream",
    number: "01",
    title: "VeriStream",
    subtitle: "Enterprise Real-Time Deepfake Detection & Forensic Interceptor",
    category: "Computer Vision & AI",
    featured: true,
    priority: 1,
    year: "2026",
    description:
      "An end-to-end real-time deepfake detection and forensic analysis platform designed for live video streams and uploaded media.",
    fullOverview:
      "VeriStream is an enterprise-grade forensic interceptor designed to address generative synthesis, live webcam face-swaps, and diffusion-based tampering in mission-critical environments. Built with a multimodal forensic engine, it combines biological signals (rPPG blood flow pulse), physics-based corneal illumination geometry, facial landmark kinematics, and C2PA cryptographical provenance.",
    architectureDetails: [
      "Multimodal pipeline integrating remote photoplethysmography (rPPG) vascular pulse extraction from facial skin regions.",
      "Corneal illumination disparity and specular reflection symmetry inspection against environmental light models.",
      "Facial Action Unit and micro-tremor kinematic tracking via high-frequency landmark analysis.",
      "C2PA metadata provenance inspection & generative-AI synthetic watermark artifact scanning.",
      "Temporal Exponential Moving Average (EMA) sensor fusion model for multi-frame verdict stability.",
      "Cryptographically signed tamper-evident HMAC-SHA256 forensic PDF reports adhering to ISO/IEC 30107-3 PAD standards.",
      "Asynchronous FastAPI + WebSockets backend connected to a Next.js/TypeScript real-time telemetry dashboard.",
    ],
    keyFeatures: [
      "Real-time facial authenticity verification",
      "rPPG vascular pulse extraction",
      "Corneal reflection symmetry analysis",
      "Facial landmark / Action Unit micro-tremor analysis",
      "C2PA provenance inspection",
      "SynthID-related forensic inspection",
      "Temporal EMA sensor fusion",
      "Real-time WebSocket communication",
      "Cryptographically signed forensic reports",
      "ISO/IEC 30107-3 PAD-oriented workflow",
    ],
    resumeBullets: [
      "Engineered a multimodal forensic pipeline combining rPPG vascular pulse extraction, corneal illumination disparity, and facial landmark kinematics for real-time authenticity analysis.",
      "Integrated provenance and forensic inspection layers for C2PA metadata and generative-AI watermark signals.",
      "Implemented temporal Exponential Moving Average sensor fusion to stabilize multi-frame predictions and reduce verdict fluctuation.",
      "Developed tamper-evident HMAC-SHA256 signed forensic PDF reports for auditable detection results.",
      "Built an asynchronous FastAPI + WebSocket backend with a Next.js/TypeScript live telemetry dashboard.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "WebSockets",
      "OpenCV",
      "NumPy",
      "SciPy",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ReportLab",
      "Docker",
    ],
    tags: [
      "Computer Vision",
      "Deepfake Detection",
      "AI",
      "Digital Forensics",
      "Real-Time Systems",
    ],
    githubUrl: "https://github.com/Prateekbaliyan/Veri-stream",
    liveDemoUrl: "https://veri-stream.vercel.app/",
    image: "/projects/veristream.png",
    themeColor: {
      primary: "#10b981", // Emerald
      border: "rgba(16, 185, 129, 0.3)",
      glow: "rgba(16, 185, 129, 0.15)",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
  },
  {
    id: "docuaudit",
    slug: "docuaudit",
    number: "02",
    title: "DocuAudit",
    subtitle: "End-to-End Digital Document Forensics & Tampering Detection Platform",
    category: "Security & Forensics",
    featured: true,
    priority: 2,
    year: "2026",
    description:
      "Production-oriented document forensic analysis platform designed to detect digital tampering, image forgery, structural PDF anomalies, and financial inconsistencies.",
    fullOverview:
      "DocuAudit delivers industrial-strength forensic auditing for digital contracts, KYC records, invoices, and certificates. Combining image-level compression forensics, high-pass residual filtering, PDF byte-level structure disassembly, PKCS#7 digital signature validation, and algorithmic financial ledger verification.",
    architectureDetails: [
      "Error Level Analysis (ELA) and high-pass noise residual filtering to detect localized re-compression and cloned pixels.",
      "DBSCAN clustering on ORB feature descriptors for robust copy-move forgery detection.",
      "Low-level PDF byte-stream parsing via PyMuPDF to extract incremental save revisions, hidden streams, and embedded font anomalies.",
      "PKCS#7 cryptographic ByteRange validation to spot unverified alterations post-signing.",
      "Automated financial ledger arithmetic cross-verification & checksum audits (GSTIN, PAN, EIN).",
      "Interactive forensic inspection workbench with synchronized split-view zoom, magnification loupe, and heatmap overlays.",
      "SHA-256 chain-of-custody audit certificates and automated PDF/CSV report generation.",
    ],
    keyFeatures: [
      "Error Level Analysis (ELA)",
      "High-pass noise residual analysis",
      "ORB feature matching",
      "DBSCAN-based copy-move forgery detection",
      "PDF byte-stream analysis",
      "Incremental save revision detection",
      "Embedded font anomaly detection",
      "PKCS#7 digital signature ByteRange validation",
      "Financial ledger arithmetic validation",
      "GSTIN / PAN / EIN checksum validation",
      "SHA-256 chain-of-custody audit certificates",
      "Interactive forensic viewer",
      "Heatmaps & batch processing",
      "PDF/CSV report generation",
    ],
    resumeBullets: [
      "Engineered a multi-stage document forensics pipeline using ELA, high-pass noise residuals, and ORB + DBSCAN copy-move detection.",
      "Built PDF structural analysis using PyMuPDF to detect incremental revisions, font anomalies, and digital signature inconsistencies.",
      "Implemented financial ledger validation and checksum-based identity verification for automated document auditing.",
      "Developed an interactive Next.js forensic inspection interface with synchronized zoom/pan, magnification, heatmaps, and report generation.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "OpenCV",
      "PyMuPDF",
      "Scikit-learn",
      "NumPy",
      "SciPy",
      "Tailwind CSS",
    ],
    tags: [
      "Digital Forensics",
      "Document Security",
      "Computer Vision",
      "PDF Byte-Stream",
      "Cryptographic Audits",
    ],
    githubUrl: "https://github.com/Prateekbaliyan/docu-audit",
    liveDemoUrl: "https://docu-audit.vercel.app/",
    image: "/projects/docuaudit.png",
    themeColor: {
      primary: "#06b6d4", // Cyan
      border: "rgba(6, 182, 212, 0.3)",
      glow: "rgba(6, 182, 212, 0.15)",
      gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    },
  },
  {
    id: "liquiditypulse",
    slug: "liquiditypulse",
    number: "03",
    title: "LiquidityPulse",
    subtitle: "Real-Time Market Microstructure & Quantitative Intelligence Platform",
    category: "Quantitative Systems",
    featured: true,
    priority: 3,
    year: "2026",
    description:
      "Real-time market microstructure analytics platform for analyzing Level 2 order book activity, liquidity behavior, order flow, and short-term market signals.",
    fullOverview:
      "LiquidityPulse is an institutional-inspired quantitative terminal that streams Level 2 market depth data, reconstructs order books tick-by-tick, and computes high-frequency microstructure metrics. It exposes institutional toxic order flow, identifies spoofing/layering patterns, and provides backtesting engines with realistic slippage and transaction-cost modeling.",
    architectureDetails: [
      "Sub-millisecond Level 2 Depth of Market order book reconstructor and live volume delta calculator.",
      "Microstructure signal engines: Order Flow Imbalance (OFI), Volume-Synchronized Probability of Toxicity (VPIN), and Micro-Price estimators.",
      "Pattern recognition heuristics detecting illicit algorithmic activity including spoofing, quote stuffing, layering, and iceberg orders.",
      "High-throughput asynchronous streaming backbone built with FastAPI, WebSockets, Redis pub/sub, and PostgreSQL.",
      "Interactive tick-level charting powered by TradingView Lightweight Charts with custom microstructure overlays.",
      "Historical tick replay and quantitative backtester incorporating latency simulation and transaction cost analysis (TCA).",
    ],
    keyFeatures: [
      "Level 2 Depth of Market visualization",
      "Order Flow Imbalance (OFI) calculations",
      "VPIN toxicity analysis",
      "Micro-price modeling",
      "Market manipulation detection (Spoofing & Layering)",
      "Iceberg order pattern identification",
      "Real-time WebSocket streaming",
      "Tick-level processing",
      "Historical market replay engine",
      "Backtesting with slippage modeling",
      "Transaction Cost Analysis (TCA)",
    ],
    resumeBullets: [
      "Built a real-time quantitative analytics terminal for Level 2 order-book visualization and market microstructure analysis.",
      "Engineered asynchronous streaming pipelines using FastAPI, WebSockets, NumPy, and Redis for real-time market data processing.",
      "Implemented microstructure metrics including Order Flow Imbalance, VPIN, and Micro-price for liquidity and toxicity analysis.",
      "Developed anomaly detection logic for potential spoofing, layering, and iceberg order behavior.",
      "Added historical tick replay and backtesting functionality with latency, slippage, and transaction-cost modeling.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Next.js",
      "TypeScript",
      "NumPy",
      "Pandas",
      "Redis",
      "PostgreSQL",
      "Docker",
      "TradingView Lightweight Charts",
    ],
    tags: [
      "Quantitative Finance",
      "Market Microstructure",
      "Order Flow",
      "High-Frequency Data",
      "Redis & WebSockets",
    ],
    githubUrl: "https://github.com/Prateekbaliyan/liquidity-pulse",
    liveDemoUrl: "https://liquidity-pulse-kqzl.vercel.app/",
    image: "/projects/liquiditypulse.png",
    themeColor: {
      primary: "#8b5cf6", // Violet
      border: "rgba(139, 92, 246, 0.3)",
      glow: "rgba(139, 92, 246, 0.15)",
      gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    },
  },
  {
    id: "ai-productivity-tracker",
    slug: "ai-productivity-tracker",
    number: "04",
    title: "AI Productivity Tracker",
    subtitle: "Behavior Analytics & Productivity Intelligence Platform",
    category: "Full-Stack Intelligence",
    featured: false,
    priority: 4,
    year: "2025",
    description:
      "Full-stack productivity intelligence platform that tracks digital behavior and converts activity data into productivity insights.",
    fullOverview:
      "An automated digital behavior analytics platform combining a native Chrome extension and a reactive Node.js backend to classify active sessions, track streaks, and analyze work habits.",
    keyFeatures: [
      "Browser activity tracking via Chrome Extension",
      "Automated productive / distraction / neutral categorization",
      "Secure JWT authentication & user sessions",
      "Dynamic interactive analytics dashboard with Chart.js",
      "Productivity score algorithm & streak tracking",
      "Daily telemetry reports & weekly behavioral summaries",
      "Competitive peer leaderboards",
      "Architected for ML behavior clustering and productivity prediction",
    ],
    resumeBullets: [
      "Built a full-stack productivity tracking platform integrating a Chrome extension with a Node.js/Express backend.",
      "Implemented activity classification for productive, distracting, and neutral browsing behavior.",
      "Developed analytics dashboards for productivity scores, daily reports, streaks, and weekly behavioral trends.",
      "Designed the system for future ML-based behavior clustering and productivity prediction.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chrome Extension",
      "JWT",
      "JavaScript",
      "Chart.js",
    ],
    tags: [
      "Full-Stack",
      "Behavior Analytics",
      "Chrome Extension",
      "Node.js",
      "MongoDB",
    ],
    githubUrl: "https://github.com/Prateekbaliyan/tracker-project",
    // Note: No live deployment exists, so no liveDemoUrl per prompt requirements
    image: "/projects/tracker.png",
    themeColor: {
      primary: "#3b82f6", // Blue
      border: "rgba(59, 130, 246, 0.3)",
      glow: "rgba(59, 130, 246, 0.15)",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    },
  },
  {
    id: "location-intelligence",
    slug: "location-intelligence",
    number: "05",
    title: "Location Intelligence",
    subtitle: "Map-Based Business Opportunity & Demand Analysis Platform",
    category: "Geospatial Analytics",
    featured: false,
    priority: 5,
    year: "2025",
    description:
      "Interactive map-based platform for analyzing business opportunities using geospatial data and location intelligence.",
    fullOverview:
      "A geospatial intelligence engine that processes OpenStreetMap geographic data to analyze pedestrian density, local commercial presence, demand-supply gaps, and commercial opportunity scores.",
    keyFeatures: [
      "Interactive vector map exploration",
      "Business and landmark discovery via OpenStreetMap APIs",
      "Geospatial heatmaps for commercial density",
      "Demographic demand and competition clustering",
      "Algorithmic opportunity scoring index",
      "Location-based real-time insights",
      "Fully responsive high-speed analytical dashboard",
    ],
    resumeBullets: [
      "Built an interactive map-based platform for analyzing business opportunities using geospatial data.",
      "Integrated OpenStreetMap APIs for location intelligence and business discovery.",
      "Implemented heatmaps, demand analysis, and opportunity scoring to visualize high-potential locations.",
    ],
    technologies: [
      "React",
      "Vite",
      "Express.js",
      "OpenStreetMap APIs",
      "JavaScript",
    ],
    tags: [
      "Geospatial Analytics",
      "OpenStreetMap",
      "Heatmaps",
      "React",
      "Demand Analysis",
    ],
    githubUrl: "https://github.com/Prateekbaliyan/location-project",
    liveDemoUrl: "https://location-project-frontend.onrender.com/",
    image: "/projects/location.png",
    themeColor: {
      primary: "#f59e0b", // Amber
      border: "rgba(245, 158, 11, 0.3)",
      glow: "rgba(245, 158, 11, 0.15)",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
  },
];

export const mlSubProjects: MLSubProject[] = [
  {
    title: "Heart Disease Prediction",
    type: "Classification",
    description:
      "Predictive clinical classification pipeline modeling patient cardiovascular risk metrics through feature selection and cross-validated estimators.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    focus: ["EDA", "Feature Engineering", "ROC-AUC", "Binary Classification"],
  },
  {
    title: "Bulldozer Price Prediction",
    type: "Regression",
    description:
      "Time-series heavy heavy-equipment auction valuation model with extensive temporal feature parsing and RMSLE performance optimization.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    focus: ["Temporal Features", "RMSLE Metric", "Random Forest Regressor"],
  },
  {
    title: "K-Means Internet Usage Clustering",
    type: "Clustering",
    description:
      "Unsupervised behavioral profiling and user segmentation based on multidimensional bandwidth consumption, session timing, and usage clusters.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    focus: ["Elbow Method", "Silhouette Scoring", "Centroid Normalization"],
  },
  {
    title: "Naive Bayes Weather Prediction",
    type: "Probabilistic",
    description:
      "Probabilistic forecasting engine predicting precipitation and atmospheric states using Bayes conditional probability distributions.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    focus: ["Gaussian NB", "Prior Likelihood", "Categorical Encoding"],
  },
  {
    title: "COVID-19 Forecasting",
    type: "Time-Series",
    description:
      "Epidemiological time-series progression tracker and visualizer calculating growth rates, moving averages, and trajectory projections.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    focus: ["Time-Series EDA", "Moving Averages", "Trend Modeling"],
  },
];
