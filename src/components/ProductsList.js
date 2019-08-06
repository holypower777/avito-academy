import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {fetchProducts} from "../redux/actions/productsActions";

import Spinner from "./common/Spinner";
import Product from "./Product";

const ProductsList = ({fetchProducts, products, pending, filtering, sorting}) => {
    useEffect(() => {
        !products && fetchProducts();
    }, []);

    const productsList = products && products.map((product) => <Product key={product.id} product={product}/>);

    return pending || filtering || sorting
        ? <Spinner/>
        : <ul className="products">{productsList.length ? productsList : 'К сожалению, товаров нет'}</ul>;
};

const mapStateToProps = (state) => ({
    products: state.products.products,
    pending: state.ui.fetchProductsPending,
    filtering: state.ui.filterProducts,
    sorting: state.ui.sortProducts
});

export default connect(
    mapStateToProps,
    {fetchProducts}
)(ProductsList);