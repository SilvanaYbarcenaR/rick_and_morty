import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAV:
            /* return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            } */
            return { ...state, myFavorites: payload, allCharacters: payload };
        
        case REMOVE_FAV:
            /* const newFav = state.myFavorites.filter(fav => {
                return(fav.id !== Number(payload))
            })
            return {
                ...state,
                myFavorites: newFav
            } */
            return { ...state, myFavorites: payload };
        
        case FILTER:
            const allCharFiltered = state.allCharacters.filter(character =>
            character.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharacters]
                    : allCharFiltered
            }
        
        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites: 
                    payload === 'A' 
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
        
        default:
            return {...state}
    }
}

export default reducer;