export const PUBLIC_ROUTES = {
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
}

export const PROTECTED_ROUTES = {
  home: '/',
  profile: '/me',
  posts: '/posts',
  postSingle: '/posts/:id',
  postCreate: '/posts/add',
  usersSingle: '/users/:id',
  cards: '/cards',
  createTodo: '/new',
  singleTodo: '/todo/:id',
}

export const PUBLIC_ROUTES_VALUES = Object.values(PUBLIC_ROUTES)
export const PROTECTED_ROUTES_VALUES = Object.values(PROTECTED_ROUTES)

export const ROUTES = {
  ...PUBLIC_ROUTES,
  ...PROTECTED_ROUTES,
}
