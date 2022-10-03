import React from 'react'
import { Link } from 'react-router-dom'

import './aston_martin.css';

import './main.css';

function Main() {
 
  return (
    <>

      <div className="container-fluid   " data-aos={"fade-up"}  >
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 py-2" >
            <div class="card  pb-2 text-center">
              
                 <img class="img1" src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/valkyrie/vaklyrie-sp1-resized.jpg?mw=768&rev=6ce654e584ab492081f5337d7889c805&format=webp&hash=955B8DFA6FF2F21DB7059EA9956BF7DB" alt="Card image cap" />
              <div class="card-body d-flex ">
                <h1 class="card-title ">Aston Martin </h1>
               
              </div>
              <Link to="/aston_martin">
                <button className='btn btn-primary fw-bolder py-2' style={{borderRadius:"30px"}}>Get More Details</button>
                </Link>
            </div>

          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 position-relative py-2"  >
            <div class="card text-center pb-2">
                <img class="img1" src="https://images.hdqwalls.com/download/black-panther-bugatti-chiron-la-voiture-noire-tw-1600x1200.jpg" alt="Card image cap" />


              <div class="card-body ">
                <h1 class="card-title ">Bugatti La Voiture Noire</h1>
               
                {/* <h1 class="card-title ">Aston Martin </h1> */}
              </div>
              <Link to="/buggatti">
              <button className='btn btn-primary fw-bolder py-2' style={{borderRadius:"30px"}}>Get More Details</button>
                </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid " data-aos={"fade-up"} >
        <div className="row pt-5">
          <div className="col-lg-6  ">
            <div >
              <a href="google.com"><img class="card-img" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/huracan/huracan_sto/ar_huracan_sto.jpg" alt="Lamborgini" /></a>

            </div>
          </div>

          <div className="col-lg-6 ">
            <div class="card-body text-success">
              <h2 class="card-title">LAMBORGHINI HURACAN</h2>

              <p class="card-text text-light mx-5 pt-5">Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi..
                <br />
                The on-road price of Huracan Evo in Delhi starts at ‎₹ 3.71 Crore and goes upto ‎₹ 4.29 Crore.</p>

            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Main;