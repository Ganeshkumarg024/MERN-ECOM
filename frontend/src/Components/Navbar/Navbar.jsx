import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import Logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const[menu,setMenu]= useState("shop")
  const {getcartitems}=useContext(shopContext);
  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={Logo} alt=""  />
            <p onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',  color: "#626262"}} to='/'>Shopper</Link>{menu==="shop"? <hr/>:<></>}</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',  color: "#626262"}} to='/'>SHOP</Link>{menu==="shop"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none' ,color: "#626262" }}  to='/mens'>MEN</Link>{menu==="men"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'  ,color: "#626262"}}   to='/womens'>WOMEN</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'  ,color: "#626262"}}  to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-cart'>
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.r('/')}}>Logout</button>: <Link style={{textDecoration:'none'  ,color: "#626262"}}  to='/login'><button >Login</button></Link>}
       
            <Link style={{textDecoration:'none'  ,color: "#626262"}}  to='/cart'> <img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getcartitems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar



