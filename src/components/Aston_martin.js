import React,{ useEffect } from 'react';
import './aston_martin.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Snowfall from 'react-snowfall'

import { Carousel } from "react-bootstrap";
import ReactPlayer from 'react-player';
function Aston_martin() {


    useEffect(()=>{
        AOS.init(
         {duration:800,
         offset:200,
         delay: 200,
         easing: 'ease-in-out-cubic',
     }
        );
 
    },[])
    return (
        <>

<div  style={{  position: 'relative' }} >
    <Snowfall  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh'
  }}  />
  </div>
  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 first_img">
                        <h1 className='text-center fw-bold pt-5'style={{textShadow:"0px 8px 22px white",color:"#87CEEB",fontSize:"70px"}}>Aston Martin</h1>

                    </div>
                </div>
            </div>


            <div className="container my-5">
                <div className="row py-5 " data-aos={"fade-up"} style={{boxShadow:"0px 8px 22px white",borderRadius:"50px",cursor:"pointer"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <ReactPlayer  muted loop width="100%" height="600px" url='https://www.youtube.com/watch?v=4lrn6EPZK7k' />
                               
                          
                 
                               <Carousel.Caption>
                                   <h1>Aston Martin Valkyrie V12</h1>
                             
                               </Carousel.Caption>
                    </div>
                </div>
            </div>

            <div className="container" >
                <div className="row" data-aos={"fade-up"}>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <img className='main_img2' src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/vahalla/new/5-gallery-2-resized.jpg?h=1125&width=800&format=webp&quality=60" alt="" />
                            </div>
                        </div>

                        <div className="row py-3" data-aos={"fade-up"}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <img className='main_img2' src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/vahalla/new/4-gallery-1-resize.jpg?h=1125&width=800&format=webp&quality=60" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row" data-aos={"fade-up"}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <img className='main_img3' src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/vahalla/new/6-gallery-3-resized.jpg?h=1125&width=800&format=webp&quality=60" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row row_shadow my-5" data-aos={"fade-up"}>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <img className='main_img2'  src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/vahalla/new/8-feature-image-resize.jpg?h=1125&width=800&format=webp&quality=75" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-5" data-aos={"fade-up"}>
                        <h4 className='text-light'>At the beating heart of Valhalla is its all-new PHEV powertrain, which features three motors; foremost of these is a rear-mid-mounted 4.0 litre twin-turbo bespoke V8 engine. The most advanced, responsive and highest performing V8 engine ever fitted to an Aston Martin, revving to 7200rpm and developing 750PS.</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row_shadow">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-5" data-aos={"fade-up"}>
                        <h4 className='text-light'>Supplementing this new V8 engine is a 150kW/400V battery hybrid system, contributing a further 204PS. When driven in EV mode battery power is directed exclusively to the front axle; In certain situations, 100% of battery power can be sent to the rear axle, supplementing with the full force of the ICE V8 for maximum performance. </h4>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <img className='main_img2 'data-aos={"fade-up"} src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/vahalla/new/10-feature-image-resize.jpg?h=1125&width=800&format=webp&quality=75" alt="" />
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row row_shadow my-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <img className='main_img2 ' data-aos={"fade-up"} src="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/vahalla/new/12-feature-image-resized.jpg?h=1125&width=800&format=webp&quality=75" alt="" />     </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-5" data-aos={"fade-up"}>
                        <h4 className='text-light'>Running in EV-only mode, Valhalla will be capable of a maximum 80 mph / 130km/h and has a zero-emission range of 15km. Predicted CO2 (WLTP) is less than 200g/km. Unleashing all 950PS the Valhalla will reach a top speed of 217mph / 350km/h and will complete the sprint from 0-62mph in just 2.5 seconds.</h4>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Aston_martin;