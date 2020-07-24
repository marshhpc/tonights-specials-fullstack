import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import userPosts from "./reducers/userPosts";
import indexOfCurrentPost from "./reducers/indexOfCurrentPost";

export default combineReducers({ currentUser, userPosts, indexOfCurrentPost });
