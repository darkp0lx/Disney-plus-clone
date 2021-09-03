import styled from 'styled-components'
import { ListFilm } from '../../components/Film/ListFilm'
import { Page } from '../../layout/Page'
import { useStateValue } from '../../store/StateProvider'

<<<<<<< HEAD
export default function Favorites () {
=======
export default function Index () {
  const [{ favorites }, dispatch] = useStateValue()
  return (
    <Container>
      <Page>
        <ListFilm favorite={true} movies={favorites} />
      </Page>
    </Container>
  )
}
const Container = styled.div``
