import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import Relatedproduct from '../Components/Relatedproduct/Relatedproduct';

const Product = () => {
    const {all_product}=useContext(shopContext);
   const {productId}=useParams();
    const products=all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
        <Breadcrums products={products}/>
        <Productdisplay product={products}/>
        <Descriptionbox/>
        <Relatedproduct/>
      
    </div>
  )
}

export default Product
