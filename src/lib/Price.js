import React from 'react';

const Price = (props) => {
    return props.price
        ? <span {...props}>{props.price.toLocaleString()}&#8381;</span>
        : <span {...props}>Цена не указана</span>;
};

export default Price;