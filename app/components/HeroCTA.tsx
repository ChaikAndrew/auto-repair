import Link from "next/link";

type Locale = "pl" | "en" | "ua";

const labels: Record<Locale, { primary: string; secondary: string }> = {
  pl: { primary: "UMÓW WIZYTĘ", secondary: "USŁUGI" },
  en: { primary: "BOOK NOW", secondary: "SERVICES" },
  ua: { primary: "ЗАПИСАТИСЯ", secondary: "ПОСЛУГИ" },
};

export default function HeroCTA({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <div className="hero-actions">
      <Link href={`/${locale}#booking`} className="btn btn-primary">
        {t.primary}
      </Link>
      <Link href={`/${locale}/services`} className="btn btn-outline">
        {t.secondary}
      </Link>
    </div>
  );
}