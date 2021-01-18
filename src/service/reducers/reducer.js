import { ADD_TO_TODO ,REMOVE_TO_CART} from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_TODO:
            console.warn("Add reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            case REMOVE_TO_CART:
            console.log("remove reducer", state)
            state.pop()
            return [
                ...state,

            ]
        default:
            return state
    }


}
