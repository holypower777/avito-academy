import {combineReducers} from "redux";

import productsReducer from "./productsReducer";
import filtersReducer from "./filtersReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    ui: uiReducer
});