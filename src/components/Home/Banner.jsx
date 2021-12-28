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
  /*  margin: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`
