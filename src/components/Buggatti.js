import React, { useEffect } from 'react'
import './buggatti.css';
import Main from './Main';
import Main3 from './Main3';
import Snowfall from 'react-snowfall'
import AOS from 'aos';
import "aos/dist/aos.css";
function Buggatti() {


    useEffect(() => {
        AOS.init(
            {
                duration: 800,
                offset: 200,
                delay: 200,
                easing: 'ease-in-out-cubic',
            }
        );

    }, [])
    return (
        <>
            <div style={{ position: 'relative' }} >
                <Snowfall style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh'
                }} />
            </div>

            <div className='container-fluid mt-5' >
                <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-4f2e0fb9c4d429d4666b1d43a108c2f4.webp" class="card-img img-fluid" alt="..." />
                <div class="card-img-overlay my-5">
                    <div className="container mt-5">
                        <h1 class="card-title display-5" data-aos={"fade-up"}>BUGATTI CHIRON <br />
                            SUPER SPORT</h1>
                        <p class="card-text text-light" data-aos={"fade-up"}>THE ULTIMATE GRAND TOURISME, <br />
                            DELIVERING BRUTAL PERFORMANCE <br />
                            IN TOTAL COMFORT</p>

                        <button data-aos={"fade-up"} type="button" class="btn btn-outline-light">DISCOVER MORE</button>


                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row" data-aos={"fade-up"}>
                    <h1 class="card-title display-3 pt-5">MODELS</h1>

                    <div className="col-md-4">

                        <div className="row pt-3">
                            <div className="col-md-12">

                                <Main3 name="ONE OF MODELS" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-ddbedf3cbd9a8a54019cb52035c97837.webp" />

                            </div>

                        </div>

                        <div className="row py-4">
                            <div className="col-md-12 ">

                                <Main3 name="CONCEPT  CARS" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-a4b8659aca1db6d7c159ff712a57f0d6.webp" />

                            </div>

                        </div>



                    </div>


                    <div className="col-md-8">
                        <div className="row pt-3" >
                            <div className="col-md-12">

                                <Main3 name="CHIRON MODELS" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3eff22d2677fcf823cf09a98c3d2be66.webp" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row" data-aos={"fade-up"}>
                    <h1 class="card-title display-3 pt-5">Bugatti Universe</h1>
                    <div className="col-md-4 pt-3">
                        <Main3 name="LIFE STYLE" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-e1b06f9f9a63c3534749ad5e136ec848.webp" />

                    </div>
                    <div className="col-md-4 pt-3">
                        <Main3 name="FIND A BUGATTI PARTNER" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" />

                    </div>
                    <div className="col-md-4 pt-3">
                        <Main3 name="CAREER" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-00a025cc71ce01c2ebfd7c76bf127245.webp" />

                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row" data-aos={"fade-up"}>
                    <h1 class="card-title display-3 pt-5">NEWS</h1>
                    <div className="col-md-6">
                        <Main3 name="MONACO" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-0064add403cb1a876764b8fff069579e.webp" />
                    </div>
                    <div className="col-md-6 text-light pt-3">
                        <p> MOLSHEIM, 24 February 2022</p>
                        <h3>BUGATTI FORGES NEW PARTNERSHIP WITH SEGOND AUTOMOBILES GROUP OF MONACO</h3>

                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row" data-aos={"fade-up"}>
                    <div className="col-md-4 pt-5">
                        <Main3 name="MOLSHEIM, 22 February 2022" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-9263334176db8415155e647c68a6ecfb.webp" />
                        <h5 className='text-light py-3'>BUGATTI ASPREY COLLABORATION CREATES ONE OF ONE LA VOITURE NOIRE SCULPTURE</h5>
                    </div>
                    <div className="col-md-4 pt-5">
                        <Main3 name="MOLSHEIM, 17 February 2022" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-f3e852bab5df0f3243337d909aa5a4bb.webp" />

                        <h5 className='text-light py-3'>100 YEARS OF THE BUGATTI TYPE 30 – A CORNERSTONE OF BUGATTI’S EVOLUTION</h5>

                    </div>
                    <div className="col-md-4 pt-5">
                        <Main3 name="MOLSHEIM, 10 February 2022" img="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-d1683acb34fb93f196198cf6033e8eca.webp" />

                        <h5 className='text-light py-3'>CUSTOMER EXPERIENCE BEFITTING OF BUGATTI’S HYPER SPORTS CARS</h5>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Buggatti;