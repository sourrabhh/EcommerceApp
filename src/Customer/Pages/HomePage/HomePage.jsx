import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';
import {menskurta} from "./../../../Data/Mens/menskurta"

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data = {menskurta} sectionName = {"Men's Kurta"}/>
          <HomeSectionCarousel data = {menskurta} sectionName = {"Women's Kurta"}/>
          <HomeSectionCarousel data = {menskurta} sectionName = {"Men's Shoes"}/>
        </div>
    </div>

  )
}

export default HomePage;