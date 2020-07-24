import actions from "../actions";

export default function userPosts(state = [], action) {
   switch (action.type) {
      case actions.STORE_USER_POST:
         return action.payload;
      default:
         return state;
   }
}
