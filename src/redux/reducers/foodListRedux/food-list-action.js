import axios from "axios"

export const foodListBegin = () => ({
    type: 'ADD_FOOD_BEGIN'

})

export const foodListSuccess = food => ({
    type: 'ADD_FOOD_SUCCESS',
    payload: food
})

export const foodListFailure = error => ({
    type: 'ADD_FOOD_FAILURE',
    payload: error
})

export function fetchVendor() {
    
    return dispatch => {
        dispatch(foodListBegin())
        return axios.get('http://localhost:5000/vendor/')
                .then(food => { dispatch(foodListSuccess(food.data))
                return food })
                .catch(err => dispatch(foodListFailure(err)))
    }
}