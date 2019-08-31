import React from 'react';
import renderer from 'react-test-renderer';
import Select from '../Select';

describe('<Select>', () => {
    it('Simple render', () => {
        const tree = renderer.create(
            <Select />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('large', () => {
        const tree = renderer.create(
            <Select large />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('small', () => {
        const tree = renderer.create(
            <Select small />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with className', () => {
        const tree = renderer.create(
            <Select className='some-class' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with id', () => {
        const tree = renderer.create(
            <Select id='some-id' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with items', () => {
        const tree = renderer.create(
            <Select
                list={[
                    {value: 'first', name: 'First'},
                    {value: 'last', name: 'Last'},
                ]}
            />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with items and all disabled', () => {
        const tree = renderer.create(
            <Select
                list={[
                    {value: 'first', name: 'First'},
                    {value: 'last', name: 'Last'},
                ]}
                disabled
            />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with items and first explicetly disabled', () => {
        const tree = renderer.create(
            <Select
                list={[
                    {value: 'first', name: 'First', disabled: true},
                    {value: 'last', name: 'Last'},
                ]}
                disabled
            />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with items - first without a value', () => {
        const tree = renderer.create(
            <Select
                list={[
                    {name: 'First'},
                    {value: 'last', name: 'Last'},
                ]}
            />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
