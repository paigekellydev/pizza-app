import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { store } from "../store"

export default function ConfirmationPage() {
    const store = useSelector(store => store)
    const url = `http://localhost:3000/pizzaOrders`
    const orderInfo = localStorage.getItem('orderInfo')
    const display = () => console.log(orderInfo)

    return (
        <div>
            <h2>Thank you for placing your order</h2>
            <h4>Contact Information: </h4>
            {display()}
            <p>Name: {store.contactInfo.firstName} {store.contactInfo.lastName}</p>
            <h4>Delivery Information: </h4>
            <h4>Pizza Information</h4>
        </div>
    )
}
