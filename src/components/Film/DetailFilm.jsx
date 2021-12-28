import Img from 'react-cool-img'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import { urls } from '../../utils/utils'
import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon
} from 'react-share'
import { useFavorites } from '../../hooks/useFavorites'
import { FaPlay, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { Modal, ModalButton } from '../Base/Modal'

export const DetailFilm = ({ item }) => {
  const { AddToFavorites, DeleteToFavorites, isFavorite } = useFavorites(item)
  const route = useRouter()
  const shareUrl = `https://disney-plus-clone-inky.vercel.app/${route.asPath}`
  const itemName = item?.original_name
    ? item?.original_name
    : item?.original_title
    ? item?.original_title
    : item?.title
    ? item?.title
    : item?.name

  const title = `${itemName} Disney Plus Clone`

  return (
    <Container>
      <ContainerHero>
        <SideBackground>
          <Img src={`${urls[0]?.images + item?.poster_path}`} />
          <Overview></Overview>
        </SideBackground>
        <SideInfo>
          <ContainerButtons>
            <ModalButton title={itemName} />
            <ModalButton title={itemName} type='trailer' />
            <ContainerButtonsPlus>
              {!isFavorite() ? (
                <ButtonPlus onClick={AddToFavorites}>
                  <p data-tip='agregar a favorito'>
                    <FaPlus size={25} />
                  </p>
                  <ReactTooltip />
                </ButtonPlus>
              ) : (
                <ButtonPlus onClick={DeleteToFavorites}>
                  <p data-tip='quitar de favorito'>
                    <FaTrashAlt size={25} />
                  </p>
                  <ReactTooltip />
                </ButtonPlus>
              )}
              <ButtonPlus>
                <p data-tip='compartir por facebook'>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className='Demo__some-network__share-button'
                  >
                    <FacebookIcon
                      style={{ marginLeft: '4px', outline: 'none' }}
                      size={40}
                      round
                    />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount
                      url={shareUrl}
                      className='Demo__some-network__share-count'
                    >
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </p>
              </ButtonPlus>
            </ContainerButtonsPlus>
          </ContainerButtons>
          <MoreDetails>
            2018 • 7m • Family, Fantasy, Kids, Animation
          </MoreDetails>
          <Genres>
            {item?.genres?.map((e, index) => (
              <GenreItem key={index}>{e.name}</GenreItem>
            ))}
          </Genres>
          <h2>{itemName}</h2>
          <Description>{item?.overview}</Description>
        </SideInfo>
      </ContainerHero>
      {item?.seasons && (
        <Season>{item?.seasons?.map(season => season.name)}</Season>
      )}
      {item?.genres && (
        <Season>{item?.genres?.map(season => season.name)}</Season>
      )}
    </Container>
  )
}
const GenreItem = styled.p`
  border: 1px solid white;
  padding: 0 5px;
  border-radius: 1em;
  margin: 0;
`
const Genres = styled.div`
  display: flex;
  gap: 5px;
`
const Season = styled.div``
const Container = styled.div``

const ContainerHero = styled.div`
  margin-top: 3.5em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  height: 100%;
  background-size: cover;
  color: white;
  overflow: wrap;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    justify-content: center;
  }

  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
    padding-bottom: 1em;
    flex-direction: row-reverse;

    img {
      width: 350px;
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.device.laptopL} {
    height: 85vh;
  }
`
const Description = styled.p`
  width: 100%;
  font-size: 1em;

  font-weight: bold;
  @media ${({ theme }) => theme.device.laptop} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    width: 60%;
  }
`
const ContainerButtons = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  button {
    margin-right: 5px;
  }
  .buttonPlay {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 55px;
    font-size: 1.3em;
    margin-bottom: 0.5em;
    svg {
      margin-right: 4px;
    }
    background: ${props => (props.transparent ? 'transparent' : 'white')};
    border: ${props => (props.border ? '1px solid white' : 'none')};
    color: ${props => (props.transparent ? 'white' : 'none')};
    border-radius: 0.5em;
    :hover {
      transform: scale(1.05);
      transition: all 0.5s ease;
      background: ${props => props.transparent && '#181818'};
    }
    @media ${({ theme }) => theme.device.tablet} {
      margin-bottom: 0em;
      width: 200px;
    }
  }
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

const ButtonPlus = styled.button`
  outline: none;
  border: 1px solid white;
  border-radius: 55%;
  color: white;
  background: #1a1a1a82;
  width: 40px;
  height: 40px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  :hover {
    color: #1a1a1a82;
    background: white;
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 35px;
    height: 35px;
  }
`

const MoreDetails = styled.p``

const ContainerButtonsPlus = styled.div`
  display: flex;
`
const SideBackground = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 101px 0px 37px -41px rgba(4, 7, 20, 1);
    filter: opacity(0.4);
    object-fit: contain;
  }
  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
    height: 500px;
  }
  @media ${({ theme }) => theme.device.laptopL} {
    img {
      object-fit: scale-down;
    }
  }
`
const SideInfo = styled.div`
  margin: 1em 5%;
  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`

const Overview = styled.div`
  height: 100%;
  box-shadow: inset 4px -38px 21px -7px rgb(4 7 20);
  position: absolute;
  bottom: 0;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    -webkit-box-shadow: inset 101px 0px 37px -41px rgba(4, 7, 20, 1);
    -moz-box-shadow: inset 101px 0px 37px -41px rgba(4, 7, 20, 1);
    box-shadow: inset 101px 0px 37px -41px rgba(4, 7, 20, 1);
  }
`
