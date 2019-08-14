import {createSelector} from 'reselect';
import * as sortProducts from '../../lib/sortProducts';

const getSortOption = (state) => state.filters.sortOption;
const getRawProducts = (state) => state.products.data;
const getCategoryFilter = (state) => state.filters.category;
const getMinPriceFilter = (state) => state.filters.minPrice;
const getMaxPriceFilter = (state) => state.filters.maxPrice;

export const getFilteredProducts = createSelector(
    [
        getRawProducts,
        getCategoryFilter,
        getMinPriceFilter,
        getMaxPriceFilter
    ],
    (products, category, minPrice, maxPrice) => {
        const filters = [
            {type: 'category', values: category},
            {type: 'price', min: minPrice, max: maxPrice}
        ];

        return filters.reduce((acc, filter) => {
            switch (filter.type) {
                case 'category':
                    return filter.values.length ? acc.filter((product) => filter.values.includes(product.category)) : acc;
                case 'price':
                    if (filter.min === 0 && !filter.max) {
                        return acc;
                    }

                    if (!filter.max) {
                        return acc.filter((product) => product.price >= filter.min);
                    }

                    if (!filter.min) {
                        return acc.filter((product) => product.price <= filter.max);
                    }

                    return acc.filter((product) => product.price >= filter.min && product.price <= filter.max);
                default:
                    return acc;
            }
        }, products);
    }
);

export const getSortedProducts = createSelector(
    [getFilteredProducts, getSortOption],
    (products, sortOption) => {
        switch (sortOption) {
            case 'a-z':
                return [...products].sort(sortProducts.sortByNameAtoZ);
            case 'z-a':
                return [...products].sort(sortProducts.sortByNameZtoA);
            case 'ascPrice':
                return [...products].sort(sortProducts.sortByPriceAsc);
            case 'descPrice':
                return [...products].sort(sortProducts.sortByPriceDesc);
            case 'rating':
                return [...products].sort(sortProducts.sortByRating);
            default:
                return products;
        }
    }
);