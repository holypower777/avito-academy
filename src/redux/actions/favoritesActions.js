export const ADD_TO_FAVORITES = '[favorites] add to favorites';
export const DELETE_FROM_FAVORITES = '[favorites] delete from favorites';

export const addToFavorites = (product) => ({
    type: ADD_TO_FAVORITES,
    payload: product
});

export const deleteFromFavorites = (id) => ({
    type: DELETE_FROM_FAVORITES,
    payload: id
});