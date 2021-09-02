import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import { useDevice } from '../../hooks/useDevice'
export const IframeYoutube = () => {
  const device = useDevice()
  console.log(device, 'device')
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  return (
    <Container>
      <YouTube videoId='2g811Eo7K8U' opts={opts} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  iframe {
    width: 100%;
  }
`
