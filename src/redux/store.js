// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // Import thunk directly as a named export
// import logger from 'redux-logger';
// import rootReducer from "./reducers/rootreducer";

// const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//     middleware.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./reducers/rootreducer";// Assuming you have a rootReducer if there are multiple reducers
 // You can use Redux Thunk for async actions

const store = createStore(rootReducer);

export default store;
