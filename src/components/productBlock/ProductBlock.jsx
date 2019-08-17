import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Rating from "react-rating";

import {addToFavorites, removeFromFavorites} from "../../redux/actions/productsActions";

import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import FullStarIcon from "../../assets/icons/FullStarIcon";
import StarIcon from "../../assets/icons/StarIcon";
import Price from "../../lib/Price";

import './productBlock.css';

const ProductBlock = ({product, addToFavorites, removeFromFavorites}) => {
    const {pictures, id, isFavorite, price, title, relationships: {name, rating}} = product;

    const handleClick = (e) => {
        e.preventDefault();
        isFavorite ? removeFromFavorites(id) : addToFavorites(product);
    };

    return (
        <li>
            <Link to={`/products/${id}`} className="card product">
                <img src={pictures[0]} alt={title}/>
                <span className="product-images">{pictures.length}</span>
                <button className="add-to-favorite" onClick={handleClick}>
                    <FavoriteIcon className={isFavorite ? 'favorite-icon-white' : 'favorite-icon'}/>
                </button>
                <h3 className="product-title">{title}</h3>
                <div className="product-seller">
                    <span>{name}</span>
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<StarIcon className="star-icon"/>}
                        fullSymbol={<FullStarIcon className="star-icon"/>}
                        style={{marginTop: '2px'}}
                    />
                </div>
                <Price price={price} className="product-price"/>
            </Link>
        </li>
    );
};

ProductBlock.propTypes = {
    product: PropTypes.shape({
        pictures: PropTypes.array,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        price: PropTypes.number,
        title: PropTypes.string.isRequired,
        relationships: PropTypes.shape({
            name: PropTypes.string,
            rating: PropTypes.number
        }).isRequired
    }).isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired
};

export default connect(
    null,
    {addToFavorites, removeFromFavorites}
)(ProductBlock);