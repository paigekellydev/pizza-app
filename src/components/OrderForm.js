import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import DeliveryContainer from './DeliveryContainer'
import PizzaSizeContainer from './PizzaSizeContainer'
import ToppingContainer from './ToppingContainer';
import { useDispatch } from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// const navigate = useNavigate();

const url = 'http://localhost:3000/'

export default function OrderForm({ displayPrice }) {

    const [allOptions, setAllOptions] = useState({});
    const store = useSelector(store => store)
    const dispatch = useDispatch();
    const [id, setId] = useState(null)

    // fetches data from db.json, must run npx json-server --watch db.json
    // in order to fetch from this URL, make sure you're on port 3000
    useEffect(() => {
        fetch(`${url}options`)
            .then(result => result.json())
            .then(options => setAllOptions(options))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem("orderInfo", JSON.stringify(store))
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderInfo: store })
        };
        fetch(`${url}pizzaOrders`, requestOptions)
            .then(window.location.href = 'http://localhost:3001/confirmation')
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
            <ContactForm />
            <PizzaSizeContainer 
                pizzaSizes={allOptions.pizzaSizes} 
                displayOptions={displayOptions} 
            />
            <ToppingContainer toppings={allOptions.toppings} />
            <button type="submit">Submit</button>
        </form>
    )
}
