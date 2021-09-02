import styled from 'styled-components'

import { SiGmail } from 'react-icons/si'
import { useUser } from '../hooks/useUser'
import Img from 'react-cool-img'
export const Login = () => {
  const { user, signInFacebook, signInGmail } = useUser()

  return (
    <Container>
      <Img className='logo' src='/images/logo.svg' />
      <h2>Identificate Para entrar porfavor 🤞 </h2>
      <ButtonSignUp onClick={signInGmail}>
        ingresa con gmail
        <SiGmail size={40} />
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
  cursor: pointer;
  border-radius: 1em;
  border: 1px solid white;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 1em;
  svg {
    margin-left: 5px;
  }
`
