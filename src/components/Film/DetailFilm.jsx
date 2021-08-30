import Img from 'react-cool-img'
import styled from 'styled-components'
import { FaPlay, FaPlus, FaUserFriends } from 'react-icons/fa'
import { urls } from '../../utils/utils'
import { useFavorites } from '../../hooks/useFavorites'

export const DetailFilm = ({ item }) => {
  const { favorites, AddToFavorites, deleteToFavorites } = useFavorites()

  console.log(item, 'itemDetail')
  return (
    <Container>
      <SideBackground>
        <Img src={`${urls[0]?.images + item?.poster_path}`} />
        <Overview></Overview>
      </SideBackground>
      <SideInfo>
        <ContainerButtons>
          <ButtonDetail type='play'>
            <FaPlay size={25} />
            play
          </ButtonDetail>
          <ButtonDetail transparent border>
            <FaPlay size={25} />
            trailler
          </ButtonDetail>
          <ContainerButtonsPlus>
            <ButtonPlus onClick={AddToFavorites}>
              <FaPlus size={25} />
            </ButtonPlus>
            <ButtonPlus>
              <FaUserFriends size={25} />
            </ButtonPlus>
          </ContainerButtonsPlus>
        </ContainerButtons>
        <MoreDetails>2018 • 7m • Family, Fantasy, Kids, Animation</MoreDetails>
        <h2>{item?.original_title}</h2>
        <Description>{item?.overview}</Description>
      </SideInfo>
    </Container>
  )
}

const Container = styled.div`
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
    padding-top: 7vh;
    padding-bottom: 1em;
    flex-direction: row-reverse;

    img {
      width: 350px;
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.device.laptopL} {
    height: 69vh;
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
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

const ButtonDetail = styled.button`
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
`

const ButtonPlus = styled.button`
  border: 1px solid white;
  border-radius: 55%;
  color: white;
  background: #1a1a1a82;
  width: 40px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  :hover {
    color: #1a1a1a82;
    background: white;
    transform: scale(1.05);
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 35px;
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
    box-shadow: inset -2px -19px 15px 21px rgba(0, 0, 0, 0.75);
  }
  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
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
`
