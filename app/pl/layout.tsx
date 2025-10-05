// app/pl/layout.tsx
import "../globals.css";
import Topbar from "../components/Topbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dream-car-auto.vercel.app"),
  title: {
    default:
      "Dream Car – Mechanik Wrocław | Diagnostyka, hamulce, klimatyzacja",
    template: "%s | Dream Car Wrocław",
  },
  description:
    "Serwis samochodowy we Wrocławiu: diagnostyka komputerowa, wymiana oleju, hamulce, zawieszenie, klimatyzacja. Szybko, uczciwie i z gwarancją.",
  keywords: [
    "mechanik Wrocław",
    "serwis samochodowy",
    "diagnostyka",
    "wymiana oleju",
    "hamulce",
    "klimatyzacja",
    "zawieszenie",
    "Dream Car",
  ],
  alternates: {
    canonical: "/pl",
    languages: {
      pl: "/pl",
      en: "/en",
      uk: "/ua",
    },
  },
  openGraph: {
    type: "website",
    url: "https://dream-car-auto.vercel.app/pl",
    siteName: "Dream Car – Mechanik Wrocław",
    locale: "pl_PL",
    title: "Dream Car – Mechanik Wrocław",
    description:
      "Serwis samochodowy we Wrocławiu: diagnostyka, hamulce, klimatyzacja, zawieszenie.",
    images: [
      {
        url: "/favicon/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Dream Car Wrocław",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Car – Mechanik Wrocław",
    description:
      "Serwis samochodowy: diagnostyka, hamulce, klimatyzacja, wymiana oleju.",
    images: ["/favicon/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon.svg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar locale="pl" />
      {children}
      <footer className="footer" role="contentinfo">
        <div className="container">© {new Date().getFullYear()} Dream Car</div>
      </footer>
    </>
  );
}