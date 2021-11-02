import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function PizzaSizeOptions({ pizzaSizes, displayOptions, removePrice, addPrice }) {

    const selections = useSelector(store => store.selections); // most people abbreviate store with s // s.selections
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch({type: "CHANGE_PIZZA_SIZE", payload: pizzaSizes[event.target.value]})
    }

    return (
        <select id="pizza-size-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(pizzaSizes)}
        </select>
    )
}