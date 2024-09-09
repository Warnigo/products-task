import { NextRequest, NextResponse } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'
import { PUBLIC_ROUTES, ROUTES } from './constants'
import { getUserCredentials } from './helpers/utils'

const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru', 'uz'],
  defaultLocale: 'en',
})

export function middleware(request: NextRequest) {
  const userCredentials = getUserCredentials(request)
  const accessToken = userCredentials?.accessToken
  const url = request.nextUrl.clone()

  const [, locale, ...rest] = url.pathname.split('/')
  const path = `/${rest.join('/')}`

  const isPublicPath = Object.values(PUBLIC_ROUTES).includes(path)
  const getRoute = (route: string) => `/${locale}${route}`

  if (!accessToken && !isPublicPath) {
    return NextResponse.redirect(new URL(getRoute(ROUTES.login), request.url))
  } else if (accessToken && isPublicPath) {
    return NextResponse.redirect(new URL(getRoute(ROUTES.home), request.url))
  }

  return i18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
