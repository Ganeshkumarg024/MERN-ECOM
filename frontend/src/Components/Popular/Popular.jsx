import React, { useEffect, useState } from 'react'
import data from '../Assets/data'
import Item from '../Items/Item'
import './Popular.css'

const Popular = () => {
  const [new_collections,setNew_collection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popular')
    .then((res)=>res.json()).then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='popular'>
      <h2>Popular In Womens</h2>
      <hr/>
      <div className="popular-in-womens">
       {new_collections.map((items,i)=>{
        return <Item key={i} id={items.id} name={items.name} new_price={items.new_price}  old_price={items.old_price} image={items.image}/>
       })}
      </div>
    </div>
  )
}

export default Popular
