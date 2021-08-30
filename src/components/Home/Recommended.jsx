import { Item } from '../Shows/Item'
import styled from 'styled-components'
import Link from 'next/link'

export const Recommended = ({ tvShow, title, movies }) => {
  console.log(movies, 'movies')
  return (
    <Container>
      <Title>{title}</Title>
      <ContainerGrid>
        {movies.results.slice(0, 12).map(movie => (
          <Item tvShow={tvShow} key={movie.id} item={movie} />
        ))}
      </ContainerGrid>
    </Container>
  )
}

const Container = styled.div`
  margin: 1em;
  margin: 0 5%;
`
const Title = styled.h3`
  color: white;
`
const ContainerGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    width: 100%;
    height: 100%;
  }
`
