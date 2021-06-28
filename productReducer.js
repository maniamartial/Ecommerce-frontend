import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

export const productReducer =(state={}, action ) => {
    switch(action.type){
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size: action.payload.size,
                filtereditems:action.payload.items,
            };
            case ORDER_PRODUCTS_BY_PRICE:
                return {...state, 
                sort:action.payload.sort,
            filtereditems:action.payload.items};

            case FETCH_PRODUCTS:
                return {item:Selection.payload, filteredItems: action.payload};
                default:
                    return state;

    }
};