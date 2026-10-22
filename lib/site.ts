export const company = {
  name: "AISyntax Studio",
  tagline: "Precision code. Intelligent systems.",
  email: "aisyntaxstudios@gmail.com",
  linkedin: "https://www.linkedin.com/company/ai-syntax-studio/",
} as const;

const inquiryMessage =
  "Hello AISyntax Studio, I would like to book a call to discuss an AI, automation, or backend infrastructure project. Please let me know a convenient time.";

export function whatsappUrl(e164WithoutPlus: string, message = inquiryMessage) {
  return `https://wa.me/${e164WithoutPlus}?text=${encodeURIComponent(message)}`;
}

export const whatsappContacts = [
  {
    label: "WhatsApp · 0304 0427715",
    display: "+92 304 0427715",
    e164: "923040427715",
    href: whatsappUrl("923040427715"),
  },
  {
    label: "WhatsApp · 0323 0866121",
    display: "+92 323 0866121",
    e164: "923230866121",
    href: whatsappUrl("923230866121"),
  },
] as const;

export const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent("Project inquiry — AISyntax Studio")}`;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    number: "01",
    id: "enterprise-ai",
    title: "Enterprise AI & Machine Learning",
    description:
      "Production RAG architectures, LLM applications, domain-adapted models, deep learning, and computer vision systems designed for mission-critical workloads.",
    points: [
      "RAG pipelines and knowledge assistants",
      "LLM applications and domain-adapted models",
      "Deep learning and computer vision",
    ],
  },
  {
    number: "02",
    id: "automation",
    title: "Intelligent AI Automation",
    description:
      "Multi-agent orchestration with LangGraph and AutoGen, automated data processing, and intelligent business workflows that reduce operational load.",
    points: [
      "Multi-agent orchestration (LangGraph / AutoGen)",
      "Automated data processing",
      "Intelligent business workflows",
    ],
  },
  {
    number: "03",
    id: "backend-mlops",
    title: "Scalable Backend & MLOps",
    description:
      "FastAPI and Django APIs, microservices, CI/CD pipelines, vector databases, and cloud-native AWS infrastructure built for high-throughput systems.",
    points: [
      "FastAPI / Django APIs and microservices",
      "CI/CD pipelines and vector databases",
      "Cloud-native AWS infrastructure",
    ],
  },
] as const;

export const techStack = [
  { group: "AI & ML", items: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "Amazon Bedrock", "RAG", "OpenCV", "YOLO"] },
  { group: "Backend", items: ["Python", "FastAPI", "Django", "Node.js", "PostgreSQL", "FAISS", "ChromaDB"] },
  { group: "Cloud & MLOps", items: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Docker", "MLflow", "CI/CD"] },
  { group: "Product", items: ["Next.js", "React", "React Native", "Streamlit", "Unity"] },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Clarify the business problem, constraints, data sources, and success criteria before any architecture is proposed.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design a secure, scalable system spanning models, APIs, data stores, and deployment topology.",
  },
  {
    number: "03",
    title: "Build",
    description: "Implement production-grade software with evaluation, observability, and maintainable interfaces.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Ship to cloud-native infrastructure with CI/CD, access control, and operational runbooks.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Tune retrieval, latency, cost, and reliability against real workloads after launch.",
  },
] as const;

export const serviceOptions = [
  "Enterprise AI & Machine Learning",
  "Intelligent AI Automation",
  "Scalable Backend & MLOps",
  "Something else",
] as const;
