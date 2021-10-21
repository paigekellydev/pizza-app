import { React, useEffect, useState } from 'react'
import DeliveryContainer from './DeliveryContainer'
import PizzaSizeContainer from './PizzaSizeContainer'
import ToppingContainer from './ToppingContainer';

export default function OrderForm({ displayPrice }) {

    const [delivery, setDelivery] = useState([]);
    const [pizzaSizes, setPizzaSizes] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [chosenSelections, setChosenSelections] = 
        useState(
            {
                chosenDelivery: [],
                chosenPizzaSize: [],
                chosenToppings: []
            }
        );

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
                        chosenDelivery: [delivery[0]],
                        chosenPizzaSize: [pizzaSizes[0]]
                    }
                )
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit working')
    }
    
    const addSelection = (selectionToUpdate, item) => {
        // let selection = "chosenDelivery"
        // console.log(chosenSelections[selection])
        console.log(selectionToUpdate)
        if (selectionToUpdate === "chosenToppings") {
            setChosenSelections(
                { 
                    ...chosenSelections, 
                    [selectionToUpdate]: [...chosenSelections[selectionToUpdate], item]
                }
            )
        } else {
            setChosenSelections(
                { 
                    ...chosenSelections, 
                    [selectionToUpdate]: [item]
                }
            )

        }
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
            console.log(copyOfChosenSelections[selection])
            copyOfChosenSelections[selection].forEach(item => {
                if (item) { 
                    totalPrice += item.price
                }
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
