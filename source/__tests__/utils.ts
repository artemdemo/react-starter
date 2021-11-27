import { RenderResults } from './testRender';

export const testIdExists = (
  component: RenderResults,
  key: string
): boolean => {
  const { getByTestId } = component;
  try {
    getByTestId(key);
    return true;
  } catch (e) {}
  return false;
};

export const testIdExistsAsync = async (
  component: RenderResults,
  key: string
): Promise<boolean> => {
  const { findByTestId } = component;
  try {
    await findByTestId(key);
    return true;
  } catch (e) {}
  return false;
};
