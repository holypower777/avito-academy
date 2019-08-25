import React from "react";
import {shallow} from "enzyme";

import Products from "./Products";
import Filters from "./filters/Filters";
import {ProductsList} from "./ProductsList";
import Spinner from "../generic/spinner/Spinner";

describe('Products component', () => {
    it('Should render filters for products', () => {
        const component = shallow(<Products/>);

        expect(component.exists(Filters)).toBeTruthy();
    });

    it('Should show spinner while fetching', () => {
        const component = shallow(<ProductsList products={[]} pending={true} fetchProducts={() => {}}/>);

        expect(component.exists(Spinner)).toBeTruthy();
    });

    it('Should show no products', () => {
        const component = shallow(<ProductsList products={[]} pending={false} fetchProducts={() => {}}/>);

        expect(component.find('.products').text()).toBe('К сожалению, товаров нет');
    });
});