import { createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger'
import rootReducer from './Root-Reducer'

// const middleware = [logger, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
// const store = createStore(rootReducer, middleware)
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;