
import '../App.css';
import Navbar from "./navbar"
import ImageSlider from './ImageSlider';
import React from "react"
import SliderData  from './SliderData';
import MiddleSection from './MiddleSection';
import CategoryData from './CategoryData';
import CategorySlide from './CategorySlide';
import Deals from "./Deals"
import Footer from './Footer';


function Links() {
  return(
    <div>
      <Navbar/>
      <ImageSlider slides={SliderData}/>
      <MiddleSection/>
      <CategorySlide slides={CategoryData}/>
      <Deals/>
      <Footer/>
      </div>
  )
}

export default Links;