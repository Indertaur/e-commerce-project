const InitialState = {
    userSignedIn: null,
}

const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'setUserSignedIn':
            return {
                ...state,
            userSignedIn: action.payload    
            }
        default:
            return state;
    }
}

export default userReducer