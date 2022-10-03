import React from 'react'
import Catagory from './Catagory';
import Main from './Main';
import Main2 from './Main2';
import Slider from './Slider';
import VideoSlider from './VideoSlider';

function Profile() {
  return (
    <>
    <Slider /> 
    <Main />
       <VideoSlider />
           <Catagory/>
       <Main2 />
    </>
  )
}

export default Profile;