import { remove } from 'dom-helpers'
import { React, useEffect, useState } from 'react'

export default function DeliveryContainer({ delivery, displayOptions, addPrice, removePrice }) {

    const [deliverySelected, setDeliverySelected] = useState([])
    const [deliveryPrice, setDeliveryPrice] = useState(0)

    localStorage.setItem('deliverySelected', JSON.stringify([deliverySelected]))
    
    useEffect(() => {
        if (delivery) {
            setDeliverySelected(delivery[0])
            setDeliveryPrice(delivery[0].price)
        }
    }, [delivery])

    const handleChange = (event) => {
        const selection = delivery[event.target.value]
        const price = selection.price
        setDeliverySelected(selection)

        if(deliveryPrice > 0) {
            removePrice(deliveryPrice)
            setDeliveryPrice(price)
        } else {
            addPrice(price)
            setDeliveryPrice(price)
        }
    }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(delivery)}
        </select>
    )
}
