import {
    CHARACTER_DETAILS,
    CREATE_CHARACTER,
    GET_CHARACTERS
} from "../actions";

const initialState = {
    characters: [],
    details: [],
    charactersCreated: [],
    allCharacters: []
}

/* en este reducer lo que tendran que hacer es definir los switchs los cuales van a tener sus respectivas case y
returns modificando el estado dependiendo de lo que se requiera en cada accion */

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        case CHARACTER_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case CREATE_CHARACTER:
            return {
                ...state,
                charactersCreated: [...state.charactersCreated, action.payload]
            }
        default:
            return state
    }
}

export default reducer;