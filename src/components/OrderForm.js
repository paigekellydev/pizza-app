import { React, useEffect, useState } from 'react'
import DeliveryContainer from './DeliveryContainer'
import PizzaSizeContainer from './PizzaSizeContainer'
import ToppingContainer from './ToppingContainer';

export default function OrderForm({ displayPrice }) {

    const [delivery, setDelivery] = useState([]);
    const [pizzaSizes, setPizzaSizes] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [chosenSelections, setChosenSelections] = useState({});

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
                        chosenDelivery: [options.delivery[0]],
                        chosenPizzaSize: [options.pizzaSizes[0]],
                        chosenToppings: []
                    }
                )
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit working')
    }
    
    const addSelection = (selectionToUpdate, item) => {
        setChosenSelections(
            { 
                ...chosenSelections, 
                [selectionToUpdate]: [...chosenSelections[selectionToUpdate], item]
            }
        )
        localStorage.setItem("chosenSelections", JSON.stringify(chosenSelections))
    }
    
    const removeSelection = (selectionToUpdate, item) => {
        const copyOfChosenSelections = chosenSelections
        const filteredSelection = copyOfChosenSelections[selectionToUpdate].filter(selection =>
            (item !== selection)
        )
        setChosenSelections(
            { 
                ...chosenSelections, 
                [selectionToUpdate]: filteredSelection
            }
        )
    }

    const totalPrice = () => {
        let totalPrice = 0
        let copyOfChosenSelections = chosenSelections
 
        for (let selection in copyOfChosenSelections) {
            copyOfChosenSelections[selection].forEach(item => {
                totalPrice += item.price
            })
        }

        return <p>{totalPrice}</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <DeliveryContainer
                delivery={delivery} 
                addSelection={addSelection} 
                removeSelection={removeSelection}
                chosenSelections={chosenSelections}
            />
            <PizzaSizeContainer
                pizzaSizes={pizzaSizes} 
                addSelection={addSelection} 
                removeSelection={removeSelection}
                chosenSelections={chosenSelections}
            />
            <ToppingContainer 
                toppings={toppings} 
                addSelection={addSelection} 
                removeSelection={removeSelection}
                chosenSelections={chosenSelections}
            />
            {totalPrice()}
            <button type="submit">Submit</button>
        </form>
    )
}
