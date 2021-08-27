import React from "react"; 
import Navbar from "../Navbar.jsx";
import {Link} from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import Cards from "./Cards.jsx";
import Carddata from "./Carddata.jsx";
import "./home.css";

function Home(){

    const Card = (values)=>{
      return(
        <Cards 
        key={values.id}
        imgsrc={values.imgsrc}
        title={values.title}
        price={values.price}
        />
      );
    }

    function myfun(){
      alert("Item added to Cart, visit Cart to checkout");
   }

    return(
        <>
          <Navbar/>

          {/* Header section start */}
          <section id="header" style={{
                                       backgroundImage: "url(/Dineware/images/top.jpg)",
                                       height: "100%",
                                       backgroundPosition: "center",
                                       backgroundRepeat: "no-repeat",
                                       backgroundSize: "cover"
                                      }} >
          <h1 className="brand">DineWare</h1>

          <Link className="cart" to="/Dineware/cart"><i className="fas fa-shopping-bag fa-2x"></i></Link>

          <div className="container-fluid top">
           <h1 className="main-heading">"Be able to set a table so that you feel like you're dining"</h1>
          </div>

          </section>

          {/* Featured */}
          <section id="mini-featured">

          <h1 className="fet-heading">Featured Items</h1>

          <div class="container homecont">
            <div class="row">
             <div class="col col-md-6 col-lg-4 col-sm-12">

              <div className="card fecard" >
               <div className="inner">
               <img className="product" src={process.env.PUBLIC_URL + "/images/traditional.jpg"} alt="image" />
               </div>
               <div class="card-body text-center">
               <h5 class="card-title">Traditional Plates</h5>
               <p class="card-text">Rs. 100</p>
               <button type="button" class="btn btn-dark add-to" onClick={myfun}><i class="fas fa-cart-arrow-down add-icon"></i>Add to Cart</button>
               </div>
             </div>
            </div>

            <div class="col col-md-6 col-lg-4 col-sm-12">
            <div className="card fecard" >
               <div className="inner">
               <img className="product" src={process.env.PUBLIC_URL + "/images/tea-set.jpg"} alt="image" />
               </div>
               <div class="card-body text-center">
               <h5 class="card-title">Authentic Tea Set</h5>
               <p class="card-text">Rs. 500</p>
               <button type="button" class="btn btn-dark add-to" onClick={myfun}><i class="fas fa-cart-arrow-down add-icon"></i>Add to Cart</button>
               </div>
            </div>
            </div>

            <div class="col col-md-6 col-lg-4 col-sm-12">
            <div className="card fecard" >
               <div className="inner">
               <img className="product" src={process.env.PUBLIC_URL + "/images/wood.jpg"} alt="image" />
               </div>
               <div class="card-body text-center">
               <h5 class="card-title">Authentic Wooden Bowls</h5>
               <p class="card-text">Rs. 150</p>
               <button type="button" class="btn btn-dark add-to" onClick={myfun}><i class="fas fa-cart-arrow-down add-icon"></i>Add to Cart</button>
               </div>
            </div>
            </div>

            </div>
          </div>

          <button type="button" class="btn btn-dark viewmore"><Link className="view-link" exact activeClassName="active_class" to="/featured" >View More</Link></button>
              
          </section>

          {/* slider */}

        <section id="slider">

          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
               <div className="carousel-item active">
               <img src={process.env.PUBLIC_URL + "/images/wood.jpg"} className="d-block w-100 car-img" alt="..." />
               <div className="carousel-caption d-none d-md-block">
                  <h1 className="car-text">September Flagship Sale!!</h1>
                  <p>Some representative placeholder content for the first slide.</p>
               </div>
               </div>

               <div className="carousel-item">
               <img src={process.env.PUBLIC_URL + "/images/gettoge.jpg"} className="d-block w-100 car-img" alt="..." />
               <div className="carousel-caption d-none d-md-block">
                 <h1 className="car-text">Items Upto 70% Off !!</h1>
                 <p>Some representative placeholder content for the second slide.</p>
               </div>
               </div>

               <div className="carousel-item">
               <img src={process.env.PUBLIC_URL + "/images/china.jpg"} className="d-block w-100 car-img" alt="..." />
               <div className="carousel-caption d-none d-md-block">
                 <h1 className="car-text">Buy your favourite set at Best price.</h1>
                 <p>Some representative placeholder content for the third slide.</p>
               </div>
               </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
         </div>
        </section>

        <section id="best-seller">

        <h1 className="best-head">Best Sellers</h1>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle categories" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-tags tag-icon"></i> Categories
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Dinner Sets</a></li>
            <li><a class="dropdown-item" href="#">Tea Sets</a></li>
            <li><a class="dropdown-item" href="#">Fancy Bowls</a></li>
            <li><a class="dropdown-item" href="#">Fancy Glasses</a></li>
            <li><a class="dropdown-item" href="#">Party Sets</a></li>
          </ul>
        </div>

         <div class="container">
          <div class="row">
            {Carddata.map(Card)}
          </div>
         </div>

        </section>

       <Footer />

        </>
    );
}                  


export default Home;