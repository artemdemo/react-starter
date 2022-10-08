import React from 'react';
import { createRoot } from 'react-dom/client';
import { TestApp } from './testApp/TestApp';

const root = createRoot(document.getElementById('app')!);
root.render(<TestApp />);
