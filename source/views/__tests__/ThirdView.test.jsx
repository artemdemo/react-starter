import React from 'react';
import renderer from 'react-test-renderer';
import ThirdView from '../components/ThirdView';

describe('<ThirdView>', () => {
    it('Empty render', () => {
        const tree = renderer.create(
            <ThirdView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
