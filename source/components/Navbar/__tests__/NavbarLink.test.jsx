import React from 'react';
import renderer from 'react-test-renderer';
import NavbarLink from '../NavbarLink';

describe('NavbarLink', () => {
    it('render default', () => {
        const tree = renderer.create(
            <NavbarLink to='/test-link' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render active', () => {
        const tree = renderer.create(
            <NavbarLink to='/test-link' active />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
