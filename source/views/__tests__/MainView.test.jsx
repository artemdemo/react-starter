import React from 'react';
import renderer from 'react-test-renderer';
import MainView from '../components/MainView';

jest.mock('../../components/Icon/Icon');
jest.mock('../../containers/TestCss/TestCss');

describe('<MainView>', () => {
    it('Simple render', () => {
        const tree = renderer.create(
            <MainView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
