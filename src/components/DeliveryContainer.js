import { React, useEffect, useState } from 'react'

export default function DeliveryContainer({ delivery, displayOptions }) {

    const [deliverySelected, setDeliverySelected] = useState([])
    localStorage.setItem('deliverySelected', JSON.stringify([deliverySelected]))
    
    useEffect(() => {
        if (delivery) {
            setDeliverySelected(delivery[0])
        }
    }, [delivery])

    const handleChange = (event) => {
        setDeliverySelected(delivery[event.target.value])
    }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(delivery)}
        </select>
    )
}
