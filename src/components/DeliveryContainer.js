import { React, useEffect, useState } from 'react'

export default function DeliveryContainer({ delivery }) {

    const [deliverySelected, setDeliverySelected] = useState([])
    localStorage.setItem('deliverySelected', JSON.stringify([deliverySelected]))

    useEffect(() => setDeliverySelected(delivery[0]), [])
    
    const displayOptions = () => {
        if (delivery) {
            return delivery.map((option, index) => {
                return (
                    <option key={option.type} value={index}>{option.displayName}</option>
                ) 
            })
        }
    }

    const handleChange = (event) => {
        setDeliverySelected(delivery[event.target.value])
    }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions()}
        </select>
    )
}
