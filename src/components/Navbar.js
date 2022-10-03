import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark pt-0  ">
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/home">St4rkC4rs</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul   className="navbar-nav ms-auto mb-5 mb-lg-0  ">
        <li className="nav-item" >
          <Link className="nav-link fw-bold h3 mx-3 " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="/about"  >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="/brands"  >Brands</Link>

        </li>
        {/* <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="#"  >Product</Link>

        </li> */}
        <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="/contactus" >Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="/api" >Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="/redux" >Redux</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link fw-bold h3 mx-3" to="/allproduct" >Ecommerce</Link>
        </li>
        
          </ul>
        
    </div>
  </div>
</nav>
  
  
  </>
  )
}

export default Navbar;