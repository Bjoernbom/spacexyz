import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import testReducer from './reducers/testReducer';

const reducer = combineReducers({testReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
