import React from 'react'
import './catagory.css';
// import Snow_fall from './Snow_fall';
// import { useEffect } from 'react';
function History() {
  return (
  <>

  {/* <Snow_fall/> */}
<div className="container">
    <div className="row my-5 ">
        <div className="col-md-6 mt-3     ">
            <img className='fluid history-img  ' style={{width:"100%", height:"100%"}} src="https://i.pinimg.com/736x/a5/d2/5b/a5d25bf8022ad778a808a2e08ba8e93c--s-car-mobil.jpg" alt="" />
        </div>
        <div className="col-md-6 text-light  mt-3     ">
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
    </div>
</div>
  
  
  
  </>
  )
}

export default History;