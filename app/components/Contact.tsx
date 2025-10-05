// app/components/Contact.tsx
"use client";
import { useState } from "react";
import { translations } from "../data/translations";

type Locale = "pl" | "en" | "ua";

function isPhoneValid(p: string) {
  return /^\+?\d{9,15}$/.test(p.replace(/\s|-/g, ""));
}

export default function Contact({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setErrMsg(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    // КЛІЄНТ-САЙД ВАЛІДАЦІЯ
    if (name.length < 2) {
      setErrMsg(
        locale === "pl" ? "Imię jest za krótkie." :
        locale === "en" ? "Name is too short." :
        "Ім’я закоротке."
      );
      setStatus("error");
      return;
    }
    if (!isPhoneValid(phone)) {
      setErrMsg(
        locale === "pl" ? "Nieprawidłowy telefon." :
        locale === "en" ? "Invalid phone number." :
        "Невірний номер телефону."
      );
      setStatus("error");
      return;
    }
    if (message.length < 5) {
      setErrMsg(
        locale === "pl" ? "Wiadomość jest za krótka." :
        locale === "en" ? "Message is too short." :
        "Повідомлення закоротке."
      );
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setErrMsg(data?.error || "Request failed");
        setStatus("error");
      }
    } catch (err) {
      setErrMsg("Network error");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="booking" className="container" style={{ padding: "24px 0" }}>
      <h2 style={{ marginBottom: 16 }}>{t.title}</h2>

      <form className="card"  onSubmit={handleSubmit}>
        <input name="name" placeholder={t.name} required minLength={2} />
        <input
          name="phone"
          placeholder={t.phone}
          required
          inputMode="tel"
          // HTML-патерн (необов’язково, бо перевіряємо в JS)
          pattern="^\+?\d{9,15}$"
          title={
            locale === "pl" ? "Wpisz numer telefonu (9–15 cyfr)" :
            locale === "en" ? "Enter a phone number (9–15 digits)" :
            "Введіть номер телефону (9–15 цифр)"
          }
        />
        <textarea name="message" placeholder={t.desc} rows={4} required minLength={5} />

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? (locale === "pl" ? "Wysyłanie..." : locale === "en" ? "Sending..." : "Надсилаємо...") : t.send}
        </button>

        {status === "ok" && (
          <p style={{ color: "green", marginTop: 12 }}>
            ✅ {
              locale === "pl" ? "Dziękujemy! Skontaktujemy się wkrótce." :
              locale === "en" ? "Thanks! We’ll get back to you soon." :
              "Дякуємо! Ми з вами зв’яжемося найближчим часом."
            }
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", marginTop: 12 }}>
            ❌ {errMsg ??
              (locale === "pl" ? "Coś poszło nie tak." :
               locale === "en" ? "Something went wrong." :
               "Сталася помилка.")}
          </p>
        )}
      </form>
    </section>
  );
}