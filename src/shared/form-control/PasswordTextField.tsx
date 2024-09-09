'use client'

import { InputHTMLAttributes, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui'
import { cn } from '@/lib'
import { TextField } from './TextField'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const PasswordTextField = ({ name, className, ...restProps }: Props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const inputType = isPasswordVisible ? 'text' : 'password'

  const handlePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="relative">
      <TextField
        name={name}
        type={inputType}
        className={cn('pr-10', className)}
        {...restProps}
        isClearableField={false}
      />

      <Button
        type="submit"
        size="icon"
        className="absolute inset-y-0 right-0 flex items-center bg-transparent px-2 text-primary/50 hover:bg-transparent hover:text-primary hover:shadow-xl"
        onClick={handlePasswordVisibility}
      >
        {isPasswordVisible ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
      </Button>
    </div>
  )
}
