import React from "react";
import {shallow} from "enzyme";

import Filters from "./Filters";

describe('Filters component', () => {
    const component = shallow(<Filters/>);

    it('Should open filters sidebar', () => {
        component.find('.side-btn').simulate('click');

        expect(component.find('#side-modal').hasClass('side-modal-open')).toBeTruthy();
    });

    it('Should close filters sidebar', () => {
        expect(component.find('#side-modal').hasClass('side-modal-open')).toBeTruthy();

        component.find('.side-close').simulate('click');

        expect(component.find('#side-modal').hasClass('side-modal-open')).toBeFalsy();
    });
});