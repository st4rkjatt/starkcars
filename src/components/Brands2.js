import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Brands2(props) {


  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        offset: 200,
        delay: 200,
        easing: 'ease-in-out-cubic',
      }
    );

  }, [])
  return (
    <>

      <div className="container  my-5 box py-5">
        <div className="row" data-aos={"fade-up"}>

          <div className=" col-lg-6 col-md-6 col-sm-12 img_div   ">

            <img className=' img_details' src={props.img} alt="aston" />

          </div>


          <div className=" col-lg-6 col-md-6 col-sm-12  box3  text-light">

            <div className="row py-4">
              <div class="card-body">
                <h1 class="card-title">{props.brand_name}</h1>
                <p class="card-text text-light">{props.brand_details}</p>
              </div>
            </div>


            <div className="row">
              <div className="col-md-4 ">
                <h2 className='at-item'>HP </h2>
                <p>{props.hp}</p>
              </div>

              <div className="col-md-4">
                <h2 className='at-item'>0 TO 60 </h2>
                <p>{props.seconds}</p>
              </div>


              <div className="col-md-4">
                <h2 className='at-item'>Engine</h2>
                <p>{props.engine}</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container box my-5 py-5 " >
        <div className="row" data-aos={"fade-up"}>
          <div className=" col-lg-6 col-md-6 col-sm-12 text-light">
            <div class="card-body">
              <h1 class="card-title ">{props.brand2_name}</h1>
              <p class="card-text ">{props.brand2_details}</p>
            </div>
            <div className="row ">
              <div className=" col-md-4 ">
                <h2 className='at-item'>HP </h2>
                <p>{props.hp2}</p>
              </div>

              <div className="col-md-4">
                <h2 className='at-item'>0 TO 60 </h2>
                <p>{props.seconds2}</p>
              </div>


              <div className="col-md-4">
                <h2 className='at-item'>Engine</h2>
                <p>{props.engine2}</p>
              </div>
            </div>

          </div>

          <div className=" col-lg-6 col-md-6 col-sm-12 ">
            <img className=' img_details' src={props.img2} alt="The La Voiture Noire" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands2;