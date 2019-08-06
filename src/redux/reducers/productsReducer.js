import * as productsActions from '../actions/productsActions';

const initProducts = {
    data: [],
    products: false,
    filters: [],
    product: {}
};

const productsReducer = (state = initProducts, {type, payload}) => {
    switch (type) {
        case productsActions.FETCH_PRODUCTS_SUCCESS:
            return {...state, data: payload, products: payload};
        case productsActions.FILTER_PRODUCTS_SUCCESS:
            return {...state, products: payload};
        case productsActions.UPDATE_FILTERS:
            return {...state, filters: payload};
        case productsActions.SORT_PRODUCTS_SUCCESS:
            return {...state, products: payload};
        case productsActions.FETCH_ONE_SUCCESS:
            return {...state, product: payload};
        default:
            return state;
    }
};

export default productsReducer;