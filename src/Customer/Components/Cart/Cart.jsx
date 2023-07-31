import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
// import { Button } from '@mui/material'

const Cart = () => {
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
                {[1,1,1,1].map((item) => <CartItem /> )}
            </div>

            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                <div className='border '>
                    <p className='mt-2 items-center uppercase font-bold opacity-60 pb-2'>Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-8'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='ml-2'>Price</span>
                            <span className='mr-2'>₹899</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='ml-2'>Discount</span>
                            <span className='mr-2 text-green-600'>₹899</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='ml-2'>Delivery Charge</span>
                            <span className='mr-2 text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='ml-2'>Total Amount</span>
                            <span className='mr-2 text-green-600'>₹899</span>
                        </div>
                    </div>

                    <Button variant='contained' className='w-full mt-8' sx={{px:"2.5rem", py:"0.5rem", bgcolor:"#9155fd" }}>
                        Check Out
                    </Button>
                    
                </div>
            </div>
            
        </div>

        
        
    </div>
  )
}

export default Cart