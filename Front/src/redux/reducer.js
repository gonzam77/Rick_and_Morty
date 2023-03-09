import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

function reducer(state = initialState, { type, payload }) {
    
    const { myFavorites, allCharacters } = state

    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                allCharacters: payload,
                myFavorites: payload,

            }

        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
            }
        case FILTER:
            if (payload === "Todos") {
                return {
                    myFavorites: allCharacters
                }
            } else {
                return {
                    ...state,
                    myFavorites: allCharacters.filter(char => char.gender === payload)

                }
            }
        case ORDER:
            if (payload === "Ascendente") {
                return {
                    ...state,
                    myFavorites: allCharacters.sort((a, b) => a.id - b.id)
                }
            }
            if (payload === "Descendente") {
                return {
                    ...state,
                    myFavorites: allCharacters.sort((a, b) => b.id - a.id)
                }
            }
            return{...state}

        default:
            return { ...state }
    }
}

export default reducer;