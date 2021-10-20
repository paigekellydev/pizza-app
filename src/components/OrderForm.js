import { React, useEffect, useState } from 'react'
import DeliveryOptions from './DeliveryOptions'
import PizzaSizeOptions from './PizzaSizeOptions'
import ToppingInput from './ToppingInput'

export default function OrderForm({ addPrice }) {

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
    
    const addTopping = (selectionToUpdate, item) => {
        let copyOfChosenToppings = chosenSelections[selectionToUpdate]
        setChosenSelections(
            { 
                ...chosenSelections, 
                selectionToUpdate: [...copyOfChosenToppings, item]
            })
    }

    const removeTopping = (topping) => {
        const filteredToppings = chosenSelections.chosenToppings.filter(item =>
            (item.name !== topping.name)
        )
        setChosenSelections({...chosenSelections, chosenToppings: filteredToppings})
    }

    const displayToppings = () => {
        return toppings.map((topping, index) => {
            return (
                <ToppingInput
                    key={`${topping.name}${index}`}
                    topping={ topping }
                    chosenSelections={ chosenSelections }
                    selectionToUpdate="chosenToppings"
                    addTopping={ addTopping }
                    removeTopping={ removeTopping }
                />
            )
        })
    }

    const totalPrice = () => {
        let totalPrice = 0
        let copyOfChosenSelections = chosenSelections
        console.log(copyOfChosenSelections)

        // Object.keys(copyOfChosenSelections).forEach(selection => {
        //     console.log(selection)
        // })
        for (let selection in copyOfChosenSelections) {
            copyOfChosenSelections[selection].forEach(item => {
                totalPrice += item.price
            })
        }
        console.log(totalPrice)
        // addPrice(totalPrice)
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
