
import {createStore, combineReducers} from 'redux';
import categories from './categories';
import products from './product';
// enable an extension on ur browser for redux store checking.. 
// import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({categories,products});

const store = () => {
    return createStore(reducers)
}

export default store();