// app/components/Hero.tsx
"use client";
import { useEffect, useState, type ReactNode } from "react";

const SLIDES = ["/images/car1.jpg", "/images/car2.jpg", "/images/car3.jpg", "/images/car4.jpg"];

export default function Hero({
  title,
  sub,
  children
}: {
  title: string;
  sub: string;
  children?: ReactNode;
}) {
  const [index, setIndex] = useState(0);

  // Автосвайп
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Прелоад — ТІЛЬКИ в браузері
  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="landing-hero">
      {/* фонові слайди */}
      <div className="slides">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* контент поверх */}
      <div className="landing-hero__inner container">
        <h1>{title}</h1>
        <p>{sub}</p>
        {children}
      </div>
    </section>
  );
}