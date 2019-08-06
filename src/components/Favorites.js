import React from 'react';
import {connect} from "react-redux";

import Header from "./common/Header";
import Product from "./Product";

const Favorites = ({favorites}) => {
    const favoritesList = favorites.map((product) => <Product key={product.id} product={product}/>);

    return (
        <>
            <Header/>
            <main id="main">
                <ul className="products">{favoritesList.length ? favoritesList : 'Список избранного пуст :('}</ul>
            </main>
        </>
    );
};

const mapStateToProps = (state) => ({
    favorites: state.favorites.favorites
});

export default connect(
    mapStateToProps,
    null
)(Favorites);