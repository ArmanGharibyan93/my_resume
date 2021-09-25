import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";


let redusers = combineReducers({
    main: mainReducer
});

const store = createStore(redusers);

window.__store__ = store;

export default store;