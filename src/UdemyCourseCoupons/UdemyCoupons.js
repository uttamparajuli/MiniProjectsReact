import axios from 'axios';
import { useEffect, useState } from 'react';
import Coupon from './Coupon';

export default function UdemyCoupons() {
    const url = "http://course.globaltechupdate.com/v1/get-course?page=1"
    const [coupons, setCoupons] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setCoupons(response.data)
        })
    }, [url])

    if(!coupons) return <h1> loading the content... </h1>

    return(
        <div className='cart-container'>
            {coupons.data.map(coupon => {
                return <Coupon key={coupon.url} coupon={coupon} />
            })}
        </div>
    )
}
