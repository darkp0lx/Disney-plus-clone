import { ThemeProvider } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import theme from '../styles/theme'

import { GlobalStyles } from '../styles/global'
import { StateProvider } from '../store/StateProvider'
import reducer, { initialState } from '../store/reducer'

function MyApp ({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StateProvider>
  )
}

export default MyApp
