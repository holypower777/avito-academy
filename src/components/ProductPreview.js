import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {fetchOneProduct} from "../redux/actions/productsActions";

import Header from "./common/Header";
import Slider from "./common/Slider";
import Spinner from "./common/Spinner";

const ProductPreview = (props) => {
    const id = props.match.params.id;
    const {product, fetchOneProduct, pending} = props;

    useEffect(() => {
        fetchOneProduct(id);
    }, []);

    const imagesList = product.pictures ? product.pictures.map((src) => <img src={src} alt={src}/>) : [];

    return (
        <>
            <Header/>
            <main id="main" className="preview">
                {pending
                    ? <Spinner/>
                    : <>
                        <Slider>{imagesList}</Slider>
                        <div className="card preview-info">
                            <h2>{product.title}</h2>
                            <span>{product.price ? product.price.toLocaleString() : 'Цена не указана'}&#8381;</span>
                        </div>
                    </>
                }
            </main>
        </>
    );
};

const mapStateToProps = (state) => ({
    product: state.products.product,
    pending: state.ui.fetchOneProductPending
});

export default connect(
    mapStateToProps,
    {fetchOneProduct}
)(ProductPreview);