import ToppingInput from './ToppingInput'

export default function ToppingContainer({ toppings }) {

    const displayToppings = () => {
        // if toppings prop is valid, return topping input options for each topping
        // toppings is derived from state in OrderForm allOptions.toppings
        if (toppings) {
            return toppings.map((topping, index) => {
                return (
                    <ToppingInput
                        key={`${topping.name}${index}`}
                        topping={ topping }
                    />
                )
            })
        }
    }

    return (
        <section id="topping-container" className="form-section">
            {displayToppings()}
        </section>
    )
}
