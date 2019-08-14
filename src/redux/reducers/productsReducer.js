import * as productsActions from '../actions/productsActions';

const initFavorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
const initProducts = {
    data: [],
    favorites: initFavorites,
    product: {}
};

const productsReducer = (state = initProducts, {type, payload}) => {
    switch (type) {
        case productsActions.FETCH_PRODUCTS_SUCCESS:
            return {...state, data: payload};
        case productsActions.ADD_TO_FAVORITES:
            const updatedFavorites = [...state.favorites, {...payload, isFavorite: true}];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return {
                ...state,
                favorites: updatedFavorites,
                data: state.data.map((product) =>
                    product.id === payload.id ? {...product, isFavorite: true} : product
                )
            };
        case productsActions.REMOVE_FROM_FAVORITES:
            const filteredFavorites = state.favorites.filter((product) => product.id !== payload);
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
            return {
                ...state,
                favorites: filteredFavorites,
                data: state.data.map((product) =>
                    product.id === payload ? {...product, isFavorite: false} : product
                )
            };
        case productsActions.FETCH_ONE_PRODUCT_SUCCESS:
            return {...state, product: payload};
        default:
            return state;
    }
};

export default productsReducer;