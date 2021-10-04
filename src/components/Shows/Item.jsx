import Link from 'next/link'
import Img from 'react-cool-img'
import styled from 'styled-components'
import { urls } from '../../utils/utils'
import { Rating } from '../Base/Rating'
import { Title } from '../Base/Title'

export const Item = ({ item, tvShow = false }) => {
  return (
    <Container>
      <Link href={tvShow ? `/tvshow/${item.id}` : `/detail/${item.id}`}>
        <a>
          <Img src={`${urls[0]?.images + item.poster_path}`} />
          <Info>
            <Rating vote_average={item.vote_average} />
            <Title title={item.name} />
          </Info>
        </a>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 47%;
  border-radius: 1em;
  border: 1px solid gray;
  margin-bottom: 1em;
  cursor: pointer;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  :hover {
    transform: scale(1.1);
    transition: 1s ease;
    border: 1px solid white;
  }
  img {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    filter: opacity(0.4);
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 23%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 15%;
  }
`

const Info = styled.div`
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
