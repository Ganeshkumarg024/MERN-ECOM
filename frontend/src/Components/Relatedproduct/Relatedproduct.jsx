import React from 'react'
import "./Relatedproduct.css"

import data from '../Assets/data'
import Item from '../Items/Item'
const Relatedproduct = () => {
  return (
    <div className='ralatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-product-items">
            {data.map((items,i)=>{
                  return <Item key={i} id={items.id} name={items.name} new_price={items.new_price}  old_price={items.old_price} image={items.image}/>
                
            })}
        </div>
      
    </div>
  )
}

export default Relatedproduct
