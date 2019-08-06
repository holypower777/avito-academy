import React from 'react';

import Header from "./common/Header";
import ProductsList from "./ProductsList";
import ModalFilters from "./ModalFilters";

const Home = () => (
    <>
        <Header/>
        <main id="main">
            <ProductsList/>
            <ModalFilters/>
        </main>
    </>
);

export default Home;