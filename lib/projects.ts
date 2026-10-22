export type ProjectCategory = "AI & ML" | "Automation" | "Backend" | "Immersive";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured?: boolean;
  description: string;
  tags: string[];
  github?: string;
  demo?: { href: string; label: string };
  visual: string;
};

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "AI & ML",
  "Automation",
  "Backend",
  "Immersive",
];

export const projects: Project[] = [
  {
    slug: "repairdesk-ai-copilot",
    title: "RepairDesk AI Copilot",
    category: "AI & ML",
    featured: true,
    description:
      "Production-ready AI support assistant using RAG and Amazon Bedrock to retrieve documentation, reduce hallucinations, and power secure serverless customer support workflows.",
    tags: [
      "Python",
      "Amazon Bedrock",
      "Claude",
      "RAG",
      "FAISS",
      "LangChain",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
    ],
    github: "https://github.com/AnasHussain301/repairdesk-ai-copilot",
    demo: {
      href: "https://drive.google.com/file/d/13ExBk5POb-AtnK004LUIwC9LEDiSSHWS/view?usp=drive_link",
      label: "Demo",
    },
    visual: "rag",
  },
  {
    slug: "agriculture-advisory-assistant",
    title: "Agriculture Advisory Assistant",
    category: "AI & ML",
    featured: true,
    description:
      "Intelligent Q&A assistant for farmers, powered by retrieval-augmented generation. Agricultural documents are chunked, embedded with Sentence Transformers, indexed in ChromaDB, and answered with Groq-hosted Llama models through a public Streamlit application.",
    tags: [
      "Python",
      "Streamlit",
      "Sentence Transformers",
      "ChromaDB",
      "Groq API",
      "Llama",
      "RAG",
    ],
    github: "https://github.com/hamzazam2375/AgriLLM",
    demo: {
      href: "https://agri-assistant-fizza.streamlit.app/",
      label: "Live app",
    },
    visual: "knowledge",
  },
  {
    slug: "ai-video-generation-studio",
    title: "AI Video Generation Studio",
    category: "AI & ML",
    featured: true,
    description:
      "Cloud-native generative AI application that transforms natural language prompts into AI-generated videos using Amazon Bedrock and Amazon Nova Reel, with a serverless AWS architecture, secure APIs, cloud storage, and a web interface for cinematic video generation.",
    tags: [
      "Amazon Bedrock",
      "Amazon Nova Reel",
      "AWS Lambda",
      "API Gateway",
      "CloudFront",
      "Amazon S3",
      "DynamoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "Prompt Engineering",
    ],
    github: "https://github.com/AnasHussain301/video-studio-ai",
    demo: {
      href: "https://drive.google.com/file/d/1hNQJuQN5Pjm9h0WEN6Di715kqjW57hEz/view?usp=drive_link",
      label: "Demo",
    },
    visual: "video",
  },
  {
    slug: "autoshorts-ai",
    title: "AutoShorts AI",
    category: "Automation",
    featured: true,
    description:
      "Transcription pipeline for a platform that converts long-form videos into short-form content. Faster-Whisper handles audio transcription inside a FastAPI backend with automated FFmpeg and MoviePy video processing.",
    tags: ["Python", "FastAPI", "Faster-Whisper", "FFmpeg", "MoviePy", "Uvicorn"],
    github: "https://github.com/hamzazam2375/autoshorts",
    visual: "pipeline",
  },
  {
    slug: "intelligent-attendance",
    title: "Intelligent Attendance Tracking System",
    category: "AI & ML",
    description:
      "Real-time attendance system using YOLOv11 for face detection and DeepFace / Facenet512 for recognition. Includes live webcam capture, session-based reporting, MLflow for model versioning, and Flask-based student management.",
    tags: ["Python", "YOLOv11", "DeepFace", "Facenet512", "Flask", "MLflow"],
    visual: "vision",
  },
  {
    slug: "paisapro",
    title: "PaisaPro",
    category: "Backend",
    description:
      "Full-stack personal finance platform with expense tracking, budget management, savings and income tracking, PDF report generation, a chatbot assistant, cross-platform price comparison through web scraping, and FinBERT-based financial sentiment analysis.",
    tags: ["React", "Django", "FastAPI", "PostgreSQL", "Vite"],
    github: "https://github.com/hamzazam2375/PaisaPro",
    visual: "finance",
  },
  {
    slug: "votekro",
    title: "VoteKro",
    category: "Backend",
    description:
      "Secure voting platform applying blockchain concepts — SHA-256 hashing and chained blocks — for encrypted, anonymous vote storage, role-based access control, a tamper-evident audit trail, and transparent, verifiable election records.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Supabase"],
    github: "https://github.com/hamzazam2375/VoteKro",
    visual: "ledger",
  },
  {
    slug: "mbti-personality-predictor",
    title: "MBTI Personality Predictor",
    category: "AI & ML",
    description:
      "End-to-end NLP platform that predicts Myers–Briggs personality types from free-form text using hybrid embedding and feature-based machine learning pipelines.",
    tags: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "BERT",
      "TF-IDF",
      "VADER",
      "SMOTE",
      "Pandas",
      "NumPy",
      "Joblib",
    ],
    github: "https://github.com/AnasHussain301/mbti-personality-predictor",
    demo: {
      href: "https://drive.google.com/file/d/11a4dsXPHJMjxFx12lneJjqA7Cj7YtToE/view?usp=drive_link",
      label: "Demo",
    },
    visual: "nlp",
  },
  {
    slug: "car-repair-pos",
    title: "Car Repair Shop POS System",
    category: "Backend",
    description:
      "Desktop workshop management system for repair businesses, with customer tracking, inventory control, invoicing, employee management, and analytics in a modern WPF architecture.",
    tags: [
      "C#",
      ".NET",
      "WPF",
      "Entity Framework Core",
      "PostgreSQL",
      "Material Design in XAML",
      "LiveCharts",
      "PDFSharpCore",
    ],
    github: "https://github.com/AnasHussain301/Car-Repair-Shop-Pos-System",
    visual: "ops",
  },
  {
    slug: "vr-chemistry-lab",
    title: "VR Chemistry Lab",
    category: "Immersive",
    description:
      "Immersive virtual reality chemistry lab for Meta Quest 2 that enables safe experimental practice and interactive XR simulations of laboratory procedures.",
    tags: ["Unity", "C#", "Meta Quest 2", "XR Interaction Toolkit", "Physics Simulation"],
    github: "https://github.com/AnasHussain301/VR_ChemistryLab",
    demo: {
      href: "https://drive.google.com/file/d/189exor2LBqAa4jLfL9KnJOPcIxECmr6A/view?usp=drive_link",
      label: "Demo",
    },
    visual: "xr",
  },
  {
    slug: "the-last-gardener",
    title: "The Last Gardener",
    category: "Immersive",
    description:
      "Narrative-driven 3D survival adventure focused on restoring a cyber-garden civilization through exploration, resource management, and mission-based gameplay.",
    tags: ["Unity", "C#", "WebGL"],
    github: "https://github.com/anas23049/The-Last-Gardener",
    demo: {
      href: "https://drive.google.com/file/d/1J_G7x_BjxicSAF3_oRi28z5thPaWDO0-/view?usp=drive_link",
      label: "Demo",
    },
    visual: "world",
  },
  {
    slug: "sketch-artist-studio",
    title: "Sketch Artist Studio",
    category: "AI & ML",
    description:
      "Dark-studio, sketchbook-themed artist portfolio with an image-to-3D model generator. A Tencent Cloud Stable Diffusion model produces 3D assets from 2D images, exported to GLTF and displayed with Three.js. Built with Next.js (App Router), Tailwind, Framer Motion, and a working contact form.",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "WebGL", "Stable Diffusion", "GLTF"],
    github: "https://github.com/AnasHussain301/sketch-artist-portfolio",
    demo: {
      href: "https://drive.google.com/file/d/1RKjRTB5uEUISDOwbWAoARAtCaztvu8P1/view?usp=sharing",
      label: "Demo",
    },
    visual: "studio",
  },
];
