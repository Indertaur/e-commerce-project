import React from 'react'

import './Button.styles.scss'

const Button = ({ children, isGoogleSignIn,inverted, ...otherProps}) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'googleSignIn' : ''} button`} {...otherProps}>
        {children}
    </button>
  )
}

export default Button
