import React, { useContext } from 'react'
import "./Cartitems.css"
import { shopContext } from '../../Context/ShopContext'
import removeicon from "../Assets/cart_cross_icon.png"

const CartItems = () => {
    const {all_product,cartItems,removeCart,getTotalcartAmount}=useContext(shopContext);

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img className='cartitem-remove' src={removeicon}  onClick={()=>{removeCart(e.id)}} alt="" />
            </div>
            <hr/>
        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart total</h1>
                <div>
                    <div className="cartitems-total-items">
                        <p>Subtotal</p>
                        <p>${getTotalcartAmount()}</p>
                    </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Free</p>
                    <p>Free</p>

                    </div>
                    <hr />
                   
                    <div className="cartitems-total-items">
                  
                        <p>Total</p>
                        <h3>${getTotalcartAmount()}</h3>
                    </div>
                    <hr />
                
                <button>Proceed to checkout</button>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default CartItems
