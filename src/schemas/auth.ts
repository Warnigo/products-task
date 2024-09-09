import * as z from 'zod'
import { usernameRegex } from './regex'

export const usernameSchema = z.string().regex(usernameRegex, {
  message:
    'Username must be 3-16 characters long and can include letters, numbers, underscores, and hyphens.',
})

export const passwordSchema = z
  .string({ required_error: 'Password is required' })
  .trim()
  .min(3, 'Password must be at least 3 characters long.')
