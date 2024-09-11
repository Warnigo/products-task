import * as z from 'zod'
import { todoRegex } from './regex'

export const todoSchema = z.string().regex(todoRegex, {
  message:
    'Todo must be 3-16 characters long and can include letters, numbers, underscores, and hyphens.',
})
