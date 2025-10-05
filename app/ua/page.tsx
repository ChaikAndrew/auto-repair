import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HeroCTA from "../components/HeroCTA";
import ReviewsSection from "../components/ReviewsSection";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Hero
        title="Dream Car — автосервіс у Вроцлаві"
        sub="Швидко, чесно, надійно. Повна діагностика, підвіска, гальма, кондиціонер, електрика — ремонтуємо, щоб їздило без нервів."
      >
        <HeroCTA locale="ua" />
      </Hero>

      {/* ABOUT */}
      <section className="container about">
        <h2>Хто ми</h2>
<p>
  У Dream Car ми віримо, що якісний сервіс починається з поваги до клієнта.  
  Ми пояснюємо кожен крок простою мовою, показуємо зношені деталі та завжди пропонуємо кілька варіантів ремонту.  
  Для нас важливо, щоб ви почувалися впевнено й знали, що ваш автомобіль у надійних руках.  
  Ми не шукаємо «тимчасових рішень» — ми робимо все, щоб машина їздила довго й безпечно.  
  Приїжджайте і переконайтеся: чесність, швидкість і професіоналізм — це не реклама, а наш стандарт.
</p>
      </section>

      {/* CONTACT + MAP */}
      <section className="container contact-grid" id="booking">
        <div className="contact-card">
          <h3>Контакт</h3>
          <p><strong>Адреса:</strong> Krzemieniecka 110, 54-613 Wrocław</p>
          <p><strong>Телефон:</strong> <a href="tel:+48577561957">+48 577 561 957</a></p>
          <p><strong>Години:</strong> Пн–Пт 09:00–18:00, Сб 09:00–14:00</p>
        </div>
        <div className="map-card">
          <div className="map-wrap">
            <iframe
              title="Dream Car — мапа"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.679144174791!2d16.9556376540062!3d51.09340110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc1d6c9f7936b%3A0xee105c29711df01f!2sDream%20Car!5e1!3m2!1sru!2sus!4v1759518683787!5m2!1sru!2sus"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FORM */}
      <Contact locale="ua" />

       {/* REVIEWS */}
            <ReviewsSection locale="ua"/>
    </main>
  );
}