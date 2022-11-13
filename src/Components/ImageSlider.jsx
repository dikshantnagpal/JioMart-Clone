
import React,{ useState } from 'react'
import SliderData from "./SliderData"
import {ArrowBackIcon,ArrowForwardIcon} from "@chakra-ui/icons"
 const ImageSlider= ({slides}) => {

    const [current,setCurrent]=useState(0)
    const length=slides.length

    const nextSlide=()=>{
        setCurrent(current===length-1? 0: current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0? length-1: current-1)
    }

  return (
    <section className='slider'>
        <ArrowBackIcon className="left-arrow" onClick={prevSlide}/>
        <ArrowForwardIcon className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide,index)=>{
            return (
                <div >
                    {index===current &&(<img src={slide.image} alt="image"/>)}
                    
                </div>
            )
           
        })}
    </section>
  )
}

export default ImageSlider