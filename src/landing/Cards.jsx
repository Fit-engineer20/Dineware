import React from "react";
import "./Cards.css";

const Cards = (props) => {

    function myfun(){
       alert("Item added to Cart, visit Cart to checkout");
    }

    return(
        <div class="col col-md-6 col-lg-4 col-sm-12">
        <div className="card fecard" >

          <div className="inner">
          <img className="product" src={process.env.PUBLIC_URL + props.imgsrc} alt={props.title} />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">Rs. {props.price}</p>
            <button type="button" class="btn btn-dark add-to" onClick={myfun}><i class="fas fa-cart-arrow-down add-icon"></i>Add to Cart</button>
          </div>
          
        </div>
        </div>
    );
}
export default Cards; 