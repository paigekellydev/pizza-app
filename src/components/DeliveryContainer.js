import { React, useEffect, useState } from 'react'

export default function DeliveryContainer({delivery, addSelection, removeSelection}) {
    
    const [selected, setSelected] = useState([])
    const [options, setOptions] = useState([]);
    
    const copyOfDeliveryOptions = new Set(delivery)
    const displayOptions = () => {
        // setSelected(delivery[0])
        return delivery.map((option, index) => {
            return (
                <option key={option.type} value={index}>{option.displayName}</option>
            ) 
        })
    }

    // const test = () => {
    //     if (delivery) {
    //         setSelected([delivery[0]])
    //     }
    // }

    // useEffect(() => {
    //     // setOptions(copyOfDeliveryOptions)
    //     // console.log(copyOfDeliveryOptions[0])
    //     // console.log(copyOfDeliveryOptions)
    //     // const firstOption = delivery[0]
    //     // setSelected(firstOption)
    //     // console.log(firstOption)
    //     // addSelection("chosenDelivery", selected)


    // }, [delivery])

    const handleChange = (event) => {
        const deliveryObj = delivery[event.target.value]
        if (selected !== deliveryObj) {
            setSelected(deliveryObj)
        }
        addSelection("chosenDelivery", selected)
    }

    return (
        <select defaultValue={copyOfDeliveryOptions[0]} id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions()}
            {/* {("chosenDelivery", selected)} */}
        </select>
    )
}
