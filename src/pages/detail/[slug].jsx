import { useEffect, useState } from 'react'
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
export default Film

export async function getStaticProps ({ params: { slug } }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${accessToken}`
  )
  const item = await res.json()
  return {
    props: {
      item
    }
  }
}

export async function getStaticPaths () {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate
    `)
  const films = await res.json()

  const paths = films.results.map(film => ({
    params: { slug: film.id.toString() }
  }))

  // Get the paths we want to pre-render based on posts

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
