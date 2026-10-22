import type { Project } from "@/lib/projects";

const scenes: Record<string, { label: string; title: string; nodes: string[] }> = {
  rag: { label: "RAG / SUPPORT", title: "Docs in. Grounded answers out.", nodes: ["DOCS", "RETRIEVE", "CLAUDE"] },
  knowledge: { label: "AGRICULTURE RAG", title: "Field knowledge, retrieved.", nodes: ["DOCS", "CHROMA", "LLAMA"] },
  video: { label: "GENERATIVE VIDEO", title: "Prompt to cinematic output.", nodes: ["PROMPT", "BEDROCK", "VIDEO"] },
  pipeline: { label: "MEDIA PIPELINE", title: "Long-form into shorts.", nodes: ["AUDIO", "WHISPER", "CLIP"] },
  vision: { label: "COMPUTER VISION", title: "Faces in. Attendance logged.", nodes: ["CAMERA", "YOLO", "REPORT"] },
  finance: { label: "FINANCE PLATFORM", title: "Spend, insight, reports.", nodes: ["LEDGER", "FINBERT", "PDF"] },
  ledger: { label: "SECURE VOTING", title: "Votes chained and auditable.", nodes: ["BALLOT", "HASH", "AUDIT"] },
  nlp: { label: "NLP CLASSIFIER", title: "Free text to personality type.", nodes: ["TEXT", "BERT", "MBTI"] },
  ops: { label: "WORKSHOP OPS", title: "Jobs, inventory, invoices.", nodes: ["JOB", "STOCK", "INVOICE"] },
  xr: { label: "XR LAB", title: "Safe chemistry in VR.", nodes: ["QUEST", "PHYSICS", "LAB"] },
  world: { label: "3D ADVENTURE", title: "A garden civilization restored.", nodes: ["EXPLORE", "SURVIVE", "RESTORE"] },
  studio: { label: "IMAGE → 3D", title: "Sketches become GLTF models.", nodes: ["IMAGE", "SD", "THREE"] },
  hardhat: { label: "AI + IOT / FYP", title: "Helmet telemetry into AI risk.", nodes: ["SENSORS", "LORA", "AI RISK"] },
  guide: { label: "EDGE AI / FYP", title: "Path-only collision, not full FOV.", nodes: ["YOLO", "DEPTH", "ENVELOPE"] },
};

export function ProjectVisual({ project }: { project: Project }) {
  const scene = scenes[project.visual] ?? scenes.rag;

  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="visual-window">
        <div className="visual-topbar">
          <span />
          <span />
          <span />
          <small>AISYNTAX / STUDIO</small>
        </div>
        <div className="visual-content">
          <div className="visual-label">{scene.label}</div>
          <div className="visual-title">{scene.title}</div>
          <div className="visual-node-row">
            {scene.nodes.map((node, index) => (
              <span key={node}>
                {index > 0 ? <i aria-hidden="true" /> : null}
                <em>{node}</em>
              </span>
            ))}
          </div>
          <div className="visual-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
