import { NextRequest } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru', 'uz'],
  defaultLocale: 'en',
})

export function middleware(request: NextRequest) {
  return i18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
