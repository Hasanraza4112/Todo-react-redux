import { ADD_TO_TODO, REMOVE_TO_CART } from '../constants'
export const addTodo = (data) => {
    console.warn("Add action", data)
    return {
        type: ADD_TO_TODO,
        data: data
    }
}
export const removeTodos = (data) => {
    console.log("Remove action", data)
    return {
        type: REMOVE_TO_CART,
    }
}
