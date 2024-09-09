export const getStripLocale = (path: string): string => {
  if (!path) {
    return ''
  }

  const [, , ...rest] = path.split('/')

  return `/${rest.join('/')}`
}
