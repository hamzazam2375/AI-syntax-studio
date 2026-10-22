"use client";

import { useEffect, useId, useRef, useState } from "react";
import { whatsappContacts } from "@/lib/site";

type BookCallButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

export function BookCallButton({
  className = "nav-cta",
  variant = "primary",
}: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className={`call-menu ${open ? "is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className={className}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Book a Call
      </button>
      <div id={menuId} className={`call-panel ${variant}`} role="menu">
        <p>Choose a WhatsApp line</p>
        {whatsappContacts.map((contact) => (
          <a
            key={contact.e164}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            {contact.label}
          </a>
        ))}
      </div>
    </div>
  );
}
