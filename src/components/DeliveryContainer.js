import { React, useState } from 'react'

export default function DeliveryContainer({delivery, chosenSelections, addSelection, removeSelection}) {
    
    const [selected, setSelected] = useState(delivery[0])
    
    const displayOptions = () => {
        return delivery.map(option => {
            return (
                <option key={option.type} value={option.type}>{option.displayName}</option>
            ) 
        })
    }

    return (
        <select id="delivery-option-section" className="form-select">
            {displayOptions()}
        </select>
    )
}
