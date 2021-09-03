import styled from 'styled-components'
import { NavMenu } from './NavMenu'
import { UserButton } from './UserButtom'

export const Header = () => {
  return (
    <ContainerNav>
      <Logo src='/images/logo.svg' />
      <NavMenu />
      <UserButton />
    </ContainerNav>
  )
}

const ContainerNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: 55px;
  z-index: 100;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px;
  padding-right: 8px;
  -webkit-box-shadow: 6px 10px 14px -3px rgba(9, 11, 19, 1);
  -moz-box-shadow: 6px 10px 14px -3px rgba(9, 11, 19, 1);
  box-shadow: 6px 10px 14px -3px rgba(9, 11, 19, 1);

  @media ${({ theme }) => theme.device.laptop} {
    padding-right: 15px;
  }
`
const Logo = styled.img`
  width: 100px;
  height: 100%;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
