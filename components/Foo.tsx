import styled from 'styled-components'
import useHelloQuery from '../hooks/useHelloQuery'

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
  const helloQuery = useHelloQuery()

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
      {renderHello()}
    </Wrapper>
  )
}

export default Foo
