import { React, useState, useEffect } from 'react'

export default function PizzaSizeOptions({ pizzaSizes, displayOptions, removePrice, addPrice }) {
    
    const [pizzaSizeSelected, setPizzaSizeSelected] = useState([])
    const [pizzaSizePrice, setPizzaSizePrice] = useState(0)
    localStorage.setItem('pizzaSizeSelected', JSON.stringify([pizzaSizeSelected]))
    
    useEffect(() => {
        if (pizzaSizes) {
            setPizzaSizeSelected(pizzaSizes[0])
            setPizzaSizePrice(pizzaSizes[0].price)
            addPrice(pizzaSizePrice)
        }
    }, [pizzaSizes])

    const handleChange = (event) => {
        const selection = pizzaSizes[event.target.value]
        const price = selection.price
        setPizzaSizePrice(price)
        setPizzaSizeSelected(selection)
    }

    return (
        <select id="pizza-size-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(pizzaSizes)}
        </select>
    )
}