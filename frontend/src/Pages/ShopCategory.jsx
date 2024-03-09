import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { shopContext } from '../Context/ShopContext'
import dropdown from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {

    const {all_product}=useContext(shopContext)
  return (
    <div className='Shopcategory'>
      <img className='shop_banner' src={props.banners} alt="" />
      <div className="shopcategory-indexSort">
        <p>
            <span>Showing 1-12</span>Out of 36 products
        </p>
        <div className="shopcatgory-sort">
            sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
            all_product.map((items,i)=>{
                if(props.category===items.category){
                    return <Item key={i} id={items.id} name={items.name} new_price={items.new_price}  old_price={items.old_price} image={items.image}/>
                }else{
                    return null;
                }
                
                
            })
        }
      </div>
      <div className='explore'><button>Explore More</button></div>
      
    </div>
  )
}

export default ShopCategory
