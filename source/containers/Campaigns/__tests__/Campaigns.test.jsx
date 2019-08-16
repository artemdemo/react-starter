import React from 'react';
import renderer from 'react-test-renderer';
import Campaigns from '../Campaigns';

describe('<Campaigns>', () => {
    it('simple render, without data', () => {
        const tree = renderer.create(
            <Campaigns />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('with data', () => {
        const tree = renderer.create(
            <Campaigns
                items={[
                    {
                        name: 'First campaign',
                        picture: 'http://example.com/img-1.png',
                        description: 'Some description #1',
                    },
                    {
                        name: 'Second campaign',
                        picture: 'http://example.com/img-2.png',
                        description: 'Some description #2',
                    },
                ]}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
