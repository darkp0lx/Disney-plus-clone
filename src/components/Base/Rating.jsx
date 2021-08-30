import { FaStar } from 'react-icons/fa'
import styled from 'styled-components'

export const Rating = ({ vote_average }) => {
  return (
    <Container>
      <FaStar color='yellow' />
      {vote_average}
    </Container>
  )
}
const Container = styled.div`
  font-weight: bold;
  position: absolute;
  top: 3px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 5px;
  background-color: #5d1515;
  width: 35px;
  height: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 2px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 2px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 2px 3px 0px rgba(0, 0, 0, 0.75);
  svg {
    margin-bottom: 3px;
    margin-right: 2px;
  }
`
