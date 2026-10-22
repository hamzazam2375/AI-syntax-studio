import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="approach-section" id="process" aria-labelledby="process-heading">
      <p className="eyebrow">OUR PROCESS</p>
      <h2 id="process-heading">
        Discover → Architect → Build → Deploy → Optimize
      </h2>
      <p className="approach-description">
        A disciplined path from problem framing to production operations, without skipping
        evaluation, security, or the unglamorous work of making systems last.
      </p>
      <div className="process-grid">
        {processSteps.map((step) => (
          <div className="process-item" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
