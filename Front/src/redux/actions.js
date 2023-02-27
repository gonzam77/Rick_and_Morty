import { DELETE_FAVORITES, ADD_FAVORITES, FILTER, ORDER } from "./action-types"

export const addFavorites = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}

export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}