import React from 'react';
import { Link } from 'react-router-dom'

import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/Firebase.utils';


const Header = ({userSignedIn}) => {
    // console.log({userSignedIn})
    const signOut = () => {
        auth.signOut();
    }
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" ></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/"> Home </Link>
                {userSignedIn && <Link className="option" to="/shop"> Shop </Link>}
                {userSignedIn ? <Link className="option" onClick={signOut} to="/"> Sign Out</Link> : <Link className="option" to="/signin"> Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Header