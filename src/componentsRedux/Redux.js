// import React from 'react'
// import "./redux.css"
// import { Link } from 'react-router-dom'
// // https://codesandbox.io/s/redux-crud-app-460v8?file=/src/action/contactAction.js

// import { useDispatch ,useSelector} from 'react-redux'

// function Redux() {


//   const dispatch=useDispatch();
// 	const Alldata = useSelector((state) =>
// 		state.data);
//     console.log(Alldata,"this is all data");









//   return (
//    <>
//    <div className="container">
//     <div className="row mt-5" >
//       <div className="col-md-10 mx-auto" style={{marginTop:"100px"}}>
    
// <div class="a-box">
//   <div class="img-container">
//     <div class="img-inner">
//       <div class="inner-skew">
//         <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
//       </div>
//     </div>
//   </div>
//   <div class="text-container">
//     <h3>A blue bird</h3>
//     <div>
//       This a demo experiment to skew image container. It looks good.
//   </div>
// <div className='d-flex col-md-12 border mx-auto'>

// <Link to="/redux/edit">
// <button className="glow-on-hover text-primary mx-4">edit</button></Link>

//   <Link to="/redux/add">
//   <button className="glow-on-hover text-primary mx-4">Add</button>
//   </Link>
//   <button className="glow-on-hover text-primary mx-4">delete</button>
// </div>
//   </div></div>
//       </div>
//     </div>
//    </div>
//    </>
//   )
// }

// export default Redux


import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { deleteContact } from "../redux/action/action";
import { useDispatch } from "react-redux";

import MovingText from 'react-moving-text'
import Snowfall from 'react-snowfall'
export default function Table() {
  const contacts = useSelector((state) => state.contact.contacts);
  console.log(contacts,"contact in redux");

  const dispatch = useDispatch();
  return (


    <>

<div style={{ position: 'relative' }} >
        <Snowfall style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh'
        }} />
      </div>

  
    <div className="Contact container "  style={{marginTop:"100px"}}>


          
  <div className="row">
    <div className="col-md-10 mx-auto  sticky">

      <MovingText
        type="swing"
        duration="7s"
        delay="5s"
        direction="alternate-reverse"
        timing="ease"
        iteration="infinite"
        fillMode="both">
       
        <h1  className="col-md-6 mx-auto text-center text-light  ">Crud with redux </h1>
      </MovingText>
    </div>
  </div>
      <div style={{marginTop:"100px"}}>
      <table className="table text-light" >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>
                <Avatar
                  className="mr-2"
                  name={contact.name}
                  size="45"
                  round={true}
                />
                {contact.name}
              </td>
              <td>{contact.username}</td>
              <td>{contact.email}</td>

              <td className="creates">
              <Link to="/redux/AddR" className="">
                <button className="btn btn-primary ">create</button>
              </Link>
            </td>

              <td>
                <Link to={`/redux/editR/${contact.id}` }>
                  <button className="btn btn-warning text-white">Edit</button>
                </Link>
              </td>

              <td
                className="material-icons text-danger"
                onClick={() => dispatch(deleteContact(contact.id))}
                style={{cursor:"pointer"}}
              >
               <button className="btn btn-danger"> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>

    </>
  );
}
