import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('<Container>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <Container />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Render with children', () => {
        const tree = renderer.create(
            <Container>
                <div>Some content</div>
            </Container>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
