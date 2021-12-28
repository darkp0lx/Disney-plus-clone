import fetch from 'isomorphic-fetch'

import { accessToken } from '../../utils/utils'
import { Header } from '../../components/Header/Header'
import { DetailFilm } from '../../components/Film/DetailFilm'

function Film ({ item }) {
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
      item
    }
  }
}

export async function getStaticPaths () {
  const responsePopularShows = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${accessToken}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate
    `)
  const dataPopularShows = await responsePopularShows.json()

  const paths = dataPopularShows.results.map(film => ({
    params: { slug: film.id.toString() }
  }))

  // Get the paths we want to pre-render based on posts

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export default Film
