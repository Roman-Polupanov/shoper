import { initialState } from "./state";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD_TO_CART':
            let add = [...state.cart]
            add.push(action.value)
            return { ...state, add }
        case 'DEL_CARD_FROM_CART':
            let cart = [...state.cart]
            cart.shift(action.value)
            return { ...state, cart }
        default:
            return state
    }
}

