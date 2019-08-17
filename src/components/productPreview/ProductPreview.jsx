import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {fetchOneProduct} from "../../redux/actions/productsActions";

import ProductInfo from "./ProductInfo";
import Spinner from "../generic/Spinner";

import './productPreview.css';

const ProductPreview = (props) => {
    const id = props.match.params.id;
    const {product: {address, pictures, title, price}, pending, fetchOneProduct} = props;

    useEffect(() => {
        fetchOneProduct(id);
    }, [fetchOneProduct, id]);

    const imagesList = pictures ? pictures.map((src, i) => <img key={i} src={src} alt={src}/>) : [];

    return (
        <main id="main" className="preview">
            {pending ? <Spinner/> : <ProductInfo address={address} title={title} price={price} imagesList={imagesList}/>}
        </main>
    );
};

ProductPreview.propTypes = {
    product: PropTypes.shape({
        address: PropTypes.object,
        pictures: PropTypes.array,
        title: PropTypes.string,
        price: PropTypes.number
    }).isRequired,
    pending: PropTypes.bool.isRequired,
    fetchOneProduct: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    product: state.products.product,
    pending: state.ui.fetchOneProductPending
});

export default connect(
    mapStateToProps,
    {fetchOneProduct}
)(ProductPreview);