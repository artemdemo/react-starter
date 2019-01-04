import React from 'react';
import renderer from 'react-test-renderer';
import JsonView from '../components/JsonView';

jest.mock('../../components/Icon/Icon');
jest.mock('../../components/JsonTest/JsonTest');

describe('<JsonView>', () => {
    it('Empty render', () => {
        const tree = renderer.create(
            <JsonView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
