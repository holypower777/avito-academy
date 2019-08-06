import * as favoritesActions from '../actions/favoritesActions';

const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

const initFavorites = {
    favorites
};

const favoritesReducer = (state = initFavorites, {type, payload}) => {
    switch (type) {
        case favoritesActions.ADD_TO_FAVORITES:
            const updatedFavorites = [...state.favorites, payload];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return {...state, favorites: updatedFavorites};
        case favoritesActions.DELETE_FROM_FAVORITES:
            const filteredFavorites = [...state.favorites].filter((product) => product.id !== payload);
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
            return {...state, favorites: filteredFavorites};
        default:
            return state;
    }
};

export default favoritesReducer;