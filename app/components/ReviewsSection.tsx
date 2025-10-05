// app/components/ReviewsSection.tsx
"use client";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviewsByLocale, type Locale, type ReviewUI } from "../data/reviews";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// i18n для заголовка
const TITLES: Record<Locale, string> = {
  pl: "Opinie klientów",
  en: "Customer reviews",
  ua: "Відгуки клієнтів",
};

export default function ReviewsSection({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState<ReviewUI[]>([]);

  useEffect(() => {
    const data = getReviewsByLocale(locale);
    setVisible(shuffle(data).slice(0, 6));
  }, [locale]);

  return (
    <section className="container reviews-section" style={{ padding: "24px 0" }}>
      <h2 className="reviews-title">{TITLES[locale]}</h2>
      <div className="reviews-grid">
        {visible.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </section>
  );
}