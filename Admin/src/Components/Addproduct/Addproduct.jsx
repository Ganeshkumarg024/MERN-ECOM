import React from 'react'
import "./Addproduct.css"
import imgg from "../../assets/upload_area.svg"
import { useState } from 'react'

const Addproduct = () => {
    const [image,setIamge]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    const imagehandler=(e)=>{
        setIamge(e.target.files[0]);
    }
    const changeHandsler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const addproduct=async()=>{
        console.log(productDetails)

        let responsedata;
        let product=productDetails;

        let formdata=new FormData();
        formdata.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formdata,
        }).then((resp)=>resp.json()).then((data)=>{responsedata=data});

        if(responsedata.success){
            product.image=responsedata.image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("product added"):alert("failed")
            })
        }

    }

  return (
    <div className='add-products'>
        <div className="addproduct-itemfiled">
            <p>Product Title</p>
            <input type="text" value={productDetails.name} onChange={changeHandsler} name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
        <div className="addproduct-itemfiled">
            <p>Price</p>
            <input type="text"  value={productDetails.old_price} onChange={changeHandsler} name='old_price' placeholder='Type here' />
             </div>
       
        <div className="addproduct-itemfiled">
            <p>Offers</p>
            <input type="text" value={productDetails.new_price} onChange={changeHandsler}  name='new_price' placeholder='Type here' />
      </div>
      </div> 
      <div className="addproduct-itemfiled">
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandsler}  id="" className='add-product-selector'>
            <option value="women">women</option>
            <option value="men">men</option>
            <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct-itemfiled"> 
      <label htmlFor="file-input" >
      <img src={image?URL.createObjectURL(image):imgg} className='add-thumnail' alt="" />
      </label>
      <input type="file" name='image'  onChange={imagehandler} id='file-input' hidden />
        </div>
        <button onClick={addproduct} className='addproducts-button'>Add products</button>
      
     
       
      
    </div>
  )
}

export default Addproduct
