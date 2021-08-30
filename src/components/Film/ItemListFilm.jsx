import Img from 'react-cool-img'
import styled from 'styled-components'

import { FaHeart, FaTrash } from 'react-icons/fa'
import { urls } from '../../utils/utils'
import { Rating } from '../Base/Rating'
import Link from 'next/link'
import { useFavorites } from '../../hooks/useFavorites'

export const ItemListFilm = ({ item, favorite }) => {
  const { AddToFavorites, DeleteToFavorites } = useFavorites(item)

  return (
    <Container>
      <Link href={`/detail/${item?.id}`}>
        <ImageContainer>
          <a>
            <Img src={`${urls[0]?.images + item?.poster_path}`} />
          </a>
          <Rating vote_average={item?.vote_average} />
          {!favorite ? (
            <ButtonAddFavorites onClick={AddToFavorites}>
              <FaHeart />
            </ButtonAddFavorites>
          ) : (
            <ButtonDeleteFavorites onClick={DeleteToFavorites}>
              <FaTrash />
            </ButtonDeleteFavorites>
          )}
        </ImageContainer>
      </Link>

      <Title>{item?.title}</Title>
    </Container>
  )
}
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  color: white;
  height: 350px;
  flex-direction: column;
  margin-bottom: 10px !important;
  text-align: center;
  :hover {
    transform: scale(1.05);
    transition: all 0.5 ease;
  }
  a {
    color: white;
    text-decoration: none;
  }
`

const ImageContainer = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 250px;
  img {
    filter: opacity(45%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`

const Title = styled.h3``

const ButtonAddFavorites = styled.button`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 5px;
  -webkit-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  svg {
    color: red;
  }
`
const ButtonDeleteFavorites = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 5px;
  -webkit-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.75);
  svg {
    color: #0e282b;
  }
`
