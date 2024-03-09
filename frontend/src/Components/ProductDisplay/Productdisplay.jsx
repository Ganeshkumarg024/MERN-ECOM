import React, { useContext } from 'react'
import "./Productdisplay.css"
import start from "../Assets/star_icon.png"
import startdull from "../Assets/star_dull_icon.png"
import { shopContext } from '../../Context/ShopContext'
const Productdisplay = (props) => {
    const {product}=props;
    const {addTocart}=useContext(shopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdipaly-main' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
               
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={start} alt="" />
            <img src={startdull} alt="" />
            <p>(122)</p>
            </div>
            <div className="product-price">
                <div className="product-old-price">
                    ${product.old_price}
                </div>
                <div className="product-new-price">
                ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
            A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.
            </div>
            <div className="productdispaly-right-size">
                <h1>select size</h1></div>
                <div className="productdisaplay-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
            </div>
            
      
    </div>
  )
}

export default Productdisplay
