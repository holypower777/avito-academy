import React from "react";
import {Link} from "react-router-dom";
import {shallow} from 'enzyme';

import Header from "./Header";
import LogoIcon from "../../../assets/icons/LogoIcon";
import FavoriteIcon from "../../../assets/icons/FavoriteIcon";

it('Header component', () => {
    const component = shallow(<Header/>, {disableLifecycleMethods: true});

    expect(component.find(LogoIcon)).toHaveLength(1);
    expect(component.find(FavoriteIcon)).toHaveLength(1);
    expect(component.find(Link)).toHaveLength(2);
});