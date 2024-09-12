import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  label: string
  value: string | number
}

export const InfoItem = ({ icon, label, value }: Props) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
)
