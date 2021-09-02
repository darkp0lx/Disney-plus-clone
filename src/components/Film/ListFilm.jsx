import styled from 'styled-components'
import { useStateValue } from '../../store/StateProvider'
import { ItemListFilm } from './ItemListFilm'

export const ListFilm = ({ movies, favorite }) => {
  return (
    <Container>
      <Title>{favorite ? 'Mis Favoritos' : 'Films'}</Title>

      <ContainerGrid>
        {movies?.map(item => (
          <ItemListFilm favorite={favorite} key={item.id} item={item} />
        ))}
      </ContainerGrid>
    </Container>
  )
}

const ContainerGrid = styled.div`
  margin: 0 5%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 25rem;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 0.3fr));
  justify-content: center;
`

const Title = styled.h2`
  margin: 0 5%;
  color: white;
`

const Container = styled.div`
  margin-top: 3em;
`
