import './App.css';
import React from 'react';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';


function App() {

  

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </>
  )
}

export default App;
