import {
    FILTER_BY_FAVS,
    FILTER_BY_GENDER,
    ORDER, GET_FAVORITES,
    GET_CHARACTERS,
    GET_ALL_CHARACTERS,
} from "./action-types";

const initialState = {
    myFavorites: [],
    characters: [],
    allCharacters: []
};

function reducer(state = initialState, { type, payload }) {

    const { allCharacters, myFavorites } = state

    switch (type) {
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: payload,
            }
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload
            }
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: payload.data,
                allCharacters: payload.data
            }
        case FILTER_BY_GENDER:
            if (payload === "Todos") {
                return {
                    characters: allCharacters
                }
            } else {
                return {
                    ...state,
                    characters: allCharacters.filter(char => char.gender === payload)
                }
            }
        case FILTER_BY_FAVS:
            if (payload === "todos") {
                return {
                    ...state,
                    characters: allCharacters
                }
            } else if (payload === 'notFav') {
                return {
                    ...state,
                    characters: allCharacters.filter(char => char.is_fav === false)

                }
            } else {
                return {
                    ...state,
                    characters: myFavorites
                }
            }
        case ORDER:
            if (payload === "Ascendente") {
                return {
                    ...state,
                    characters: allCharacters.sort((a, b) => a.id - b.id)
                }
            }
            if (payload === "Descendente") {
                return {
                    ...state,
                    characters: allCharacters.sort((a, b) => b.id - a.id)
                }
            }
            return { ...state }

        default:
            return { ...state }
    }
}

export default reducer;