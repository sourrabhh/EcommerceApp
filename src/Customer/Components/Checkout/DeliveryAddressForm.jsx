import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react'
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName:data.get("lastName"),
      address:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipcode:data.get("zipcode"),
      phoneNumber:data.get("phoneNumber")
    }
    console.log("Address", address);
    
  }

  return (
    <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md overflow-y-scroll shadow-md h-[30.5rem]'>           
            <div className='p-5 py-7 border-b cursor-pointer'>
                <AddressCard />
                <Button sx={{mt:2, bgcolor:"RGB(94 23 235)"}} size='large' variant='contained' >Deliver Here</Button>
            </div>
        </Grid>

        <Grid item xs={12} lg={7} >

            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} >
                          <Grid item xs={12} sm={6}>
                                <TextField 
                                  required 
                                  id="firstName" 
                                  name='firstName' 
                                  label="First Name"
                                  fullWidth
                                  autoComplete='given-name'>
                                </TextField>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                                <TextField 
                                  required 
                                  id="lastName" 
                                  name='lastName' 
                                  label="Last Name"
                                  fullWidth
                                  autoComplete='given-name'>
                                </TextField>
                          </Grid>

                          <Grid item xs={12} >
                                <TextField 
                                  required 
                                  id="address" 
                                  name='address' 
                                  label="Address"
                                  fullWidth
                                  autoComplete='given-name'
                                  multiline
                                  rows={4}
                                  >
                                </TextField>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                                <TextField 
                                  required 
                                  id="city" 
                                  name='city' 
                                  label="City"
                                  fullWidth
                                  autoComplete='given-name'>
                                </TextField>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                                <TextField 
                                  required 
                                  id="state" 
                                  name='state' 
                                  label="State/Province/Region"
                                  fullWidth
                                  autoComplete='given-name'>
                                </TextField>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                                <TextField 
                                  required 
                                  id="zipcode" 
                                  name='zipcode' 
                                  label="Zip Code"
                                  fullWidth
                                  autoComplete='shipping postal-code'>
                                </TextField>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                                <TextField 
                                  required 
                                  id="phoneNumber" 
                                  name='phoneNumber' 
                                  label="Phone Number"
                                  fullWidth
                                  autoComplete='given-name'>
                                </TextField>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                              <Button sx={{mt:2, bgcolor:"RGB(94 23 235)"}} size='large' variant='contained' type='submit'>
                                  Deliver Here
                              </Button> 
                              
                          </Grid>                
                    </Grid>
                </form>
            </Box>

        </Grid>
    </Grid>
  )
}

export default DeliveryAddressForm;