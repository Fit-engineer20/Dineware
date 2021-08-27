import React from "react";
import {Route,useRoute,NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar()
{
    // const route = useRoute();
    // console.log(window.location.pathname);
    return(
    <>

    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid nav_body">
        <button className="navbar-toggler" style={{color: window.location.pathname==="/featured" ? "black" : "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span ><i class="fas fa-bars nav-tog" style={{color: window.location.pathname==="/featured" ? "black" : "white"}}></i></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav list">
            <NavLink className="nav-link" exact activeClassName="active_class" to="/" >Home</NavLink>
            <NavLink className="nav-link" exact activeClassName="active_class" to="/about" >About Us</NavLink>
            <NavLink className="nav-link" exact activeClassName="active_class" to="/featured" >Featured</NavLink>
        </div>
        </div>
    </div>
    </nav>
 
    </>

    );
}

export default Navbar;