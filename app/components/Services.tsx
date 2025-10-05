// app/components/Services.tsx
import type { ServiceItem } from "../data/services-en";
import {
  Wrench,
  Car,
  Snowflake,
  Gauge,
  Battery,
  Wind,
  AlertCircle,
  Lightbulb,
  Hammer,
  Cog,
  Settings,
  Thermometer,
  Fuel,
  Zap,
  Filter,
  Shield,
  Layers,
  Sparkles,
  ClipboardList,
} from "lucide-react";

const iconBySlug: Record<string, React.ElementType> = {
  "oil-change": Wrench,         
  "brake-repair": Hammer,
  "aircon": Snowflake,
  "engine-diagnostics": Gauge,
  "suspension": Car,
  "battery": Battery,
  "exhaust": Wind,
  "tires": AlertCircle,          
  "alignment": ClipboardList,
  "lights": Lightbulb,
  "clutch": Cog,
  "gearbox": Settings,
  "cooling": Thermometer,
  "fuel-system": Fuel,
  "electrics": Zap,
  "filters": Filter,
  "windscreen": Shield,          
  "belts": Layers,
  "ac-cleaning": Sparkles,
  "inspection": ClipboardList,
};

export default function Services({ items }: { items: ServiceItem[] }) {
  return (
    <section className="container services">
      
      <div className="services-grid">
        {items.map((s) => {
          const Icon = iconBySlug[s.slug] ?? Wrench;
          return (
            <div key={s.slug} className="service-card">
              <div className="icon-wrap"><Icon size={22} /></div>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}