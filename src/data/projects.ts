export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  repo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Crypto Compare",
    description:
      "Website to learn the value of major cryptocurrencies compared to the dollar and euro. Uses the CoinGecko API to obtain real-time data.",
    image: "/images/undraw_mobile-development_tjxm.svg",
    tags: ["React", "Tailwind CSS", "Vite"],
    live: "https://cryptocomparex.netlify.app/",
    repo: "https://github.com/FacuBustamaante/crypto-compare-react",
    featured: true,
  },
  {
    title: "Calorie Tracker",
    description:
      "Web application designed to monitor and manage daily calorie intake, ensuring type safety and code scalability with TypeScript.",
    image: "/images/undraw_maintenance_4unj.svg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    live: "https://thecalorietracker.netlify.app/",
    repo: "https://github.com/FacuBustamaante/calorie-tracker",
    featured: true,
  },
  {
    title: "Tip Calculator",
    description:
      "Web application designed to calculate tips with instant accuracy, following the Mobile-First design pattern.",
    image: "/images/undraw_enter-password_1kl4.svg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    live: "https://tipcalculatorline.netlify.app/",
    repo: "https://github.com/FacuBustamaante/tips-calc",
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Real-time messaging application that enables instant communication between users over WebSockets.",
    image: "/images/1.svg",
    tags: ["Java", "Spring Boot", "WebSocket", "SockJS"],
    repo: "https://github.com/FacuBustamaante/chat-app",
  },
  {
    title: "To-do App",
    description:
      "Simple and intuitive to-do app that helps users organize tasks and track progress.",
    image: "/images/2.svg",
    tags: ["Java", "Spring Boot", "JPA", "Thymeleaf"],
    repo: "https://github.com/FacuBustamaante/todo-app",
  },
  {
    title: "TaTeTi Game",
    description:
      "Tic-Tac-Toe web game built primarily with React and Vite using state and Hooks.",
    image: "/images/3.svg",
    tags: ["React", "Vite", "Hooks"],
    live: "https://tatetigames.netlify.app/",
    repo: "https://github.com/FacuBustamaante/tateti-game",
  },
  {
    title: "Audio to Text Transcriber",
    description:
      "Application designed to transcribe audio files into plain text, powered by Spring AI.",
    image: "/images/4.svg",
    tags: ["Spring AI", "Java"],
    repo: "https://github.com/FacuBustamaante/audio-to-text-transcriber",
  },
  {
    title: "Personal Finance App",
    description:
      "Personal expense organizer with the ability to categorize expenses and manage responsive budgets.",
    image: "/images/5.svg",
    tags: ["React", "Tailwind", "Context API"],
    live: "https://budgetonplan.netlify.app/",
    repo: "https://github.com/FacuBustamaante/control-gastos-contextapi",
  },
];

export const skills = {
  "Languages & Tools": [
    "TypeScript",
    "JavaScript",
    "Java",
    "SQL",
    "Git",
    "Postman",
    "Docker",
  ],
  "Frameworks & Libraries": [
    "React",
    "Zustand",
    "Tailwind CSS",
    "Node.js",
    "Bootstrap",
  ],
  Testing: ["Jest", "JUnit"],
} satisfies Record<string, string[]>;

/** Highlighted, AI-first skill set. */
export const aiSkills: string[] = [
  "Claude",
  "Claude Code",
  "Spec-Driven Development",
  "OpenSpec",
  "MCP",
  "Agent Skills",
  "Prompt Engineering",
  "Anthropic API",
  "RAG",
  "AI Agents",
];
