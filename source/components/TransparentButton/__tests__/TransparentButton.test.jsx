import React from "react";
import renderer from "react-test-renderer";
import TransparentButton from "../TransparentButton";

describe('TransparentButton', () => {
    it('render default', () => {
        const tree = renderer.create(
            <TransparentButton>
                Test
            </TransparentButton>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
