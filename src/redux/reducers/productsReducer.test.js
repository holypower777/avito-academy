import * as productsActions from '../actions/productsActions';
import productsReducer from "./productsReducer";

describe('Products reducer', () => {
    const initalState = {
        data: [],
        favorites: [],
        product: {}
    };

    it('Should return the inital state', () => {
        expect(productsReducer(undefined, {})).toEqual(initalState);
    });

    it('Should fetch products', () => {
        const data = ['product1', 'product2', 'product3'];
        const expectedState = {
            ...initalState,
            data
        };

        expect(productsReducer(undefined, {
            type: productsActions.FETCH_PRODUCTS_SUCCESS,
            payload: data
        })).toEqual(expectedState);
    });

    it('Should fetch one product', () => {
        const product = {name: 'product', id: 1};
        const expectedState = {
            ...initalState,
            product
        };

        expect(productsReducer(undefined, {
            type: productsActions.FETCH_ONE_PRODUCT_SUCCESS,
            payload: product
        })).toEqual(expectedState);
    });

    it('Should add to favorites', () => {
        const expectedState = {
            data: [
                {name: 'product', id: 1, isFavorite: true},
                {name: 'product2', id: 2, isFavorite: true},
                {name: 'product3', id: 3, isFavorite: false}
            ],
            favorites: [
                {name: 'product2', id: 2, isFavorite: true},
                {name: 'product', id: 1, isFavorite: true}
            ],
            product: {}
        };

        const initalState = {
            data: [
                {name: 'product', id: 1, isFavorite: false},
                {name: 'product2', id: 2, isFavorite: true},
                {name: 'product3', id: 3, isFavorite: false}
            ],
            favorites: [
                {name: 'product2', id: 2, isFavorite: true}
            ],
            product: {}
        };

        expect(productsReducer(initalState, {
            type: productsActions.ADD_TO_FAVORITES,
            payload: {name: 'product', id: 1, isFavorite: false}
        })).toEqual(expectedState);
    });

    it('Should remove from favorites', () => {
        const expectedState = {
            data: [
                {name: 'product', id: 1, isFavorite: true},
                {name: 'product2', id: 2, isFavorite: false},
                {name: 'product3', id: 3, isFavorite: false}
            ],
            favorites: [
                {name: 'product', id: 1, isFavorite: true}
            ],
            product: {}
        };

        const initalState = {
            data: [
                {name: 'product', id: 1, isFavorite: true},
                {name: 'product2', id: 2, isFavorite: true},
                {name: 'product3', id: 3, isFavorite: false}
            ],
            favorites: [
                {name: 'product2', id: 2, isFavorite: true},
                {name: 'product', id: 1, isFavorite: true}
            ],
            product: {}
        };

        expect(productsReducer(initalState, {
            type: productsActions.REMOVE_FROM_FAVORITES,
            payload: 2
        })).toEqual(expectedState);
    });
});