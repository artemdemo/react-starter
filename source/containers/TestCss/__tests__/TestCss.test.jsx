import React from 'react';
import renderer from 'react-test-renderer';
import TestCss from '../TestCss';

jest.mock('../../../components/Select/Select');

describe('<TestCss>', () => {
    it('Simple render', () => {
        const tree = renderer.create(
            <TestCss />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
