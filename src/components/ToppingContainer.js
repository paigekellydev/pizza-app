import React from 'react'
import ToppingInput from './ToppingInput'

export default function ToppingContainer({toppings, chosenSelections, addSelection, removeSelection}) {
    
    const displayToppings = () => {
        return toppings.map((topping, index) => {
            return (
                <ToppingInput
                    key={`${topping.name}${index}`}
                    topping={ topping }
                    chosenSelections={ chosenSelections }
                    selectionToUpdate="chosenToppings"
                    addSelection={ addSelection }
                    removeSelection={ removeSelection }
                />
            )
        })
    }
    
    return (
        <section id="topping-container" className="form-section">
            {displayToppings()}
        </section>
    )
}
