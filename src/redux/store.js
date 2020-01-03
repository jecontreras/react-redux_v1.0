import { createStore, combineReducers } from 'redux';
import results from './reduxers/results';
import suggestions from './reduxers/suggestions';
import currentItem from './reduxers/currentItem';
const reducer = combineReducers({
    results,
    suggestions,
    currentItem
});

const store = createStore(reducer);

export default store;