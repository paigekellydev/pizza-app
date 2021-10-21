import { React, useState } from 'react'

export default function DeliveryContainer({delivery, addSelection, removeSelection}) {
    
    const [selected, setSelected] = useState(delivery[0])
    
    const displayOptions = () => {
        return delivery.map((option, index) => {
            return (
                <option key={option.type} value={index}>{option.displayName}</option>
            ) 
        })
    }

    const handleChange = (event) => {
        const deliveryObj = delivery[event.target.value]
        if (deliveryObj) {
            setSelected(deliveryObj)
        }
        addSelection("chosenDelivery", selected)
    }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions()}
        </select>
    )
}
