import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DeliveryContainer({ delivery, displayOptions, addPrice, removePrice }) {
    // const selections = useSelector(store => store.selections); // most people abbreviate store with s // s.selections
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch({type: "CHANGE_DELIVERY", payload: delivery[event.target.value]})
    }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(delivery)}
        </select>
    )
}
