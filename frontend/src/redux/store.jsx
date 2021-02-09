import { createStore, combineReducers } from "redux";
import LoginReducer from "./reducers/LoginReducer";

const reducer = combineReducers({
    user: LoginReducer
});

const initialState = {};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;