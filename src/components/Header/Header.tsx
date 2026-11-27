import { useEffect, useRef, useState } from "react";
import { assetUrl } from "../../content/assetUrl";
import { flags } from "../../content/flags";
import { logo } from "../../content/photos";
import { Bar, Menu, MenuButton, Row } from "./Header.styles";
import type { NavLinkItem } from "./Header.types";

const links: NavLinkItem[] = [
  { href: "#prices", label: "Price list" },
  ...(flags.bookingForm ? [{ href: "#book", label: "Request a booking" }] : []),
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <Bar>
      <Row>
        <a href="#top" aria-label="Beanies Pet Services, home">
          <img src={assetUrl(logo.src)} alt={logo.alt} />
        </a>
        <MenuButton
          ref={buttonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          $open={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </MenuButton>
      </Row>
      <Menu
        ref={menuRef}
        id="menu"
        aria-label="Main"
        $open={open}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </Menu>
    </Bar>
  );
}
