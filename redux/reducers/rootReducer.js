import { combineReducers } from "redux";
import userReducer from "./userReduce";
import postReducer from "./postresucer";

const rootReducer = combineReducers({
    //put reducers here
    user:userReducer,
    posts:postReducer
});

export default rootReducer;