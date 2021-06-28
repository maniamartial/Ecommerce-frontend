import { createStore, applyMiddleware, combineReducer } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
import {cartReducers} from "./reducers/cartReducers"
import { orderReducers } from "./reducers/orderReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducer({
    products:productsReducer,
    cart: cartReducers,
order:orderReducers,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);
  