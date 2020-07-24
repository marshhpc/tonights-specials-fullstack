import actions from "../actions";

export default function currentUser(state = {}, action) {
   switch (action.type) {
      case actions.UPDATE_CURRENT_USER:
         return action.payload;
      default:
         return currentUser;
   }
}
