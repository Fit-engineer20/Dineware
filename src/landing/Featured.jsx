import React from "react";
import Navbar from "../Navbar.jsx";
import Cards from "./Cards.jsx";
import Carddata from "./Carddata.jsx";
import Footer from "../footer/Footer.jsx";
import "./Featured.css";

const Featured = () => {

  const locCards= (values) =>{
    return(
        <Cards 
        key={values.id}
        imgsrc={values.imgsrc}
        title={values.title}
        price={values.price}
        />
    );
}

    return(
      <section id="feature">
      <div className="fe-main">
      <Navbar /> 
       
      <div class="container fecont">
      <h1 className="fe-heading">DineWare</h1>
        <div class="row">
         {Carddata.map(locCards)}
        </div>
      </div>
      </div>

      <Footer />
      
     </section>
    );
}

export default Featured;