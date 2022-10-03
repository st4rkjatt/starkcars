import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from 'react-player';
import './videoslider.css';

class VideoSlider extends Component {

    render() {
        

          
        return (
            <>


                <Carousel className="my-5" data-aos={"fade-up"}>
                    <Carousel.Item className="first" >
                       
                        <ReactPlayer  muted loop width="100%" height="600px" url='https://www.youtube.com/watch?v=4lrn6EPZK7k' />
                               
                          
                 
                        <Carousel.Caption>
                            <h1>Aston Martin Valkyrie V12</h1>
                      
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="first"> 
                       
                        <ReactPlayer  muted loop   width="100%" height="600px" url='https://www.youtube.com/watch?v=rg9d1MP00UQ' />
                            
                        <Carousel.Caption>
                            <h3>bugatti la voiture noire</h3>
                           
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="first">
                       
                       <ReactPlayer  muted loop  width="100%" height="600px" url='https://www.youtube.com/watch?v=7ztOTUO_Mcs' />
                           
                       <Carousel.Caption>
                           <h3>Lamborgini</h3>
                           
                       </Carousel.Caption>
                   </Carousel.Item>
                </Carousel>


                
            </>
        );
    }
}

export default VideoSlider;