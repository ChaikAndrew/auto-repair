import Services from "@/components/Services";
import { servicesPL } from "@/data/services-pl";

export default function ServicesPage() {
  return (
    <main className="container" style={{ padding: "24px 0" }}>
      <h1 className="section-title">Usługi</h1>
      <Services items={servicesPL} />
    </main>
  );
}