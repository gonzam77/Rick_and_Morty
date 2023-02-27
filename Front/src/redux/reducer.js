import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
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
        // case FILTER:
        //     return {
        //         ...state,
        //         myFavorites: state.allCharacters.filter(char => char.gender === payload)

        //     }
        // case ORDER:

        //     if (payload === "Ascendente") {
        //         return {
        //             ...state,
        //             allCharacters: state.allCharacters.sort((a,b) => a.id - b.id)
        //         }
        //     }
        //     if(payload === "Descendente") {         
        //         return {
        //             ...state,
        //             allCharacters: state.allCharacters.sort((a,b) => b.id - a.id)
        //         }
        //     }
        //     return
        default:
            return { ...state }
    }
}

export default reducer;