import {combineReducers} from "redux";

import favoritesReducer from "./favoritesReducer";
import productsReducer from "./productsReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
    favorites: favoritesReducer,
    products: productsReducer,
    ui: uiReducer
});