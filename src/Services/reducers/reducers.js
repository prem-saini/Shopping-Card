import { ADD_TO_CARD, REMOVE_TO_CARD } from "../../Contants";

const initialState = {
    cardData: []
}

export default function cardItems(state=[], action) {

    switch (action.type) {
        case ADD_TO_CARD:
            return [
                ...state,
                {cardData: action.data}
            ]
            break;
            case REMOVE_TO_CARD:
                state.pop();
                return [
                    ...state,
                    
                ]
            default:
                return state
    }
}