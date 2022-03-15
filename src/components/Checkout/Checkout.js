import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log(cartItems, "checkout")
    const dispatch = useDispatch()
    return (
        <>
            <h1>Checkout</h1>
            {cartItems.map(item => (
                <h1 key={item.id}> {item.name} </h1>
            ))}
        </>
    )
}

export default Checkout