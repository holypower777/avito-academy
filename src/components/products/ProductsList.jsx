import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {fetchProducts} from "../../redux/actions/productsActions";
import {getSortedProducts} from "../../redux/selectors/productsSelector";

import Spinner from "../generic/Spinner";
import ProductBlock from "../productBlock/ProductBlock";

const ProductsList = ({fetchProducts, products, pending}) => {
    useEffect(() => {
        !products.length && fetchProducts();
    }, [products, fetchProducts]);

    const mappedProducts = products.map((product) => <ProductBlock key={product.id} product={product}/>);
    const productsList = mappedProducts.length ? mappedProducts : 'К сожалению, товаров нет';

    return pending ? <Spinner/> : <ul className="products">{productsList}</ul>;
};

const mapStateToProps = (state) => ({
    products: getSortedProducts(state),
    pending: state.ui.fetchProductsPending,
});

export default connect(
    mapStateToProps,
    {fetchProducts}
)(ProductsList);