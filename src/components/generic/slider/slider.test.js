import React from "react";
import {shallow} from 'enzyme';

import Slider from "./Slider";

describe('Slider component', () => {
    const children = [
        <div key="first">First</div>,
        <div key="second">Second</div>,
        <div key="third">Third</div>,
        <div key="last">Last</div>
    ];
    const component = shallow(<Slider>{children}</Slider>);

    it('Current slide should be First', () => {
        const current = component.find('.current-slide').text();

        expect(current).toBe('First');
    });

    describe('Should change slides', () => {
        it('Should change to second slide', () => {
            component.find('.slide').at(1).simulate('click');

            expect(component.find('.current-slide').text()).toBe('Second');
        });

        it('Should change to last slide', () => {
            component.find('.slide').last().simulate('click');

            expect(component.find('.current-slide').text()).toBe('Last');
            expect(component.find('.slide').last().hasClass('active-slide')).toBeTruthy();
            expect(component.find('.slide').first().hasClass('active-slide')).toBeFalsy();
        });

        it('Should change to first slide', () => {
            component.find('.slide').first().simulate('click');

            expect(component.find('.current-slide').text()).toBe('First');
        });
    });
});