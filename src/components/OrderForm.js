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

    return (
        <form onSubmit={handleSubmit}>
            {/* {addTotalPrice()} */}
            <DeliveryContainer 
                delivery={allOptions.delivery}
                displayOptions={displayOptions}
            />
            <PizzaSizeContainer 
                pizzaSizes={allOptions.pizzaSizes} 
                displayOptions={displayOptions} 
            />
            <ToppingContainer toppings={allOptions.toppings} />
            <button type="submit">Submit</button>
        </form>
    )
}
