import styled from 'styled-components'
import { ListFilm } from '../../components/Film/ListFilm'
import { Page } from '../../layout/Page'
import { useStateValue } from '../../store/StateProvider'

<<<<<<< HEAD
export default function Favorites () {
=======
export default function Index () {
>>>>>>> ea1f9471aaca5fc7e9fcff0c6a8d3ac81d1b44d1
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
