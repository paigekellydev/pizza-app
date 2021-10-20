import { React, useState } from 'react'

export default function ToppingInput({ topping, addTopping, removeTopping }) {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        if (!isChecked) {
            addTopping("chosenToppings", topping)
            setIsChecked(true)
        } else {
            removeTopping(topping)
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
