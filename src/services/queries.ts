import {useQuery} from '@tanstack/react-query'
import { getTodos } from './api'

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}
