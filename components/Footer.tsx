import { Logo } from "@/components/Logo";
import { company, mailtoHref, navLinks, whatsappContacts } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a href="#home" className="brand-link">
          <Logo compact />
        </a>
        <p>{company.tagline}</p>
      </div>
      <nav aria-label="Footer">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="footer-meta">
        <a href={mailtoHref}>{company.email}</a>
        <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {whatsappContacts.map((contact) => (
          <a key={contact.e164} href={contact.href} target="_blank" rel="noopener noreferrer">
            {contact.display}
          </a>
        ))}
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
