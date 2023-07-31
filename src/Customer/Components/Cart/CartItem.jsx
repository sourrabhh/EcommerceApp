import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';



const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md '>
        <div className='flex items-center' >
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                <img className='w-full h-full object-cover object-top' src='https://img.tatacliq.com/images/i7/437Wx649H/MP000000011613714_437Wx649H_202112302235301.jpeg' alt=''></img>
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Campus Sutra Brown Full Sleeves Windcheater Jacket </p>
                <p className='opacity-70'>Size : L, Brown</p>
                <p className='opacity-70 mt-2'>Seller: Campus Sutra </p>
                
                <div className='flex items-center space-x-5 text-gray-900 pt-6'>
                        <p className='font-semibold'> ₹699 </p>
                        <p className='opacity-50 line-through '> ₹899 </p>
                        <p className='text-green-600 font-semibold'> 21% Off </p>
                </div>
            </div>
        </div>

            <div>
                <div className='flex items-center lg:flex lg:space-x-10 pt-4 '>
                    <div className='flex iems space-x-2'>
                        <IconButton  >
                            <RemoveCircleIcon />
                        </IconButton>
                        <span className='py-1 px-6 rounded-sm'> 3 </span>
                            <IconButton sx={{color:"RGB(145,85,253)"}}>
                                <AddCircleIcon />
                            </IconButton>
                        
                    </div>
                        {/* Remove Button */}
                    <Button sx={{color:"RGB(145,85,253)"}} > Remove </Button>
                </div>
            </div>        
        
    </div>
  )
}

export default CartItem