import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Rating from "react-rating";

import {addToFavorites, deleteFromFavorites} from "../redux/actions/favoritesActions";

import FavoriteIcon from "./icons/FavoriteIcon";
import FullStarIcon from "./icons/FullStarIcon";
import StarIcon from "./icons/StarIcon";

const Product = ({product, favorites, addToFavorites, deleteFromFavorites}) => {
    const {pictures, id, price, title, relationships: {name, rating}} = product;
    const favorite = favorites.find((item) => item.id === id);
    const isFavorite = !!favorite;

    const handleClick = (e) => {
        e.preventDefault();
        isFavorite ? deleteFromFavorites(id) : addToFavorites(product);
    };

    return (
        <li>
            <Link to={`/product/${id}`} className="card product">
                <img src={pictures[0]} alt={title}/>
                <span className="product-images">{pictures.length}</span>
                <button className="add-to-favorite" onClick={handleClick}>
                    <FavoriteIcon className={isFavorite ? 'favorite-icon-white' : 'favorite-icon'}/>
                </button>
                <h3 className="product-title">{title}</h3>
                <div className="product-seller">
                    <span style={{color: '#888DA8'}}>{name}</span>
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

const mapStateToProps = (state) => ({
    favorites: state.favorites.favorites
});

export default connect(
    mapStateToProps,
    {addToFavorites, deleteFromFavorites}
)(Product);