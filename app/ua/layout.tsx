// app/ua/layout.tsx
import "../globals.css";
import Topbar from "../components/Topbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dream-car-auto.vercel.app"),
  title: {
    default:
      "Dream Car – Автосервіс у Вроцлаві | Діагностика, гальма, кондиціонер",
    template: "%s | Dream Car Вроцлав",
  },
  description:
    "Автосервіс у Вроцлаві: комп’ютерна діагностика, заміна масла, гальмівна система, підвіска, кондиціонер. Надійно, швидко та з гарантією.",
  keywords: [
    "автосервіс Вроцлав",
    "ремонт авто Вроцлав",
    "діагностика авто",
    "заміна масла",
    "гальмівна система",
    "кондиціонер",
    "Dream Car",
  ],
  alternates: {
    canonical: "/ua",
    languages: {
      pl: "/pl",
      en: "/en",
      uk: "/ua",
    },
  },
  openGraph: {
    type: "website",
    url: "https://dream-car-auto.vercel.app/ua",
    siteName: "Dream Car – Автосервіс у Вроцлаві",
    locale: "uk_UA",
    title: "Dream Car – Автосервіс у Вроцлаві",
    description:
      "Автосервіс у Вроцлаві: діагностика, гальма, кондиціонер, заміна масла.",
    images: [
      {
        url: "/favicon/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Dream Car Вроцлав",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Car – Автосервіс у Вроцлаві",
    description:
      "Ремонт авто: діагностика, гальмівна система, кондиціонер, заміна масла.",
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
      <Topbar locale="ua" />
      {children}
      <footer className="footer" role="contentinfo">
        <div className="container">© {new Date().getFullYear()} Dream Car</div>
      </footer>
    </>
  );
}