import React from 'react'
import './style.css'

export default function Coupon({coupon}) {
    
    return (
        <div className='cart'>
            <img src={coupon.image}/>
            <div className='course'>
                <h3>{coupon.category}</h3>
                <p>{coupon.title}</p>

                <p>{coupon.price}</p>
                <h3>{coupon.priceRegular}</h3>

                <a href={coupon.url}> Visit Now </a>
            </div>
        </div>
    )
}
