import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HeroCTA from "../components/HeroCTA";
import ReviewsSection from "../components/ReviewsSection";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Hero
        title="Dream Car — auto repair in Wrocław"
        sub="Fast, honest, reliable. Full diagnostics, suspension, brakes, A/C, electrics — we fix so you drive without stress."
      >
        <HeroCTA locale="en" />
      </Hero>

      {/* ABOUT */}
      <section className="container about">
     <h2>Who we are</h2>
<p>
  At Dream Car, we believe that true service starts with trust and respect.  
  We explain everything in plain language, show you the worn-out parts, and always suggest the best repair options.  
  Our priority is your confidence — knowing your car is in safe hands.  
  We don’t go for “quick fixes” — we work to make sure your vehicle runs smoothly, reliably, and for a long time.  
  Come and see for yourself: honesty, speed, and professionalism are our standard, not just a slogan.
</p>
      </section>

      {/* CONTACT + MAP */}
      <section className="container contact-grid" id="booking">
        <div className="contact-card">
          <h3>Contact</h3>
          <p>
            <strong>Address:</strong> Krzemieniecka 110, 54-613 Wrocław
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+48577561957">+48 577 561 957</a>
          </p>
          <p>
            <strong>Hours:</strong> Mon–Fri 09:00–18:00, Sat 09:00–14:00
          </p>
        </div>
        <div className="map-card">
          <div className="map-wrap">
            <iframe
              title="Dream Car — map"
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

      {/* FORM */}
      <Contact locale="en" />
      {/* REVIEWS */}
      <ReviewsSection locale="en"/>
    </main>
  );
}
