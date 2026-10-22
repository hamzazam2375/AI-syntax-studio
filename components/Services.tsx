import { services } from "@/lib/site";

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SERVICES</p>
          <h2 id="services-heading">Three ways we ship production AI.</h2>
        </div>
        <p className="section-summary">
          We bridge modern machine learning with resilient enterprise software for
          secure, scalable, high-throughput systems.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="card-top">
              <span>{service.number}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-points">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
