import { ADD_FAVORITES, DELETE_FAVORITES } from "./action-types";

const initialState = {
    myFavorites: []
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(element => element.id !== payload)
            }

        default:
            return {...state}
    }
}

export default reducer;