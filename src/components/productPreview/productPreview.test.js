import React from "react";
import {shallow} from "enzyme";

import product from '../../lib/testProductData';

import {ProductPreview} from "./ProductPreview";
import ProductInfo from "./ProductInfo";
import Spinner from "../generic/spinner/Spinner";

describe('Product preview component', () => {
    it('Should show spinner', () => {
        const component = shallow(<ProductPreview
            match={{params: {id: 1}}}
            product={product}
            pending={true}
            fetchOneProduct={() => {}}
        />);

        expect(component.exists(Spinner)).toBeTruthy();
    });

    it('Should render Product info', () => {
        const component = shallow(<ProductPreview
            match={{params: {id: 1}}}
            product={product}
            pending={false}
            fetchOneProduct={() => {}}
        />);

        expect(component.exists(ProductInfo)).toBeTruthy()
    });
});