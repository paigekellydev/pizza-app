import { React, useState } from 'react'
import OrderForm from '../components/OrderForm'
import { useSelector, useDispatch } from 'react-redux'


export default function OrderPage() {

    const [totalPrice, setTotalPrice] = useState(0)
    const store = useSelector(store => store); // most people abbreviate store with s // s.selections

    
    // const displayPrice = () => {
    //     let totalPrice = 0

    //     Object.keys(selections).map(function(key) {
    //         if (key === "toppings") {
    //             selections[key].map(item => totalPrice += item.price)
    //         } else {
    //             totalPrice += selections[key].price
    //         }
    //     })
    //     // selections.map(item => totalPrice += item.price)
    //     return (totalPrice.toFixed(2))
    // }

    const displaySelections = () => {
        return Object.keys(store).map(function(key) {
            if (key === "toppings") {
                return store[key].map(item => {
                    return <li key={item.displayName}>{item.displayName}</li>
                })
            } else {
                const item = store[key]
                return <li key={item.displayName}>{item.displayName}</li>
            }
        })
    }

    return (
        <div id="order-page" className="page">
            <h1>Order Page</h1>
            <OrderForm />
            {/* <p>Price: ${ displayPrice() }</p> */}
            <ul>
                {displaySelections()}
            </ul>
        </div>
    )
}
