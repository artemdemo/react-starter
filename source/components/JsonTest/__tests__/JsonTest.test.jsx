import React from 'react';
import renderer from 'react-test-renderer';
import JsonTest from '../JsonTest';

describe('<JsonTest>', () => {
    it('Empty render', () => {
        const tree = renderer.create(
            <JsonTest />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
