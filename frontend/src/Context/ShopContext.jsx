import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";


export const shopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{

    const [all_product,setAll_product]=useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/getallproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((res)=>res.json()).then((data)=>setCartItems(data))
        }
    },[])

   
  
   
    const addTocart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json()).then((data)=>console.log(data));
        }
    }

    const removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removetocart',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json()).then((data)=>console.log(data));
        }
    }
    const getTotalcartAmount=()=>{
        let totalAmout=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item))
                totalAmout+=iteminfo.new_price*cartItems[item];
            }
        }
        
        return totalAmout;

    }

    const getcartitems=()=>{
        let totalitem=0;
        for(const item in cartItems){
       if(cartItems[item]>0){
        totalitem+=cartItems[item];
       }
        }
        return totalitem;


    }
    console.log(cartItems);
    
    const contextValue={all_product,cartItems,addTocart,removeCart,getTotalcartAmount,getcartitems};
   
    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;