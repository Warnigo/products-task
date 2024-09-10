import { NextRequest, NextResponse } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'
import { PUBLIC_ROUTES_VALUES, ROUTES } from './constants'
import { getUserCredentials } from './helpers/utils'

const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru', 'uz'],
  defaultLocale: 'en',
})

export function middleware(request: NextRequest) {
  const userCredentials = getUserCredentials(request)
  const accessToken = userCredentials?.token
  const url = request.nextUrl.clone()

  const [, locale, ...rest] = url.pathname.split('/')
  const path = `/${rest.join('/')}`

  const isPublicPath = PUBLIC_ROUTES_VALUES.includes(path)
  const getRoute = (route: string) => `/${locale || 'en'}${route}`

  if (!accessToken && !isPublicPath) {
    url.pathname = getRoute(ROUTES.login)

    return NextResponse.redirect(url)
  } else if (accessToken && isPublicPath) {
    url.pathname = getRoute(ROUTES.home)

    return NextResponse.redirect(url)
  }

  return i18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
