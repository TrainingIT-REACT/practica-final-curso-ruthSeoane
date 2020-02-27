import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
import UserReducer from './reducers/UserReducer';
import AlbumsReducer from './reducers/AlbumsReducer';

// Middlewares
import Logger from './middlewares/Logger';

export default createStore(
  combineReducers({
    UserReducer,
    AlbumsReducer,
  }),
  compose(
    applyMiddleware(Logger),
    applyMiddleware(promise)
  )
);
