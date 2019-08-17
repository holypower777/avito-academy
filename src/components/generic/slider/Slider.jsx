import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './slider.css';

const Slider = ({children}) => {
    const [current, setCurrent] = useState(0);

    const slides = children.map((slide, i) =>
        current !== i
            ? <li key={i} className="slide" onClick={() => setCurrent(i)}>{slide}</li>
            : <li key={i} className="slide active-slide">{slide}</li>
    );

    const dots = children.map((slide, i) =>
        current !== i
            ? <li key={i} className="slide-dot" onClick={() => setCurrent(i)}><span/></li>
            : <li key={i} className="slide-dot active-dot"><span/></li>
    );

    return (
        <div className="slider">
            <div className="current-slide">{children[current]}</div>
            <ul className="slides-list">{slides}</ul>
            <ul className="slider-dots">{dots}</ul>
        </div>
    );
};

Slider.propTypes = {
    children: PropTypes.array.isRequired
};

export default Slider;