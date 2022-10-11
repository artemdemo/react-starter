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

  const targetPath = path.join(projectCwd, targetFolder);

  try {
    await fs.mkdir(targetPath);
  } catch (error) {
    // I will end up here if the directory already exists.
    // Removing it and recreating from scratch.
    await fs.rmdir(targetPath, { recursive: true });
    await fs.mkdir(targetPath);
  }

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
