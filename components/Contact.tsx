import { ContactForm } from "@/components/ContactForm";
import { company, mailtoHref, whatsappContacts } from "@/lib/site";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-layout">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-heading">Tell us about the system you need.</h2>
          <p>
            Share the problem, the constraints, and the outcome you need. We will follow up
            at {company.email}.
          </p>
          <ul className="contact-channels">
            <li>
              <span>Email</span>
              <a href={mailtoHref}>{company.email}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                {company.name}
              </a>
            </li>
            {whatsappContacts.map((contact) => (
              <li key={contact.e164}>
                <span>WhatsApp</span>
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  {contact.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
