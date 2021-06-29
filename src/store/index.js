
import {createStore, combineReducers} from 'redux';
import categories from './categories';
import products from './product';
// enable an extension on ur browser for redux store checking.. 
import {composeWithDevTools} from 'redux-devtools-extension';
import cart from './cart';
import button from './button'
let reducers = combineReducers({categories,products,cart,button});

const store = () => {
    return createStore(reducers,composeWithDevTools())
}

export default store();