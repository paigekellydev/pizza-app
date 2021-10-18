import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function WelcomePage() {
    return (
        <div id="welcome-page" className="page">
            <h2>Welcome</h2>
            <Button variant="outline-primary" className="welcome-page-button">
                <Link exact to="/order">Order Online</Link>
            </Button>
            <Button variant="outline-primary" className="welcome-page-button">
                <Link exact to="/contact">Contact</Link>
            </Button>
        </div>
    )
}
