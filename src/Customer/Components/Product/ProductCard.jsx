import React from 'react'
import "./ProductCard.css";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/product/${5}`)} className='productcard w-[12rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-top' src= {product.image} alt="" />
        </div>  
        <div className='textpart bg-white p-3'>
            <p className='font-bold opacity-60'> {product.brand} </p>
            <p> {product.title} </p>
          
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{product.discountedPrice}</p>
            <p className='line-through opacity-60'> {product.price} </p>
            <p className='text-green-600 font-semibold'>{product.discountPercent}</p>
        </div>
        </div>
    </div>
  )
}

export default ProductCard;