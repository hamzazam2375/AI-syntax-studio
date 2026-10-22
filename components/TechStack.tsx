import { techStack } from "@/lib/site";

export function TechStack() {
  return (
    <section className="section tech-section" aria-labelledby="tech-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TECHNOLOGY STACK</p>
          <h2 id="tech-heading">The systems we build with.</h2>
        </div>
        <p className="section-summary">
          Tools we use across machine learning, backend engineering, and cloud-native delivery.
          These are capabilities, not partnership claims.
        </p>
      </div>
      <div className="tech-grid">
        {techStack.map((group) => (
          <article className="tech-card" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
