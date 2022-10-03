import React from 'react';

import Slider from './components/Slider';
import Main from './components/Main';
import VideoSlider from './components/VideoSlider';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Catagory from './components/Catagory';
import Aston_martin from './components/Aston_martin';
import Slider2 from './components/Slider2';
import Buggatti from './components/Buggatti';
import About from './components/About';
import Brands from './components/Brands';
import Contactus from './components/Contactus';
import Brands3 from './components/Brands3';


function Home() {
  return (
   <>
    
      {/* <Slider /> */}
      <Slider2/>
     <Main />
       <VideoSlider />
           <Catagory/>
       <Main2 />
      
     <Main3 />
      {/* <Main4 /> */}
      <Aston_martin/>
      <Buggatti/>
      <About/>
      <Brands/>
      <Brands3/>
      <Contactus/>
 
        
   
   </>
  )
}

export default Home;