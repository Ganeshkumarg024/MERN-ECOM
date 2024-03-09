import React from 'react'
import './Newsletters.css'

const Newsletters = () => {
  return (
    <div className='newsletters'>
        <h1>Get Exclussive offers on you Email</h1>
        <p>Subscribe to news Letters and stay Updated</p>
        <div>
            <input type='email' placeholder='You email id'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Newsletters
