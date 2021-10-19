import React from 'react'
import DeliveryOptionForm from '../components/DeliveryOptionForm'
import OrderForm from '../components/OrderForm'

export default function OrderPage() {

    return (
        <div id="order-page" className="page">
            <h1>Order Page</h1>
            <DeliveryOptionForm />
            <OrderForm />
        </div>
    )
}
