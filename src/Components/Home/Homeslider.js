import React from 'react';
import Slider from "react-slick";
import './Homeslider.css'
import * as images from '../../assets/images/Home-Slider/index';

export default function Homeslider() {
  var imageList = Object.values(images);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: imageList.length,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <section className='homeSlider'>
      <div className="container-fluid">
        <Slider {...settings} className='slider'>
          {imageList.map((image,index) => <div key={index} className='image-container'>
            <img key={image} src={imageList[index]} alt="NAN" />           
          </div>)}
        </Slider>
      </div>
    </section>
  )
}
