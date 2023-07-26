import React from 'react'
import { Button, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
        <Grid className = "bg-black text-white text-center mt-10"
            container
            sx={{bgcolor:"black", color:"white", py:3}}
        >
            <Grid item xs={12} sm={6} md={3} >
                    <Typography className = "pb-5" variant='h6'> About </Typography>
                    <div> <Button className = "pb-5" variant='h6'> About Us </Button> </div>
                    <div> <Button className = "pb-5" variant='h6'> Contact Us </Button> </div>   
                    <div> <Button className = "pb-5" variant='h6'> Career </Button> </div>    
                    <div> <Button className = "pb-5" variant='h6'> Corporate Information </Button> </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
                    <Typography className = "pb-5" variant='h6'> Help </Typography>
                    <div> <Button className = "pb-5" variant='h6'> Payment </Button> </div>
                    <div> <Button className = "pb-5" variant='h6'> Shipping </Button> </div>   
                    <div> <Button className = "pb-5" variant='h6'> Cancellation & Returns </Button> </div>    
                    <div> <Button className = "pb-5" variant='h6'> FAQ </Button> </div>               
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
                    <Typography className = "pb-5" variant='h6'> Consumer Policy </Typography>
                    <div> <Button className = "pb-5" variant='h6'> Return Policy </Button> </div>
                    <div> <Button className = "pb-5" variant='h6'> Privacy </Button> </div>   
                    <div> <Button className = "pb-5" variant='h6'> Grievance Redressal </Button> </div>    
                    <div> <Button className = "pb-5" variant='h6'> Sitemap </Button> </div>                
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
                    <Typography className = "pb-5" variant='h6'> Social </Typography>
                    <div> <Button className = "pb-5" variant='h6'> Twitter </Button> </div>
                    <div> <Button className = "pb-5" variant='h6'> Instagram </Button> </div>   
                    <div> <Button className = "pb-5" variant='h6'> Facebook </Button> </div> 
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer;