import styled from 'styled-components'
import { useState } from 'react'
import { FaFilm, FaHome, FaPlusSquare } from 'react-icons/fa'
import { ItemNav } from './ItemNav'

export const NavMenu = () => {
  const [visibeInput, changeVisible] = useState(false)
  const toggleVisible = () => changeVisible(!visibeInput)

  return (
    <Container>
      <ul>
        <ItemNav title='Home' icon={<FaHome size={12} />} />
        <ItemNav title='Favorites' icon={<FaPlusSquare size={12} />} />
      </ul>
    </Container>
  )
}

const Container = styled.nav`
  width: 91%;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    li {
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`
