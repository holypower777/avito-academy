import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './reducers';

import products from './middlewares/productsMiddlewares';

// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            ...products
        )
    )
);