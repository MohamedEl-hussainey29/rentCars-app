import React from 'react'
import Slider from 'react-slick';

export default function BrandSlider(props) {
    let {brandImgs} = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: true
  };

  return (
    <div className="container my-5">
      <Slider {...settings}>
        {brandImgs.map((img, index) => (
          <div key={index}>
            <img src={img} alt="brand" className="img-fluid mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
