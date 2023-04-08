import { types } from "../Types/Types"

const initialState = []

export const initializer = (initialValue = initialState) =>
JSON.parse(localStorage.getItem("localCart")) || initialValue;

export const dentistReducer = (state = initialState, action) => {
    console.log('...' + action.type)
    if(action.type === types.addFav){
        console.log(`state: ${state}`)
        return [
            ...state, 
            {
                id: action.payload.id,
                name: action.payload.name
            }
        ]
    }

    return state
}