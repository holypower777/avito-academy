import React from 'react';
import {Link} from "react-router-dom";

import FavoriteIcon from "../icons/FavoriteIcon";
import LogoIcon from "../icons/LogoIcon";

const Header = () => (
    <header id="header">
        <Link to='/' className="logo"><LogoIcon className="logotype"/><h1>Avito</h1></Link>
        <Link to='/favorites'><FavoriteIcon className="favorite-icon-link"/></Link>
    </header>
);

export default Header;