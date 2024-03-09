import React from 'react'
import './Footers.css'
import footerlogo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import wtapp from '../Assets/whatsapp_icon.png'
import pintrest from '../Assets/pintester_icon.png'






const Footers = () => {
  return (
    <div className='footers'>
      <div className="footers-logo">
    <img src={footerlogo} alt="" />
    <p className="footers-logo-p" > Shopper</p>
      </div>
      <ul className='footers_links'>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Conatct</li>
      </ul>
      <div className="footers-social-icons">
        <div className="footers-icons-containers">
            <img src={instagram} alt="" /></div>
            <div className="footers-icons-containers">
            <img src={wtapp} alt="" /></div>
            <div className="footers-icons-containers">
            <img src={pintrest} alt="" /></div>
      </div>
      <div className="footers-copywrights">
        <hr/>
        <p>Copyrights @2024 -All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footers
