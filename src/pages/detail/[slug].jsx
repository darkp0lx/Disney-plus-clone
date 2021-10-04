import { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'

import { useRouter } from 'next/router'
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
export default Film

export async function getStaticProps ({ params: { slug } }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${accessToken}`
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
    fallback: true
  }
}
