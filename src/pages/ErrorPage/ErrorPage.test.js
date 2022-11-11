import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ErrorPage from './ErrorPage';

it('renders ErrorPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ErrorPage />);
});
