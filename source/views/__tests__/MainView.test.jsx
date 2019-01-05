import React from 'react';
import renderer from 'react-test-renderer';
import MainView from '../components/MainView';

jest.mock('../../components/Icon/Icon');

describe('<MainView>', () => {
    it('Empty render', () => {
        const tree = renderer.create(
            <MainView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
