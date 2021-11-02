import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage';
import OrderPage from './pages/OrderPage';
import GetInTouch from './pages/GetInTouch';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {

  return (
    // Provider just says everything inside will be in store
    <Provider store={store}>
      <Router>
        <div id="App" className="App">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
            crossOrigin="anonymous"
          />
          <Header />
          <NavBar />
          <Switch>
            <Route exact={ true } path="/" component={ WelcomePage } />
            <Route path="/order" component={ OrderPage } />
            <Route path="/contact" component={ GetInTouch }/>
            <Route path="/confirmation" component={ ConfirmationPage }/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
