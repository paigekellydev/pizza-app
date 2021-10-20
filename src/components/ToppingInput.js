import { React, useState } from 'react'

export default function ToppingInput({ topping, addSelection, selectionToUpdate, removeSelection }) {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        if (!isChecked) {
            addSelection(selectionToUpdate, topping)
            setIsChecked(true)
        } else {
            removeSelection(selectionToUpdate, topping)
            setIsChecked(false)
        }
    }

    return (
        <label>
            <input
                name={ topping.name }
                type="checkbox"
                checked={ isChecked }
                onChange={ handleChange }
                value={ topping.name }
            />
            { topping.displayName }
            { topping.price }
        </label>
    )
}
