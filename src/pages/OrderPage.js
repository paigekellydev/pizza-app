import OrderForm from '../components/OrderForm'
import { useSelector } from 'react-redux'


export default function OrderPage() {

    const store = useSelector(store => store); // most people abbreviate store with s // s.selections
    
    const displayPrice = () => {
        let totalPrice = 0

        Object.keys(store).forEach(function(key) {
            if (key === "toppings") {
                store[key].map(item => totalPrice += item.price)
            } else {
                totalPrice += store[key].price
            }
        })
        return (totalPrice.toFixed(2))
    }

    const displaySelectedToppings = () => {
        return store.toppings.map(topping => {
            return <li key={topping.displayName}>{topping.displayName}</li>
        })
    }

    const displaySelectedPizzaSize = () => {
        return (
            <p>Pizza Size Selected: {store.pizzaSize.displayName}</p>
        )
    }

    const displaySelectedDelivery = () => {
        return (
            <p>Delivery Option Selected: {store.delivery.displayName}</p>
        )
    }

    return (
        <div id="order-page" className="page">
            <h1>Order Page</h1>
            <OrderForm />
            {/* <p>Price: ${ displayPrice() }</p> */}
            {displaySelectedPizzaSize()}
            {displaySelectedDelivery()}
            <p>Toppings Selected:</p>
            <ul>
                {displaySelectedToppings()}
            </ul>
            {displayPrice()}
        </div>
    )
}
