import styled from 'styled-components'
import { ListFilm } from '../../components/Film/ListFilm'
import { Page } from '../../layout/Page'
import { useStateValue } from '../../store/StateProvider'

export default function index () {
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
