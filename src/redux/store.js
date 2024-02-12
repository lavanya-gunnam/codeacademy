// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // Import thunk directly as a named export
// import logger from 'redux-logger';
// import rootReducer from "./reducers/rootreducer";

// const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//     middleware.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
import { createStore } from "redux";
import Reducer from "./reducers/reducer";

 const Store = createStore(Reducer);

 export default Store;
