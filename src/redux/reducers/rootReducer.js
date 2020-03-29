import { combineReducers } from "redux"
import  userReducer  from "../reducers/user/userReducer"
import foodListReducer from "../reducers/foodListRedux/foodListReducer"

export default combineReducers({
    user: userReducer,
    vendor: foodListReducer
})