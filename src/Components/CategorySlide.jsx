import CategoryData from "./CategoryData";

import React from 'react'
// import {ArrowBackIcon,ArrowForwardIcon} from "@chakra-ui/icons"
 const CategorySlide= ({slides}) => {

    // const [current,setCurrent]=useState(0)
    // const length=slides.length

  return (
    <section className='category'>
       
        {CategoryData.map((slide,index)=>{
            return (
                <div className="img" >
                    {<img src={slide.image} alt="image"/>}
                    
                </div>
            )
           
        })}
    </section>
  )
}

export default CategorySlide