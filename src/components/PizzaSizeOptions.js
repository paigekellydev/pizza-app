import { React, useState } from 'react'

export default function PizzaSizeOptions({pizzaSizes, chosenSelections, addSelection, removeSelection}) {
    
    const [selected, setSelected] = useState(pizzaSizes[0])
    
    const displayOptions = () => {
        return pizzaSizes.map(size => {
            return (
                <option className="form-option" key={size.type} value={size.type}>
                    {size.displayName}
                </option>
            ) 
        })
    }

    return (
        <select id="pizza-size-option-section" className="form-select">
            {displayOptions()}
        </select>
    )
}