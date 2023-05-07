import { useState } from "react";
import { SliderData } from "../data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      {SliderData.map((slide, index) => (
        <div key={slide.id}>
          <img
            src={slide.img}
            alt=""
            className={index === current ? "slide active" : "slide"}
          />
          <div className="info-container">
            <div className={index === current ? "title active" : "title"}>
              {slide.title}
            </div>
            <div className={index === current ? "desc active" : "desc"}>
              {slide.desc}
            </div>
          </div>
        </div>
      ))}
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
