export const FETCH_PRODUCTS = '[products] fetch products';
export const FETCH_PRODUCTS_SUCCESS = '[products] fetch products success';
export const FETCH_PRODUCTS_ERROR = '[products] fetch products error';
export const FETCH_ONE_PRODUCT = '[products] fetch one product';
export const FETCH_ONE_PRODUCT_SUCCESS = '[products] fetch one product success';
export const FETCH_ONE_PRODUCT_ERROR = '[products] fetch one product error';
export const PROCESS_PRODUCTS = '[products] process products';
export const ADD_TO_FAVORITES = '[products] add to favorites';
export const REMOVE_FROM_FAVORITES = '[products] remove from favorites';

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
});

export const processProducts = (data) => ({
    type: PROCESS_PRODUCTS,
    payload: data
});

export const fetchOneProduct = (id) => ({
    type: FETCH_ONE_PRODUCT,
    payload: id
});

export const addToFavorites = (product) => ({
    type: ADD_TO_FAVORITES,
    payload: product
});

export const removeFromFavorites = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: id
});