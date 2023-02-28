import { combineReducers } from "redux";
import  appReducer  from "./appReducer";
// import { authReducer } from "./authReducer";
// import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
    app : appReducer,
    // auth : authReducer,
    // post : postReducer,
})

export default rootReducer;