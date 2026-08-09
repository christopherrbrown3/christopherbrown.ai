"use client";

import { useState } from "react";
import EmailLink from "./email-link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`} onKeyDown={(event) => {
      if (event.key === "Escape") closeMenu();
    }}>
      <button type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}>
        <span>Menu</span><i aria-hidden="true" />
      </button>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <EmailLink onActivate={closeMenu}>Email Chris</EmailLink>
        </nav>
      )}
    </div>
  );
}
