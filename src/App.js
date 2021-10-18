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

  return (
    <Router>
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
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
