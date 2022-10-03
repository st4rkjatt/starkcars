import React from 'react'
import "./allproduct.css"
function AllProduct() {
  return (
 <>


 <div className="container">
 <div className="row " style={{marginTop:"100px"}}>
        <div className="col-md-10 mx-auto text-center text-light">
            <h1>E-Commerce in React </h1>
        </div>
    </div>
 </div>
 <div class="contenedorCards " >

  
  <div class="card  " style={{backgroundColor:"black"}} >
    <div class="wrapper">
      {/* <div class="card"></div> */}
      <div class="imgProd" ></div>
      <div class="infoProd text-light" >
        <p class="nombreProd">Apple iPhone 13 Mini (512GB)</p>
        <p class="extraInfo">Last date of buy: 31/07/2022</p>
        <div class="actions">
          <div class="preciosGrupo h1">
          <p>Price &#x20b9; 77,500 </p>
          </div>
          {/* <div class="icono action aFavs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
              </path>
            </svg>
          </div> */}
          <div class="icono action alCarrito">
         
            <svg class="outCart text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <title>Add to Cart</title>
              <path d="M2 6h10l10 40h32l8-24H16"></path>
              <circle cx="23" cy="54" r="4"></circle>
              <circle cx="49" cy="54" r="4"></circle>
             
            </svg>
          </div>

       
        </div>
   
      </div>

    </div>
  </div>

  <div class="card mx-5 my-5" style={{backgroundColor:"black"}} >
    <div class="wrapper">
      {/* <div class="card"></div> */}
      <div class="imgProd" ></div>
      <div class="infoProd text-light" >
        <p class="nombreProd">iPhone 13 (512GB)</p>
        <p class="extraInfo">Last date of buy: 31/08/2022</p>
        <div class="actions">
          <div class="preciosGrupo h1">
          <p>Price &#x20b9; 90500 </p>
          </div>
          {/* <div class="icono action aFavs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
              </path>
            </svg>
          </div> */}
          <div class="icono action alCarrito">
          
            <svg class="outCart text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <title>Add to Cart</title>
              <path d="M2 6h10l10 40h32l8-24H16"></path>
              <circle cx="23" cy="54" r="4"></circle>
              <circle cx="49" cy="54" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card  " style={{backgroundColor:"black"}} >
    <div class="wrapper">
      {/* <div class="card"></div> */}
      <div class="imgProd" ></div>
      <div class="infoProd text-light" >
        <p class="nombreProd">iPhone 12 Pro</p>
        <p class="extraInfo">Last date of buy: 21/07/2022</p>
        <div class="actions">
          <div class="preciosGrupo h1">
          <p>Price &#x20b9; 80500 </p>
          </div>
          {/* <div class="icono action aFavs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
              </path>
            </svg>
          </div> */}
          <div class="icono action alCarrito">
          
            <svg class="outCart text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <title>Add to Cart</title>
              <path d="M2 6h10l10 40h32l8-24H16"></path>
              <circle cx="23" cy="54" r="4"></circle>
              <circle cx="49" cy="54" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
 
 </>
  )
}

export default AllProduct