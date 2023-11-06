import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoCarousel = (props) => {
  const { photos } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.image} alt='dragon' />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;
