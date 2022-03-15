import React from 'react';
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/Firebase.utils';
import { useSelector,useDispatch } from 'react-redux';
import CartIcon from '../Cart/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import {toggleCart} from '../../redux/Cart/Cart.action'


const Header = () => {
    const userSignedIn = useSelector((state) => state.user.userSignedIn)
    const hiddenCart = useSelector((state) => state.cart.hidden)
    console.log({ userSignedIn })
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut();
    }
    console.log(hiddenCart)

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" ></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/"> Home </Link>
                {
                    userSignedIn ?
                        <>
                            <Link className="option" to="/shop"> Shop </Link>
                            <Link className="option" onClick={signOut} to="/"> Sign Out</Link>
                            <CartIcon onClick={()=> dispatch(toggleCart())} />
                            {!hiddenCart ? <CartDropdown /> : ''}
                        </> : <Link className="option" to="/signin"> Sign In</Link>

                }
            </div>
        </div>
    )
}

export default Header