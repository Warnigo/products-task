'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Input, InputProps } from '@/components/ui'
import { ClearAdornment } from './ClearAdornment'

export interface RHFTextFieldProps extends InputProps {
  isClearableField?: boolean
  name: string
  onClear?: VoidFunction
}

export const TextField = (props: RHFTextFieldProps) => {
  const isClearableFieldDefault = props.disabled !== true
  const { name, isClearableField = isClearableFieldDefault, onClear, ...restOfProps } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...restOfFieldProps }, fieldState: { error } }) => (
        <div className="w-full">
          <div className="relative">
            <Input
              value={value}
              ref={ref}
              className={`w-full ${error ? 'border-red-500' : ''}`}
              onChange={onChange}
              {...restOfFieldProps}
              {...restOfProps}
            />
            {isClearableField && value && (
              <ClearAdornment
                isVisibleClearButton={!!value}
                onClear={() => {
                  onClear?.()
                  onChange('')
                }}
              />
            )}
          </div>
          {error && <span className="mt-1 text-sm text-red-500">{error.message}</span>}
        </div>
      )}
    />
  )
}
