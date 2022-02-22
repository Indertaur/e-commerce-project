import './App.css';
import React, { useState } from 'react';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import { auth } from './firebase/Firebase.utils'


function App() {

  const [userSignedIn, setUserSignedIn] = useState(true)

  auth.onAuthStateChanged(user => {
    if (user) {
      // console.log(user)
      return setUserSignedIn(true);
    }
    // console.log(user)
    setUserSignedIn(false);
  })

  if (userSignedIn === true) {
    return (
      <>
        <Header userSignedIn={userSignedIn} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path='/signin' component={HomePage} /> */}
          <Route exact path="/signin">
            {userSignedIn ? <Redirect to="/" /> : <HomePage />}
          </Route>
        </Switch>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </>
    )
  }
}

export default App;
