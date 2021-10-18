import './App.css';
import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [deliveryOption, setDeliveryOption] = useState('')
  const [toppings, setToppings] = useState([])
  const [pizzaSize, setPizzaSize] = useState(16)
  const [specialInstructions, setSpecialInstructions] = useState('')

  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/order">
            <OrderPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
