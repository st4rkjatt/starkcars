// import { combineReducers } from "redux";
// import { reducers } from "./reducer";

// export default combineReducers({

//     reduce:reducers
  
// });

import { combineReducers } from "redux";
import { cantactReducer } from "../reducer/reducer";

export default combineReducers({
  contact: cantactReducer
});

