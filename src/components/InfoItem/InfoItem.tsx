import { ReactNode } from 'react'

export const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string | number
}) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
)
