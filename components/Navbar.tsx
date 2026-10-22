"use client";

import { useEffect, useId, useState } from "react";
import { BookCallButton } from "@/components/BookCallButton";
import { Logo } from "@/components/Logo";
import { navLinks, whatsappContacts } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand-link" href="#home" aria-label="AISyntax Studio home">
        <Logo />
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <BookCallButton />

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span />
          <span />
        </button>
      </div>

      <div id={menuId} className={`mobile-nav ${open ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <p className="mobile-call-label">Book a Call</p>
        {whatsappContacts.map((contact) => (
          <a key={contact.e164} href={contact.href} target="_blank" rel="noopener noreferrer">
            {contact.label}
          </a>
        ))}
      </div>
    </header>
  );
}
