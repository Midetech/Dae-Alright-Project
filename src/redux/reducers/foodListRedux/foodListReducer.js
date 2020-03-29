

const initialState = {
    vendorList: [],
    isFetching: false,
    error: null
}

const foodListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FOOD_BEGIN":
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case "ADD_FOOD_SUCCESS":
            return {
                ...state,
                isFetching: false,
                vendorList: action.payload
            }
        case "ADD_FOOD_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default foodListReducer