import React from 'react';
import renderer from 'react-test-renderer';
import ComponentsView from '../components/ComponentsView';

jest.mock('@fortawesome/react-fontawesome');
jest.mock('../../components/Button/Button');
jest.mock('../../components/Select/Select');

describe('<ComponentsView>', () => {
    it('default render', () => {
        const tree = renderer.create(
            <ComponentsView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
