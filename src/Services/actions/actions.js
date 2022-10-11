import {ADD_TO_CARD} from '../../Contants'
import { REMOVE_TO_CARD } from '../../Contants'

export const addToCard = (data) => {
    return{
        type:ADD_TO_CARD,
        data:data
    }
}

export const removeToCard = () => {
    return{
        type:REMOVE_TO_CARD,
        
    }
}