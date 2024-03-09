import React from 'react'
import "./Breadcrums.css"
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const{product}=props;
  return (
    <div className='breadcrums'>
        HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" />{props.category} <img src={arrow} alt="" /> {props.name}
      
    </div>
  )
}

export default Breadcrums
