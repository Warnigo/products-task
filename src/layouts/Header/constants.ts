import { ROUTES } from '@/constants'

export const menu = [
  {
    title: 'layout.home',
    link: ROUTES.home,
  },
  {
    title: 'layout.about',
    link: ROUTES.about,
  },
  {
    title: 'layout.contact',
    link: ROUTES.contact,
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
