import { LabelHTMLAttributes } from 'react'

export interface CustomFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

export const CustomFormLabel = (props: CustomFormLabelProps) => {
  const { isRequired, children, className, ...restOfProps } = props

  return (
    <label className={`block text-sm font-medium ${className}`} {...restOfProps}>
      {children} {isRequired && <span className="text-red-600">*</span>}
    </label>
  )
}
