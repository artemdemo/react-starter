import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

describe('Navbar', () => {
    it('render default', () => {
        const tree = renderer.create(
            <Navbar />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with children', () => {
        const tree = renderer.create(
            <Navbar>
                children
            </Navbar>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with children and className', () => {
        const tree = renderer.create(
            <Navbar className='test-class'>
                children
            </Navbar>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
