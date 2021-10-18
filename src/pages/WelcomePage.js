import React from 'react'
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div id="welcome-page" className="page">
            <h2>Welcome</h2>
            <button className="welcome-page-button">
                <Link exact to="/order">Order Online</Link>
            </button>
            <button className="welcome-page-button">
                <Link exact to="/contact">Contact</Link>
            </button>
        </div>
    )
}
