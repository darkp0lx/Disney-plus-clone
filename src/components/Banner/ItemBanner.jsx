import Img from 'react-cool-img'
import HoverVideoPlayer from 'react-hover-video-player'
import styled from 'styled-components'

export const ItemBanner = ({ image, video }) => {
  return (
    <Container>
      <HoverVideoPlayer
        videoSrc={video}
        pausedOverlay={
          <Img
            src={image}
            alt=''
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              background: '#040714',
              border: '1px solid white'
            }}
          />
        }
        loadingOverlay={
          <div className='loading-overlay'>
            <div className='loading-spinner' />
          </div>
        }
      />
    </Container>
  )
}

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  img {
  }

  .loading-overlay {
    border-radius: 10px;
  }
  :hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`
