import React from 'react'
import './CartDropdown.scss'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { checkout } from '../../redux/Cart/Cart.action'
import { Link } from 'react-router-dom'
import { toggleCart } from '../../redux/Cart/Cart.action'
// import Checkout from '../Checkout/Checkout'


const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  // const hiddenCart = useSelector((state) => state.cart.hidden)
  console.log(cartItems, "cartItems")
  const dispatch = useDispatch()
  const goToCheckout = () => {
    dispatch(toggleCart())
    dispatch(checkout(cartItems))
  }
  return (
    <>
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map(item => (
            <h1 key={item.id}> {item.name} </h1>
          ))}
        </div>
        <Button onClick={goToCheckout} >
          <Link to="/checkout"> CHECKOUT </Link>
        </Button>
      </div>

    </>
  )
}
export default CartDropdown