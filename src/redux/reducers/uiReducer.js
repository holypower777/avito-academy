import * as uiActions from '../actions/uiActions';

const initUi = {
    fetchOneProductPending: false,
    fetchProductsPending: false
};

const uiReducer = (state = initUi, {type, payload}) => {
    switch (type) {
        case uiActions.SHOW_SPINNER:
            return {...state, [payload]: true};
        case uiActions.HIDE_SPINNER:
            return {...state, [payload]: false};
        default:
            return state;
    }
};

export default uiReducer;