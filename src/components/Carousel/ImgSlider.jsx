import React from 'react'
import styled from 'styled-components'

import Slider from 'react-slick'
import Img from 'react-cool-img'

function ImgSlider () {
  let settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    mobileFirst: true
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <Img src='/images/slider-badging.jpg' />
      </Wrap>
      <Wrap>
        <Img src='/images/slider-badag.jpg' />
      </Wrap>
      <Wrap>
        <Img src='/images/slider-scale.jpg' />
      </Wrap>
      <Wrap>
        <Img src='/images/slider-scales.jpg' />
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
  margin: 0 2em;
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
    .slick-track {
      height: 400px;
    }
  }

  button {
    z-index: 1;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 2em;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 3px solid transparent;
    border-radius: 4px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`
