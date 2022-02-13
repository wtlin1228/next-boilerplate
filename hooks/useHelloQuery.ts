import { useQuery } from 'react-query'

interface HelloResponse {
  name: string
}

interface HelloError {
  message: string
}

async function fetchHello(): Promise<HelloResponse> {
  const res = await fetch('api/hello')
  return await res.json()
}

export default function useHelloQuery() {
  return useQuery<HelloResponse, HelloError>('hello', fetchHello)
}
