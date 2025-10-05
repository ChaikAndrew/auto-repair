// app/data/translations.ts
export type Locale = "pl" | "en" | "ua";

type T = {
  name: string;
  phone: string;
  desc: string;
  send: string;
  title: string;
  success: string;
  error: string;
};

export const translations: Record<Locale, T> = {
  pl: {
    name: "Imię",
    phone: "Telefon",
    desc: "Opis problemu lub pytanie",
    send: "Wyślij",
    title: "Kontakt / Rezerwacja",
    success: "Dziękujemy! Skontaktujemy się z Tobą wkrótce.",
    error: "Coś poszło nie tak, spróbuj ponownie.",
  },
  en: {
    name: "Name",
    phone: "Phone",
    desc: "Problem description or question",
    send: "Send",
    title: "Contact / Booking",
    success: "Thanks! We’ll get back to you soon.",
    error: "Something went wrong, please try again.",
  },
  ua: {
    name: "Ім'я",
    phone: "Телефон",
    desc: "Опис проблеми або питання",
    send: "Надіслати",
    title: "Контакт / Запис",
    success: "Дякуємо! Ми з вами зв’яжемося найближчим часом.",
    error: "Сталася помилка, спробуйте ще раз.",
  },
};