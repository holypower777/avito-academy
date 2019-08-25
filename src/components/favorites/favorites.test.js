import React from "react";
import {shallow} from "enzyme";

import {Favorites} from "./Favorites";

it('Should render no items', () => {
    const component = shallow(<Favorites favorites={[]}/>);

    expect(component.find('.products').text()).toBe('Список избранного пуст :(');
});