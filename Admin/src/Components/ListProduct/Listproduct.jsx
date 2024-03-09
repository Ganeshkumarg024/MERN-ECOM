import React from 'react'
import "./Listproduct.css"
import { useState } from 'react'
import { useEffect } from 'react';
import cross from "../../assets/cross_icon.png"

const Listproduct = () => {
  const [allproduct,setAllproduct]=useState([]);
  const fetchInfo=async()=>{
    await fetch('http://localhost:4000/getallproducts').then((res)=>res.json())
    .then((data)=>{setAllproduct(data)})
  }
  useEffect(()=>{
    fetchInfo()
  },[])
  const removeproduct=async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },body:JSON.stringify({id:id})
    })
     await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All product List</h1>
      <div className="list-product-format-main">
        
      <p>Product</p>
      <p>Title</p>
      <p>Old Price</p>
      <p> New Price</p>
      <p>Category</p>
      <p>Remove</p>
      </div>
   
      <div className="list-of-allproduct">
        <hr />
        {allproduct.map((product,index)=>{
         return <div  key={index} className='list-product-format-main listproduct-format'>
          
                <img src={product.image} alt="" className='lis-pro' />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img src={cross} alt="" className='list-product-remove-icon' onClick={()=>{removeproduct(product.id)}}/>
                
         </div>
         
          


        })}

      </div>
      
    </div>
  )
}

export default Listproduct
