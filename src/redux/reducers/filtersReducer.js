import * as filtersActions from '../actions/filtersActions';

const initFilters = {
    category: [],
    minPrice: 0,
    maxPrice: null,
    sortOption: 'a-z'
};

const filtersReducer = (state = initFilters, {type, payload}) => {
    switch (type) {
        case filtersActions.UPDATE_CATEGORY_FILTER:
            return {...state, category: payload};
        case filtersActions.UPDATE_MIN_PRICE_FILTER:
            return {...state, minPrice: payload};
        case filtersActions.UPDATE_MAX_PRICE_FILTER:
            return {...state, maxPrice: payload};
        case filtersActions.UPDATE_SORT_OPTION:
            return {...state, sortOption: payload};
        default:
            return state;
    }
};

export default filtersReducer;