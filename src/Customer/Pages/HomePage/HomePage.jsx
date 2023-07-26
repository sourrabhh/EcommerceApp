import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';
import { Mens_Kurta } from '../../../Data/Mens/Mens_Kurta';

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data = {Mens_Kurta} sectionName = {"Men's Kurta"}/>
          <HomeSectionCarousel data = {Mens_Kurta} sectionName = {"Women's Kurta"}/>
          <HomeSectionCarousel data = {Mens_Kurta} sectionName = {"Men's Shoes"}/>
        </div>
    </div>

  )
}

export default HomePage;