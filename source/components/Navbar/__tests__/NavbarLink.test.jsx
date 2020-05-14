import React from "react";
import renderer from "react-test-renderer";
import NavbarLink from "../NavbarLink";

jest.mock('../../TransparentButton/TransparentButton');

describe('NavbarLink', () => {
    it('render default', () => {
        const tree = renderer.create(
            <NavbarLink to='/test-link' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render exact', () => {
        const tree = renderer.create(
            <NavbarLink to='/test-link' exact />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render button', () => {
        const tree = renderer.create(
            <NavbarLink />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
