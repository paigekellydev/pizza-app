import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DeliveryContainer({ delivery, displayOptions, addPrice, removePrice }) {
    const selections = useSelector(store => store.selections); // most people abbreviate store with s // s.selections
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch({type: "CHANGE_DELIVERY", payload: delivery[event.target.value]})
    }
        

    
    // useEffect(() => {
    //     if (delivery) {
    //         setDeliverySelected(delivery[0])
    //         setDeliveryPrice(delivery[0].price)
    //     }
    // }, [delivery])

    // const handleChange = (event) => {
    //     const selection = delivery[event.target.value]
    //     const price = selection.price
    //     setDeliverySelected(selection)

    //     if(deliveryPrice > 0) {
    //         removePrice(deliveryPrice)
    //         setDeliveryPrice(price)
    //     } else {
    //         addPrice(price)
    //         setDeliveryPrice(price)
    //     }
    // }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(delivery)}
        </select>
    )
}
