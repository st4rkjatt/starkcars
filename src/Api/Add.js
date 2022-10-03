import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Add() {

    const[input,setInput]=useState({
        title:"",
        description:"",
        url:"",
})


const navigate = useNavigate();  
    const {title,description,url}=input;

      const onchange=(e)=>{
        setInput({...input,[e.target.name]:[e.target.value]})
      }    
 
      const submitHandler=(e)=>{

            e.preventDefault();
            if(title!="" ||description!="" || url!="")
            {
              setTimeout(() => {
                console.log(JSON.stringify(input),'form')
                const result=axios.post("http://localhost:3002/users", (input))
                // alert("your data has posted");
                console.log(result);
                navigate(-1)
               }, 2000);
            }
            else

          
            
           alert("please fill full input fields")
      
        }

      
          
      
      


  return (
    <>
      <div className="container" style={{marginBottom:"100px"}}>
      <div className="row py-5 "  style={{marginTop:"100px"}}>
                <div className="col-md-6 mx-auto text-center bg-light">
                    <h1>Add new data</h1>
                </div>
            </div>

        <div className="row row_shadow" style={{marginTop:"50px"}}>
           <div className="col-md-6 mx-auto">
            <form onSubmit={submitHandler}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                 name="title"
                 value={title}
                 onChange={onchange}
                  placeholder="Enter Your Title Here"
                />
              </div>
              <div class="form-group"><br />
                <textarea
                  type="text"
                  class="form-control"
                  name="description"
                  value={description}
                  onChange={onchange}
                  placeholder="Enter Description Here"
                />
              </div><br />                                                                              <input
                  type="text"
                  class="form-control"
                  name="url"
                  value={url}
                  onChange={onchange}
                placeholder="Enter Here Image Url"
                />
                <br />
     
            <button type="submit" class="btn btn-primary btn-lg">
                Submit
              </button>
           
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
