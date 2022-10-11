import fs from 'fs/promises';
import path from 'path';
import { SOURCE_DIR, TARGET_DIR } from './constants';

type ConfigOptions = {
  projectCwd?: string;
  targetFolder?: string;
  sourceFolder?: string;
};

export const generateTarget = async (
  options: ConfigOptions = {},
): Promise<void> => {
  const {
    projectCwd = process.cwd(),
    targetFolder = TARGET_DIR,
    sourceFolder = SOURCE_DIR,
  } = options;

  try {
    await fs.mkdir(path.join(projectCwd, targetFolder));
  } catch (error) {}

  try {
    await fs.writeFile(
      path.join(projectCwd, targetFolder, 'index.tsx'),
      `
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../${sourceFolder}/index';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
      `,
    );
  } catch (err) {
    console.error(err);
  }
};
