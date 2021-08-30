import React from 'react'
import Img from 'react-cool-img'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container>
      <Img height={100} src='/images/logo.svg' />
      <p>© 2021 Disney plus+ clone.Derechos reservados</p>
      <p>Disney+ es una aplicación creada por @hectorDev.</p>
    </Container>
  )
}
const Container = styled.div`
  box-shadow: 6px 10px 14px -3px rgba(9, 11, 19, 1);
  padding: 1em;
  margin-top: 1em;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: white;
    text-align: center;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 100px;
  }
`
