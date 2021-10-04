import { combineReducers } from "redux";
import shakeReducer from "./shake/reducer";
import appleReducer from "./apple/reducer";
//import appleReducer from "./apple/reducer"
const rootReducer = combineReducers({
    shakeReducer,
    appleReducer,
})

export default rootReducer;