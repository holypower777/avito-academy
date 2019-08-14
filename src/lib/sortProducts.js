export const sortByNameAtoZ = (a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
};

export const sortByNameZtoA = (a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA > titleB) {
        return -1;
    }
    if (titleA < titleB) {
        return 1;
    }
    return 0;
};

export const sortByPriceAsc = (a, b) => a.price - b.price;
export const sortByPriceDesc = (a, b) => b.price - a.price;
export const sortByRating = (a, b) => b.relationships.rating - a.relationships.rating;