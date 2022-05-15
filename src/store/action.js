import { ADD_CARD_TO_CART, DEL_CARD_FROM_CART } from "./action_type";

export const addCardtoCart = (good) => ({
    type: ADD_CARD_TO_CART,
    value: good
});

export const delCardfromCart = (good) => ({
    type: DEL_CARD_FROM_CART,
    value: good
});