import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { store } from "../store"

export default function ConfirmationPage() {
    const store = useSelector(store => store)
    const url = `http://localhost:3000/pizzaOrders`
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'))
    const display = () => console.log(orderInfo)
    const deliveryMessage = () => {
        if (orderInfo.delivery.type === "pickUp")  {
            return (
                <section id="pickUpInfo"> 
                    <p>Your order will be available in 20 minutes. 
                        Please pick up at 1000 Alaska Drive,
                    </p>
                </section>
            )
        }
    }

    return (
        <div>
            <h2>Thank you {orderInfo.contactInfo.firstName} for placing your order</h2>
            <h4>Contact Information: </h4>
            {display()}
            <p>Name:  {store.contactInfo.lastName}</p>
            <h4>Delivery Information: </h4>
            <h4>Pizza Information</h4>
        </div>
    )
}
