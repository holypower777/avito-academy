import * as productsActions from '../actions/productsActions';
import productsMiddlewares from "./productsMiddlewares";

describe('Products middleware', () => {
    const [fetchProductsFlow, fetchOneProductFlow, uiFlow] = productsMiddlewares;
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();

    it('Fetch products flow', () => {
        const invoke = (action) => fetchProductsFlow(store)(next)(action);

        invoke(productsActions.fetchProducts());
        expect(next).toHaveBeenCalledWith({type: productsActions.FETCH_PRODUCTS});
    });

    it('Fetch one product flow', () => {
        const invoke = (action) => fetchOneProductFlow(store)(next)(action);

        invoke(productsActions.fetchOneProduct(1));
        expect(next).toHaveBeenCalledWith({type: productsActions.FETCH_ONE_PRODUCT, payload: 1});
    });

    it('Ui flow', () => {
        const invoke = (action) => uiFlow(store)(next)(action);

        invoke(productsActions.fetchProducts());
        expect(next).toHaveBeenCalledWith({type: productsActions.FETCH_PRODUCTS});

        invoke({type: productsActions.FETCH_PRODUCTS_SUCCESS});
        expect(next).toHaveBeenCalledWith({type: productsActions.FETCH_PRODUCTS_SUCCESS});
    })
});