import { RenderResults } from './testRender';

export const testIdExists = (component: RenderResults, key: string) => {
  const { getByTestId } = component;
  try {
    getByTestId(key);
    return true;
  } catch (e) {}
  return false;
};
