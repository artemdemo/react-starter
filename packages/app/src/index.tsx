import React from 'react';
import { createRoot } from 'react-dom/client';
import { TestApp } from './testApp/TestApp';
import './styles/general.css';

const root = createRoot(document.getElementById('app')!);
root.render(<TestApp />);
