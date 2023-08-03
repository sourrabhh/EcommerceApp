import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md hover:shadow-xl'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top ' src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016065338_437Wx649H_202301140748251.jpeg' alt=''></img>
                        
                        <div className='ml-5 space-y-2'>
                            <p >Levi's Chilly Green Pure Cotton Slim Fit Checks Shirts</p>
                            <p className='opacity-50 text-xs font-semibold '>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold '>Color : Green </p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>₹1899</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p> 
                            <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2' />  
                            <span> Delivered on March 03</span>  
                        </p>
                        <p className='text-xs'>Your item has been delivered</p>
                        </div>}

                    {false && <p>  
                        <span>Expected Delivery on March 03</span>  
                    </p>}
                </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard