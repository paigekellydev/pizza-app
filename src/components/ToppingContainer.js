import { React, useState } from 'react'
import ToppingInput from './ToppingInput'

export default function ToppingContainer({toppings, addPrice, removePrice }) {

    const [selectedToppings, setSelectedToppings] = useState([]);
    localStorage.setItem('selectedToppings', JSON.stringify(selectedToppings))

    const addTopping = (topping) => {
        setSelectedToppings([...selectedToppings, topping])
        addPrice(topping.price)
    }
    
    const removeTopping = (topping) => {
        const copyOfSelectedToppings = selectedToppings
        const filteredSelection = copyOfSelectedToppings.filter(selection =>
            (selection !== topping)
        )
        setSelectedToppings(filteredSelection)
        removePrice(topping.price)
    }
    
    const displayToppings = () => {
        // if toppings prop is valid, return topping input options for each topping
        // toppings is derived from state in OrderForm allOptions.toppings
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
