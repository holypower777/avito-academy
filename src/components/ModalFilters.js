import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Select from "react-select";

import {updateFilters, sortProduts} from "../redux/actions/productsActions";

import FilterIcon from "./icons/FilterIcon";
import CrossIcon from "./icons/CrossIcon";

import '../assets/modal.css';

const ModalFilters = ({products, updateFilters, sortProduts}) => {
    const [isOpen, toggleOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [order, setOrder] = useState('a-z');
    const [min, setMinPrice] = useState(0);
    const [max, setMaxPrice] = useState(9999999999);
    const categoryOptions = [
        {value: 'immovable', label: 'Недвижимость '},
        {value: 'cameras', label: 'Фотоаппараты'},
        {value: 'auto', label: 'Автомобили'},
        {value: 'laptops', label: 'Ноутбуки'}
    ];
    const sortOptions = [
        {value: 'a-z', label: 'От А до Я'},
        {value: 'z-a', label: 'От Я до А'},
        {value: 'ascPrice', label: 'По возрастанию цены'},
        {value: 'descPrice', label: 'По убыванию цены'},
        {value: 'rating', label: 'По популярности'},
    ];

    const handleClose = () => toggleOpen(false);
    const handleOpen = () => toggleOpen(true);
    const handleCategoryChange = (values) => setCategories(values ? values.map((e) => e.value) : []);
    const handleOrderChange = (order) => setOrder(order.value);
    const handleMinChange = ({target: {value}}) => setMinPrice(parseInt(value ? value : 0));
    const handleMaxChange = ({target: {value}}) => setMaxPrice(parseInt(value ? value : 9999999999));

    useEffect(
        () => {
            if (products) {
                updateFilters([{type: 'category', values: categories}, {type: 'price', min, max}]);
                sortProduts(order);
            }
        },
        [categories, min, max]
    );

    useEffect(
        () => {
            products && sortProduts(order);
        },
        [order]
    );

    return (
        <section>
            <button className="side-btn" onClick={handleOpen}>
                <FilterIcon className="filter-icon"/>
            </button>
            <aside id="side-modal" className={isOpen ? 'side-modal-open' : undefined}>
                <header id="side-header">
                    <h2>Filters</h2>
                    <button onClick={handleClose} className="side-close"><CrossIcon className="side-close-icon"/></button>
                </header>
                <main id="side-main">
                    <Select options={sortOptions} onChange={handleOrderChange} placeholder="Отсортировать..." defaultValue={sortOptions[0]}/>
                    <Select options={categoryOptions} onChange={handleCategoryChange} placeholder="Выберите категорию(ии)" closeMenuOnSelect={false} isMulti/>
                    <div className="input-group">
                        <label className="label" htmlFor="minPrice">Цена от</label>
                        <input type="text" onChange={handleMinChange} className="input" id="minPrice" placeholder="руб"/>
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="maxPrice">Цена до</label>
                        <input type="text" onChange={handleMaxChange} className="input" id="maxPrice" placeholder="руб"/>
                    </div>
                    <Link to='/favorites' className="btn">Показать избранные объявления</Link>
                </main>
            </aside>
        </section>
    )
};

const mapStateToProps = (state) => ({
    products: state.products.products
});

export default connect(
    mapStateToProps,
    {updateFilters, sortProduts}
)(ModalFilters);