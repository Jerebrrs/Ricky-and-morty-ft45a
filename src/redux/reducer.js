import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const filteredCharacters = state.allCharacters.filter(
                favorite => favorite.id !== Number(payload)
            );
            return {
                ...state,
                allCharacters: filteredCharacters,
                myFavorites: filteredCharacters
            }
        case FILTER:
            //*{type:filter,payloand: "female"}
            if (payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filterdFavs = state.allCharacters.filter(
                char => char.gender === payload
            )
            return {
                ...state,
                myFavorites: filterdFavs
            }

        case ORDER:
            const orderCopy = [...state.myFavorites];
            if (payload === "A")
                orderCopy.sort((a, b) => a.id - b.id);
            if (payload === "D")
                orderCopy.sort((a, b) => b.id - a.id);
            return {
                ...state,
                myFavorites: orderCopy
            }
        default:
            return {
                ...state
            }
    }

}