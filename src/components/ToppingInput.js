import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function ToppingInput({ topping, addTopping, removeTopping }) {

    const [isChecked, setIsChecked] = useState(false);
    const selections = useSelector(store => store.selections); // most people abbreviate store with s // s.selections
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (!isChecked) {
            dispatch({type: "ADD_ITEM", payload: topping})
            setIsChecked(true)
        } else {
            dispatch({type: "REMOVE_ITEM", payload: topping})
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
            {/* ${ topping.price.toFixed(2) } */}
        </label>
    )
}
