import { ROUTES } from '@/constants'

export const menu = [
  {
    title: 'layout.todos',
    link: ROUTES.home,
  },
  {
    title: 'layout.posts',
    link: ROUTES.posts,
  },
  {
    title: 'carts',
    link: ROUTES.cards,
  },
] as const

export const switchMode = [
  {
    mode: 'light',
    title: 'Light',
  },
  {
    mode: 'dark',
    title: 'Dark',
  },
  {
    mode: 'system',
    title: 'System',
  },
]

export const switchLang = [
  {
    lang: 'en',
    title: 'English',
  },
  {
    lang: 'ru',
    title: 'Russian',
  },
  {
    lang: 'uz',
    title: 'Uzbek',
  },
]
