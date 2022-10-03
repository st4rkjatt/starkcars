import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducer/index";
const store = createStore(rootReducer, composeWithDevTools());
export default store;
