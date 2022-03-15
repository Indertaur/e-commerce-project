import './App.css';
import React, { useEffect } from 'react';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils'
import { useDispatch, useSelector } from 'react-redux';
import { setUserSignedIn } from './redux/User/User.action'
import Checkout from './components/Checkout/Checkout';

function App() {

  // const [userSignedIn, setUserSignedIn] = useState(null)
  const dispatch = useDispatch()
  const userSignedIn = useSelector((state) => state.user.userSignedIn)

  // auth.onAuthStateChanged(user => {
  //   if (user) {
  //     // console.log(user)
  //     return setUserSignedIn(true);
  //   }
  //   // console.log(user)
  //   setUserSignedIn(false);
  // })

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.log({userAuth})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
  
        userRef.onSnapshot(snapShot => {
          setUserSignedIn({
              id: snapShot.id,
              ...snapShot.data()
          });
          // console.log(userSignedIn);
        });
      }
      // console.log("djknd",userAuth);
      dispatch(setUserSignedIn(userAuth));
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, []);



  if (userSignedIn) {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path='/signin' component={HomePage} /> */}
          {/* <Route exact path="/signin">
            {userSignedIn ? <Redirect to="/" /> : <HomePage />}
          </Route> */}
          {/* {userSignedIn && <Redirect exact to="/shop" />} */}
          <Route path="/checkout" component={Checkout} />
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
