import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";

export function addFAv(character) {
    return {
        type: ADD_FAV,
        payload: character
    }
}
//*payload era la info adicional que necesita para ejecutar la accion
export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export function filterCard(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}

