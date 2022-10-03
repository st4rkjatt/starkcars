import React ,{useEffect} from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';
import Snowfall from 'react-snowfall'
function Snow_fall() {


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
    
    
    </>
  )
}

export default Snow_fall;