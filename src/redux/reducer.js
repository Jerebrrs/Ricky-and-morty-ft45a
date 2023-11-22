import { ADD_FAV, REMOVE_FAV } from "./action-type";

const initialState = {
    myFavorites: [],    //* en este array guardo los favoritos 
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const filteredCharacters = state.myFavorites.filter(
                favorite => favorite.id !== Number(payload)
            );
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        default:
            return {
                ...state
            }
    }

}