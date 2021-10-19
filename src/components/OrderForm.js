import { React, useState } from 'react'
import ToppingInput from './ToppingInput'

export default function OrderForm() {

    const [chosenToppings, setChosenToppings] = useState([])

    const pizzaToppings = [
        {
            name: "parmesan",
            price: .25,
            displayName: "Parmesan Cheese"
        },
        {
            name: "goatCheese",
            price: .50,
            displayName: "Goat Cheese"
        },
        {
            name: "arugula",
            price: .25,
            displayName: "Arugula"
        },
        {
            name: "mushrooms",
            price: .25,
            displayName: "Mushrooms"
        },
        {
            name: "prosciutto",
            price: .50,
            displayName: "Prosciutto"
        }
    ]

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
        return pizzaToppings.map((topping, index) => {
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

    return (
        <form onSubmit={handleSubmit}>
            {displayToppings()}
            <button type="submit">Submit</button>
        </form>
    )
}
