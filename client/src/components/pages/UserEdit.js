import React from "react";
import CreateEditCard from "../CreateEditCard";
import { Link } from "react-router-dom";
// import Special from "../ui/Special";
import SpecialEdit from "../ui/SpecialEdit";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import without from "lodash/without";
import store from "../../store/store";

class UserEdit extends React.Component {
   lgoOutCurrentUser() {
      this.props.dispatch({
         type: actions.UPDATE_CURRENT_USER,
         payload: {},
      });
   }

   constructor(props) {
      super(props);

      this.state = {
         specials: [],
      };
   }
   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/marshhpc/cards-mock-data/master/mock-data-for-app/db.json"
         )
         .then((res) => {
            // handle success
            //    console.log(res);
            //    this.setState({ specials: res.data });
            // })

            this.props.dispatch({
               type: actions.STORE_USER_POST,
               payload: res.data,
            });
         })

         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   deletePostFromStore(id, propReturn) {
      console.log("props", this.props);
      const newPosts = store.getState().userPosts.filter((post) => {
         return post.id !== id;
      });
      console.log("new posts", newPosts);
      propReturn.dispatch({
         type: actions.STORE_USER_POST,
         payload: newPosts,
      });
   }

   render() {
      return (
         <div className="background-image">
            <div className="d-flex justify-content-center">
               <div className="">
                  <div className="clearfix"></div>
                  <h1 className="text-center">My Specials</h1>
                  <div className="mt-2">
                     <CreateEditCard
                        restaurantName={this.props.currentUser.restaurantName}
                        restaurantAddress={
                           this.props.currentUser.restaurantAddress
                        }
                        restaurantPhone={this.props.currentUser.restaurantPhone}
                     />
                  </div>
                  <div className="mt-3">
                     {this.props.userPosts.map((specialEdit) => {
                        return (
                           <SpecialEdit
                              key={specialEdit.id}
                              specialEdit={specialEdit}
                              onDelete={this.deletePostFromStore}
                              parentProps={this.props}
                           />
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { userPosts: state.userPosts, currentUser: state.currentUser };
}
export default connect(mapStateToProps)(UserEdit);
