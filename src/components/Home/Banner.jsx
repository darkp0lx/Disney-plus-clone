import styled from 'styled-components'
import { ItemBanner } from '../Banner/ItemBanner'
export const Banner = () => {
  return (
    <Container>
      <ItemBanner
        image='/images/viewers-disney.png'
        video='/videos/disney.mp4'
      />
      <ItemBanner
        image='/images/viewers-marvel.png'
        video='/videos/marvel.mp4'
      />
      <ItemBanner
        image='/images/viewers-national.png'
        video='/videos/national-geographic.mp4'
      />
      <ItemBanner image='/images/viewers-pixar.png' video='/videos/pixar.mp4' />
      <ItemBanner
        image='/images/viewers-starwars.png'
        video='/videos/star-wars.mp4'
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const Item = styled.div`
  width: 35%;
  height: 35px;
  padding: 1em;
  border: 2px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  img {
    width: 100%;
  }
  :hover {
    transform: scale(1.1);
    transition: all 1s ease;
    border: 1px solid white;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 15%;
    height: 100px;
  }
`
