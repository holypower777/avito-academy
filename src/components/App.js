import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./generic/header/Header";
import Products from "./products/Products";
import Favorites from "./favorites/Favorites";
import ProductPreview from "./productPreview/ProductPreview";

const App = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Products}/>
            <Route path='/favorites' component={Favorites}/>
            <Route path='/products/:id' component={ProductPreview}/>
        </Switch>
    </BrowserRouter>
);

export default App;