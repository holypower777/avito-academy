import * as uiActions from '../actions/uiActions';
import uiReducer from "./uiReducer";

describe('Ui reducer', () => {
    const initalState = {
        fetchOneProductPending: false,
        fetchProductsPending: false
    };

    it('Should return the inital state', () => {
        expect(uiReducer(undefined, {})).toEqual(initalState);
    });

    it('Should show spinner', () => {
        const spinnerName = 'fetchProductsPending';
        const expectedState = {
            ...initalState,
            fetchProductsPending: true
        };

        expect(uiReducer(undefined, {
            type: uiActions.SHOW_SPINNER,
            payload: spinnerName
        })).toEqual(expectedState);
    });

    it('Should hide spinner', () => {
        const spinnerName = 'fetchProductsPending';
        const expectedState = {
            ...initalState,
            fetchProductsPending: false
        };

        expect(uiReducer(undefined, {
            type: uiActions.HIDE_SPINNER,
            payload: spinnerName
        })).toEqual(expectedState);
    });
});