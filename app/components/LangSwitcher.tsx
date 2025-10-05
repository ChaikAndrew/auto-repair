"use client";
import Link from "next/link";

export default function LangSwitcher() {
  const setLang = (lang: "pl" | "en" | "ua") => {
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  return (
    <div className="lang-switch">
      <Link href="/pl" className="nav__link" onClick={() => setLang("pl")}>PL</Link>
      <Link href="/en" className="nav__link" onClick={() => setLang("en")}>EN</Link>
      <Link href="/ua" className="nav__link" onClick={() => setLang("ua")}>UA</Link>
    </div>
  );
}