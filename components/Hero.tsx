import { BookCallButton } from "@/components/BookCallButton";
import { HeroVisual } from "@/components/HeroVisual";
import { company, whatsappContacts } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{company.name}</p>
        <h1>
          Automate. Optimize.
          <em>Scale With AI.</em>
        </h1>
        <p className="hero-description">
          We help enterprises and industry leaders design, deploy, and scale
          production-grade artificial intelligence, autonomous automation systems,
          and high-performance backend infrastructure.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore Our Work
          </a>
          <BookCallButton className="button-secondary" variant="secondary" />
        </div>
        <p className="hero-call-note">
          WhatsApp{" "}
          {whatsappContacts.map((contact, index) => (
            <span key={contact.e164}>
              {index > 0 ? " / " : null}
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                {contact.display}
              </a>
            </span>
          ))}
        </p>
      </div>

      <div className="hero-visual">
        <HeroVisual />
        <p className="hero-kicker">{company.tagline}</p>
      </div>
    </section>
  );
}
