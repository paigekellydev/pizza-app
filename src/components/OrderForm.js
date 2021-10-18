import React from 'react'

export default function OrderForm() {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit working')
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}
