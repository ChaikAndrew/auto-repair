// app/layout.tsx
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { Exo_2 } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

const exo2 = Exo_2({
  weight: ["400", "600", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Dream Car – Autoserwis Wrocław / Автосервіс Вроцлав",
    template: "%s | Dream Car",
  },
  description:
    "Autoserwis Dream Car we Wrocławiu – wymiana oleju, hamulce, klimatyzacja, diagnostyka. Професійний автосервіс у Вроцлаві: заміна масла, гальма, кондиціонер, діагностика.",
  keywords: [
    // польською
    "autoserwis Wrocław",
    "warsztat samochodowy Wrocław",
    "naprawa samochodów Wrocław",
    "wymiana oleju Wrocław",
    "hamulce Wrocław",
    "klimatyzacja Wrocław",
    "diagnostyka samochodowa Wrocław",
    "Dream Car Wrocław",

    // українською
    "автосервіс Вроцлав",
    "СТО Вроцлав",
    "ремонт авто Вроцлав",
    "заміна масла Вроцлав",
    "гальмівна система Вроцлав",
    "діагностика авто Вроцлав",
    "Dream Car Вроцлав",

    // англійською
    "car repair Wroclaw",
    "auto service Wroclaw",
    "oil change Wroclaw",
    "brakes Wroclaw",
    "car diagnostics Wroclaw",
  ],

  icons: {
    icon: "/favicon/favicon.svg", 
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/favicon.svg",
  },
  openGraph: {
    title: "Dream Car – Autoserwis Wrocław / Автосервіс Вроцлав",
    description:
      "Profesjonalny serwis samochodowy we Wrocławiu. Autoserwis Dream Car: olej, hamulce, klimatyzacja, diagnostyka. Професійний сервіс авто у Вроцлаві для українців і поляків.",
    url: "https://dream-car-auto.vercel.app",
    siteName: "Dream Car Wrocław",
    images: [
      {
        url: "/images/car1.jpg",
        width: 1200,
        height: 630,
        alt: "Dream Car – serwis samochodowy Wrocław",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://dream-car-auto.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={exo2.className} suppressHydrationWarning>
        <HeroUIProvider>
          <div id="app-root">
            {children}
            <ScrollToTop />
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}