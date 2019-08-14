import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import Slider from "../generic/Slider";

const ProductInfo = ({address = {lat: 55, lng: 37}, title, price, imagesList}) => {
    const geo = [address.lat, address.lng];

    return (
        <>
            <Slider>{imagesList}</Slider>
            <div className="card preview-info">
                <h2>{title}</h2>
                <span>{price ? price.toLocaleString() : 'Цена не указана'}&#8381;</span>
                <YMaps>
                    <Map defaultState={{center: geo, zoom: 10}}>
                        <Placemark geometry={geo}/>
                    </Map>
                </YMaps>
            </div>
        </>
    )
};

export default ProductInfo;