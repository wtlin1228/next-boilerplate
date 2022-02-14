import { useQuery } from 'react-query'
import { httpGet } from '../utils/http'

interface IHello {
  name: string
}

export default function useHelloQuery() {
  return useQuery<IHello, Error>(['hello'], () => httpGet<IHello>('api/hello'))
}
