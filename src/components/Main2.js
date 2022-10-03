import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './main2.css';

function Main2() {


 
    useEffect(() => {
        AOS.init({
          duration : 1000,
          delay: 300
        });
      }, []);
  return (
  <>
  
  <ul class="cards" data-aos={"fade-up"} >
  <li>
    <a href="" class="card">
      <img src="https://mfiles.alphacoders.com/953/thumb-1920-953669.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://www.uttarpradesh.org/wp-content/uploads/2019/11/Jeff-Seid-1-1024x977.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">BMW</h3>            
            {/* <span class="card__status">1aa hour</span> */}
          </div>
        </div>
        <p class="card__description">Nice mileage, nice car, nice looks of 2021.amazing experience, good engine, little high maintenance but elegant in looks, a polished car, music system is also mind blowing and its</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://play-lh.googleusercontent.com/KaHZpG3ZTlHwjdOgP17EWb-wlJdwapIgY95Vdyyj2UPCSgzlLIrOhc5urAOUGYSEvbkP" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">koenigsegg  </h3>
            {/* <span class="card__status">3 hours ago</span> */}
          </div>
        </div>
        <p class="card__description">My dream car, looking to buy it soon, amazing reviews. Compared to the Audi a4 it is a bit better. Mercedes C class and Volvo s60 are good competitors.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://mfiles.alphacoders.com/847/thumb-1920-847756.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">McLaren </h3>
            {/* <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>             */}
            {/* <span class="card__status">1 hour ago</span> */}
          </div>
        </div>
        <p class="card__description">This is one of the best car, Interior and exterior design of this car is so amazing, good performance car, It is a my dream car.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://mfiles.alphacoders.com/918/thumb-1920-918363.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ1w0B_xMgYBo3E7F8bPPEoEkQfr8QgJkqw&usqp=CAU" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Rolls Royce</h3>
            {/* <span class="card__status">3 hours ago</span> */}
          </div>          
        </div>
        <p class="card__description">No words to describe ! It's absolutely a brilliant car. Feels like a sports car. I am having it since 2012 , the luxury line. Was one of the first few people who got it. It was, is and will be an eye</p>
      </div>
    </a>
  </li>    
</ul>
  </>
  )
}

export default Main2;