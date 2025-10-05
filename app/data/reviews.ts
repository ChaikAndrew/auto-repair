// app/data/reviews.ts

export type Locale = "pl" | "en" | "ua";

export type ReviewBase = {
  names: {
    pl: string;
    en: string;
    ua: string;
  };
  rating: 1 | 2 | 3 | 4 | 5;
  texts: {
    pl: string;
    en: string;
    ua: string;
  };
};

export type ReviewUI = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  avatar: string;
};

const RAW: ReviewBase[] = [
  {
    names: { pl: "Dima Vus", en: "Dima Vus", ua: "Діма Вус" },
    rating: 5,
    texts: {
      pl: "Z wyczuciem, z aranżacją — polecam. PS: dzięki za fajną i szybką obsługę.",
      en: "With care and precision — I recommend. PS: thanks for the cool and fast service.",
      ua: "З відчуттям і толком — рекомендую. PS: дякую за класний і швидкий сервіс.",
    },
  },
  {
    names: { pl: "Sergiej Kirilenko", en: "Sergey Kirilenko", ua: "Сергій Кириленко" },
    rating: 5,
    texts: {
      pl: "Wysokiej jakości obsługa! Świetny serwis opon. Wszystko zrobione na 100%. Polecam!",
      en: "High-quality service! Great tire service. Everything done 100%. I recommend!",
      ua: "Якісне обслуговування! Класний шиномонтаж. Усе зроблено на 100%. Рекомендую!",
    },
  },
  {
    names: { pl: "Tolyan Flexer", en: "Tolyan Flexer", ua: "Толян Флексер" },
    rating: 5,
    texts: {
      pl: "Bardzo polecam! Fachowi ludzie, znają się na rzeczy i mają właściwe podejście.",
      en: "Highly recommend! Skilled people who know their job and have the right approach.",
      ua: "Дуже рекомендую! Тямущі люди, чудово знають свою справу і мають правильний підхід.",
    },
  },
  {
    names: { pl: "Chili Palmer", en: "Chili Palmer", ua: "Chili Palmer" },
    rating: 5,
    texts: {
      pl: "Serwis na najwyższym poziomie! Szybko, solidnie, jakościowo. Polecam!",
      en: "Top-level service! Fast, reliable, high quality. I recommend!",
      ua: "Сервіс на найвищому рівні! Швидко, надійно, якісно. Рекомендую!",
    },
  },
  {
    names: { pl: "Sergiej Danileyko", en: "Sergey Danileyko", ua: "Сергій Данілейко" },
    rating: 5,
    texts: {
      pl: "Polecam. Dobry serwis samochodowy.",
      en: "Recommend. Good car service.",
      ua: "Рекомендую. Хороший автосервіс.",
    },
  },
  {
    names: { pl: "Sergiej Kirillow", en: "Sergey Kirillov", ua: "Сергій Кіріллов" },
    rating: 5,
    texts: {
      pl: "Byłem u chłopaków — profesjonalne podejście! Dzięki za szybkość.",
      en: "Visited the guys — professional approach! Thanks for the quick work.",
      ua: "Був у хлопців. Професійний підхід! Дякую за оперативність.",
    },
  },
  {
    names: { pl: "Anatolii Voloboyev", en: "Anatolii Voloboyev", ua: "Анатолій Волобоєв" },
    rating: 5,
    texts: {
      pl: "Najlepszy mechanik — Dmytro!",
      en: "Best mechanic — Dmytro!",
      ua: "Найкращий механік — Дмитро!",
    },
  },
  {
    names: { pl: "Roman Boiko", en: "Roman Boiko", ua: "Роман Бойко" },
    rating: 5,
    texts: {
      pl: "Polecam — robią jakościowo.",
      en: "Recommend — they work with quality.",
      ua: "Раджу — роблять якісно.",
    },
  },
  {
    names: { pl: "Sergeymars Marchenko", en: "Sergeymars Marchenko", ua: "Сергій Марченко" },
    rating: 5,
    texts: {
      pl: "Polecam, dobra robota.",
      en: "Recommend, good work.",
      ua: "Рекомендую, гарна робота.",
    },
  },
  {
    names: { pl: "Oleksii Veselkin", en: "Oleksii Veselkin", ua: "Олексій Веселкін" },
    rating: 5,
    texts: {
      pl: "Po raz kolejny świetna obsługa: profesjonalnie i sprawnie. Polecam tym, którzy szukają stabilnie wysokiego poziomu.",
      en: "Once again, excellent service: professional and swift. I recommend it to anyone seeking consistently high standards.",
      ua: "Ще раз вражений сервісом: професійно й швидко. Рекомендую тим, хто шукає стабільно високий рівень.",
    },
  },
  {
    names: { pl: "Karl Paloff", en: "Karl Paloff", ua: "Карл Палофф" },
    rating: 5,
    texts: {
      pl: "Serwisuję u Dmytra nie pierwszy samochód (min. 3). Spokojnie powierzam mu Porsche — praca zawsze na najwyższym poziomie. Dba o cały stan auta, nie raz pomogło to uniknąć droższych napraw.",
      en: "I’ve serviced more than one car with Dmytro (at least 3). I trust him with my Porsche — work is always top-level. He cares about the whole car’s condition, which helped me avoid costly repairs more than once.",
      ua: "Обслуговую у Дмитра вже не перше авто (щонайменше 3). Спокійно довіряю йому свій Porsche — робота завжди на найвищому рівні. Дбає про загальний стан авто, не раз це допомагало уникнути дорогих ремонтів.",
    },
  },
  {
    names: { pl: "Agata", en: "Agata", ua: "Agata" },
    rating: 5,
    texts: {
      pl: "Jako kobieta zostałam potraktowana poważnie. Dmytro wszystko wyjaśnił i pokazał (linka sprzęgła, filtry, olej). Obsługa szybka — 2 dni. Będę wracać na przeglądy.",
      en: "As a woman, I was treated seriously. Dmytro explained and showed everything (clutch cable, filters, oil). Service was quick — 2 days. I’ll come back for check-ups.",
      ua: "Мене сприйняли серйозно. Дмитро все пояснив і показав (трос зчеплення, фільтри, олива). Обслуговування швидке — 2 дні. Повернуся на огляди.",
    },
  },
  {
    names: { pl: "Yurii Zlydenko", en: "Yurii Zlydenko", ua: "Юрій Злиденко" },
    rating: 5,
    texts: {
      pl: "Bardzo profesjonalny serwis z indywidualnym podejściem do klienta. Polecam Dream Car!",
      en: "Very professional service with an individual approach. Recommend Dream Car!",
      ua: "Дуже професійний автосервіс з індивідуальним підходом. Рекомендую Dream Car!",
    },
  },
  {
    names: { pl: "Dima Horodiskiy", en: "Dima Horodiskiy", ua: "Діма Городіський" },
    rating: 5,
    texts: {
      pl: "Dobre miejsce — pracują profesjonaliści, szybko i rzeczowo. Doradzają i dobierają optymalny sposób naprawy w rozsądnej cenie.",
      en: "Good place — professionals work here, fast and to the point. They advise and choose the optimal repair method at a fair price.",
      ua: "Гарне місце — працюють професіонали, швидко і по суті. Консультують і підбирають оптимальний спосіб ремонту за розумною ціною.",
    },
  },
  {
    names: { pl: "Ivan P", en: "Ivan P", ua: "Іван P" },
    rating: 5,
    texts: {
      pl: "Bardzo dobra diagnostyka i naprawa. Pan Dmytro znalazł wszystkie drobiazgi; co mógł, naprawił sam — to obniżyło koszt części. Po czyszczeniu układu wydechu auto jedzie lżej.",
      en: "Very good diagnostics and repair. Dmytro found all the little issues; fixed what he could himself — lowering parts cost. After exhaust system cleaning, the car drives lighter.",
      ua: "Дуже добра діагностика і ремонт. Дмитро знайшов усі дрібниці; що міг — полагодив сам, зменшивши вартість запчастин. Після чищення вихлопної системи авто поїхало легше.",
    },
  },
  {
    names: { pl: "Roman Pichkurov", en: "Roman Pichkurov", ua: "Роман Пічкуров" },
    rating: 5,
    texts: {
      pl: "Bardzo dobry serwis. Indywidualne podejście, wysoka jakość. Świetne porady co do części (cena/jakość). Wreszcie znalazłem człowieka, któremu można spokojnie oddać kluczyki.",
      en: "Very good service. Individual approach, high quality. Great advice on parts (price/quality). Finally found a person I can safely hand the keys to.",
      ua: "Дуже гарний сервіс. Індивідуальний підхід, висока якість. Класні поради щодо запчастин (ціна/якість). Нарешті знайшов людину, якій можна спокійно віддати ключі.",
    },
  },
  {
    names: { pl: "Sylwester “Bolo” Żukowski", en: "Sylwester “Bolo” Żukowski", ua: "Сильвестр «Боло» Жуковський" },
    rating: 5,
    texts: {
      pl: "Najlepszy i bardzo uczciwy mechanik w mieście. Naprawia tylko to, co zepsute — bez naciągania. Super warsztat, super mechanik. Polecam!",
      en: "The best and very honest mechanic in the city. Fixes only what’s broken — no upselling. Great workshop, great mechanic. Recommend!",
      ua: "Найкращий і дуже чесний механік у місті. Ремонтує тільки те, що зламано — без накручувань. Чудова майстерня, відмінний механік. Рекомендую!",
    },
  },
  {
    names: { pl: "Vitalii Khameliuk", en: "Vitalii Khameliuk", ua: "Віталій Хамелюк" },
    rating: 5,
    texts: {
      pl: "Szybko i profesjonalnie. Zdecydowanie polecam!",
      en: "Fast and professional. Definitely recommend!",
      ua: "Швидко і професійно. Однозначно рекомендую!",
    },
  },
];

const AVATAR_BG = "0f1113";
const AVATAR_COLOR = "fff";

export function getReviewsByLocale(locale: Locale): ReviewUI[] {
  return RAW.map((r) => {
    const localName = r.names[locale];
    return {
      name: localName,
      rating: r.rating,
      text: r.texts[locale],
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        localName
      )}&background=${AVATAR_BG}&color=${AVATAR_COLOR}`,
    };
  });
}