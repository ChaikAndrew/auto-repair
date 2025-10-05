import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HeroCTA from "../components/HeroCTA";   // 👈 підключаємо кнопки
import ReviewsSection from "../components/ReviewsSection";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Hero
        title="Dream Car — serwis samochodowy we Wrocławiu"
        sub="Szybko, uczciwie i solidnie. Pełna diagnostyka, zawieszenie, hamulce, klimatyzacja, elektryka — naprawiamy, żeby jeździło bez nerwów."
      >
        <HeroCTA locale="pl" />   {/* 👈 тепер кнопки тут */}
      </Hero>

      {/* ABOUT */}
      <section className="container about">
       <h2>Kim jesteśmy</h2>
<p>
  W Dream Car wierzymy, że dobry serwis zaczyna się od szacunku do klienta.  
  Tłumaczymy wszystko prostym językiem, pokazujemy zużyte części i zawsze proponujemy kilka opcji naprawy.  
  Najważniejsze jest dla nas, abyś czuł się pewnie i wiedział, że Twój samochód jest w dobrych rękach.  
  Nie szukamy „szybkich rozwiązań” — robimy wszystko, aby auto jeździło długo i bezpiecznie.  
  Przyjedź i przekonaj się: uczciwość, szybkość i profesjonalizm to u nas standard, a nie slogan.
</p>
      </section>

      {/* KONTAKT + MAPA */}
      <section className="container contact-grid" id="booking">
        <div className="contact-card">
          <h3>Kontakt</h3>
          <p><strong>Adres:</strong> Krzemieniecka 110, 54-613 Wrocław</p>
          <p><strong>Telefon:</strong> <a href="tel:+48577561957">+48 577 561 957</a></p>
          <p><strong>Godziny:</strong> Pon–Pt 09:00–18:00, Sob 09:00–14:00</p>
        </div>
        <div className="map-card">
          <div className="map-wrap">
            <iframe
              title="Dream Car — mapa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.679144174791!2d16.9556376540062!3d51.09340110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc1d6c9f7936b%3A0xee105c29711df01f!2sDream%20Car!5e1!3m2!1sru!2sus!4v1759518683787!5m2!1sru!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <Contact locale="pl" />

      {/* REVIEWS */}
      <ReviewsSection locale="pl"/>
    </main>
  );
}