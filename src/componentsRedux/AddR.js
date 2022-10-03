// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { get_all_user,add_new_user } from '../redux/action/action'
// function AddR() {

// const dispatch=useDispatch();


//     const[input,setInput]=useState({
//         title:"",
//         description:"",
//         url:"",
// })

//     const {title,description,url}=input;

//       const onchange=(e)=>{
//         setInput({...input,[e.target.name]:[e.target.value]})
//       }    
 
//       const submitHandler=(input)=>{

         
//             console.log(input)
//             dispatch(add_new_user(input));
            
         
//         }

      
          
            
      


//   return (
//     <>
//       <div className="container" style={{marginBottom:"100px"}}>
//       <div className="row py-5 "  style={{marginTop:"100px"}}>
//                 <div className="col-md-6 mx-auto text-center bg-light">
//                     <h1>Add New Redux  data</h1>
//                 </div>
//             </div>

//         <div className="row row_shadow" style={{marginTop:"50px"}}>
//            <div className="col-md-6 mx-auto">
//             <form onSubmit={submitHandler}>
//               <div class="form-group">
//                 <input
//                   type="text"
//                   class="form-control"
//                  name="title"
//                  value={title}
//                  onChange={onchange}
//                   placeholder="Enter Your Title Here"
//                 />
//               </div>
//               <div class="form-group"><br />
//                 <textarea
//                   type="text"
//                   class="form-control"
//                   name="description"
//                   value={description}
//                   onChange={onchange}
//                   placeholder="Enter Description Here"
//                 />
//               </div><br />                                                                              <input
//                   type="text"
//                   class="form-control"
//                   name="url"
//                   value={url}
//                   onChange={onchange}
//                 placeholder="Enter Here Image Url"
//                 />
//                 <br />
     
//             <button type="submit" class="btn btn-primary btn-lg">
//                 Submit
//               </button>
           
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddR;


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/action/action";
import { useNavigate } from "react-router-dom";


export default function AddR() {
  // let history = useHistory();
  const dispatch = useDispatch();

const [forms,setForms]=useState({
  id:"",
  name:"",
  username:"",
  email:""
})

const {id,name,username,email}=forms;

const navigator=useNavigate()
const onchange=(e)=>{
  setForms({...forms,[e.target.name]: e.target.value})
}
console.log(forms,"this is forms")


  const onSubmithandler = (e) => {
    e.preventDefault();
    dispatch(addContact(forms));

    console.log(forms);
    alert("data send")
    navigator(-1)
  };
  return (
   
  <>

<div className="container" style={{marginBottom:"100px"}}>
      <div className="row py-5 "  style={{marginTop:"100px"}}>
                <div className="col-md-6 mx-auto text-center bg-light">
                    <h1>Add new User</h1>
                </div>
            </div>

        <div className="row row_shadow" style={{marginTop:"50px"}}>
           <div className="col-md-6 mx-auto">
            <form onSubmit={onSubmithandler}>

            <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                 name="id"
                 value={id}
                 onChange={onchange}
                  placeholder="Enter ID"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                 name="name"
                 value={name}
                 onChange={onchange}
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group"><br />
                <textarea
                  type="text"
                  class="form-control"
                  name="username"
                  value={username}
                  onChange={onchange}
                  placeholder="Enter Username"
                />
              </div><br />                                                                              <input
                  type="text"
                  class="form-control"
                  name="email"
                  value={email}
                  onChange={onchange}
                placeholder="email"
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
