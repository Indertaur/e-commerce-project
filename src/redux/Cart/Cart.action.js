export const toggleCart = () => ({
    type: 'TOGGLE_CART',
})

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
})

export const checkout = (item) => ({
    type: 'CHECKOUT_ITEM',
    payload: item,
})
