import { useCallback, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CircleX } from 'lucide-react'
import { Spinner } from '@/components'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useGetAllProductCategory } from '@/shared/query-hooks'

type Props = {
  categoryValue: string
  setCategoryValue: (value: string) => void
}

export const Categories = ({ categoryValue, setCategoryValue }: Props) => {
  const { data, isLoading } = useGetAllProductCategory()
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get('category') ?? ''
  const router = useRouter()

  const handleClick = (value: string) => {
    setCategoryValue(value === categoryValue ? '' : value)
  }

  const updateSearchParams = useCallback(
    (value: string) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString() ?? '')

      if (value) {
        newSearchParams.set('category', value)
      } else {
        newSearchParams.delete('category')
      }
      router.push(`${ROUTES.products}?${newSearchParams.toString()}`)
    },
    [router, searchParams],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryValue !== searchQuery) {
        updateSearchParams(categoryValue)
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [categoryValue, searchQuery, updateSearchParams])

  const handleSearch = (value: string) => {
    setCategoryValue(value)
  }

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div className="flex items-center gap-3 overflow-x-auto overflow-y-hidden pb-5">
      {data.map((item: string) => (
        <Button
          key={item}
          variant={item === categoryValue ? 'default' : 'outline'}
          onClick={() => handleClick(item)}
          className="flex gap-2"
        >
          <span>{item}</span>
          {item === categoryValue && <CircleX className="size-5" />}
        </Button>
      ))}
    </div>
  )
}
