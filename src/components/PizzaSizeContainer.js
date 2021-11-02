import { useDispatch } from 'react-redux'

export default function PizzaSizeOptions({ pizzaSizes, displayOptions }) {

    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch({type: "CHANGE_PIZZA_SIZE", payload: pizzaSizes[event.target.value]})
    }

    return (
        <select id="pizza-size-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(pizzaSizes)}
        </select>
    )
}