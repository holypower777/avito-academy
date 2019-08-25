import React from "react";
import {shallow} from "enzyme";

import product from '../../lib/testProductData';
import {ProductBlock} from "./ProductBlock";
import FavoriteIcon from "../../assets/icons/FavoriteIcon";

describe('Product block component', () => {
    const component = shallow(<ProductBlock product={product}/>);

    it('Product images should show amount of images', () => {
        expect(component.find('.product-images').text()).toBe(product.pictures.length.toString());
    });

    it('Icon should be white', () => {
        expect(component.find(FavoriteIcon).hasClass('favorite-icon-white')).toBeTruthy();
    });

    it('Product title', () => {
        expect(component.find('.product-title').text()).toBe(product.title);
    });
});