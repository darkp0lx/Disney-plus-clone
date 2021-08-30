import styled from 'styled-components'

export const Title = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;

  text-align: center;
  position: absolute;
  bottom: -10px;
  h2 {
    width: 100%;
    text-shadow: 2px 1px 1px #040404;
  }
`
