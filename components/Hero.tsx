import Image from "next/image";
import { BookCallButton } from "@/components/BookCallButton";
import { company, whatsappContacts } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-fx" aria-hidden="true">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-grid" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {company.name} · Production AI · Automation · Infrastructure
        </p>
        <h1>
          Automate. Optimize.
          <span> Scale With AI.</span>
        </h1>
        <p className="hero-kicker">{company.tagline}</p>
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
          Book a call on WhatsApp:{" "}
          {whatsappContacts.map((contact, index) => (
            <span key={contact.e164}>
              {index > 0 ? " · " : null}
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                {contact.display}
              </a>
            </span>
          ))}
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-frame">
          <Image
            src="/brand/banner.jpeg"
            alt="AISyntax Studio — precision code and intelligent systems"
            width={1200}
            height={675}
            className="hero-banner"
            priority
          />
        </div>
      </div>
    </section>
  );
}
