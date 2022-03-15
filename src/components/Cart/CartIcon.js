import React from 'react'
import './CartIcon.scss'
import { ReactComponent as ShippingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({onClick}) => {
    return (
        <>
            <div className="cart-icon" onClick={onClick}>
                <ShippingIcon className="shopping-icon" />
                <span className='item-count'>0</span>
            </div>
        </>
    )
}
export default CartIcon