import { React, useEffect, useState } from 'react'
import DeliveryContainer from './DeliveryContainer'
import PizzaSizeContainer from './PizzaSizeContainer'
import ToppingContainer from './ToppingContainer';

export default function OrderForm({ displayPrice }) {

    const [allOptions, setAllOptions] = useState({});
    const [totalPrice, setTotalPrice] = useState(0)
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

    const addPrice = (price) => {
        setTotalPrice(totalPrice + price)
    }

    const removePrice = (price) => {
        setTotalPrice(totalPrice - price)
    }
    
    const displayTotalPrice = () => {
        return <p>${totalPrice.toFixed(2)}</p>
    }

    const addTotalPrice = () => {
        const pizzaPrice = JSON.parse(localStorage.getItem('pizzaSizeSelected'))[0].price
        const deliveryPrice = JSON.parse(localStorage.getItem('selectedDelivery'))[0].price
        const toppingsPrice = JSON.parse(localStorage.getItem('selectedToppings'))
        console.log(toppingsPrice)
    }

    return (
        <form onSubmit={handleSubmit}>
            {addTotalPrice()}
            <DeliveryContainer 
                delivery={allOptions.delivery}
                displayOptions={displayOptions}
                addPrice={addPrice}
                removePrice={removePrice}
            />
            <PizzaSizeContainer 
                pizzaSizes={allOptions.pizzaSizes} 
                displayOptions={displayOptions} 
                addPrice={addPrice}
                removePrice={removePrice}
            />
            <ToppingContainer toppings={allOptions.toppings} addPrice={addPrice} removePrice={removePrice}/>
            {displayTotalPrice()}
            <button type="submit">Submit</button>
        </form>
    )
}
