import React from "react";

export default function SpecialEdit(props) {
   return (
      <div className="col-12 col-sm-10 col-md-8 offset-0 offset-sm-1 offset-md-2">
         <div className="card flex-row flex-wrap card-space p-4">
            <div className="row">
               <div className="col-12 col-sm-5 mb-2">
                  <img
                     className="img-fluid img-thumbnail "
                     src={props.specialEdit.imageUrl}
                     alt=""
                  />
               </div>
               <div className="col-12 col-sm-7">
                  <div className="card-block px-2 ">
                     <h5 className="card-title resNameFont">
                        <a
                           href={
                              "https://google.com/maps/place/" +
                              props.specialEdit.address
                           }
                        >
                           {props.specialEdit.restaurant}
                        </a>
                     </h5>
                     <div className="clearfix"></div>

                     <p className="lead float-right">
                        {props.specialEdit.price}
                     </p>
                     <p className="lead">{props.specialEdit.dishName}</p>
                     <p>{props.specialEdit.description}</p>
                     <p className="text-muted">
                        Allergies:{props.specialEdit.allergies}
                     </p>

                     <button
                        className="btn btn-danger btn-lg btn-block mt-2"
                        onClick={() => {
                           props.onDelete(
                              props.specialEdit.id,
                              props.parentProps
                           );
                        }}
                     >
                        Delete
                     </button>
                  </div>
               </div>
            </div>
            <div className="w-100"></div>
         </div>
      </div>
   );
}
