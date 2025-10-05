import Services from "@/components/Services";
import { servicesUA } from "@/data/services-ua";

export default function ServicesPage() {
  return (
    <main className="container" style={{ padding: "24px 0" }}>
      <h1 className="section-title">Послуги</h1>
      <Services items={servicesUA} />
    </main>
  );
}