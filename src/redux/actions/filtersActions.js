export const UPDATE_CATEGORY_FILTER = '[filters] update filter by category';
export const UPDATE_MIN_PRICE_FILTER = '[filters] update min price filter';
export const UPDATE_MAX_PRICE_FILTER = '[filters] update max price filter';
export const UPDATE_SORT_OPTION = '[filters] update sort option';

export const updateCategoryFilter = (categories) => ({
    type: UPDATE_CATEGORY_FILTER,
    payload: categories
});

export const updateMinPriceFilter = (price) => ({
    type: UPDATE_MIN_PRICE_FILTER,
    payload: price
});

export const updateMaxPriceFilter = (price) => ({
    type: UPDATE_MAX_PRICE_FILTER,
    payload: price
});

export const updateSortOption = (sortOption) => ({
    type: UPDATE_SORT_OPTION,
    payload: sortOption
});