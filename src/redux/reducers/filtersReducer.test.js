import * as filtersActions from '../actions/filtersActions';
import filtersReducer from "./filtersReducer";

describe('Filters reducer', () => {
    const initalState = {
        category: [],
        minPrice: 0,
        maxPrice: null,
        sortOption: 'a-z'
    };

    it('Should return the inital state', () => {
        expect(filtersReducer(undefined, {})).toEqual(initalState)
    });

    it('Should update category filter', () => {
        const updatedCategory = ['filter1', 'filter2'];
        const expectedState = {
            ...initalState,
            category: updatedCategory
        };

        expect(filtersReducer(undefined, {
            type: filtersActions.UPDATE_CATEGORY_FILTER,
            payload: updatedCategory
        })).toEqual(expectedState);
    });

    it('Should update minimum price filter', () => {
        const updatedPrice = 999;
        const expectedState = {
            ...initalState,
            minPrice: updatedPrice
        };

        expect(filtersReducer(undefined, {
            type: filtersActions.UPDATE_MIN_PRICE_FILTER,
            payload: updatedPrice
        })).toEqual(expectedState);
    });

    it('Should update maximum price filter', () => {
        const updatedPrice = 1000000;
        const expectedState = {
            ...initalState,
            maxPrice: updatedPrice
        };

        expect(filtersReducer(undefined, {
            type: filtersActions.UPDATE_MAX_PRICE_FILTER,
            payload: updatedPrice
        })).toEqual(expectedState);
    });

    it('Should update sort option', () => {
        const updatedSort = 'z-a';
        const expectedState = {
            ...initalState,
            sortOption: updatedSort
        };

        expect(filtersReducer(undefined, {
            type: filtersActions.UPDATE_SORT_OPTION,
            payload: updatedSort
        })).toEqual(expectedState);
    });
});