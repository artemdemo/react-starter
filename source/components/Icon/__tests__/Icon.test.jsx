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

    it('with className', () => {
        const tree = renderer.create(
            <Icon className='some-class' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with style', () => {
        const tree = renderer.create(
            <Icon style={{position: 'absolute'}} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
