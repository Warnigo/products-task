import { PropsWithChildren, ReactNode } from 'react'
import { cn } from '@/lib'
import { CustomFormLabel, CustomFormLabelProps } from './CustomFormLabel'

interface Props extends PropsWithChildren {
  labelProps?: CustomFormLabelProps
  label: ReactNode
  className?: string
}

export const FormControlField = ({ label, labelProps, children, className }: Props) => (
  <div className="w-full">
    <CustomFormLabel {...labelProps} className={cn('pb-2 pl-2', className)}>
      {label}
    </CustomFormLabel>

    {children}
  </div>
)
