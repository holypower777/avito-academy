import React from 'react';

import Filters from "./filters/Filters";
import ProductsList from "./ProductsList";

import './products.css';

const Products = () => (
    <main id="main">
        <Filters/>
        <ProductsList/>
    </main>
);

export default Products;