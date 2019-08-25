import * as products from './productsActions';

describe('Products actions', () => {
    it('Should fetch products', () => {
        const expectedAction = {
            type: products.FETCH_PRODUCTS
        };

        expect(products.fetchProducts()).toEqual(expectedAction);
    });

    it('Should process products', () => {
        const data = [1,2,3,4];
        const expectedAction = {
            type: products.PROCESS_PRODUCTS,
            payload: data
        };

        expect(products.processProducts(data)).toEqual(expectedAction);
    });

    it('Should fetch one products', () => {
        const id = 19;
        const expectedAction = {
            type: products.FETCH_ONE_PRODUCT,
            payload: id
        };

        expect(products.fetchOneProduct(id)).toEqual(expectedAction);
    });

    it('Should add to favorites', () => {
        const newProduct = 'product3';
        const expectedAction = {
            type: products.ADD_TO_FAVORITES,
            payload: newProduct
        };

        expect(products.addToFavorites(newProduct)).toEqual(expectedAction);
    });

    it('Should remove from favorites', () => {
        const id = 19;
        const expectedAction = {
            type: products.REMOVE_FROM_FAVORITES,
            payload: id
        };

        expect(products.removeFromFavorites(id)).toEqual(expectedAction);
    });
});