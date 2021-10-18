import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link exact to="/">Home</Link>
                </li>
                <li>
                    <Link exact to="/order">Order Online</Link>
                </li>
                <li>
                    <Link exact to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
