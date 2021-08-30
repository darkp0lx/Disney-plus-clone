import styled, { keyframes, css } from 'styled-components'
import { addOpacityToColor } from './utils'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 750px;
  }
  @media ${({ theme }) => theme.device.tabletM} {
    max-width: 800px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    max-width: 1000px;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    max-width: 1100px;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    max-width: 1200px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 1400px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    max-width: 1700px;
  }
  @media ${({ theme }) => theme.device.desktopM} {
    max-width: 1900px;
  }
`

export const Row = styled.div`
  &:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`

export const Col = styled.section`
  display: block;

  @media ${({ theme }) => theme.device.laptop} {
    display: table-cell;
    vertical-align: top;

    ${({ direction }) =>
      direction === 'left' &&
      css`
        padding-left: 1.875rem;
      `}

    ${({ direction }) =>
      direction === 'left' &&
      css`
        width: 30%;
        @media ${({ theme }) => theme.device.laptopL} {
          width: 25%;
        }

        @media ${({ theme }) => theme.device.desktop} {
          width: 20%;
        }
      `}
  }
`

const rotation = keyframes`
  from {
      transform: rotate(0deg)
  } to {
      transform: rotate(1turn)
  }
`

export const Spinner = styled.div`
  width: ${({ size }) => `${size}px` || '20px'};
  height: ${({ size }) => `${size}px` || '20px'};
  border-radius: 50%;

  background-color: transparent;
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-right: 5px solid
    ${({ theme }) => addOpacityToColor(theme.colors.primary, 0.5)};
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  border-left: 5px solid
    ${({ theme }) => addOpacityToColor(theme.colors.primary, 0.5)};
  transform: translateZ(0);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 0.8s;
  animation-name: ${rotation};
`
