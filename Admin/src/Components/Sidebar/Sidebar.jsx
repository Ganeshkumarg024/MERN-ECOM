import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import add_product from "../../assets/Product_Cart.svg"
import alist_product from "../../assets/Product_list_icon.svg"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={"/addproduct"} style={{textDecoration:"none"}}>
        <div className="sidebar-items">
        <img src={add_product} alt="" />
        <p>Add Product</p>
        </div>
        </Link>
        <Link to={"/listproduct"} style={{textDecoration:"none"}}>
        <div className="sidebar-items">
        <img src={alist_product} alt="" />
        <p>List Product</p>
        </div>
        </Link>

      
    </div>
  )
}

export default Sidebar
