import React from 'react';
import renderer from 'react-test-renderer';
import MainMenu from '../MainMenu';

/*
 * <MemoryRouter />
 * A <Router> that keeps the history of your “URL” in memory (does not read or write to the address bar).
 * Useful in tests and non-browser environments like React Native.
 *
 * @link https://reacttraining.com/react-router/web/api/MemoryRouter
 */

describe('<MainMenu>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <MainMenu />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
