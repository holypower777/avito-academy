import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {ProductBlock} from "../productBlock/ProductBlock";

export const Favorites = ({favorites}) => {
    const mappedFavorites = favorites.map((product) => <ProductBlock key={product.id} product={product}/>);
    const favoritesList = mappedFavorites.length ? mappedFavorites : 'Список избранного пуст :(';
    
    return (
        <main id="main">
            <ul className="products">{favoritesList}</ul>
        </main>
    );
};

Favorites.propTypes = {
    favorites: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    favorites: state.products.favorites
});

export default connect(
    mapStateToProps
)(Favorites);