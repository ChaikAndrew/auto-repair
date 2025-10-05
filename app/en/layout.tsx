// app/en/layout.tsx
import "../globals.css";
import Topbar from "../components/Topbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dream-car-auto.vercel.app"),
  title: {
    default: "Dream Car – Car repair Wrocław | Diagnostics, brakes, A/C",
    template: "%s | Dream Car Wrocław",
  },
  description:
    "Car repair service in Wrocław: computer diagnostics, oil change, brakes, suspension, air conditioning. Fast, fair and guaranteed.",
  keywords: [
    "car repair Wrocław",
    "mechanic Wrocław",
    "diagnostics",
    "oil change",
    "brakes",
    "air conditioning",
    "suspension",
    "Dream Car",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      pl: "/pl",
      en: "/en",
      uk: "/ua",
    },
  },
  openGraph: {
    type: "website",
    url: "https://dream-car-auto.vercel.app/en",
    siteName: "Dream Car – Car repair Wrocław",
    locale: "en_US",
    title: "Dream Car – Car repair Wrocław",
    description:
      "Professional car repair in Wrocław: diagnostics, brakes, suspension, A/C.",
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
    title: "Dream Car – Car repair Wrocław",
    description:
      "Car service in Wrocław: diagnostics, brakes, oil change, A/C, suspension.",
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
      <Topbar locale="en" />
      {children}
      <footer className="footer" role="contentinfo">
        <div className="container">© {new Date().getFullYear()} Dream Car</div>
      </footer>
    </>
  );
}