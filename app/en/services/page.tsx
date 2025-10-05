import Services from "@/components/Services";
import { servicesEN } from "@/data/services-en";

export default function ServicesPage() {
  return (
    <main className="container" style={{ padding: "24px 0" }}>
      <h1 className="section-title">Services</h1>
      <Services items={servicesEN} />
    </main>
  );
}