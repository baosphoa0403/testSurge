import {combineReducers} from "redux";
import userReducer from "../reducers/userReducer";
import userManagement from "../reducers/userManagement";
import movieReducer from "../reducers/movieReducer";
// store tổng ứng dụng 
const rootReducer = combineReducers({
// nơi chứa các reducer sẽ cho từng mục store con
userReducer,
userManagement,
movieReducer
})


export default rootReducer;