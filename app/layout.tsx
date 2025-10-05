// app/layout.tsx
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { Exo_2 } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

const exo2 = Exo_2({
  weight: ["400", "600", "700"], // доступні товщини
  subsets: ["latin", "cyrillic"], // підтримка укр/пл/англ
  display: "swap",
});

export const metadata = {
  title: "Dream Car",
  description: "Professional car repair",
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