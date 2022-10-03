import React, { useContext } from 'react'
import Snowfall from 'react-snowfall'

import "./brands.css";
import Brands2 from './Brands2';
import Brands3 from './Brands3';





function Brands() {




  return (
    <>


      <div style={{ position: 'relative' }} >
        <Snowfall style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh'
        }} />
      </div>


      <div className="container   ">
        <div className="row">
          <div className="col-lg-12  bg_img ">
            <h1 className='pt-5 card-title display-1'>Find Cars <br />
              Special Brands For You</h1>

              
          </div>
      </div>
     


      </div>


      <Brands2
        img="https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/valkyrie/new/valkyrie-spider_f05-169.jpg?mw=1920&rev=13ca4c49cb76427793d47515a67b4ca9&format=webp&hash=C4AE6066257628B1C7008984B448A149"

        brand_name="Aston Martin Valkyrie"
        brand_details="Only 150 road cars will be made. Valkyrie is Aston Martin’s first ever hypercar and it leaves nothing in reserve."

        hp="1,000 HP"
        seconds="2.2 ss"
        engine="6.5-liter V-12"



        img2="https://economictimes.indiatimes.com/thumb/msid-69609266,width-640,height-480,resizemode-7/aventador.jpg?from=mdr"

        brand2_name="La Voiture Noire"
        brand2_details="The 2019 Bugatti La Voiture Noire is a French hypercar manufactured by Bugatti. It is a special model based off the Bugatti Chiron which was introduced at the 2019 Geneva Auto Show in Switzerland ."


        hp2="1,479 hp"
        seconds2="2.4 s"
        engine2="W16 8.0 liters"

      />





      <Brands2
        img="https://images7.alphacoders.com/683/thumb-1920-683928.jpg"

        brand_name="LAMBORGINI HURACAN EVO"
        brand_details="The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features."

        hp="602 hp"
        seconds="3.2 s"
        engine="5.2-litre V10"





        img2="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lor0360-1624536405.jpg"

        brand2_name="FERRARI296 GTB"
        brand2_details="The 296 GTB is the first Ferrari road car fitted with a 120°, 6-cylinder turbo engine. The engine structure means that the turbochargers can fit within the VEE"


        hp2="818 hp"
        seconds2="	2.9 s"
        engine2="V6 twin turbo hybrid"



      />






      <Brands2
        img="http://s3.amazonaws.com/gt7sp-prod/livery/85/83/42/6989600930899428385_23.jpg"

        brand_name="PORSCHE 911 GT3 "
        brand_details="The new Porsche 911 GT3 has been tested by independent journalists, revealing the track-focused machine can hit 60 mph in just 2.87 seconds."

        hp="500 HP"
        seconds="	2.7 sec s"
        engine=" 	3996 cc"





        img2="https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/20865/amg-gt-exterior-front-view-5.jpeg?q=75"

        brand2_name="Mercedes-Benz AMG GT"
        brand2_details="The GT is the entry level variant of the Mercedes-AMG GT family. The M178 engine in this variant is tuned to an output of 390 kW (530 PS; 523 hp) and 670 N⋅m (494 lb⋅ft) of torque"


        hp2="523 hp"
        seconds2="	2.9 s"
        engine2="twin-turbo 4.0-liter V-8 "



      />


    </>



  );
}
export default Brands;




