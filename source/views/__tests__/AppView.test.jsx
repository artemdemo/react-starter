import React from 'react';
import renderer from 'react-test-renderer';
import AppView from '../components/AppView';

jest.mock('../../components/Icon/Icon');
jest.mock('../../components/MainMenu/MainMenu');
jest.mock('../../services/asyncService');

describe('<AppView>', () => {
    const asyncServiceMock = require('../../services/asyncService');

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
});
