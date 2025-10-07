import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import imgCopilot from "../../assets/ImageCopilot.jpeg"
import imgChatGPT from "../../assets/ImageChatGPT.png"
import imgGemini from "../../assets/ImageGemini.png"

const images = [
  {
    src: imgCopilot,
    alt: "Imagen generada por Copilot",
    caption: "AI-generated image from Copilot",
  },
  {
    src: imgChatGPT,
    alt: "Imagen generada por ChatGPT",
    caption: "AI-generated image from ChatGPT",
  },
  {
    src: imgGemini,
    alt: "Imagen generada por Gemini",
    caption: "AI-generated image from Gemini",
  },
]

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider__slide">
            <img className="slider__image" src={image.src} alt={image.alt} />
            <div className="slider__caption">{image.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider