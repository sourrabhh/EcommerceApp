import React from 'react'


const HomeSectionCard = () => {
  return (
    <div className= "cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg" > 
        <div className="h-[13rem] w-[10rem]">
            <img className='object-cover object-top w-full h-full' src='https://img.tatacliq.com/images/i7/437Wx649H/MP000000011613714_437Wx649H_202112302235301.jpeg' alt='' />
        </div>

        <div className='p-4 '>
            <h3 className='text-lg font-medium text-gray-900 '>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Mens Pure Cotton Shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCard;