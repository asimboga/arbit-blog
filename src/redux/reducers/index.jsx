import { combineReducers } from "redux";
import  appReducer  from "./appReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    app : appReducer,
    post : postReducer,
})

export default rootReducer;