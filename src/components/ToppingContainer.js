import React, { useEffect, useState } from 'react'
import ToppingInput from './ToppingInput'

export default function ToppingContainer({toppings, addSelection, removeSelection}) {

    const [selectedToppings, setSelectedToppings] = useState([]);
    localStorage.setItem('selectedToppings', JSON.stringify(selectedToppings))

    const addTopping = (topping) => {
        setSelectedToppings([...selectedToppings, topping])
    }
    
    const removeTopping = (topping) => {
        const copyOfSelectedToppings = selectedToppings
        const filteredSelection = copyOfSelectedToppings.filter(selection =>
            (selection !== topping)
        )
        setSelectedToppings(filteredSelection)
    }
    
    const displayToppings = () => {
        if (toppings) {
            return toppings.map((topping, index) => {
                return (
                    <ToppingInput
                        key={`${topping.name}${index}`}
                        topping={ topping }
                        addTopping={ addTopping }
                        removeTopping={ removeTopping }
                    />
                )
            })
        }
    }
    
    return (
        <section id="topping-container" className="form-section">
            {displayToppings()}
        </section>
    )
}