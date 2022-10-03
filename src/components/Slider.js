import React from 'react'
import Hover from 'react-3d-hover';
import './slider.css';
import Snowfall from 'react-snowfall';
import { Carousel } from "react-bootstrap";
import Slider_text_animation from './Slider_text_animation';
function Slider() {
  return (
    <>

<div  style={{  position: 'relative' }} >
    <Snowfall  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh'
  }}  />
  </div>
  
      <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" >

        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner py-5 "  >

          <div className="carousel-item pt-3 active " >

            <Hover scale={1} perspective={500} speed={1000}>
              <img className="d-block rounded mx-auto d-block img-fluid " style={{ width: "85%", height: "670px", boxShadow: "0 8px 22px white", }}  src="https://www.wsupercars.com/wallpapers-regular/Mercedes-Benz/2022-Mercedes-Benz-Vision-EQXX-Concept-008-1600.jpg" alt="" />
              
            </Hover>

            <Carousel.Caption>
                         <Slider_text_animation name="Mercedes"/>
                      
            </Carousel.Caption>
            
          </div>
          <div className="carousel-item pt-3">

            <Hover scale={1} perspective={500} speed={1000}>
              <img className="d-block rounded mx-auto d-block img-fluid" style={{ width: "85%", height: "670px", boxShadow: "0 8px 22px white" }} src="https://wallpapercave.com/wp/wp7170557.jpg" alt="" />
              
            </Hover>

            <Carousel.Caption>
                         <Slider_text_animation name="Koenigsegg Gemera"/>
                      
            </Carousel.Caption>
          </div>
          <div className="carousel-item pt-3">

            <Hover scale={1} perspective={500} speed={1000}>
              <img className="d-block rounded mx-auto d-block img-fluid " style={{ width: "85%", height: "670px", boxShadow: "0 8px 22px white" }} src="https://wallpapercave.com/wp/wp3189223.jpg" alt="" />
              
            </Hover>
            <Carousel.Caption>
                         <Slider_text_animation name="Bugatti La Voiture Noire"/>
                        
                      


              </Carousel.Caption>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider;