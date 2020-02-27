import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
import UserReducer from './reducers/UserReducer';
import AlbumReducer from './reducers/AlbumReducer';

// Middlewares
import Logger from './middlewares/Logger';

export default createStore(
  combineReducers({
    UserReducer,
    AlbumReducer,
  }),
  compose(
    applyMiddleware(Logger),
    applyMiddleware(promise)
  )
);
