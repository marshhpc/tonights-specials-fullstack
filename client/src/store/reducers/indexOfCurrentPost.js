import actions from "../actions";

export default function indexOfCurrentPost(state = 0, action) {
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_POST:
         return action.payload;
      default:
         return state;
   }
}
