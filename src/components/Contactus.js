import React from 'react';
import './contact.css';

import Snowfall from 'react-snowfall'
function Contactus() {

  const bg_img = {
    backgroundImage: '  radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,.5)),url("https://img.freepik.com/free-photo/contact-us_36325-2135.jpg?w=3500")',
    width: "100%",
    height: "100%",
    backgroundRepeat:"no-repeat"
    
  }
  return (
    <>

<div style={{ position: 'relative' }} >
        <Snowfall style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh'
        }} />
      </div>

      <div class="container-fluid  " style={bg_img}>

      <div className="row row_shadow ">
            <div className="col-md-6 mx-auto text-center text-light pt-5 ">
              <h1 className='card-title display-1 pt-5'>Contact us</h1>
            </div>
          </div>

        <div class="row  my-5 container mx-auto">
         
          <div className="col-md-6 rounded">
            <div class="col-sm-6">
              <div>
                
                <p class="text-secondary text-light px-1 ">Fill up the form and our Team will get back to you within in 24 hours</p>
              </div>
              <div class="links" id="bordering"> 
              <a href="#" class="btn rounded text-white p-3">
                <i class="fa fa-phone icon text-primary pr-3">
                  </i>&nbsp;  +0123 4567 8910</a> <a href="" class="btn rounded text-white p-3">
                    <i class="fa fa-envelope icon text-primary pr-3"></i>&nbsp;  Ajaat5942362@gmail.com</a>
                     <a href="" class="btn rounded text-white p-3">
                       <i class="fa fa-map-marker icon text-primary pr-3"></i> &nbsp; New Ashok Nagar,Delhi</a>
               </div>

              <div class="pt-lg-4 d-flex ">
                <div class="pad-icon pb-5 m-3"> <a class="fa  fa-2x fa-facebook text-primary" href=""></a> </div>
                <div class="pad-icon pb-5 m-3"> <a class="fa  fa-2x fa-twitter text-primary" href=""></a> </div>
                <div class=" pb-5 m-3"> <a class="fa  fa-2x fa-instagram text-primary" href=""></a> </div>
              </div>


            </div>

          </div>

          <div class="col-md-6  box_shadow " > 
            <div class="   mt-2 mx-auto p-4 ">
              <div class="card-body   ">
                <div >

                  <form id="contact-form" role="form">
                    <div class="controls">


                      <div class="row ">
                        <div class="col-md-6">
                          <div class="form-group">

                            <label for="form_name" className='text-light fw-bold h5'>Firstname </label>
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname " required="required" data-error="Firstname is required." />

                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_lastname" className='text-light fw-bold h5'>Lastname</label>
                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                          </div>
                        </div>

                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_email" className='text-light fw-bold h5'>Email </label>
                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email " required="required" data-error="Valid email is required." />
                          </div>
                        </div>
                        {/* <div class="col-md-6">
                          <div class="form-group"> <label for="form_need">Please specify your need *</label> <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                            <option value="" selected disabled>--Select Your Issue--</option>
                            <option>Request Invoice for order</option>
                            <option>Request order status</option>
                            <option>Haven't received cashback yet</option>
                            <option>Other</option>
                          </select> </div>
                        </div> */}
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="form_message" className='text-light fw-bold h5'>Message  </label>
                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>
                          </div>
                        </div>
                        <div class="col-md-12 my-2">
                          <input type="submit" class="btn btn-primary btn-send pt-2 btn-block " value="Send Message" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus;