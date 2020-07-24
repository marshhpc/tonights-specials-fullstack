import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./combineReducers";

const intialState = {
   currentUser: {},
   userPosts: [],
   indexOfCurrentPost: 0,
};
const store = createStore(combineReducers, intialState, composeWithDevTools());

export default store;
