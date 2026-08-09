"use client";

import type { MouseEvent, ReactNode } from "react";
import { buildEmailHref } from "./email-link-logic.mjs";

type EmailLinkProps = {
  children: ReactNode;
  className?: string;
  onActivate?: () => void;
};

export default function EmailLink({ children, className, onActivate }: EmailLinkProps) {
  const openEmail = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onActivate?.();

    window.location.href = buildEmailHref();
  };

  return (
    <a className={className} href="#contact" onClick={openEmail}>
      {children}
    </a>
  );
}
