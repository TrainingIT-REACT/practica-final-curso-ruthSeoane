import { createStore, applyMiddleware } from "redux";

// Reducers
import UserReducer from './reducers/UserReducer';

// Middlewares
import Logger from './middlewares/Logger';

export default createStore(UserReducer,
  applyMiddleware(Logger)
);
