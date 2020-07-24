import actions from "../actions";

export default function deletedCard(deletedCard = {}, action) {
   let deletedUserPost = { ...deletedCard };
   switch (action.type) {
      case actions.DELETE_USER_POST:
         deletedUserPost = action.payload.deletedUserPost;
         return deletedUserPost;
      default:
         return deletedCard;
   }
}
