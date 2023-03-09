import { DELETE_FAVORITES, ADD_FAVORITES, FILTER, ORDER } from "./action-types"
import axios from "axios";

export const addFavorites = (character) => {
    return function (dispatch) {
        axios
            .post(`http://localhost:3001/rickandmorty/fav`, character)
            .then(response => {
                return dispatch({
                    type: ADD_FAVORITES,
                    payload: response.data,
                })
            })
    }
}

export const deleteFavorites = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            .then(response => {
                return dispatch({
                    type: DELETE_FAVORITES,
                    payload: response.data,
                })
            })
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