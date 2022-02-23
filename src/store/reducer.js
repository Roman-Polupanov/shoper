import { createStore } from 'redux'
import initialState from './state';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GOOD_TO_CART':
            let cart = [...state.cart]
            cart.push(action.value)
            return { ...state, cart }

        // case 'REMOVE_GOOD_FROM_CART':
        //     let cartRemv = [...state.cartRemv]
        //     cartRemv.pop(action.value)
        //     return { ...state, cartRemv }

        // case 'ADD_LIKED_TO_FAVORITE':
        //     let favorite = [...state.favorite]
        //     favorite.push(action.value)
        //     return { ...state, favorite }

        default:
            return state;
    }
}

export const store = createStore(reducer, initialState)

console.log(store.getState())