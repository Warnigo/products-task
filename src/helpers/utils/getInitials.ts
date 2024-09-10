export const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
