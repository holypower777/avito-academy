import React from "react";
import {shallow} from 'enzyme';

import Spinner from "./Spinner";

it('Spinner component', () => {
    const component = shallow(<Spinner/>);
    const expectedComponent = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

    expect(component.html()).toBe(expectedComponent);
});