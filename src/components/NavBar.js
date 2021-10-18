import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/order">Order Online</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}
