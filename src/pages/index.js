import styled from 'styled-components'

import { Page } from '../layout/Page'
import { accessToken } from '../utils/utils'
import { Banner } from '../components/Home/Banner'
import ImgSlider from '../components/Carousel/ImgSlider'
import { Recommended } from '../components/Home/Recommended'

export default function Home ({ movies, popularShows }) {
  return (
    <Container>
      <Page>
        <ImgSlider />
        <Banner />
        <Recommended tvShow={true} title='Tv Show' movies={popularShows} />
        <Recommended title='Peliculas' movies={movies} />
      </Page>
    </Container>
  )
}

Home.getInitialProps = async ctx => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate
    `)
  const data = await res.json()

  const responsePopularShows = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${accessToken}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate
    `)
  const dataPopularShows = await responsePopularShows.json()

  return {
    movies: data,
    popularShows: dataPopularShows
  }
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
`
