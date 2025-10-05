// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['pl','en','ua'] as const;
type Locale = typeof LOCALES[number];
const DEFAULT: Locale = 'pl';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // вже з префіксом локалі — пропускаємо
  if (LOCALES.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  // визначаємо мову
  const cookieLang = req.cookies.get('lang')?.value as Locale | undefined;
  const headerLang2 = req.headers.get('accept-language')?.split(',')[0]?.slice(0,2) as Locale | undefined;

  const guess: Locale =
    (cookieLang && LOCALES.includes(cookieLang)) ? cookieLang :
    (headerLang2 && LOCALES.includes(headerLang2)) ? headerLang2 :
    DEFAULT;

  const url = req.nextUrl.clone();
  url.pathname = `/${guess}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

// ⬇️ matcher НЕ чіпає статичні файли: /images/*, favicon, шрифти, будь-які *.ext, _next, api
export const config = {
  matcher: [
    '/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};