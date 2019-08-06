import * as productsActions from '../actions/productsActions';
import * as uiActions from '../actions/uiActions';

const uiFlow = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type === productsActions.FETCH_PRODUCTS) {
        return dispatch(uiActions.showSpinner('fetchProductsPending'));
    }

    if (action.type === productsActions.FETCH_PRODUCTS_SUCCESS || action.type === productsActions.FETCH_PRODUCTS_ERROR) {
        return dispatch(uiActions.hideSpinner('fetchProductsPending'));
    }

    if (action.type === productsActions.FILTER_PRODUCTS) {
        return dispatch(uiActions.showSpinner('filterProducts'));
    }

    if (action.type === productsActions.FILTER_PRODUCTS_SUCCESS) {
        return dispatch(uiActions.hideSpinner('filterProducts'));
    }

    if (action.type === productsActions.SORT_PRODUCTS) {
        return dispatch(uiActions.showSpinner('sortProducts'));
    }

    if (action.type === productsActions.SORT_PRODUCTS_SUCCESS) {
        return dispatch(uiActions.hideSpinner('sortProducts'));
    }

    if (action.type === productsActions.FETCH_ONE) {
        return dispatch(uiActions.showSpinner('fetchOneProductPending'));
    }

    if (action.type === productsActions.FETCH_ONE_SUCCESS || action.type === productsActions.FETCH_ONE_ERROR) {
        return dispatch(uiActions.hideSpinner('fetchOneProductPending'));
    }
};

const fetchProductsFlow = ({dispatch}) => (next) => (action) => {
    if (action.type === productsActions.FETCH_PRODUCTS) {
        Promise.all([
            fetch('http://avito.dump.academy/products'),
            fetch('http://avito.dump.academy/sellers')
        ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((jsons) => jsons.map((json) => json.data))
        .then((data) => dispatch(productsActions.processProducts(data)))
        .catch((error) => dispatch({type: productsActions.FETCH_PRODUCTS_ERROR, payload: error}));

        return next(action);
    }

    next(action);

    if (action.type === productsActions.PROCESS_PRODUCTS) {
        const [products, sellers] = action.payload;
        
        const productsWithRating = products.map((product) => {
            const sellerId = product.relationships.seller;
            const {name, rating} = sellers.find(seller => seller.id === sellerId);
            return {...product, relationships: {...product.relationships, name, rating}}
        });
        dispatch({type: productsActions.FETCH_PRODUCTS_SUCCESS, payload: productsWithRating});
        dispatch(productsActions.sortProduts('a-z'));
    }
};

const fetchOneFlow = ({dispatch}) => (next) => (action) => {
    if (action.type === productsActions.FETCH_ONE) {
        const id = action.payload;

        fetch(`http://avito.dump.academy/products/${id}`)
            .then((res) => res.json())
            .then((json) => dispatch({type: productsActions.FETCH_ONE_SUCCESS, payload: json.data}))
            .catch((error) => dispatch({type: productsActions.FETCH_ONE_ERROR, payload: error}));
    }

    return next(action);
};

const filterProductsFlow = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    if (action.type === productsActions.FILTER_PRODUCTS) {
        const {products: {data, filters}} = getState();

        const filteredData = filters.reduce((acc, filter) => {
            switch (filter.type) {
                case 'category':
                    return filter.values.length ? acc.filter((product) => filter.values.includes(product.category)) : acc;
                case 'price':
                    if (filter.min === 0 && filter.max === 9999999999) {
                        return acc;
                    }
                    return acc.filter((product) => product.price >= filter.min && product.price <= filter.max);
                default:
                    return acc;
            }
        }, [...data]);
        
        return dispatch({type: productsActions.FILTER_PRODUCTS_SUCCESS, payload: filteredData});
    }
    
    if (action.type === productsActions.UPDATE_FILTERS) {
        dispatch(productsActions.filterProducts());
    }
};

const sortProductsFlow = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    if (action.type === productsActions.SORT_PRODUCTS) {
        const {products: {products}} = getState();
        const sortOption = action.payload;

        switch (sortOption) {
            case 'a-z':
                return dispatch({
                    type: productsActions.SORT_PRODUCTS_SUCCESS,
                    payload: [...products].sort((a, b) => {
                        const titleA = a.title.toLowerCase();
                        const titleB = b.title.toLowerCase();
                        if (titleA < titleB) {
                            return -1;
                        }
                        if (titleA > titleB) {
                            return 1;
                        }
                        return 0;
                    })
                });
            case 'z-a':
                return dispatch({
                    type: productsActions.SORT_PRODUCTS_SUCCESS,
                    payload: [...products].sort((a, b) => {
                        const titleA = a.title.toLowerCase();
                        const titleB = b.title.toLowerCase();
                        if (titleA > titleB) {
                            return -1;
                        }
                        if (titleA < titleB) {
                            return 1;
                        }
                        return 0;
                    })
                });
            case 'ascPrice':
                return dispatch({
                    type: productsActions.SORT_PRODUCTS_SUCCESS,
                    payload: [...products].sort((a, b) => a.price - b.price)
                });
            case 'descPrice':
                return dispatch({
                    type: productsActions.SORT_PRODUCTS_SUCCESS,
                    payload: [...products].sort((a, b) => b.price - a.price)
                });
            case 'rating':
                return dispatch({
                    type: productsActions.SORT_PRODUCTS_SUCCESS,
                    payload: [...products].sort((a, b) => b.relationships.rating - a.relationships.rating)
                });
            default:
                return dispatch({
                    type: productsActions.SORT_PRODUCTS_SUCCESS,
                    payload: products
                })
        }
    }
};

export default [fetchProductsFlow, fetchOneFlow, filterProductsFlow, sortProductsFlow, uiFlow];