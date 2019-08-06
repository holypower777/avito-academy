export const SHOW_SPINNER = '[ui] show spinner';
export const HIDE_SPINNER = '[ui] hide spinner';

export const showSpinner = (spinnerName) => ({
    type: SHOW_SPINNER,
    payload: spinnerName
});

export const hideSpinner = (spinnerName) => ({
    type: HIDE_SPINNER,
    payload: spinnerName
});
