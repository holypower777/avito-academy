import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Rating from "react-rating";

import {addToFavorites, removeFromFavorites} from "../../redux/actions/productsActions";

import FavoriteIcon from "../icons/FavoriteIcon";
import FullStarIcon from "../icons/FullStarIcon";
import StarIcon from "../icons/StarIcon";

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
                <span className="product-price">{price ? price.toLocaleString() : 'Цена не указана'}&#8381;</span>
            </Link>
        </li>
    );
};

export default connect(
    null,
    {addToFavorites, removeFromFavorites}
)(ProductBlock);