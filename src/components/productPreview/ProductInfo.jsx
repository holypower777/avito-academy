import React from 'react';
import PropTypes from 'prop-types';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import Slider from "../generic/Slider";
import Price from "../../lib/Price";

const ProductInfo = ({address = {lat: 55, lng: 37}, title, price, imagesList}) => {
    const geo = [address.lat, address.lng];

    return (
        <>
            <Slider>{imagesList}</Slider>
            <div className="card preview-info">
                <h2>{title}</h2>
                <Price price={price}/>
                <YMaps>
                    <Map defaultState={{center: geo, zoom: 10}}>
                        <Placemark geometry={geo}/>
                    </Map>
                </YMaps>
            </div>
        </>
    )
};

ProductInfo.propTypes = {
    address: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
    }),
    title: PropTypes.string,
    price: PropTypes.number,
    imagesList: PropTypes.array.isRequired
};

export default ProductInfo;