import React from 'react';
import renderer from 'react-test-renderer';
import AppView from '../components/AppView';

jest.mock('../../components/Icon/Icon');
jest.mock('../../components/Button/Button');
jest.mock('../../containers/MainMenu/MainMenu');
jest.mock('../../services/asyncService');
jest.mock('../../history');

describe('<AppView>', () => {
    const asyncServiceMock = require('../../services/asyncService');
    const historyMock = require('../../history');

    it('Simple render', () => {
        const tree = renderer.create(
            <AppView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
        expect(asyncServiceMock.default).toBeCalledWith();
    });

    it('Render with children', () => {
        const tree = renderer.create(
            <AppView>
                Children
            </AppView>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should redirect to `/third`', () => {
        AppView.goToThirdView();

        expect(historyMock.default.push).toBeCalledWith('/third');
    });
});
