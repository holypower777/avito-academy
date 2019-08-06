export const FETCH_PRODUCTS = '[products] fetch products';
export const FETCH_PRODUCTS_SUCCESS = '[products] fetch products success';
export const FETCH_PRODUCTS_ERROR = '[products] fetch products error';
export const PROCESS_PRODUCTS = '[products] process products';
export const FILTER_PRODUCTS = '[products] filter products';
export const FILTER_PRODUCTS_SUCCESS = '[products] filter products success';
export const UPDATE_FILTERS = '[products] update filters';
export const FETCH_ONE = '[products] fetch one product';
export const FETCH_ONE_SUCCESS = '[products] fetch one product success';
export const FETCH_ONE_ERROR = '[products] fetch one product error';
export const SORT_PRODUCTS = '[products] sort products';
export const SORT_PRODUCTS_SUCCESS = '[products] sort products success';


export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
});

export const processProducts = (data) => ({
    type: PROCESS_PRODUCTS,
    payload: data
});

export const filterProducts = () => ({
    type: FILTER_PRODUCTS
});

export const updateFilters = (filters) => ({
    type: UPDATE_FILTERS,
    payload: filters
});

export const fetchOneProduct = (id) => ({
    type: FETCH_ONE,
    payload: id
});

export const sortProduts = (sortOption) => ({
    type: SORT_PRODUCTS,
    payload: sortOption
});