import { React, useState } from 'react'
import OrderForm from '../components/OrderForm'
import { useSelector, useDispatch } from 'react-redux'


export default function OrderPage() {

    const [totalPrice, setTotalPrice] = useState(0)
    const selections = useSelector(store => store.selections); // most people abbreviate store with s // s.selections

    
    const displayPrice = () => {
        let totalPrice = 0
        selections.map(item => totalPrice += item.price)
        return (totalPrice.toFixed(2))
    }

    const displaySelections = () => {
        return selections.map(item => {
            return <li key={item.id}>{item.displayName}</li>
        })
    }

    return (
        <div id="order-page" className="page">
            <h1>Order Page</h1>
            <OrderForm displayPrice={ displayPrice }/>
            <p>Price: ${ displayPrice() }</p>
            <ul>
                {displaySelections()}
            </ul>
        </div>
    )
}
