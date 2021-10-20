import { React, useState } from 'react'
import OrderForm from '../components/OrderForm'

export default function OrderPage() {

    const [totalPrice, setTotalPrice] = useState(0)
    
    const addPrice = (price) => {
        const currentPrice = totalPrice
        setTotalPrice((currentPrice + price).toFixed(2))
    }

    return (
        <div id="order-page" className="page">
            <h1>Order Page</h1>
            <OrderForm addPrice={ addPrice }/>
            <p>Price: ${ totalPrice }</p>
        </div>
    )
}
