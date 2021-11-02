import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function ContactFormInput({ name, displayName }) {

    const [information, setInformation] = useState('')
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInformation(
            event.target.value
        )
        dispatch({
            type: "ADD_CONTACT_INFO",
            payload: { key:[name], value: information}
        })
    }
    
    return (
        <label key={name}>
            {displayName}:
            <input type="text" name={name} onChange={handleChange}/>
        </label>
    )
}
