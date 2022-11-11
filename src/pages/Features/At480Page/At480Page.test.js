import * as React from 'react';
import { createRoot } from 'react-dom/client';
import At480Page from './At480Page';

it('renders At480Page without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<At480Page />);
});
