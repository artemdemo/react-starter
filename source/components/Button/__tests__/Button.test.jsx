/* eslint-disable no-console */
import React from 'react';
import renderer from 'react-test-renderer';
import Button, { buttonAppearance, buttonSize } from '../Button';

describe('<Button>', () => {
    it('Render empty', () => {
        const tree = renderer.create(
            <Button />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With text', () => {
        const tree = renderer.create(
            <Button>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With type', () => {
        const tree = renderer.create(
            <Button type='button'>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With className', () => {
        const tree = renderer.create(
            <Button className='some-class'>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('lg', () => {
        const tree = renderer.create(
            <Button size={buttonSize.LG}>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('appearance=light', () => {
        const tree = renderer.create(
            <Button appearance={buttonAppearance.LIGHT}>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('appearance=danger', () => {
        const tree = renderer.create(
            <Button appearance={buttonAppearance.DANGER}>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('block', () => {
        const tree = renderer.create(
            <Button block>
                Some text
            </Button>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
