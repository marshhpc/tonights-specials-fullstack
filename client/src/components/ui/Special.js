import React from "react";

export default function Special(props) {
   return (
      <div className="col-12 col-sm-10 col-md-8 offset-0 offset-sm-1 offset-md-2">
         <div className="card flex-row flex-wrap card-space p-4">
            <div className="row">
               <div className="col-12 col-sm-5 mb-2">
                  <img
                     className="img-fluid img-thumbnail"
                     src={props.special.imageUrl}
                     alt=""
                  />
               </div>
               <div className="col-12 col-sm-7">
                  <div className="card-block px-2 ">
                     <h5 className="card-title resNameFont">
                        <a
                           href={
                              "https://google.com/maps/place/" +
                              props.special.address
                           }
                        >
                           {props.special.restaurant}
                        </a>
                     </h5>
                     <div className="clearfix"></div>

                     <p className="lead float-right">{props.special.price}</p>
                     <p className="lead">{props.special.dishName}</p>

                     <p>{props.special.description}</p>
                     <p className="text-muted">
                        Allergies: {props.special.allergies}
                     </p>
                  </div>
               </div>
            </div>

            <div className="w-100"></div>
         </div>
      </div>
   );
}
