
import {createStore, combineReducers} from 'redux';
import categories from './categories';
import products from './product';
// enable an extension on ur browser for redux store checking.. 
// import {composeWithDevTools} from 'redux-devtools-extension';
import cart from './cart';
let reducers = combineReducers({categories,products,cart});

const store = () => {
    return createStore(reducers)
}

export default store();