import { ADD_FAV, REMOVE_FAV } from "./action-type";

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