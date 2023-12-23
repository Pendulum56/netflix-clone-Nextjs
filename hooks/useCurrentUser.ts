<<<<<<< HEAD
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}

export default useCurrentUser
=======
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}

export default useCurrentUser
>>>>>>> e892d88 (favorite list)
