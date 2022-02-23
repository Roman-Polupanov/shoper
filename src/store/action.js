import { ADD_GOOD_TO_CART, ADD_LIKED_TO_FAVORITE, REMOVE_GOOD_FROM_CART } from "./actionTypes";

export const addGoodToCart = (good) => ({
    type: ADD_GOOD_TO_CART,
    value: good
});

// export const addLikedToFavorite = (liked) => ({
//     type: ADD_LIKED_TO_FAVORITE,
//     value: liked
// });

// export const removeGoodFromCart = (good) => ({
//     type: REMOVE_GOOD_FROM_CART,
//     value: good
// });
