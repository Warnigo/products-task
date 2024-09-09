import { X } from 'lucide-react'

export interface ClearAdornmentProps {
  isVisibleClearButton: boolean
  onClear?: VoidFunction
}

export const ClearAdornment = ({ isVisibleClearButton, onClear }: ClearAdornmentProps) => {
  if (!isVisibleClearButton) return null

  return (
    <button type="button" onClick={onClear} className="absolute right-2 top-1/2 -translate-y-1/2">
      <X className="size-4 hover:text-primary" />
    </button>
  )
}
