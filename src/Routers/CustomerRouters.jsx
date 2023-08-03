import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Cart from '../Customer/Components/Cart/Cart'



import Navigation from "./../Customer/Components/Navigation/Navigation";
import Footer from '../Customer/Components/Footer/Footer';
import Product from '../Customer/Components/Product/Product';
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails';
import Checkout from '../Customer/Components/Checkout/Checkout';
import OrderPage from '../Customer/Components/Order/OrderPage';
import OrderDetails from '../Customer/Components/Order/OrderDetails';

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
        <Routes>
            <Route path='/' element= { <HomePage /> } ></Route>
            <Route path='/cart' element= { <Cart /> } ></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element= { <Product /> } ></Route>
            <Route path='/Product/:productId' element = {<ProductDetails />} ></Route>
            <Route path='/checkout' element= { <Checkout /> } ></Route>
            <Route path='/account/order' element= { <OrderPage /> } ></Route>
            <Route path='/account/order/:orderId' element= { <OrderDetails /> } ></Route>
        </Routes>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default CustomerRouters