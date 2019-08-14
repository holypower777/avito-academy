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

    if (action.type === productsActions.FETCH_ONE_PRODUCT) {
        return dispatch(uiActions.showSpinner('fetchOneProductPending'));
    }

    if (action.type === productsActions.FETCH_ONE_PRODUCT_SUCCESS || action.type === productsActions.FETCH_ONE_PRODUCT_ERROR) {
        return dispatch(uiActions.hideSpinner('fetchOneProductPending'));
    }
};

const fetchProductsFlow = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    if (action.type === productsActions.FETCH_PRODUCTS) {
        Promise.all([
            fetch('http://avito.dump.academy/products'),
            fetch('http://avito.dump.academy/sellers')
        ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((jsons) => jsons.map((json) => json.data))
        .then((data) => dispatch(productsActions.processProducts(data)))
        .catch((error) => dispatch({type: productsActions.FETCH_PRODUCTS_ERROR, payload: error}));
    }

    if (action.type === productsActions.PROCESS_PRODUCTS) {
        const [products, sellers] = action.payload;
        const state = getState();

        const productsWithRating = products.map((product) => {
            const sellerId = product.relationships.seller;
            const {name, rating} = sellers.find(seller => seller.id === sellerId);
            const isFavorite = state.products.favorites.some((p) => p.id === product.id);
            return {...product, isFavorite, relationships: {...product.relationships, name, rating}}
        });
        dispatch({type: productsActions.FETCH_PRODUCTS_SUCCESS, payload: productsWithRating});
    }
};

const fetchOneProductFlow = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type === productsActions.FETCH_ONE_PRODUCT) {
        fetch(`http://avito.dump.academy/products/${action.payload}`)
            .then((res) => res.json())
            .then((json) => json.data)
            .then((data) => dispatch({type: productsActions.FETCH_ONE_PRODUCT_SUCCESS, payload: data}))
            .catch((error) => dispatch({type: productsActions.FETCH_ONE_PRODUCT_ERROR, payload: error}))
    }
};

export default [fetchProductsFlow, fetchOneProductFlow, uiFlow];