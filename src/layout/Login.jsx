import styled from 'styled-components'

import { SiGmail } from 'react-icons/si'
import { FaFacebookSquare } from 'react-icons/fa'
import { useUser } from '../hooks/useUser'
import Img from 'react-cool-img'
export const Login = () => {
  const { user, SignInFacebook, signInGmail } = useUser()

  return (
    <Container>
      <Img className='logo' src='/images/logo.svg' />
      <h2>Registrate Con Nosotros</h2>
      <ButtonSignUp onClick={SignInFacebook}>
        Regístrate con:
        <FaFacebookSquare size={30} />
      </ButtonSignUp>
      <ButtonSignUp onClick={signInGmail}>
        Regístrate con:
        <SiGmail size={30} />
      </ButtonSignUp>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 120px;
  }
`
const ButtonSignUp = styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  svg {
    margin-left: 5px;
  }
`
