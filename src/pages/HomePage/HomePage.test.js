import * as React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './HomePage';

it('renders HomePage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<HomePage />);
});
