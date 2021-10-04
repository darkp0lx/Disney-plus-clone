import fetch from 'isomorphic-fetch'

import { accessToken } from '../../utils/utils'
import { Header } from '../../components/Header/Header'
import { DetailFilm } from '../../components/Film/DetailFilm'

function Film ({ slug, item }) {
  return (
    <>
      <Header />
      <DetailFilm item={item} />
    </>
  )
}
export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${slug}?api_key=${accessToken}&language=en-US`
  )
  const item = await res.json()
  return {
    props: {
      item,
      slug
    }
  }
}

export async function getStaticPaths () {
  return {
    paths: [],
    fallback: false
  }
}

export default Film
