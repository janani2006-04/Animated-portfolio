export const profile = {
  firstName: "Janani",
  lastInitial: "M",
  fullName: "Janani M",
  title: "AI Engineer",
  tagline: "Building intelligent solutions for a better tomorrow.",
  location: "Coimbatore, India",
  email: "januariyejun2006@gmail.com",
  phone: "+91 8838405012",
  linkedin: "https://linkedin.com/in/janani-murugan-671004331/",
  github: "https://github.com/janani2006-20",
  summary:
    "AI Engineer and full-stack builder with hands-on experience in machine learning, computer vision, NLP, and MERN applications. Skilled at turning ideas into real products — from gesture recognition systems to AI-powered recommendation engines — with cloud deployment on AWS and Vercel.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  headline: "Curious builder. AI-first thinker.",
  paragraphs: [
    "I'm a B.E. Computer Science student specializing in Artificial Intelligence & Machine Learning at Sri Eshwar College of Engineering. I care about building systems that feel useful in the real world — accessible, intelligent, and thoughtfully engineered.",
    "My work spans full-stack product development and applied AI: computer vision for accessibility, NLP for internship matching, and cloud-ready MERN apps. I enjoy the loop of learning, shipping, and refining.",
  ],
  highlights: [
    { label: "Focus", value: "AI · ML · Full-Stack" },
    { label: "Education", value: "B.E. CSE (AIML)" },
    { label: "College", value: "Sri Eshwar" },
    { label: "CGPA", value: "7.1" },
  ],
  traits: [
    "AI/ML Enthusiast",
    "Full-Stack Developer",
    "Problem Solver",
    "Always Learning",
  ],
};

export const skills = {
  programming: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C", "Kotlin"],
  fullstack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "HTML", "CSS"],
  ai: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLP", "Computer Vision"],
  tools: ["Git", "GitHub", "AWS", "Vercel", "Power BI", "Postman", "Figma", "CI/CD"],
};

export const experience = [
  {
    role: "MERN Stack & AWS Deployment Intern",
    company: "Educentro Pvt. Ltd.",
    period: "2025",
    points: [
      "Built responsive full-stack applications using the MERN stack.",
      "Developed and integrated REST APIs, authentication, and MongoDB schemas.",
      "Assisted with cloud deployment on AWS, Vercel, and Render.",
      "Collaborated on debugging, testing, and GitHub-based workflows.",
    ],
  },
];

export const education = [
  {
    school: "Sri Eshwar College of Engineering",
    degree: "B.E. Computer Science and Engineering (AIML)",
    detail: "CGPA 7.1 · 2024–2028",
  },
  {
    school: "Senthil Matric Higher Secondary School",
    degree: "HSC",
    detail: "87.12% · 2022–2023",
  },
  {
    school: "Senthil Matric Higher Secondary School",
    degree: "SSLC",
    detail: "100% · 2020–2021",
  },
];

export const projects = [
  {
    id: "gesture",
    title: "AI Gesture Recognition for Accessibility",
    category: "Computer Vision",
    description:
      "Gesture recognition system that helps people with disabilities communicate using computer vision and machine learning for real-time hand-gesture classification.",
    tags: ["Python", "OpenCV", "ML", "Accessibility"],
  },
  {
    id: "internship-engine",
    title: "AI Internship Recommendation Engine",
    category: "NLP · AI Product",
    description:
      "AI-powered internship search platform with ATS score analysis, NLP-based resume matching, and HR tools for posting and managing opportunities.",
    tags: ["NLP", "Python", "Recommendation", "ATS"],
  },
  {
    id: "animal-platform",
    title: "Animal Buying & Selling Platform",
    category: "Full-Stack",
    description:
      "Full-stack marketplace for animal buying, selling, and adoption with authentication, listings, APIs, and a responsive interface.",
    tags: ["MERN", "Auth", "MongoDB", "REST"],
  },
  {
    id: "voting",
    title: "Online Voting System",
    category: "Full-Stack · Security",
    description:
      "Secure digital voting platform with voter authentication, vote management, and verification focused on transparency and accessibility.",
    tags: ["Web", "Auth", "Security"],
  },
  {
    id: "bus",
    title: "Bus Booking & Tracking",
    category: "MERN · Safety",
    description:
      "MERN bus booking app with real-time tracking and a women-safety feature for emergency alerts and location sharing.",
    tags: ["MERN", "Realtime", "Safety"],
  },
  {
    id: "weather",
    title: "Weather Predictor",
    category: "C++ · OOP",
    description:
      "Weather prediction application built with object-oriented C++, covering forecasting logic and structured data processing.",
    tags: ["C++", "OOP"],
  },
];

export const certifications = [
  "MERN Stack Internship Training",
  "AWS Deployment Training",
  "Machine Learning for Beginners — Simplilearn",
  "Data Analytics using Power BI — Newton School",
  "Master DSA using C++ & C — Udemy",
  "Agile Scrum Master — Simplilearn",
];

export const achievements = [
  "Winner — Robothon Competition, Kongu Engineering College",
  "LeetCode: 75+ problems solved",
  "SkillRack: 400+ problems solved",
];

export const process = [
  { step: "01", title: "Plan", detail: "Define the problem, users, and success metrics." },
  { step: "02", title: "Design", detail: "Shape the experience, data flow, and architecture." },
  { step: "03", title: "Develop", detail: "Build AI models and full-stack product features." },
  { step: "04", title: "Test", detail: "Validate accuracy, usability, and edge cases." },
  { step: "05", title: "Deploy", detail: "Ship to AWS, Vercel, or Render with CI-ready flows." },
  { step: "06", title: "Improve", detail: "Measure, learn, and iterate on what actually helps." },
];

export const vision = [
  "Build AI solutions people can actually use",
  "Work on products with global impact",
  "Grow as an engineer and entrepreneur",
  "Keep learning, shipping, and refining",
];
