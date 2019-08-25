import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {fetchProducts} from "../../redux/actions/productsActions";
import {getSortedProducts} from "../../redux/selectors/productsSelector";

import Spinner from "../generic/spinner/Spinner";
import ProductBlock from "../productBlock/ProductBlock";

export const ProductsList = ({fetchProducts, products, pending}) => {
    useEffect(() => {
        !products.length && fetchProducts();
    }, [products, fetchProducts]);

    const mappedProducts = products.map((product) => <ProductBlock key={product.id} product={product}/>);
    const productsList = mappedProducts.length ? mappedProducts : 'К сожалению, товаров нет';

    return pending ? <Spinner/> : <ul className="products">{productsList}</ul>;
};

ProductsList.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    pending: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    products: getSortedProducts(state),
    pending: state.ui.fetchProductsPending,
});

export default connect(
    mapStateToProps,
    {fetchProducts}
)(ProductsList);