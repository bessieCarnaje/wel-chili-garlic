import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chili1 from "../../images/chili1.jpg";
import chili2 from "../../images/chili2.jpg";
import chili3 from "../../images/chili3.jpg";

export default function ImagePanel() {
  const images = [chili1, chili2, chili3];

  return (
    <div className="chili-album">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {images.map((image, index) => (
          <div key={index} className="slider">
            <img src={image} alt={`Image ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
