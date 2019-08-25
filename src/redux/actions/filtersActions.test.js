import * as filters from './filtersActions';

describe('Filters actions', () => {
    it('Should update category filter', () => {
        const categories = ['filter1', 'filter2'];
        const expectedAction = {
            type: filters.UPDATE_CATEGORY_FILTER,
            payload: categories
        };

        expect(filters.updateCategoryFilter(categories)).toEqual(expectedAction);
    });

    it('Should update minimum price filter', () => {
        const price = 999;
        const expectedAction = {
            type: filters.UPDATE_MIN_PRICE_FILTER,
            payload: price
        };

        expect(filters.updateMinPriceFilter(price)).toEqual(expectedAction);
    });

    it('Should update maximum price filter', () => {
        const price = 1000000;
        const expectedAction = {
            type: filters.UPDATE_MAX_PRICE_FILTER,
            payload: price
        };

        expect(filters.updateMaxPriceFilter(price)).toEqual(expectedAction);
    });

    it('Should update sort option', () => {
        const sortOptions = 'z-a';
        const expectedAction = {
            type: filters.UPDATE_SORT_OPTION,
            payload: sortOptions
        };

        expect(filters.updateSortOption(sortOptions)).toEqual(expectedAction);
    });
});