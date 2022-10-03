// import {
//     GET_ALL_DATA,
//     ADD_NEW_DATA,
//     EDIT_DATA,
//     DELETE_DATA,
// } from '../constant/constant';


// // export const add_new_user=(addnew)=>({
// //     type:ADD_NEW_DATA,
// //     payload:addnew,

// // })

// export const get_all_user=(id)=({
//     type:GET_ALL_DATA,
//     payload:id
// })


// // export const edit_user=(data)=>({
// //     type:EDIT_DATA,
// //     payload:data,
// // })

// // export const delete_user=(id)=>({

// //     type:DELETE_DATA,
// //     payload:id,
// // })


import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
  } from "../constant/constant";
  
  export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact
  });
  
  //get contact
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
  });
  
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
  });
  // delete a contact
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
  });
  