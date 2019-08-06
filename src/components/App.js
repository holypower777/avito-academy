import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Home";
import Favorites from "./Favorites";
import ProductPreview from "./ProductPreview";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/product/:id' component={ProductPreview}/>
            <Route path='/favorites' component={Favorites}/>
        </Switch>
    </BrowserRouter>
);

export default App;