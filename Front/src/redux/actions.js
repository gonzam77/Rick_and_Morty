import {
    ORDER,
    GET_FAVORITES,
    FILTER_BY_FAVS,
    FILTER_BY_GENDER,
    GET_CHARACTERS,
    GET_ALL_CHARACTERS
} from "./action-types"

import axios from "axios";

export const updateFavorites = (id) => {
    return function (dispatch) {
        axios.put(`http://localhost:3001/rickandmorty/fav/${id}`);
        // axios.get(`http://localhost:3001/rickandmorty/fav/`)
        //     .then(response => {
        //         return dispatch({
        //             type: GET_FAVORITES,
        //             payload: response.data,
        //         });
        //     });
    };
};

export const searchCharacter = (characters) => {
    return function (dispatch) {
        return dispatch({
            type: GET_CHARACTERS,
            payload: characters
        })
    }
}

export const getAllCharacters = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/rickandmorty/characters');
            return dispatch({
                type: GET_ALL_CHARACTERS,
                payload: response.data
            });
        } catch (error) {
            // Manejar el error de alguna manera (por ejemplo, mostrar un mensaje de error)
            console.error(error.message);
        }
    };
};

export const filterByGender = (gender) => {
    return {
        type: FILTER_BY_GENDER,
        payload: gender
    }
}
export const filterByFav = (is_fav) => {
    return {
        type: FILTER_BY_FAVS,
        payload: is_fav
    }
}

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}