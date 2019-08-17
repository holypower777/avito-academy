import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Select from "react-select";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {updateCategoryFilter, updateMaxPriceFilter, updateMinPriceFilter, updateSortOption} from "../../../redux/actions/filtersActions";
import {categoryOptions, sortOptions} from "./selectOptions";

class FiltersMain extends Component {
    state = {
        categories: [],
        order: 'a-z',
        minPrice: undefined,
        maxPrice: undefined
    };

    handleCategoryChange = (values) => this.setState(
        {categories: values ? values.map((e) => e.value) : []},
        () => this.props.updateCategoryFilter(this.state.categories)
    );

    handleOrderChange = ({value}) => this.setState(
        {order: value},
        () => this.props.updateSortOption(this.state.order)
    );

    handleMinChange = ({value}) => this.setState(
        {minPrice: parseInt(value ? value : undefined)},
        () => this.props.updateMinPriceFilter(this.state.minPrice)
    );

    handleMaxChange = ({value}) => this.setState(
        {maxPrice: parseInt(value ? value : undefined)},
        () => this.props.updateMaxPriceFilter(this.state.maxPrice)
    );
    
    render() {
        return (
            <main id="side-main">
                <Select
                    options={sortOptions}
                    onChange={this.handleOrderChange}
                    placeholder="Отсортировать..."
                    defaultValue={sortOptions[0]}
                />
                <Select
                    options={categoryOptions}
                    onChange={this.handleCategoryChange}
                    placeholder="Выберите категорию(ии)"
                    closeMenuOnSelect={false}
                    isMulti
                />
                <div className="input-group">
                    <label className="label" htmlFor="minPrice">Цена от</label>
                    <NumberFormat
                        type="text"
                        className="input"
                        id="minPrice"
                        placeholder="руб"
                        value={this.state.minPrice}
                        onValueChange={this.handleMinChange}
                        thousandSeparator={' '}
                        isNumericString={true}
                        allowNegative={false}
                        suffix={'₽'}
                    />
                </div>
                <div className="input-group">
                    <label className="label" htmlFor="maxPrice">Цена до</label>
                    <NumberFormat
                        type="text"
                        className="input"
                        id="maxPrice"
                        placeholder="руб"
                        value={this.state.maxPrice}
                        onValueChange={this.handleMaxChange}
                        thousandSeparator={' '}
                        isNumericString={true}
                        allowNegative={false}
                        suffix={'₽'}
                    />
                </div>
                <Link to='/favorites' className="btn">Показать избранные объявления</Link>
            </main>
        );
    }
}

FiltersMain.propTypes = {
    updateCategoryFilter: PropTypes.func.isRequired,
    updateMaxPriceFilter: PropTypes.func.isRequired,
    updateMinPriceFilter: PropTypes.func.isRequired,
    updateSortOption: PropTypes.func.isRequired
};

export default connect(
    null,
    {updateCategoryFilter, updateMaxPriceFilter, updateMinPriceFilter, updateSortOption}
)(FiltersMain);