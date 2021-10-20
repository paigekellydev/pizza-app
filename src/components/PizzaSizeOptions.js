import React from 'react'

export default function PizzaSizeOptions({ addPrice }) {
    return (
        <select id="pizza-size-option-section">
            <option value="small">Small: 16" Pizza $18</option>
            <option value="medium">Medium: 18" Pizza $22</option>
            <option value="large">Large: 22" Pizza $26</option>
        </select>
    )
}