// import {
//   GET_ALL_DATA,
//   ADD_NEW_DATA,
//   EDIT_DATA,
//   DELETE_DATA,
// } from "../constant/constant";
// const initialState = {
//   users: [
//     {
//       id: 1,
//       name: "ajeet",
//       username: "stark",
//       email: "stark@gmail.com",
//     },

//     {
//       id: 2,
//       name: "aman",
//       username: "savoo",
//       email: "aman@gmail.com",
//     },
//   ],
//   contact: null,
// };

// export const reducers = (state = initialState, action) => {
//   switch (action.type) {


//     // case ADD_NEW_DATA:
//     //   return {
//     //     ...state,
//     //     users: [action.payload, ...state.users],
//     //   };



//     case GET_ALL_DATA:
//       let arr = state.addnew.filter((contact) => contact.id == action.payload);

//       arr = arr.values();
//       for (let val of arr) {
//         arr = val;
//       }

//       return {
//         ...state,
//         contact: arr,
//       };



//     // case EDIT_DATA:
//     //   return {
//     //     ...state,
//     //     users: state.users.map((addnew) =>
//     //       addnew.id == action.payload.id ? action.payload : addnew
//     //     ),
//     //   };

//     // case DELETE_DATA:
//     //   return {
//     //     ...state,
//     //     users: state.users.filter((addnew) => addnew.id !== action.payload),
//     //   };
//     default:
//       return state;
//   }
// };


import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
  } from "../constant/constant";
  
  const intialState = {
    contacts: [

      {
        id: 3,
        name: "Ajeet Singh",
        username: "Jatt",
        email: "jatt@gmail.com"
      },
      {
        id: 4,
        name: "stark Singh",
        username: "rana",
        email: "jattran@gmail.com"
      },
      {
        id: 2,
        name: "Satvinder Singh",
        username: "Samar",
        email: "Singhsatvinder827@gmail.com"
      },
      {
        id: 10,
        name: "Samar Deep",
        username: "Samar",
        email: "Samar.biz"
      }
    ],
    contact: null
  };
  
  export const cantactReducer = (state = intialState, action) => {
    switch (action.type) {
      case CREATE_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
      case GET_CONTACT:
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id == action.payload.id ? action.payload : contact
          )
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.payload
          )
        };
      default:
        return state;
    }
  };
  