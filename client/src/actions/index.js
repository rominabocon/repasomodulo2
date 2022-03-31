import axios from "axios";

/* En actions vas a tener que crear las acciones que se despacharan en el reducer acompañadas
de las constantes ya exportadas */

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const CHARACTER_DETAILS = 'CHARACTER_DETAILS';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';

export const getCharacters = () => async dispatch => {
    const characters = await axios.get('http://localhost:3001/characters');
    return dispatch({
        type: GET_CHARACTERS,
        payload: characters.data
    });
};

export const getCharacter = (id) => async dispatch => {
    const character = await axios.get(`http://localhost:3001/characters/${id}`);
    return dispatch({
        type: CHARACTER_DETAILS,
        payload: character.data
    })
}

let id = 117;

export const createCharacter = ({ name, img, nickname }) => {
    return {
        type: CREATE_CHARACTER,
        payload: {
            id: id++,
            name,
            img,
            nickname
        }
    }
}