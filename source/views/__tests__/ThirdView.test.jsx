import React from 'react';
import renderer from 'react-test-renderer';
import ThirdView from '../components/ThirdView';

jest.mock('../../components/Icon/Icon');

describe('<ThirdView>', () => {
    it('Empty render', () => {
        const tree = renderer.create(
            <ThirdView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
