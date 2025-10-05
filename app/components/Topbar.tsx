"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // готові іконки
import LangSwitcher from "./LangSwitcher";

type Locale = "pl" | "en" | "ua";

const t = {
  pl: { services: "Usługi", quote: "Umów wizytę" },
  en: { services: "Services", quote: "Get a quote" },
  ua: { services: "Послуги", quote: "Записатися" },
} as const;

export default function Topbar({ locale }: { locale: Locale }) {
  const L = t[locale];
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        {/* бренд */}
        <Link href={`/${locale}`} className="brand">
          Dream Car
        </Link>

        {/* desktop nav */}
        <nav className="nav">
          <Link href={`/${locale}/services`} className="nav__link">
            {L.services}
          </Link>
          <Link
            href={`/${locale}#booking`}
            className="btn btn-primary nav__cta"
          >
            {L.quote}
          </Link>
          <LangSwitcher />
        </nav>

        {/* burger для мобілки */}
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>

      {/* mobile nav */}
      {open && (
        <div className="mobile-nav">
          <Link
            href={`/${locale}/services`}
            onClick={() => setOpen(false)}
            className="nav__link"
          >
            {L.services}
          </Link>
          <Link
            href={`/${locale}#booking`}
            onClick={() => setOpen(false)}
            className="btn btn-primary mobile-cta"
          >
            {L.quote}
          </Link>
          <div className="mobile-sep" />
          <LangSwitcher />
        </div>
      )}
    </header>
  );
}