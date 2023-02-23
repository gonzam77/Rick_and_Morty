import { DELETE_FAVORITES, ADD_FAVORITES } from "./action-types"

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