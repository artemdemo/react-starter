import _ from 'lodash';
import { RenderResults } from '../../__tests__/testRender';

export class JsonTestDriver {
  constructor(public readonly component: RenderResults) {}

  getJson(): object {
    const { getByTestId } = this.component;
    const el = getByTestId('json-test');
    if (_.isString(el.textContent)) {
      return JSON.parse(el.textContent as string);
    }
    throw new Error("element doesn't have content");
  }
}
