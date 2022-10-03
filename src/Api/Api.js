import React from "react";
import MovingText from 'react-moving-text'
import Snowfall from 'react-snowfall'
import "./api.css"
import { Link } from "react-router-dom"; 
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Api() {
  const [data, setData] = useState([]);

  const Allusers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setData(result.data.reverse());

    // console.log(result,"this is result")
  };
  useEffect(() => {
    Allusers();
  }, []);


  

const deleteUser= async id=>{
  await axios.delete(`http://localhost:3002/users/${id}`)

   Allusers();
}
  

  return (


    <>

<div style={{ position: 'relative' }} >
        <Snowfall style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh'
        }} />
      </div>

      <div className="container">
        <div className="row " style={{marginTop:"100px"}}>
          <div className="col-md-10 mx-auto text-center sticky text-light fw-bolder">
          

  
      <MovingText
        type="swing"
        duration="7s"
        delay="5s"
        direction="alternate-reverse"
        timing="ease"
        iteration="infinite"
        fillMode="both">
       
        <h1  className="display-4 ">Data fatch from live api </h1>
      </MovingText>
      
          </div>
        </div>
        <div className="row " style={{ marginTop: "100px " }}>
          <div className="col-md-12 wrapper">


{
    data.map((item)=>{
        return(
            <>
            
            
            <div className="card animation" key={item.id} style={{width:"400px",height:"700px"}} >
              <img src={item.url} className="card-img-top " style={{width:"100%",height:"400px",borderRadius:"40px"}} />
              <div className="card-body">
                <h2 className=" title bg-light">{item.title}</h2>
               <p className="card-text card-titles text-center">
               {item.description}
                </p>
              </div>  

            <div className="text-center">
            <Link to="/api/add">
             <button className="glow-on-hover text-primary">add</button>
             </Link>
             <Link to={`/api/edit/${item.id}`}>
              <button className="glow-on-hover text-primary mx-4">edit</button>
              </Link>
           
              <button className="glow-on-hover text-primary" onClick={()=>deleteUser(item.id)}>delete</button>
            
            </div>
            </div>
            
            </>
        )
    })
}
          </div>
        </div>
      </div>
    </>
  );
}

export default Api;
