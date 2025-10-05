export type ServiceItem = {
  slug: string;

  title: string;
  short: string;   // тут пишемо можливі поломки/короткий опис
  cta: string;
  readMore: string;
};
export const servicesEN: ServiceItem[] = [
  { slug:'oil-change',  title:'Oil change', short:'Low oil level, dirty oil, engine noise', cta:'Book now', readMore:'Details' },
  { slug:'brake-repair',  title:'Brake repair', short:'Squeaking, long braking distance, vibration', cta:'Book now', readMore:'Details' },
  { slug:'aircon', title:'A/C service', short:'Weak cooling, bad smell, refrigerant leak', cta:'Book now', readMore:'Details' },
  { slug:'engine-diagnostics',  title:'Engine diagnostics', short:'Check engine light, loss of power, misfire', cta:'Book now', readMore:'Details' },
  { slug:'suspension',  title:'Suspension repair', short:'Knocking noises, uneven tire wear, poor handling', cta:'Book now', readMore:'Details' },
  { slug:'battery',  title:'Battery replacement', short:'Car won’t start, weak lights, old battery', cta:'Book now', readMore:'Details' },
  { slug:'exhaust',  title:'Exhaust system', short:'Loud noise, rust, failed emission test', cta:'Book now', readMore:'Details' },
  { slug:'tires',  title:'Tire service', short:'Puncture, worn tread, vibration at speed', cta:'Book now', readMore:'Details' },
  { slug:'alignment',  title:'Wheel alignment', short:'Car pulls to side, uneven tire wear', cta:'Book now', readMore:'Details' },
  { slug:'lights',  title:'Lighting', short:'Dim or dead bulbs, wiring issues', cta:'Book now', readMore:'Details' },
  { slug:'clutch',  title:'Clutch service', short:'Slipping clutch, hard gear change, burning smell', cta:'Book now', readMore:'Details' },
  { slug:'gearbox',  title:'Gearbox service', short:'Noisy gearbox, gear slipping, oil leaks', cta:'Book now', readMore:'Details' },
  { slug:'cooling',  title:'Cooling system', short:'Overheating, coolant leak, heater not working', cta:'Book now', readMore:'Details' },
  { slug:'fuel-system',  title:'Fuel system', short:'Poor acceleration, high fuel consumption', cta:'Book now', readMore:'Details' },
  { slug:'electrics', title:'Electrical system', short:'Battery drain, warning lights, faulty alternator', cta:'Book now', readMore:'Details' },
  { slug:'filters',  title:'Filter replacement', short:'Bad smell, weak engine power, dirty filters', cta:'Book now', readMore:'Details' },
  { slug:'windscreen',  title:'Windscreen service', short:'Cracks, chips, poor visibility', cta:'Book now', readMore:'Details' },
  { slug:'belts',  title:'Belts & chains', short:'Whistling noise, engine misalignment', cta:'Book now', readMore:'Details' },
  { slug:'ac-cleaning',  title:'A/C cleaning', short:'Unpleasant smell, bacteria growth', cta:'Book now', readMore:'Details' },
  { slug:'inspection',  title:'Inspection prep', short:'Pre-inspection check-up, fix minor issues', cta:'Book now', readMore:'Details' },
];