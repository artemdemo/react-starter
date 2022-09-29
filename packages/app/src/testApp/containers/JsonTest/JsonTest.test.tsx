import React from 'react';
import { describe, expect, it } from 'vitest';
import { testRender } from '../../../__tests__/testRender';
import { JsonTestDriver } from './JsonTest.driver';
import { JsonTest } from './JsonTest';
import data from './data.json';

const render = (): JsonTestDriver => {
  const component = testRender(<JsonTest />);
  return new JsonTestDriver(component);
};

describe('JsonTest', () => {
  it('should render json', () => {
    const driver = render();

    expect(driver.getJson()).toEqual(data);
  });
});
