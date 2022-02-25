import type { GetServerSideProps, NextPage } from 'next'

import prefetchQueriesOnServer from '@/utils/prefetchQueriesOnServer'
import { prefetchHelloQuery } from '@/hooks/useHelloQuery'

import BasicLayout from '@/layouts/BasicLayout'
import Foo from '@/components/Foo'

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <Foo />
    </BasicLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dehydratedState = await prefetchQueriesOnServer([prefetchHelloQuery])
  return { props: { dehydratedState } }
}

export default Home
