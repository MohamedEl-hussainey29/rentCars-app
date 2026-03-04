import React from "react";
import Slider from "react-slick";
import { images } from "../../assets/images";

export default function TestimonialsSlider() {

    const testimonials = [
  {
    name: "Charlie Johnson",
    text: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    image: images.testimonialsMan,
    lastUpdate: "Last Updated 3 mins ago"
  },
  {
    name: "Charlie Johnson",
    text: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    image: images.testimonialsGirl,
    lastUpdate: "Last Updated 3 mins ago"
  },
  {
    name: "Charlie Johnson",
    text: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    image: images.testimonialsMan,
    lastUpdate: "Last Updated 3 mins ago"
  },
  {
    name: "Charlie Johnson",
    text: "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    image: images.testimonialsGirl,
    lastUpdate: "Last Updated 3 mins ago"
  }
];

  const settings = {
  dots: false,
  infinite: true,

  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,

  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: false,

  draggable: true,
  swipe: true,
  swipeToSlide: true,
  touchMove: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

  return (
    <div className="row">
  <Slider {...settings}>
    {testimonials.map((item, index) => (
      <div key={index} className="mb-5">
        <div className="card mx-3 h-100">
          <div className="row g-0">
            <div className="col-12 col-md-6">
              <img 
                src={item.image} 
                className="w-100 object-fit-cover" 
                style={{ maxHeight: "350px"}}
                alt="testimonial"
              />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="card-body">
                <h1 className="mb-0">5.5 <small className="h5">stars</small></h1>
                <div className="d-flex">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={images.starRate} alt="star" />
                  ))}
                </div>
                <p className="fs-5 my-2">“{item.text}”</p>
                <p className="fw-bold mb-0">{item.name}</p>
                <small className="text-muted">{item.lastUpdate}</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
}