const InitialState = {
    hidden: true,
    cartItems: [],
    // checkoutItems: [],
}

const cartReducer = (state = InitialState, action) => {
    console.log('action',action.payload)
    switch (action.type) {
        case "TOGGLE_CART":
            return {
                ...state,
                hidden: !state.hidden
            }
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        // case "CHECKOUT_ITEM":
        //     return {
        //         ...state,
        //         checkoutItems: [...state.checkoutItems, action.payload]
        //     }
        default:
            return state;
    }
}

export default cartReducer