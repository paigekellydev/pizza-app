import { React, useEffect, useState } from 'react'
import DeliveryContainer from './DeliveryContainer'
import PizzaSizeContainer from './PizzaSizeContainer'
import ToppingContainer from './ToppingContainer';

export default function OrderForm({ displayPrice }) {

    const [allOptions, setAllOptions] = useState({});

    // fetches data from db.json, must run npx json-server --watch db.json
    // in order to fetch from this URL, make sure you're on port 3000
    useEffect(() => {
        fetch('http://localhost:3000/options')
            .then(result => result.json())
            .then(options => setAllOptions(options))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit working')
    }

    const displayOptions = (arrayOfItems) => {
        if (arrayOfItems) {
            return arrayOfItems.map((option, index) => {
                return (
                    <option key={option.type} value={index}>{option.displayName}</option>
                ) 
            })
        }
    }
    

    // const totalPrice = () => {
    //     let totalPrice = 0
    //     let copyOfChosenSelections = chosenSelections
 
    //     for (let selection in copyOfChosenSelections) {
    //         copyOfChosenSelections[selection].forEach(item => {
    //             if (item) { 
    //                 totalPrice += item.price
    //             }
    //         })
    //     }

    //     return <p>${totalPrice.toFixed(2)}</p>
    // }

    return (
        <form onSubmit={handleSubmit}>
            <DeliveryContainer delivery={allOptions.delivery} displayOptions={displayOptions}/>
            <PizzaSizeContainer pizzaSizes={allOptions.pizzaSizes} displayOptions={displayOptions}/>
            <ToppingContainer toppings={allOptions.toppings} />
            {/* {totalPrice()} */}
            <button type="submit">Submit</button>
        </form>
    )
}
