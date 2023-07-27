import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
// import './reactalicecarousel.css'

const MainCarousel = () => {
    const items = MainCarouselData.map((item) => <img className='cursor-pointer' 
    role='presentation' src={item.image} alt="" />);

  return (
    <div className=''>
        <AliceCarousel 
          // mouseTracking
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
          
        />
     </div>
   
  )
}

export default MainCarousel;