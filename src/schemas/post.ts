import * as z from 'zod'
import { todoRegex } from './regex'

export const postSchema = z.string().regex(todoRegex, {
  message:
    'Post body must be 3-16 characters long and can include letters, numbers, underscores, and hyphens.',
})
