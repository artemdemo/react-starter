import {RenderResults} from '../../__tests__/testRender';
import _ from 'lodash';

export class JsonTestDriver {
  constructor(public readonly component: RenderResults) {}

  getJson(): object {
    const { getByTestId } = this.component;
    const el = getByTestId('json-test');
    if (_.isString(el.textContent)) {
      return JSON.parse(el.textContent as string);
    }
    throw new Error('element doesn\'t have content');
  }
}
