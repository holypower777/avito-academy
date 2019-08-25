import * as ui from './uiActions';

describe('Ui actions', () => {
    it('Should show spinner', () => {
        const spinnerName = 'test';
        const expectedAction = {
            type: ui.SHOW_SPINNER,
            payload: spinnerName
        };

        expect(ui.showSpinner(spinnerName)).toEqual(expectedAction);
    });

    it('Should hide spinner', () => {
        const spinnerName = 'test';
        const expectedAction = {
            type: ui.HIDE_SPINNER,
            payload: spinnerName
        };

        expect(ui.hideSpinner(spinnerName)).toEqual(expectedAction);
    });
});