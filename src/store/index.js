
import {createStore, combineReducers,applyMiddleware} from 'redux';
import categories from './categories';
import products from './product';
// enable an extension on ur browser for redux store checking.. 
import {composeWithDevTools} from 'redux-devtools-extension';
import cart from './cart';
import button from './button'
import thunk from './middleware/thunk';
let reducers = combineReducers({categories,products,cart,button});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}


export default store();