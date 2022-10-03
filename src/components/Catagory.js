import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import History from "./History";
import './catagory.css';

function Catagory() {
    useEffect(() => {
        AOS.init({
          duration : 1000,
          delay: 300
        });
      }, []);
      
  return (
    <>
     <section id="categories">
        <div class="categories-background">
            <div class="container">
                <div className="row">
                   
                    <h2 class="m-heading h1 card-title " data-aos={"fade-up"} >Car Categories</h2>
                  
                </div>
                <div class=" row " data-aos={"fade-up"}>
              
                    <div class="col-md-4 item ">
                        
                        <div className="text-center">
                        <i class="fa fa-car fa-2x "></i>
                            <h2>Electric</h2>
                            <p>For the past decade, electric supercars have shocked the world. Now big car companies are
                                making beautiful and powerful supercars.</p>
                        </div>
                    </div>
                    <div class="col-md-4 item ">
                      
                        <div className="text-center">
                        <i class="fa fa-cogs fa-2x"></i>
                            <h2>Engine</h2>
                            <p>Actually, supercars mean engine cars. Today every supercar has very powerful different
                                type of engine. And those look like an alien.</p>
                        </div>
                    </div>
                    <div class="col-md-4 item ">
                        
                        <div className="text-center">
                        <i class="fa fa-fighter-jet fa-2x"></i>
                            <h2>Jet Engine</h2>
                            <p>And lastly, If nothing works for you then make your own design Jet Car man. It is just
                                madness. If you have a jet car you will be the Ground King.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section id="history" data-aos={"fade-up"}  >
        <div class="history-img"></div>
            <div class="history-content">
                <h2 class="m-heading">Supercars History</h2>
                <p>The 1960s. In the mid-1960s supercars as we think of them today began to release. Some significant
                    developments in the 60s include the creation of the Ford GT, which came about because Ferrari refused to
                    join Ford, and the release of the mid-engined Lamborghini Miura, which was designed from the start as a
                    road car.</p>
                <h2>Oldest Car Brands</h2>
                <ul class="brand-list">
                    <li>Rolls-Royce: Founded in 1906</li>
                    <li>Ford: Founded in 1903</li>
                    <li>Fiat: Founded in 1899</li>
                    <li>Vauxhall: Founded in 1857</li>
                    <li>Peugeot: Founded in 1803</li>
                </ul>
            </div>
    </section> */}
    <History/>
    </>
  )
}

export default Catagory;