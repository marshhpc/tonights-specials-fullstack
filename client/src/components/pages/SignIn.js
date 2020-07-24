import React from "react";
import Signup from "../ui/SignUp";
import LogIn from "../ui/Login";
import { Link } from "react-router-dom";

export default function SignIn() {
   return (
      <>
         <div className="background-image">
            <div className="d-flex justify-content-end">
               <Link to="/" className="btn float-right text-danger">
                  {" "}
                  Home{" "}
               </Link>
            </div>
            <h1 className="text-center">Tonights Specials</h1>
            <div className="row mt-md-6 mt-xl-8 mt-4">
               <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-12">
                  <div className="row">
                     <Signup />
                     <LogIn />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
