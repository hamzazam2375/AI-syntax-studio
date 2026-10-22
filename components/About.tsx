import { company } from "@/lib/site";

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2 id="about-heading">{company.name}</h2>
        </div>
      </div>
      <div className="about-grid">
        <article>
          <h3>Mission</h3>
          <p>
            We help enterprises and industry leaders design, deploy, and scale
            production-grade Artificial Intelligence, autonomous automation systems,
            and high-performance backend infrastructure. {company.name} exists to
            turn research-grade capability into systems that hold up under real load.
          </p>
        </article>
        <article>
          <h3>Engineering philosophy</h3>
          <p>
            We bridge modern machine learning with resilient enterprise software.
            Retrieval must be evaluated. Agents must be observable. APIs must be
            secure. Infrastructure must be repeatable. Every engagement is judged
            by whether the system can be operated, extended, and trusted.
          </p>
        </article>
        <article>
          <h3>Capabilities</h3>
          <p>
            RAG architectures, LLM applications, computer vision, multi-agent
            orchestration, FastAPI and Django services, vector databases, MLOps,
            and cloud-native AWS delivery — assembled into secure, scalable,
            high-throughput systems for mission-critical workloads.
          </p>
        </article>
      </div>
    </section>
  );
}
