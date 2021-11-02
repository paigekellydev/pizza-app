import { useDispatch } from 'react-redux'

export default function DeliveryContainer({ delivery, displayOptions}) {
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch({type: "CHANGE_DELIVERY", payload: delivery[event.target.value]})
    }

    return (
        <select id="delivery-option-section" className="form-select" onChange={handleChange}>
            {displayOptions(delivery)}
        </select>
    )
}
