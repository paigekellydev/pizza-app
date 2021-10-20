import { React, useEffect, useState } from 'react'
import DeliveryOptions from './DeliveryOptions'
import PizzaSizeOptions from './PizzaSizeOptions'
import ToppingInput from './ToppingInput'

export default function OrderForm({ addPrice }) {

    const [chosenToppings, setChosenToppings] = useState([]);
    const [delivery, setDelivery] = useState([]);
    const [pizzaSizes, setPizzaSizes] = useState([]);
    const [toppings, setToppings] = useState([]);

    // fetches data from db.json, must run npx json-server --watch db.json
    // in order to fetch from this URL, make sure you're on port 3000
    useEffect(() => {
        fetch('http://localhost:3000/options')
            .then(result => result.json())
            .then(options => {
                setDelivery(options.delivery)
                setPizzaSizes(options.pizzaSizes)
                setToppings(options.toppings)
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit working')
    }
    
    const addTopping = (topping) => {
        setChosenToppings([...chosenToppings, topping])
    }

    const removeTopping = (topping) => {
        const filteredToppings = chosenToppings.filter(item =>
            (item.name !== topping.name)
        )
        setChosenToppings(filteredToppings)
    }

    const displayToppings = () => {
        return toppings.map((topping, index) => {
            return (
                <ToppingInput
                    key={`${topping.name}${index}`}
                    topping={ topping }
                    addTopping={ addTopping }
                    removeTopping={ removeTopping }
                />
            )
        })
    }

    const addToppingPrices = () => {
        let totalPrice = 0
        
        return chosenToppings.forEach(topping => {
            return totalPrice + topping.price
        })
        console.log(totalPrice)
        addPrice(totalPrice)
    }

    return (
        <form onSubmit={handleSubmit}>
            <DeliveryOptions addPrice={ addPrice }/>
            <PizzaSizeOptions addPrice={ addPrice }/>
            {displayToppings()}
            <button type="submit">Submit</button>
        </form>
    )
}
