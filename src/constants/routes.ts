export const PUBLIC_ROUTES = {
  login: '/login',
}

export const PROTECTED_ROUTES = {
  home: '/',
  profile: '/me',
}

export const PUBLIC_ROUTES_VALUES = Object.values(PUBLIC_ROUTES)
export const PROTECTED_ROUTES_VALUES = Object.values(PROTECTED_ROUTES)

export const ROUTES = {
  ...PUBLIC_ROUTES,
  ...PROTECTED_ROUTES,
}
