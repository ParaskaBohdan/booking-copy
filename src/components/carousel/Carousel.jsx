import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API_URL } from '../..';

const Carousel = (props) => {
  const { photos } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };
  

  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div key={photo.id}>
            {console.log(API_URL + photo.image)}
          <img src={API_URL + photo.image} alt='dragon' />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
