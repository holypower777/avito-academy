import React, {useState} from 'react';

import FiltersMain from "./FiltersMain";
import FilterIcon from "../../../assets/icons/FilterIcon";
import CrossIcon from "../../../assets/icons/CrossIcon";

import './filters.css';

const Filters = () => {
    const [isOpen, toggleOpen] = useState(false);

    const handleClose = () => toggleOpen(false);
    const handleOpen = () => toggleOpen(true);

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
                <FiltersMain/>
            </aside>
        </section>
    )
};

export default Filters;