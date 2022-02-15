import { useState } from 'react'
import styled from 'styled-components'
import useHelloQuery from '@/hooks/useHelloQuery'
import useSubscribeEmailMutation from '@/hooks/useSubscribeEmailMutation'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Foo = () => {
  const [email, setEmail] = useState<string>('')
  const helloQuery = useHelloQuery()

  const subscribeEmailMutation = useSubscribeEmailMutation()

  const handleSubscribe = () => {
    subscribeEmailMutation.mutate(email)
  }

  const renderHello = () => {
    if (helloQuery.isLoading) {
      return <div>Loading...</div>
    }

    if (helloQuery.isError) {
      return <span>{helloQuery.error.message}</span>
    }

    if (helloQuery.isSuccess) {
      return (
        <div>
          <span>{helloQuery.data.name}</span>
          <span>Calvert</span>
        </div>
      )
    }
  }

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <div>
        <label htmlFor="subscribe">Email:</label>
        <input
          id="subscribe"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>subscribe</button>
        {subscribeEmailMutation.isError && <label>Subscribe Fail 😭</label>}
        {subscribeEmailMutation.isLoading && <label>Subscribing...</label>}
        {subscribeEmailMutation.isSuccess && (
          <label>Subscribe Success 📫</label>
        )}
      </div>
      {renderHello()}
    </Wrapper>
  )
}

export default Foo
