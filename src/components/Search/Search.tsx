import { Input } from '@/components/ui'
import { useI18n } from '@/locales/client'

type Props = {
  value: string
  onChange: (value: string) => void
}

export const Search = ({ value, onChange }: Props) => {
  const t = useI18n()

  return (
    <div className="w-full">
      <Input
        placeholder={t('search')}
        className="w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

Search.displayName = 'Search'
