import { combineReducers } from "redux";
import userReducer from "./userReducer";
import iconReducer from "./iconReducer";

export default combineReducers({
    userReducer,
    iconReducer
});