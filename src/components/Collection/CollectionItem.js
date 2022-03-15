import React from 'react'
import './CollectionItem.styles.scss'
import Button from '../Button/Button'
import { useDispatch,useSelector } from 'react-redux'
import { addItem } from '../../redux/Cart/Cart.action'

const CollectionItem = ({item}) => {
    // console.log(item)
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log(cartItems)
    const dispatch = useDispatch();
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.price}</span>
            </div>
            <Button inverted onClick={()=> dispatch(addItem(item))}> ADD TO CART </Button>
        </div>
    )
}

export default CollectionItem