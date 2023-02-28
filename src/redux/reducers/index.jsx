import { combineReducers } from "redux";
import  appReducer  from "./appReducer";
import postReducer from "./postReducer";
import authReducer  from "./authReducer";

const rootReducer = combineReducers({
    app : appReducer,
    post : postReducer,
    auth : authReducer,
})

export default rootReducer;