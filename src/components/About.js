import React, { useEffect } from 'react'
import './about.css';
import Carousel from 'react-bootstrap/Carousel';
import Snowfall from 'react-snowfall'
import AOS from 'aos';
import "aos/dist/aos.css";


function About() {


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


      <Carousel className='pb-5'>
        <Carousel.Item>
          <img
            className="d-block w-100" height={750}
            src="https://wallpapercave.com/wp/BW3DgZD.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='card-title'>
              ABOUT US</h1>
            <p>We Create Best Opportunities</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" height={750}
            src="https://wallpapercave.com/wp/MNJINuO.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className='card-title'>
              BUSINESS GOAL</h1>
            <p>Success Depends On Productivity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 " height={750}
            src="https://wallpapercave.com/wp/nuS6UaH.jpg "
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className='card-title'>CREATIVE MINDS</h1>
            <p>We don’t remember days. We remember moments.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container py-5 box"  >
        <div className="row  " data-aos={"fade-up"} >
          <div className="col-md-6 text-center">
            <h1 className='card-title'>Why Choose Us</h1>
            <p className='text-light pt-5'>  We create experiences that are attractive, simple to use, and drive results for your company. We are not your typical web development agency. Sure, we're strong on corporate branding and web design, but we're really focused on making things work for your audience ... and your business.</p>

            <button type="button" class="buttonClass my-3 fw-bolder">Learn More</button>

          </div>

          <div className="col-md-6  text-center">
            <img className='rounded img-fluid' width={600} height={400} src="https://webthemez.com/demo/arrive-business-responsive-website-template/img/about1.jpg" alt="" />
          </div>
        </div>

      </div>

      <div className="container py-5 my-5 box">
        <div className="row pt-3" data-aos={"fade-up"}>
          <div className="col-md-8 mx-auto text-center">
            <h1 className='card-title'>Our Services</h1>
            <p className='text-light'>We offer the full spectrum of services to help organizations work better. Everything from creating standards of excellence to training your people to work</p>
          </div>



          <div className="col-md-12">

            <div className="row py-5">
              <div className="col-md-4 text-center text-light">
              <span class="fa-stack fa-3x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-file fa-stack-1x"></i>
                </span>
                <h3>Responsive Content</h3>
                <p>Customer-focused, creating mobile-friendly responsively designed experiences that deliver tangible business results, Appnovation helps brands navigate any and all facets of the digital landscape.</p>
              </div>

              <div className="col-md-4 text-center text-light">

              <span class="fa-stack fa-3x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-user fa-stack-1x"></i>
                </span>
                <h3>User Interface</h3>
                <p>
                  Atomic design and style guide to build out standards compliant accessible UI
                  Assist with defining your users, create user personas or customer journey maps</p>
              </div>

              <div className="col-md-4 text-center text-light">
                <span class="fa-stack fa-3x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-cogs fa-stack-1x"></i>
                </span>
                <h3>Web Support and Maintenance</h3>
                <p>Monitoring: Experts monitor your infrastructure 24/7, investigate problems, and quickly escalate issues based on predetermined procedures.</p>
              </div>
            </div>

          </div>
        </div>
      </div>






      <div className="container py-5 my-5 box">
        <div className="row" data-aos={"fade-up"}>
          <div className="col-md-8 mx-auto text-center">
            <h1 className='card-title  '>Our Process</h1>
            <p className='text-light'>The Agile development process begins with clients explaining the expected product and how it would solve problems. The customer's expectations are thus.</p>
          </div>



          <div className="col-md-12">

            <div className="row py-5">
              <div className="col-md-4 text-center text-light  pt-4">
                <div class="card" >
                  <img src="https://webthemez.com/demo/arrive-business-responsive-website-template/img/service1.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-title">Designing</h2>
                    <p class="card-text"> Consider the spatial relationships between items on the page and structure the page based on importance.</p>

                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center text-light  pt-4">
                <div class="card" >
                  <img src="https://webthemez.com/demo/arrive-business-responsive-website-template/img/service2.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-title">Development</h2>
                    <p class="card-text">Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.</p>

                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center text-light pt-4">
                <div class="card" >
                  <img src="https://webthemez.com/demo/arrive-business-responsive-website-template/img/service3.jpg" class="card-img-top " alt="..." />
                  <div class="card-body">
                    <h2 class="card-title">Quality</h2>
                    <p class="card-text">website is efficient, easy to navigate and functional, as well as providing valuable and accurate information. </p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container box my-5 py-5" >
        <div className="row pt-4" data-aos={"fade-up"}>
          <div className="col-md-8 mx-auto text-center">
            <h1 className='card-title  '>OUR Business</h1>
            <p className='text-light'>Businesses have a vital role in building a sustainable future. Watch our film, inspired by Netflix's groundbreaking Our Planet series, and read more below</p>
          </div>
        </div>

        <div className="row py-5" data-aos={"fade-up"}>
          <div className="col-md-6 pt-2">
            <img class="card-img-top rounded" src="https://webthemez.com/demo/arrive-business-responsive-website-template/img/about.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <p className='text-light pt-5'>


              While design and layout are both crucial elements of a website, quality text and content are essential to communicate effectively with customers on the web. Completing technical writing, slogan development, product and site descriptions, business history and background can be challenging for any business owner. If you need assistance putting pen to paper for any of these tasks, we would be glad to help.
            </p>
          </div>
        </div>
      </div>


    </>
  )
}

export default About;