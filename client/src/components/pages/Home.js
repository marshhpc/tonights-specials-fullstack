import React from "react";
import { Link } from "react-router-dom";
import Special from "../ui/Special";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";
import formatDate from "date-fns/format";

class Home extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         // specials: [],
      };
   }
   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/marshhpc/cards-mock-data/master/mock-data-for-app/db.json"
         )
         .then((res) => {
            // handle success
            console.log(res);
            // this.setState({
            //    specials: res.data,
            //    type: actions.STORE_USER_POST,
            // });

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

   render() {
      return (
         <div className="background-image">
            <div className="d-flex justify-content-end">
               <Link to="/sign-in" className="btn float-right text-danger">
                  {" "}
                  Log In{" "}
               </Link>
            </div>

            <div className="row justify-content-center">
               <div className="col-xs-8">
                  <div className="clearfix"></div>
                  <h1 className="text-center">Tonights Specials</h1>
                  <h3 className="text-center">
                     {formatDate(Date.now(), "LLLL do, yyyy")}
                  </h3>
                  <div className="mx-5">
                     {this.props.userPosts.map((special) => {
                        return <Special key={special.id} special={special} />;
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { userPosts: state.userPosts };
}
export default connect(mapStateToProps)(Home);
