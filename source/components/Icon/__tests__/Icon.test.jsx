import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

describe('<Icon>', () => {
    it('Empty render', () => {
        const tree = renderer.create(
            <Icon />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with name', () => {
        const tree = renderer.create(
            <Icon name='fire' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
