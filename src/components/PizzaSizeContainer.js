import { React, useState, useEffect } from 'react'

export default function PizzaSizeOptions({ pizzaSizes, displayOptions }) {
    
    const [pizzaSizeSelected, setPizzaSizeSelected] = useState([])
    localStorage.setItem('pizzaSizeSelected', JSON.stringify([pizzaSizeSelected]))
    
    useEffect(() => {
        if (pizzaSizes) {
            setPizzaSizeSelected(pizzaSizes[0])
        }
    }, [pizzaSizes])

    const handleChange = (event) => {
        setPizzaSizeSelected(pizzaSizes[event.target.value])
    }

    return (
        <select id="pizza-size-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(pizzaSizes)}
        </select>
    )
}