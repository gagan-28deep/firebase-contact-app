// Create contact using all actions

import {
    SET_CONTACT , SET_LOADING , CONTACT_TO_UPDATE , SET_SINGLE_CONTACT
} from './actions.types'

// TODO: use Switch case

export default (state , action) => {
    switch(action.type){
        case SET_CONTACT:
            return action.payload === null ? {...state , contacts : []} : {...state , contacts : action.payload}
        case SET_LOADING:
            return {...state , loading : action.payload}
        case CONTACT_TO_UPDATE:
            return{
                ...state , contactToUpdate : action.payload , contactToUpdateKey : action.key
            }
        case SET_SINGLE_CONTACT:
            return{
                ...state , singleContact : action.payload
            }
        default:
            return state
    }
}