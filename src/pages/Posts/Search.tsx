import { Input } from '@/components/ui'
import { useI18n } from '@/locales/client'

const PostSearch = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
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

PostSearch.displayName = 'PostSearch'
export default PostSearch
