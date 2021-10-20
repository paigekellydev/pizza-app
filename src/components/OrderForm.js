import { React, useEffect, useState } from 'react'
import DeliveryOptions from './DeliveryOptions'
import PizzaSizeOptions from './PizzaSizeOptions'
import ToppingInput from './ToppingInput'

export default function OrderForm({ displayPrice }) {

    const [delivery, setDelivery] = useState([]);
    const [pizzaSizes, setPizzaSizes] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [chosenSelections, setChosenSelections] = useState({
        chosenDelivery: [],
        chosenPizzaSize: [],
        chosenToppings: []
    });

    // fetches data from db.json, must run npx json-server --watch db.json
    // in order to fetch from this URL, make sure you're on port 3000
    useEffect(() => {
        fetch('http://localhost:3000/options')
            .then(result => result.json())
            .then(options => {
                setDelivery(options.delivery)
                setPizzaSizes(options.pizzaSizes)
                setToppings(options.toppings)
                setChosenSelections(
                    {
                        ...chosenSelections, 
                        chosenDelivery: [options.delivery[0]],
                        chosenPizzaSize: [options.pizzaSizes[0]]
                    }
                )
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit working')
    }
    
    const addSelection = (selectionToUpdate, item) => {
        let copyOfChosenToppings = chosenSelections[selectionToUpdate]
        setChosenSelections(
            { 
                ...chosenSelections, 
                selectionToUpdate: [...copyOfChosenToppings, item]
            }
        )
    }

    const removeSelection = (selectionToUpdate, item) => {
        const filteredSelection = chosenSelections[selectionToUpdate].filter(item =>
            (item.name !== item.name)
        )
        setChosenSelections(
            { 
                ...chosenSelections, 
                selectionToUpdate: filteredSelection
            }
        )
    }

    const displayToppings = () => {
        return toppings.map((topping, index) => {
            return (
                <ToppingInput
                    key={`${topping.name}${index}`}
                    topping={ topping }
                    chosenSelections={ chosenSelections }
                    selectionToUpdate="chosenToppings"
                    addSelection={ addSelection }
                    removeSelection={ removeSelection }
                />
            )
        })
    }

    const totalPrice = () => {
        let totalPrice = 0
        let copyOfChosenSelections = chosenSelections
 
        for (let selection in copyOfChosenSelections) {
            copyOfChosenSelections[selection].forEach(item => {
                totalPrice += item.price
            })
        }
        console.log(totalPrice)
        displayPrice(totalPrice)
    }

    return (
        <form onSubmit={handleSubmit}>
            <DeliveryOptions />
            <PizzaSizeOptions />
            {displayToppings()}
            {totalPrice()}
            <button type="submit">Submit</button>
        </form>
    )
}
