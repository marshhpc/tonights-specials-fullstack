import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

const CreateEditCard = (props) => {
   // state: {
   //     hasEmailError: false
   // }
   // setState({hasEmailError: true})
   // // setHasEmailError(true)
   return (
      <div className="col-12 col-sm-10 col-md-8 offset-0 offset-sm-1 offset-md-2">
         <div className="row">
            <div
               className="col-12 btn-group btn-long mb-3 justify-content-center"
               role="group"
               aria-label="navigation"
            >
               <Link to="/" className="btn btn-secondary">
                  Home
               </Link>
               <Link
                  to="/"
                  className="btn btn-dark"
                  onClick={() => {
                     this.lgoOutCurrentUser();
                  }}
               >
                  Log Out
               </Link>
            </div>
            <div className="col-12 text-center custom-style">
               <div className="form-group">
                  <label className="input-text" htmlFor="restaurantName">
                     Dish Name
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="restaurantName"
                  />
               </div>
               <div className="form-group">
                  <label className="input-text" htmlFor="description">
                     Description
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="description"
                  />
               </div>
               <div className="form-group">
                  <label className="input-text" htmlFor="allergies">
                     Allergies
                  </label>
                  <input type="text" className="form-control" id="allergies" />
               </div>
               <div className="form-group">
                  <label className="input-text" htmlFor="price">
                     Price
                  </label>
                  <input type="text" className="form-control" id="price" />
               </div>
               <div className="form-group">
                  <label className="input-text" htmlFor="imageUrl">
                     Image URL
                  </label>
                  <input type="text" className="form-control" id="imageUrl" />
               </div>

               <button
                  className="btn btn-success btn-lg btn-block "
                  onClick={props.handleClick}
               >
                  Save
               </button>
            </div>
         </div>
      </div>
   );
};

export default CreateEditCard;
