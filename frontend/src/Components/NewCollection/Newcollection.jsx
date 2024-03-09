import React, { useEffect, useState } from 'react'
import './Newcollections.css'

import Item from '../Items/Item'

const Newcollection = () => {
  const [new_collections,setNew_collection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((res)=>res.json()).then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='newcollections'>
        <h1>New Collections</h1>
        <br/>
        <div className="newcollections-items">
            {
                new_collections.map((items,i)=>{
                    return <Item id={items.id} image={items.image} new_price={items.new_price} old_price={items.old_price} name={items.name}/>
                })

            }
        </div>
      
    </div>
  )
}

export default Newcollection
