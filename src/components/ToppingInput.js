import { React, useState } from 'react'

export default function ToppingInput({ topping, addTopping, removeTopping }) {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        if (!isChecked) {
            addTopping(topping)
            setIsChecked(true)
        } else {
            removeTopping(topping)
            setIsChecked(false)
        }
    }

    return (
        <label className="form-label">
            <input
                className="form-input"
                name={ topping.name }
                type="checkbox"
                checked={ isChecked }
                onChange={ handleChange }
                value={ topping.name }
            />
            { topping.displayName }
            ${ topping.price.toFixed(2) }
        </label>
    )
}
