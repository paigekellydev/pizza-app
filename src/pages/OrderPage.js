import { React, useState } from 'react'
import OrderForm from '../components/OrderForm'

export default function OrderPage() {

    const [totalPrice, setTotalPrice] = useState(0)
    
    const displayPrice = (price) => {
        setTotalPrice(price.toFixed(2))
        console.log(totalPrice)
    }

    return (
        <div id="order-page" className="page">
            <h1>Order Page</h1>
            <OrderForm displayPrice={ displayPrice }/>
            <p>Price: ${ totalPrice }</p>
        </div>
    )
}
