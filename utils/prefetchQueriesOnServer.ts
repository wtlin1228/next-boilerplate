import { dehydrate, QueryClient } from 'react-query'

type IQueryToFetch = (queryClient: QueryClient) => Promise<unknown>

export default async function prefetchQueriesOnServer(
  queriesToFetch: IQueryToFetch[]
) {
  const queryClient = new QueryClient()
  await Promise.all(
    queriesToFetch.map((queryToFetch) => queryToFetch(queryClient))
  )

  return dehydrate(queryClient)
}
